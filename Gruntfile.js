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
              'build/game.min.js': ['build/game.concat.js']
            }
          }
        },
        processhtml: {
            build: {
             options: {
               customBlockTypes: ['include-script-file.js'],
               process: true
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
               'build/index.min.html': 'build/index.min.html'
             }
            }
        },
        concat: {
            build: {
                src: ['src/js/game.js', 'src/**/*.js'],
                dest: 'build/game.concat.js',
            },
        },
        cssmin: {
            minify: {
                files: {
                    'build/style.min.css': ['src/css/**/*.css']
                }
            }
        }
    });
 
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask(
        'build',
        'Compiles all assets to the build directory',
        ['clean', 'concat', 'uglify', 'cssmin', 'processhtml', 'htmlmin']
    );
};
