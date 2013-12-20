module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options:{
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> */\n'
      },
      esprima: {
        src: ['node_modules/esprima/esprima.js'],
        dest: 'tmp/esprimaWrapped.js',
        options: {
          banner: '(function(define){\n',
          footer: '\n})(null);'
        }
      },
      qunit: {
        src: [
          'tmp/esprimaWrapped.js',
          'node_modules/escodegen/escodegen.browser.js',
          'node_modules/istanbul/lib/instrumenter.js',
          'node_modules/istanbul/lib/object-utils.js',
          'src/blanket.js',
          'src/DOM_utils.js',
          'src/common_utils.js',
          'src/browserLoader.js',
          'src/adapterManager.js',
          'src/qunit/reporter.js',
          'src/index.js',
          'src/adapters/qunit.js'
        ],
        dest: 'dist/qunit/blanket.js'
      },
      jasmine: {
        src: [
          'tmp/esprimaWrapped.js',
          'node_modules/escodegen/escodegen.browser.js',
          'node_modules/istanbul/lib/instrumenter.js',
          'node_modules/istanbul/lib/object-utils.js',
          'src/blanket.js',
          'src/DOM_utils.js',
          'src/common_utils.js',
          'src/browserLoader.js',
          'src/adapterManager.js',
          'src/qunit/reporter.js',
          'src/index2.js',
          'src/adapters/jasmine.js'
        ],
        dest: 'dist/jasmine/blanket.js'
      },
      default: {
        src: [
          'tmp/esprimaWrapped.js',
          'node_modules/escodegen/escodegen.browser.js',
          'node_modules/istanbul/lib/instrumenter.js',
          'node_modules/istanbul/lib/object-utils.js',
          'src/blanket.js',
          'src/DOM_utils.js',
          'src/common_utils.js',
          'src/browserLoader.js',
          'src/adapterManager.js',
          'src/qunit/reporter.js',
          'src/index2.js'
        ],
        dest: 'dist/default/blanket.js'
      }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: false,
        newcap: true,
        noarg: true,
        sub: true,
        undef: false,
        boss: true,
        strict:false,
        eqnull: true,
        node: true,
        browser: true,
        expr: "warn"
      },
      uses_default: [
        'Gruntfile.js',
        'src/*.js',
        'test/*.js'
      ]
    }
  });

  // Load tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Default task.
  grunt.registerTask('default', ['jshint', 'concat']);
  

};