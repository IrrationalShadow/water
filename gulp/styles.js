// =============================================================================
// GULP SCSS
// =============================================================================

var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    cache = require('gulp-cached'),
    scss = require('gulp-sass'),
    lint = require('gulp-scss-lint'),
    optimise  = require('gulp-csso'),
    rename = require('gulp-rename'),
    filesize = require('gulp-filesize');


// Compile the SCSS
// -----------------------------------------------------------------------------
//
// 1. Place the compiled CSS into the ./build directory.
// 2. Reload the page whenever SCSS recompiles.
//
// -----------------------------------------------------------------------------

gulp.task('scss', ['scss:lint'], function () {
    return gulp.src('src/scss/*.scss')
        .pipe(scss({
            includePaths: ['scss'],
            outputStyle: 'expanded',
        }).on('error', scss.logError))
        .pipe(gulp.dest('build/css')) // 1
        .pipe(browserSync.reload({stream:true})) // 2
});


// Lint the SCSS
// -----------------------------------------------------------------------------
//
// 1. Cache the SCSS so the task only lints modified files.
// 2. Fail the task only when an error happens, don't fail on warnings.
//
// -----------------------------------------------------------------------------

gulp.task('scss:lint', function () {
    return gulp.src('src/scss/*.scss')
        .pipe(cache('linting')) // 1
        .pipe(lint())
        .pipe(lint.failReporter('E')) // 2
});


// Production ready CSS
// -----------------------------------------------------------------------------
//
// 1. Run CSSO and improve the CSS for production.
// 2. Rename the file to include '.min' as CSSO will minify the file.
// 3. Print the minified CSS filesize in terminal.
//
// -----------------------------------------------------------------------------

gulp.task('dist:css', function () {
    return gulp.src('./build/css/*.css')
        .pipe(optimise()) // 1
        .pipe(rename(function (path) {
            path.basename += ".min"; // 2
        }))
        .pipe(gulp.dest('./dist/css'))
        .pipe(filesize()) // 3
});
