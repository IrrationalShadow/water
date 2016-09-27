// =============================================================================
// GULP SCRIPTS
// =============================================================================

var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    cache = require('gulp-cached');


// Build the JS
// -----------------------------------------------------------------------------
// 1. Place the compiled JS into the ./build/js directory.
// 2. Reload the page whenever the JS is updated.
// -----------------------------------------------------------------------------

gulp.task('js', function () {
  return gulp.src('./docs/assets/js/**/*.js')
    .pipe(cache('scripts'))
    .pipe(gulp.dest('./build/static/js')) // 1
    .pipe(browserSync.reload({stream:true})) // 2
});
