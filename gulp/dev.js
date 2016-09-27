// =============================================================================
// GULP DEV
// =============================================================================

var gulp = require('gulp'),
    runSequence = require('run-sequence');


// Develop
// -----------------------------------------------------------------------------

gulp.task('dev', function (callback) {
  runSequence(
    'build',
    ['watch', 'server'],
    callback
  );
});
