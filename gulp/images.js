// =============================================================================
// GULP IMAGES
// =============================================================================

var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    cache = require('gulp-cached');


// Copy the images to the build directory
// -----------------------------------------------------------------------------
// 1. Watch the Hugo built HTML files. Remember to run [hugo server --watch] in
//    terminal, while also running [npm start] to ensure all changes are built.
// 2. Place the images into the ./build/static/images directory.
// 3. Reload the page whenever SCSS recompiles.
// -----------------------------------------------------------------------------

gulp.task('images', function () {
    return gulp.src(['./docs/public/images/*.png', './docs/public/images/*.svg']) // 1
        .pipe(cache('images')) // 1
        .pipe(gulp.dest('./build/static/img')) // 2
        .pipe(browserSync.reload({stream:true})) // 3
});
