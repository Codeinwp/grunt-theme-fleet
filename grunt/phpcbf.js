/* jshint node:true */
// https://github.com/mducharme/grunt-phpcbf

module.exports = {
    theme: {
        options: {
            standard: 'phpcs.xml',
            noPatch: false,
        },
        files: {
            src:['<%= files.php %>']
        }
    }
};