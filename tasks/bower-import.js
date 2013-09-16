var spawn = require('child_process').spawn;

module.exports = function(grunt) {
  // using bower-import direclty isn't working, therefore, spawn
  grunt.registerTask('bowerImport', function() {
    var done = this.async();
    var bowerImport = spawn('node_modules/.bin/bower-import');
    bowerImport.stdout.on('data', function(data) {
      console.log(data.toString());
    });
    bowerImport.on('close', done);
  });
};

