/* jshint node:true */
module.exports = {
    http: {
        themeisle_sitemaps_service: {
            options: {
                url: 'http://104.236.125.82/slack-commands/themeisle-wraith-service.php',
                method: 'POST',
                callback: function(error, response, body) {
                    if(error != null) {
                        grunt.log.error(error)
                    }
                    grunt.log.write(body)
                },
                form: {
                    mode: 'sitemaps'
                }
            }
        },
        themeisle_crawl_service: {
            options: {
                url: 'http://104.236.125.82/slack-commands/themeisle-wraith-service.php',
                method: 'POST',
                callback: function(error, response, body) {
                    if(error != null) {
                        grunt.log.error(error)
                    }
                    grunt.log.write(body)
                },
                form: {
                    mode: 'crawl',
                    slug: '<%= package.wraithSlug %>'
                }
            }
        },
        themeisle_latest_service: {
            options: {
                url: 'http://104.236.125.82/slack-commands/themeisle-wraith-service.php',
                method: 'POST',
                callback: function(error, response, body) {
                    if(error != null) {
                        grunt.log.error(error)
                    }
                    grunt.log.write(body)
                },
                form: {
                    mode: 'latest',
                    slug: '<%= package.wraithSlug %>'
                }
            }
        }
    }
};