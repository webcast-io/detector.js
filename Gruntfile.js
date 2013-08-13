'use strict';

module.exports = function (grunt) {
  grunt.initConfig({

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: ['Gruntfile.js', 'detector.js']
    },

    inlinelint: {
      html: ['index.html']
    },

    htmllint: {
      all: ['index.html']
    }

    // mocha: {
    //   src: ['test/index.html'],
    //   options: {
    //     run: true,
    //     reporter: 'Spec'
    //   }
    // }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-lint-inline');
  grunt.loadNpmTasks('grunt-html');
  grunt.loadNpmTasks('grunt-mocha');

  grunt.registerTask('default', ['jshint', 'inlinelint', 'htmllint']);
};
