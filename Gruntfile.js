module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        env: {
            test: {
                NODE_ENV: 'test'
            }
        },
        jshint: {
            src: ['app/**/*.js', 'app/*.js', 'config/**/*.js', 'config/*.js'],
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
                    'content.min.js': [
                        'content.js'
                    ]
                }
            }
        },
        cssmin: {
            build: {
                files: {
                    'content.min.css': 'content.css'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-env');

    grunt.registerTask('default', ['less', 'cssmin', 'jshint', 'uglify']);
};
