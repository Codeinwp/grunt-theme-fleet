// https://github.com/SaschaGalley/grunt-phpunit
module.exports = {
    plugin: {
        classes: {
            dir: 'tests/'
        },
        options: {
            configuration: 'phpunit.xml',
        }
    }
};