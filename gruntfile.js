module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: ['build/'],
    ngtemplates: {
      angularSpinkit: {
        src: ['src/templates/**.html'],
        dest: 'build/templates.js'
      }
    },
    concat: {
      dist: {
        src: ['src/angular-spinkit.js', 'build/templates.js'],
        dest: 'build/angular-spinkit.js'
      }
    },
    copy: {
      dist: {
        expand: true,
        cwd: 'src/',
        src: 'styles/*.css',
        dest: 'build/'
      },
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'build/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-angular-templates');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task(s).
  grunt.registerTask('default', ['ngtemplates','concat:dist', 'copy:dist', 'uglify']);

};