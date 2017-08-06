module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		less:{
			development:{
				options:{
					paths:["less/"]
				},
				files:{
					"css/style.css": "less/source.less"
				}
			}
		},
		cssmin: {
			combine:{
				files:{
					'css/main.css': ['less/style.css', 'css/animate.css', 'css/fontello.css']
				}
			}
		},
		uglify: {
			dist:{
				files:{
					'js/main.min.js': ['js/main.js']
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['cssmin', 'uglify']);
};