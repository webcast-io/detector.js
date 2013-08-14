'use strict';

module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      options: {
        jshintrc: '.jshintrc',
        ignores: ['detector.min.js']
      },
      all: ['*.js', 'test/**/*.js']
    },

    inlinelint: {
      html: ['index.html', 'test/index.html']
    },

    htmllint: {
      all: ['index.html', 'test/index.html']
    },

    mocha: {
      src: ['test/index.html'],
      options: {
        run: true,
        reporter: 'Spec',
        log: true
      }
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      target: {
        files: {
          'detector.min.js': ['detector.js']
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-lint-inline');
  grunt.loadNpmTasks('grunt-html');
  grunt.loadNpmTasks('grunt-mocha');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('lint', ['jshint', 'inlinelint', 'htmllint']);
  grunt.registerTask('test', ['mocha']);

  grunt.registerTask('package', ['lint', 'test', 'uglify']);

  grunt.registerTask('default', ['lint', 'test']);
};
