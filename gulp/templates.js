// =============================================================================
// GULP HTML
// =============================================================================
// Builds the documentation via Gulpsmith.
// The two variables below separate what's needed by gulp (first var) and what's
// needed by gulpsmith (second var). This way, if we ever ditch gulpsmith, we
// will know where the dependencies are.
// -----------------------------------------------------------------------------

var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    cache = require('gulp-cached');

var gulpsmith = require('gulpsmith'),
    collections = require('metalsmith-collections'),
    layouts = require('metalsmith-layouts'),
    markdown = require('metalsmith-markdown'),
    permalinks = require('metalsmith-permalinks'),
    gulpFrontMatter = require('gulp-front-matter'),
    assign = require('lodash').assign;


// Build the Documentation
// -----------------------------------------------------------------------------
// 1. Place the compiled HTML into the ./build directory.
// 2. Reload the page whenever the docs have recompiled.
// -----------------------------------------------------------------------------

gulp.task('html', function () {
    return gulp.src('./docs/content/**/*')
        .pipe(gulpFrontMatter()).on("data", function(file) {
            assign(file, file.frontMatter);
            delete file.frontMatter;
        })
        .pipe(
            gulpsmith()
                .use(collections({
                    components: {
                        pattern: 'components/**/*'
                    },
                    constructs: {
                        pattern: 'constructs/**/*'
                    }
                }))
                .use(markdown({
                    "gfm": true
                }))
                .use(permalinks())
                .use(layouts({
                    engine: 'handlebars',
                    default: 'layout.html',
                    directory: './docs/layouts',
                    partials: './docs/layouts/partials'
                }))
        )
        .pipe(cache('templates'))
        .pipe(gulp.dest('./build/docs/')) // 1
        .pipe(browserSync.reload({stream:true})) // 2
});
