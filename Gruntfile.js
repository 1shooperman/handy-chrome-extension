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
                    'content.min.js': [
                        'src/inboxsdk.js',
                        'src/content.js'
                    ]
                }
            }
        },
        cssmin: {
            build: {
                files: {
                    'content.min.css': 'src/content.css'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-env');

    grunt.registerTask('default', ['cssmin', 'jshint', 'uglify']);
};
