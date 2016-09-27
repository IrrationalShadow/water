// =============================================================================
// GULP SERVER
// =============================================================================

var gulp = require('gulp'),
    browserSync = require('browser-sync');


// Load up a local server
// -----------------------------------------------------------------------------
// 1. Load the server from the ./build directory.
// 2. Hide the browserSync growl notification (in browser).
// -----------------------------------------------------------------------------

gulp.task('server', function () {
  browserSync({
    server: {
      baseDir: './build' // 1
    },
    notify: {
      styles: ['opacity: 0', 'position: absolute'] // 2
    }
  });
});
