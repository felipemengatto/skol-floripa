module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({

        copy: {
          dist: {
            files: [
                {
                    expand: true, //habilita o cwd
                    cwd: 'source/', //relativo à source, mas não a inclui na cópia      
                    src: ['mocks/**/*', 'web-files/**/*', '!web-files/**/*.css', '!web-files/**/*.js', 
                            '**/*.html', 'web-files/js/component-programacao.min.js', 
                            'web-files/js/jquery.min.js', 'web-files/js/jquery.event.move.js',
                            'web-files/js/jquery.event.swipe.js'], 
                    dest: 'deploy/'
                },
                {
                    expand: true, //habilita o cwd
                    cwd: 'node_modules/font-awesome/fonts/',
                    src: ['**/*'], 
                    dest: 'deploy/web-files/fonts/'
                }
            ]        
          }
        },

        //limpa pastas
        clean: {
          dist: {
            src: ["deploy", "temp"]
          }
        },

        //concatena arquivos
        concat: {
            dist: {
                src: ['source/web-files/css/estilo.css',
                        'source/app/components/programacao-skol/programacao-skol.css',
                        'source/web-files/css/unslider.css',
                        'source/web-files/css/unslider-dots.css',
                        'node_modules/font-awesome/css/font-awesome.css'],

                dest: './temp/css/concat.css'
            }
        },

        //minifica css concatenado
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
             files: {
                  'deploy/web-files/css/main.css': ['./temp/css/concat.css']
               }
            }
        },

        uglify: {
            options: {
              mangle: true
            },

            dist: {
              files: {
                'deploy/web-files/js/app.min.js': ['source/web-files/js/efeito-parallax.js',
                                                    'source/web-files/js/menu-slide.js'],
                                                    
                'deploy/web-files/js/component-slider.min.js': ['source/web-files/js/menu-scroll.js',
                                                    'source/web-files/js/unslider-min.js',
                                                    'source/web-files/js/function-slides.js',
                                                    'source/web-files/js/efeitos-site.js'],

                'deploy/web-files/js/app-angular.min.js': ['node_modules/angular/angular.js',
                                                        'node_modules/angular-route/angular-route.js',
                                                        'node_modules/angular-sanitize/angular-sanitize.js'],

                'deploy/web-files/js/component-angular.min.js': ['source/app/app.module.js',
                                                    'source/app/app.config.js',
                                                    'source/app/directives/shows-skol/shows-skol.directive.js',
                                                    'source/app/directives/menu-selected/menu-selected.directive.js',
                                                    'source/app/components/programacao-skol/programacao-skol.controller.js',
                                                    'source/app/components/programacao-skol/programacao-skol.service.js']
              }
            },
        },

        useref: {

                html: ['deploy/*.html'],

                temp: 'deploy'

        },

        //minifica html
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [
                        {
                            expand: true,     // Enable dynamic expansion.
                            cwd: 'deploy/',      // Src matches are relative to this path.
                            src: ['**/*.html'], // Actual pattern(s) to match.
                            dest: 'deploy/',   // Destination path prefix.
                        },
                      ],
            }
        }


    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('deploy', ['clean', 'concat', 'cssmin', 'uglify', 'copy', 'useref', 'htmlmin'])
}