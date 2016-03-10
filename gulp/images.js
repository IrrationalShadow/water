// =============================================================================
// GULP IMAGES
// =============================================================================

var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    cache = require('gulp-cached');


// Copy the images to the build directory
// -----------------------------------------------------------------------------
// 1. Place the static images into the ./build/static/img directory.
// 2. Reload the page whenever a change is made.
// -----------------------------------------------------------------------------

gulp.task('images', function () {
    return gulp.src(['./docs/public/images/*.png', './icons/*.svg'])
        .pipe(cache('images'))
        .pipe(gulp.dest('./build/static/img')) // 1
        .pipe(browserSync.reload({stream:true})) // 2
});
