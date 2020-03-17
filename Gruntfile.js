module.exports = function(grunt) {
  require('jit-grunt')(grunt);

    grunt.initConfig({
      sass: {                        
      dist: {                           
        options: {                      
          style: 'expanded',
          sourcemap: 'auto',
          style: 'compressed'
        },
        files: { 
          'css/website-theme.css': 'scss/theme.scss' 
        }
      }
    },
    watch: {
      styles: {
        files: ['scss/theme.scss'], 
        tasks: ['sass', 'notify:sass'],
        options: {
          nospawn: true
        }
      }
    },
     notify: {
      sass:{
          options:{
              title: "Fica em casa!",
              message: "Sass compilado sem erros! :)",
              duration: '1' 
          }
      }
  }
  });

  grunt.registerTask('default', ['sass', 'watch']);
};
