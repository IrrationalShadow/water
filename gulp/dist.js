// =============================================================================
// GULP DIST
// =============================================================================

var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    runSequence  = require('run-sequence'),
    del = require('del');


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
