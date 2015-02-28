// =============================================================================
// GULP CONFIG
// =============================================================================
//
// Maps out all folder paths for development and distribution.
// 3 tiered build: src, build, dist.
//
// -----------------------------------------------------------------------------

module.exports = {
    dest: {
        build: './build',
        dist: './dist',
        public: './public',
        src: './src'
    },
    css: {
        build: './build/css',
        dist: './dist/css',
        public: './public/css',
        src: './src/scss'
    }
};
