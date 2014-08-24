module.exports = function(grunt) {
 
    grunt.initConfig({
    clean: {
        build: {
            src: ['build/*', '!build/.gitignore']
        }
    },
    uglify: {
      build: {
        options: {
          mangle: true,
          compress:true
        },
        files: {
          'build/application.js': [ 'src/**/*.js' ]
        }
      }
    },
    processhtml: {
        build: {
         options: {
           process: true,
           data: {
             title: 'My game',
             message: 'This is production distribution'
           }
         },
         files: {
           'build/index.min.html': ['src/index.html']
         }
        }
    },
    htmlmin: {
        build: {
         options: {
           removeComments: true,
           collapseWhitespace: true
         },
         files: {
           'build/index.min.html': 'src/index.html'
         }
        }
    }
    });
 
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-processhtml');

    grunt.registerTask(
        'build',
        'Compiles all assets to the build folder',
        ['clean', 'uglify', 'processhtml', 'htmlmin'])
};
