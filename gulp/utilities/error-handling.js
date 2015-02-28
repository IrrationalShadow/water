// =============================================================================
// ERROR HANDLING
// =============================================================================
//
// Send errors to the notification centre with gulp-notify.
//
// 1) Keeps gulp from hanging on this task.
//
// -----------------------------------------------------------------------------

var notify = require('gulp-notify');

module.exports = function() {
    notify.onError({
        title: 'Compile error',
        message: '<%= error.message %>'
    }).apply(this, arguments);

    this.emit('end'); // 1
}
