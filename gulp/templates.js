// =============================================================================
// GULP HTML
// =============================================================================

var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    cache = require('gulp-cached');


// Build the HTML
// -----------------------------------------------------------------------------
//
// 1. Watch the Hugo built HTML files. Remember to run [hugo server --watch] in
//    terminal, while also running [npm start] to ensure all changes are built.
// 2. Place the compiled HTML into the ./build directory.
// 3. Reload the page whenever SCSS recompiles.
//
// -----------------------------------------------------------------------------

gulp.task('html', function () {
    return gulp.src('./src/html/public/**/*.html') // 1
        .pipe(cache('templates')) // 1
        .pipe(gulp.dest('./build/')) // 2
        .pipe(browserSync.reload({stream:true})) // 3
});
