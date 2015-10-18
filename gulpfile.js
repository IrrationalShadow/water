var gulp         = require('gulp');
var rename       = require('gulp-rename');
var cache        = require('gulp-cached');
var filesize     = require('gulp-filesize');
var scss         = require('gulp-sass');
var scssLint     = require('gulp-scss-lint');
var cssOptimise  = require('gulp-csso');
var bump         = require('gulp-bump');
var git          = require('gulp-git');
var runSequence  = require('run-sequence');
var browserSync  = require('browser-sync');
var gutil        = require('gulp-util');
var del          = require('del');
var fs           = require('fs');
var gulpif       = require('gulp-if');

var flags        = require('minimist')(process.argv.slice(2));
var major        = flags.major || false;
var minor        = flags.minor || false;
var patch        = flags.patch || false;

var colorError = gutil.colors.red.bold,
    colorSuccess = gutil.colors.green;


// Bump versions of package files in semver
gulp.task('bump', function(){
    gulp.src('./package.json')
        .pipe(gulpif(major, bump({type: 'major'})))
        .pipe(gulpif(minor, bump({type: 'minor'})))
        .pipe(gulpif(patch, bump({type: 'patch'})))
        .pipe(gulp.dest('./'));
});



/**
 * Build the HTML
 */
gulp.task('html', function () {
    return gulp.src('src/html/*.html')
        .pipe(gulp.dest('build/'))
        .pipe(browserSync.reload({stream:true}))
});

/**
 * Compile files from _scss into both build/css (for live injecting) and site (for future jekyll builds)
 */
gulp.task('scss', ['scss:lint'], function () {
    return gulp.src('src/scss/*.scss')
        .pipe(scss({
            includePaths: ['scss'],
            outputStyle: 'expanded',
        }).on('error', scss.logError))
        .pipe(gulp.dest('build/css'))
        .pipe(browserSync.reload({stream:true}))
});

// SCSS Linter
gulp.task('scss:lint', function () {
    return gulp.src('src/scss/*.scss')
        .pipe(cache('linting'))
        .pipe(scssLint())
        .pipe(scssLint.failReporter('E'))
});

// Clean CSS build folder
gulp.task('clean:build', function () {
    return del([
        'build/'
    ]);
});

// Clean CSS dist folder
gulp.task('css:clean', function () {
    return del([
        'dist/css'
    ]);
});

// Optimise CSS build folder
gulp.task('css:optimise', function () {
    return gulp.src('build/css/*.css')
        .pipe(cssOptimise())
        .pipe(rename(function (path) {
            path.basename += ".min";
        }))
        .pipe(gulp.dest('dist/css'))
        .pipe(filesize())
});

/**
 * Wait for the scss and html to build, then launch the server
 */
gulp.task('browserSync', function () {
    browserSync({
        server: {
            baseDir: 'build'
        },
        notify: {
            styles: ['opacity: 0', 'position: absolute']
        }
    });
});

function getPackageJsonVersion () {
    // We parse the json file instead of using require because require caches
    // multiple calls so the version number won't be updated
    return JSON.parse(fs.readFileSync('./package.json', 'utf8')).version;
};

var version = 'v' + getPackageJsonVersion();

gulp.task('commit', function () {
    return gulp.src('./package.json')
        .pipe(git.add())
        .pipe(git.commit('Releasing ' + version))
        .on('error', function () {
            gutil.log(colorError('✘ ' + 'No file committed. Remember to enter a semver type: gulp release [--major, --minor, --patch].'));
        });
});

gulp.task('push', function(){
    git.push('origin', 'master');
});

// Tag the repo with a version
gulp.task('tag', function(){
    var message = 'Creating tag for version: ' + version;

    git.tag(version, message, function () {
        git.push('origin', 'master', {args: '--tags'});
    });
});




// Build the scss and html
gulp.task('build', function (callback) {
    runSequence(
        'clean:build',
        ['html', 'scss'],
        callback
    );
});

// Watch for changes
gulp.task('watch', function () {
    gulp.watch('src/scss/**/*.scss', ['scss']);
    gulp.watch('src/html/**/*.html', ['html']);
});

gulp.task('run', function (callback) {
    runSequence(
        'build',
        ['watch', 'browserSync'],
        callback
    );
});

// Deploy the css and html
gulp.task('deploy', function (callback) {
    runSequence(
        'build',
        'css:clean',
        'css:optimise',
        callback
    );
});

// Tag and push a release
gulp.task('release', function (callback) {
    runSequence(
        'deploy',
        'bump',
        'commit',
        'push',
        'tag',
        function (error) {
            if (error) {
                gutil.log(colorError('✘ ' + error.message));
            } else {
                gutil.log(colorSuccess('✔ ' + 'Released version ' + version + ' successfully.'));
            }
            callback(error);
        }
    );
});
