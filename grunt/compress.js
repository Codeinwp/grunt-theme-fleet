//https://github.com/gruntjs/grunt-contrib-compress
module.exports = function (grunt, options) {
	return {
		full: {
			options: {
				archive: 'artifact/<%= package.name %>.zip',
			}
			,
			files: [
				{
					cwd: 'dist/<%= package.name %>/',
					src: ['**'],
					dest: '<%= package.name %>/'
				},
			],
		},
		lite: {
			options: {
				archive: 'artifact/<%= package.litename %>.zip',
			}
			,
			files: [
				{
					cwd: 'dist/<%= package.litename %>/',
					src: ['**'],
					expand: true,
					dest: '<%= package.litename %>/'
				},
			],
		}
	};
};