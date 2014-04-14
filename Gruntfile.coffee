module.exports = (grunt) ->

    grunt.initConfig
        pkg: grunt.file.readJSON 'package.json'

        express:
            default_option: {}

    grunt.loadNpmTasks 'grunt-express'
    grunt.registerTask 'default', ['express']
