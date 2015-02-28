// =============================================================================
// SCSS LINT
// =============================================================================


// Vars
// -----------------------------------------------------------------------------

var gulp = require('gulp'),
    config = require('../config'),
    scsslint = require('gulp-scss-lint');


// Function
// -----------------------------------------------------------------------------

function scssLint() {

    var stream = gulp.src([
            config.css.src + '/**/*.scss'
        ])
        .pipe(scsslint())
        .pipe(scsslint.failReporter());

    return stream;
}


// Task
// -----------------------------------------------------------------------------

gulp.task('scss-lint', scssLint);
