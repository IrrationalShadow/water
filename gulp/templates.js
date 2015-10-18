// =============================================================================
// GULP HTML
// =============================================================================

var gulp = require('gulp'),
    browserSync = require('browser-sync');


// Compile the SCSS
// -----------------------------------------------------------------------------
//
// 1. Place the compiled HTML into the ./build directory.
// 2. Reload the page whenever SCSS recompiles.
//
// -----------------------------------------------------------------------------

gulp.task('html', function () {
    return gulp.src('./src/html/*.html')
        .pipe(gulp.dest('./build/')) // 1
        .pipe(browserSync.reload({stream:true})) // 2
});
