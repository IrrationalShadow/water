// =============================================================================
// GULP SCSS
// =============================================================================

var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    cache = require('gulp-cached'),
    scss = require('gulp-sass'),
    lint = require('gulp-sass-lint');


// Compile the SCSS
// -----------------------------------------------------------------------------
// 1. Place the compiled CSS into the ./build directory.
// 2. Reload the page whenever SCSS recompiles.
// -----------------------------------------------------------------------------

gulp.task('scss', ['scss:lint'], function () {
  return gulp.src(['./src/**/*.scss', './docs/assets/css/**/*.scss'])
    .pipe(scss({
      includePaths: ['scss'],
      outputStyle: 'expanded',
    }).on('error', scss.logError))
    .pipe(gulp.dest('build/static/css')) // 1
    .pipe(browserSync.reload({stream:true})) // 2
});


// Lint the SCSS
// -----------------------------------------------------------------------------
// Rule values: 0 = disabled, 1 = warning, 2 = error.
// -----------------------------------------------------------------------------

gulp.task('scss:lint', function () {
  return gulp.src(['./src/**/*.scss', './docs/assets/css/**/*.scss'])
    .pipe(cache('linting'))
    .pipe(lint({
      options: {
        'cache-config': true,
        'merge-default-rules': false
      },
      rules: {
        'attribute-quotes': 1,
        'brace-style': [ 1,
          {
            'style': '1tbs'
          }
        ],
        'class-name-format': [ 1,
          {
            'allow-leading-underscore': false,
            'convention': /^(([a-zA-Z]*)+)(-(([a-zA-Z0-9]+)+))?(--(([a-zA-Z0-9])+)+)?$/,
            'convention-explanation': 'Class doesn\'t follow conventions: .className[-descendantName][--modifierName], .u-utilityName, or .[is|has]-stateName'
          }
        ],
        'clean-import-paths': [ 1,
          {
            'leading-underscore': false,
            'filename-extension': false
          }
        ],
        'empty-args': [ 1,
          {
            'include': true
          }
        ],
        'empty-line-between-blocks': [ 1,
          {
            'allow-single-line-rulesets': false
          }
        ],
        'extends-before-declarations': 1,
        'extends-before-mixins': 1,
        'final-newline': 1,
        'force-pseudo-nesting': 0,
        'function-name-format': [ 1,
          {
            'allow-leading-underscore': false,
            'convention': 'camelcase'
          }
        ],
        'hex-length': [ 1,
          {
            'style': 'short'
          }
        ],
        'hex-notation': [ 1,
          {
            'style': 'lowercase'
          }
        ],
        'indentation': [ 1,
          {
            'size': '2'
          }
        ],
        'leading-zero': [ 1,
          {
            'include': true
          }
        ],
        // 'mixin-name-format': [ 2,
        //   {
        //     'allow-leading-underscore': false,
        //     'convention': 'camelcase'
        //   }
        // ],
        'nesting-depth': [ 2,
          {
            'max-depth': '3'
          }
        ],
        'no-attribute-selectors': 0,
        'no-color-keywords': 1,
        // 'no-color-literals': [ 1,
        //   {
        //     'allow-rgba': true,
        //     'allow-map-identifiers': true,
        //     'allow-variable-identifiers': false
        //   }
        // ],
        'no-css-comments': 1,
        'no-duplicate-properties': 2,
        'no-empty-rulesets': 2,
        'no-ids': 2,
        'no-important': 2,
        'no-invalid-hex': 2,
        'no-mergeable-selectors': 0,
        'no-misspelled-properties': 2,
        'no-qualifying-elements': [ 2,
          {
            'allow-element-with-attribute': true
          }
        ],
        'no-trailing-whitespace': 1,
        'no-trailing-zero': 1,
        'no-transition-all': 1,
        'no-vendor-prefixes': 0,
        'one-declaration-per-line': 2,
        'placeholder-in-extend': 2,
        // 'placeholder-name-format': [ 2,
        //   {
        //
        //   }
        // ],
        'property-sort-order': 2,
        'pseudo-element': 2,
        'quotes': 1,
        'single-line-per-selector': 1,
        'space-after-bang': 1,
        'space-after-colon': 1,
        'space-after-comma': 1,
        'space-around-operator': 1,
        'space-before-bang': 1,
        'space-before-brace': 1,
        'space-before-colon': 1,
        'space-between-parens': 1,
        'trailing-semicolon': 1,
        'url-quotes': 1,
        // 'variable-name-format': [ 2,
        //   {
        //
        //   }
        // ],
        'zero-unit': 1
      },
    }))
    .pipe(lint.format())
    .pipe(lint.failOnError())
});
