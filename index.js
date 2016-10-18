/* global require, __dirname */
module.exports = function () {
    'use strict';

    var path = require('path'),
        project = {};

    project.paths = {
        config: 'grunt/',
        grunt: 'grunt/',
        languages: 'languages/',
        logs: 'logs/',
        images: 'images/',
        vendor: 'vendor/',
    };

    project.paths.global = {
        config: path.join(__dirname, 'grunt/'),
        grunt: path.join(__dirname, 'grunt/')
    };

    project.taskMap = {
        wpcss: 'grunt-wp-css',
        addtextdomain: 'grunt-wp-i18n',
        makepot: 'grunt-wp-i18n'
    };


    project.files = {
        config: project.paths.config       + '**/*.js',
    };
    project.files.php = [
        '*.php',
        '**/*.php',
        '!.git/**',
        '!vendor/**',
        '!node_modules/**',
        '!logs/**'
    ];
    project.files.css = [
        '*.css',
        '**/*.css',
        '**/*.css',
        '!*.min.css',
        '!**/*.min.css',
        '!css/vendor/*.css',
        '!vendor/**',
        '!node_modules/**',
        '!logs/**'
    ];
    project.files.js = [
        '*.js',
        '**/*.js',
        '!*.min.js',
        '!**/*.min.js',
        '!.git/**',
        '!vendor/**',
        '!js/vendor/*.js',
        '!node_modules/**',
        '!logs/**'
    ];
    project.pkg =  grunt.file.readJSON('./package.json')
    return project;
};