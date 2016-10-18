/* jshint node:true */
// https://github.com/blazersix/grunt-wp-i18n
module.exports = {
    theme: {
        options: {
            domainPath: '<%= paths.languages %>',
            potFilename: '<%= package.theme.textdomain %>.pot',
            exclude: [
                '<%= paths.vendor %>.*'
            ],
            potHeaders: {
                poedit: true,
                'report-msgid-bugs-to': '<%= package.pot.reportmsgidbugsto %>',
                'language-team': '<%= package.pot.languageteam %>',
                'last-translator': '<%= package.pot.lasttranslator %>'
            },
            type: 'wp-theme'
        },
    },
};