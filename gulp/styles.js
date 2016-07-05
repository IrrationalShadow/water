// =============================================================================
// GULP SCSS
// =============================================================================

var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    cache = require('gulp-cached'),
    scss = require('gulp-sass'),
    lint = require('gulp-sass-lint'),
    optimise  = require('gulp-csso'),
    rename = require('gulp-rename'),
    filesize = require('gulp-filesize');


// Compile the SCSS
// -----------------------------------------------------------------------------
// 1. Place the compiled CSS into the ./build directory.
// 2. Reload the page whenever SCSS recompiles.
// -----------------------------------------------------------------------------

gulp.task('scss', ['scss:lint'], function () {
    return gulp.src(['./src/**/*.scss', './docs/assets/css/**/*.scss'])
        .pipe(scss({
            includePaths: ['scss'],
            outputStyle: 'expanded',
        }).on('error', scss.logError))
        .pipe(gulp.dest('build/static/css')) // 1
        .pipe(browserSync.reload({stream:true})) // 2
});


// Lint the SCSS
// -----------------------------------------------------------------------------
// Rule values: 0 = disabled, 1 = warning, 2 = error.
// -----------------------------------------------------------------------------

gulp.task('scss:lint', function () {
    return gulp.src(['./src/**/*.scss', './docs/assets/css/**/*.scss'])
        .pipe(lint({
            options: {
                'merge-default-rules': false
            },
            rules: {
                'no-ids': 2,
                'no-mergeable-selectors': 0,
                'indentation': [ 1,
                    {
                        'size': '4'
                    }
                ],
                'leading-zero': [ 1,
                    {
                        'include': true
                    }
                ]
            },
        }))
        .pipe(lint.format())
        .pipe(lint.failOnError())
});


// Production ready CSS
// -----------------------------------------------------------------------------
// 1. Run CSSO and improve the CSS for production.
// 2. Rename the file to include '.min' as CSSO will minify the file.
// 3. Print the minified CSS filesize in terminal.
// -----------------------------------------------------------------------------

gulp.task('dist:css', function () {
    return gulp.src('./build/static/css/water.css')
        .pipe(optimise()) // 1
        .pipe(rename(function (path) {
            path.basename += ".min"; // 2
        }))
        .pipe(gulp.dest('./dist/'))
        .pipe(filesize()) // 3
});
