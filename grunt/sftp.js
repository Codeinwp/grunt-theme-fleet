/**
 * https://github.com/israelroldan/grunt-ssh
 */
module.exports = function (grunt, options) {
    return {
        deploy: {
            files: {
                './': ['dist/.*', 'dist/**']
            },
            options: {
                host: process.env.DEMO_THEMEISLE_HOST,
                path: process.env.DEMO_THEMEISLE_PATH,
                username: process.env.DEMO_THEMEISLE_USER,
                password: process.env.DEMO_THEMEISLE_PASS,
                showProgress: true,
                srcBasePath: 'dist',
                createDirectories: true
            }
        }
    }
};