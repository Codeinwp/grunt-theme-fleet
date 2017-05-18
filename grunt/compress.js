//https://github.com/gruntjs/grunt-contrib-compress
module.exports = function (grunt, options) {
    return {
        main: {
            options: {
                archive: 'artifact/<%= package.name %>.zip',
            }
            ,
            files: [
                {
                    cwd: 'dist/',
                    src: ['**'],
                    dest: '<%= package.name %>/'
                },
            ],
        }
    };
};