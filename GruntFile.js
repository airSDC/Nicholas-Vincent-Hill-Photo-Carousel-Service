const webpackConfig = require('./webpack.config');

require('dotenv').config();

module.exports = function(grunt) {
  grunt.initConfig({
    aws_s3: {
      dist: {
        options: {
          bucket: 'airfec-photos-group9',
          region: 'us-west-1'
        },
        files: [
          {
            expand: true,
            cwd: 'client/dist/',
            src: ['**'],
            dest: '/scripts/'
          }
        ]
      }
    },
    webpack: {
      options: {
        stats: !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
      },
      prod: webpackConfig,
      dev: Object.assign({ watch: true, mode: 'development' }, webpackConfig)
    }
  });

  grunt.loadNpmTasks('grunt-webpack');
  grunt.loadNpmTasks('grunt-aws-s3');

  grunt.registerTask('build', ['webpack:dev']);

  grunt.registerTask('deploy', ['webpack:prod', 'aws_s3:dist']);
};
