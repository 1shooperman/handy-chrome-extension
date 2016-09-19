module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        env: {
            test: {
                NODE_ENV: 'test'
            }
        },
        jshint: {
            src: ['src/content.js', 'Gruntfile.js'],
            options: {
                node: true,
                curly: true,
                eqeqeq: true,
                forin: true
            }
        },
        uglify: {
            build: {
                files: {
                    'dist/content.min.js': [
                        'src/inboxsdk.js',
                        'src/content.js'
                    ]
                }
            }
        },
        cssmin: {
            build: {
                files: {
                    'dist/content.min.css': 'src/content.css'
                }
            }
        },
        less: {
            build: {
                files: {
                    'src/content.css': 'src/content.less'
                }
            }
        },
        watch: {
            css: {
                files: ['src/*.less'],
                tasks: ['less', 'cssmin']
            },
            js: {
                files: ['src/*.js'],
                tasks: ['jshint', 'uglify']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-env');

    grunt.registerTask('default', ['less', 'cssmin', 'jshint', 'uglify', 'watch']);
};
