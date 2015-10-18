// =============================================================================
// GULP BUILD
// =============================================================================

var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    runSequence  = require('run-sequence'),
    del = require('del');


// Build
// -----------------------------------------------------------------------------

gulp.task('build', function (callback) {
    runSequence(
        'build:clean',
        ['html', 'scss'],
        callback
    );
});


// Clean build
// -----------------------------------------------------------------------------

gulp.task('build:clean', function () {
    return del([
        './build'
    ]);
});
