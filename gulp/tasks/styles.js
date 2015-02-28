// =============================================================================
// STYLES
// =============================================================================


// Vars
// -----------------------------------------------------------------------------

var gulp = require('gulp'),
    config = require('../config'),
    handleErrors = require('../utilities/error-handling'),
    sass = require('gulp-sass'),
    prefix = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    minify = require('gulp-csso');


// Function
// -----------------------------------------------------------------------------

function styles() {

    var stream = gulp.src([
            config.css.src + '/*.scss'
        ])
        .pipe(sass({
            includePaths: ['scss'],
            outputStyle: 'nested',
            errLogToConsole: false
        }))
        .on('error', handleErrors)
        .pipe(concat('water.min.css'))
        .pipe(minify())
        .pipe(gulp.dest(config.css.build));

    return stream;
}


// Task
// -----------------------------------------------------------------------------

gulp.task('styles', ['clean:styles', 'scss-lint'], styles);
