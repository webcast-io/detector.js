'use strict';

module.exports = function (grunt) {
  grunt.initConfig({

    jshint: {
      options: {
        jshintrc: '.jshintrc'
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
        reporter: 'Spec'
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-lint-inline');
  grunt.loadNpmTasks('grunt-html');
  grunt.loadNpmTasks('grunt-mocha');

  grunt.registerTask('lint', ['jshint', 'inlinelint', 'htmllint']);
  grunt.registerTask('test', ['mocha']);

  grunt.registerTask('default', ['lint', 'test']);
};
