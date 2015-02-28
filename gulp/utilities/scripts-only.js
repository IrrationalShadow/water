// =============================================================================
// SCRIPTS ONLY
// =============================================================================
//
// Filters out non .js and .coffee files.
// This prevents accidental inclusions of other files and formats.
//
// -----------------------------------------------------------------------------

var path = require('path');

module.exports = function(name) {
    return /(\.(js|coffee)$)/i.test(path.extname(name));
}
