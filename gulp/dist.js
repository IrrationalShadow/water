// =============================================================================
// GULP DIST
// =============================================================================

var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    runSequence  = require('run-sequence'),
    del = require('del'),
    optimise  = require('gulp-csso'),
    rename = require('gulp-rename'),
    filesize = require('gulp-filesize');


// Dist
// -----------------------------------------------------------------------------

gulp.task('dist', function (callback) {
  runSequence(
    'build',
    'dist:clean',
    'dist:css',
    callback
  );
});


// Clean dist
// -----------------------------------------------------------------------------

gulp.task('dist:clean', function () {
  return del([
    './dist'
  ]);
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
