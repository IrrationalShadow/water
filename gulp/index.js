// =============================================================================
// GULP
// =============================================================================


// Vars
// -----------------------------------------------------------------------------

var fs = require('fs'),
    scriptsOnly = require('./utilities/scripts-only'),
    tasks = fs.readdirSync('./gulp/tasks/').filter(scriptsOnly);


// Run each gulp task
// -----------------------------------------------------------------------------

tasks.forEach(function(task) {
    require('./tasks/' + task);
});
