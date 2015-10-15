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
gulp.task('scss', ['scss:clean', 'scss:lint'], function () {
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
gulp.task('scss:clean', function () {
    return del([
        'build/css'
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

// Build the scss and html
gulp.task('build', ['html', 'scss']);

/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
    gulp.watch('src/scss/**/*.scss', ['scss']);
    gulp.watch('src/html/**/*.html', ['html']);
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */

gulp.task('water', function (callback) {
    runSequence(
        'build',
        ['watch', 'browserSync'],
        callback
    );
});

// Deploy the css and html
gulp.task('deploy:water', function (callback) {
    runSequence(
        'build',
        'css:clean',
        'css:optimise',
        callback
    );
});

// Bump versions of package files in semver
gulp.task('bump', function(){
    gulp.src('./package.json')
        .pipe(bump())
        .pipe(gulp.dest('./'));
});

gulp.task('tag', function () {
    var pkg = require('./package.json');
    var v = 'v' + pkg.version;
    var message = 'Tagged and released version ' + v;

    return gulp.src('./package.json')
        .pipe(git.add())
        .pipe(git.commit(message))
        .pipe(git.tag(v, message))
        .pipe(git.push('origin', 'master', {args: " --tags"}));
});
