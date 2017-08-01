//https://github.com/jedrichards/grunt-rsync
module.exports = function (grunt, options) {
	return {
		options: {
			args: ["--verbose"],
			sshCmdArgs: [["-o StrictHostKeyChecking=no"]],
			recursive: true
		},
		start: {
			options: {
				src: ".maintenance",
				port: (process.env.DEMO_THEMEISLE_PORT) ? process.env.DEMO_THEMEISLE_PORT : 22,
				dest: process.env.DEMO_ROOT,
				host: process.env.DEMO_THEMEISLE_USER + "@" + process.env.DEMO_THEMEISLE_HOST,
				delete: true // Careful this option could cause data loss, read the docs!
			}
		},
		prod: {
			options: {
				src: "dist/",
				port: (process.env.DEMO_THEMEISLE_PORT) ? process.env.DEMO_THEMEISLE_PORT : 22,
				dest: process.env.DEMO_THEMEISLE_PATH,
				host: process.env.DEMO_THEMEISLE_USER + "@" + process.env.DEMO_THEMEISLE_HOST,
				delete: true // Careful this option could cause data loss, read the docs!
			}
		},
		end: {
			options: {
				src: ".maintenance",
				port: (process.env.DEMO_THEMEISLE_PORT) ? process.env.DEMO_THEMEISLE_PORT : 22,
				dest: process.env.DEMO_ROOT,
				host: process.env.DEMO_THEMEISLE_USER + "@" + process.env.DEMO_THEMEISLE_HOST,
				delete: true // Careful this option could cause data loss, read the docs!
			}
		}
	}
};