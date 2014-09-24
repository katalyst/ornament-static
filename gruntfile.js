module.exports = function(grunt) {

  // Settings
  grunt.option('cssFolder', 'css');
  grunt.option('jsFolder', 'js');
  grunt.option('iconFolder', 'icons');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Compass + SASS
    compass: {
      dist: {
        options: {
          sassDir:           grunt.option('cssFolder'),
          cssDir:            grunt.option('cssFolder'),
          environment:       'production'
        }
      }
    },

    // Concatenation and minification of JS
    concat: {
      options: {
        // define a string to put between each file in the concatenated output
        separator: ';'
      },
      top: {
        // the files to concatenate
        src: [
          grunt.option('jsFolder') + '/vendor/jquery.js',
          grunt.option('jsFolder') + '/vendor/picturefill.js',
          grunt.option('jsFolder') + '/vendor/fotorama.js',
          grunt.option('jsFolder') + '/ornament/defaults.js',
          grunt.option('jsFolder') + '/ornament/refresh.js',
          grunt.option('jsFolder') + '/ornament/console.js',
          grunt.option('jsFolder') + '/ornament/window-dimensions.js',
          grunt.option('jsFolder') + '/ornament/debounce.js',
          grunt.option('jsFolder') + '/ornament/accessability.js',
          grunt.option('jsFolder') + '/ornament/velocity.js',
          grunt.option('jsFolder') + '/ornament/jquery.touchSwipe.js',
          grunt.option('jsFolder') + '/ornament/jquery.placeholder.js',
          // grunt.option('jsFolder') + '/ornament/external_links.js',
          grunt.option('jsFolder') + '/components/layout.js',
          grunt.option('jsFolder') + '/components/sticky-header.js',
          grunt.option('jsFolder') + '/components/show.js',
          grunt.option('jsFolder') + '/components/navigation-mobile.js',
          grunt.option('jsFolder') + '/components/tabs.js',
          grunt.option('jsFolder') + '/components/menu-aim.js'
        ],
        // the location of the resulting JS file
        dest: grunt.option('jsFolder') + '/application.js'
      },
      bottom: {
        // the files to concatenate
        src: [
          grunt.option('jsFolder') + '/vendor/fotorama.js',
          grunt.option('jsFolder') + '/components/fotorama.js',
          grunt.option('jsFolder') + '/components/navigation.js',
          grunt.option('jsFolder') + '/components/column-conform.js',
          grunt.option('jsFolder') + '/components/pagintion-helper.js',
          grunt.option('jsFolder') + '/components/select-link.js',
          grunt.option('jsFolder') + '/components/map.js',
          grunt.option('jsFolder') + '/components/lightbox.js',
          grunt.option('jsFolder') + '/components/tooltips.js',
          grunt.option('jsFolder') + '/components/kat-image-upload.js',
          grunt.option('jsFolder') + '/components/text-limiter.js',
          grunt.option('jsFolder') + '/components/issuu.js'
        ],
        // the location of the resulting JS file
        dest: grunt.option('jsFolder') + '/application_bottom.js'
      }
    },

    uglify: {
      options: {
        // the banner is inserted at the top of the output
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          '<%= grunt.option("jsFolder") %>/application.min.js': ['<%= concat.top.dest %>'],
          '<%= grunt.option("jsFolder") %>/application_bottom.min.js': ['<%= concat.bottom.dest %>']
        }
      }
    },

    watch: {
      js: {
        files: ['<%= concat.top.src %>','<%= concat.bottom.src %>'],
        tasks: ['js'],
        options: {
          livereload: true,
          livereloadOnError: false,
        }
      },
      css: {
        files: [grunt.option("cssFolder")+'/**/*.scss'],
        tasks: ['css'],
        options: {
          livereload: true,
          livereloadOnError: false,
        }
      }
    },

    // Grunt Icons
    grunticon: {
      myIcons: {
        files: [{

          expand: true,

          // source folder
          cwd: grunt.option("cssFolder"),

          // all svgs
          src: ['*.svg'],

          // base desination folder
          dest: "/"

        }],
        options: {

          // SVGO compression
          svgo:           true,

          // PNG compression
          pngcrush:       true,

          // Custom CSS template
          // relative to Gruntfile
          template:       "grunticon/grunticon-template.hbs",

          // CSS Files
          // relative to destination folder
          datasvgcss:     grunt.option("cssFolder") + "/grunticon/_icon-svg.scss",
          datapngcss:     grunt.option("cssFolder") + "/grunticon/_icon-png.scss",
          urlpngcss:      grunt.option("cssFolder") + "/grunticon/_icon-png-images.scss",

          // Folder path for PNG files
          // relative to destination folder
          pngfolder:      "images/icons",

          // CSS path for PNG files
          // relative to css file
          pngpath:        "..images/icons",

          // CSS prefixes
          cssprefix:      ".grunticon-",

          // Loader snippet (not used, but put in a nice place, rather than the default)
          loadersnippet:  "js/components/grunticon.loader.js",

          // Preview HTML file
          // relative to destination folder
          previewhtml:    "css/grunticon/__grunticons-preview.html",

          // Custom colours
          // usage: "sidebar: #bada55"
          // name SVG file: my-icon.colors-sidebar.svg
          colors: {
            white: "#fff",
            primary: "#037cf6",
            footer: "#4f6b80"
          }

        }
      }
    },

    // Find and replace
    replace: {
      ornament_index: {
        src: ['index.html'],
        overwrite: true,
        replacements: [{
          from: /<title>[\W\s\d\w]*<\/title>/,
          to: '<title></title>'
        },{
          from: /<%= csrf_meta_tags %>/,
          to: ''
        },{
          from: /<% unless Rails.env[\W\s\d\w]*<% end  %>/,
          to: '<meta name="robots" content="noindex,nofollow"/>'
        },{
          from: /<%= render "layouts\/webfonts" -%>/,
          to: ''
        },{
          from: /<%= stylesheet_link_tag "application", :media => "all" %>/,
          to: '<link rel="stylesheet" href="css/application.css" />'
        },{
          from: /<%= javascript_include_tag "application" %>/,
          to: '<script src="js/application.min.js"></script>'
        },{
          from: /<%= javascript_include_tag "modernizr" %>/,
          to: '<script src="js/vendor/modernizr.js"></script>'
        },{
          from: /<%= javascript_include_tag "selectivizr" %>/,
          to: '<script src="js/vendor/selectivizr.js"></script>'
        },{
          from: /<%= javascript_include_tag "css3-mediaqueries" %>/,
          to: '<script src="js/vendor/css3-mediaqueries.js"></script>'
        },{
          from: /<%= yield :scripts %>/,
          to: ''
        },{
          from: /<%= yield :styles %>/,
          to: ''
        },{
          from: /<%= yield :meta %>/,
          to: ''
        },{
          from: /<%= content_tag :div, class: "layout--content environment-#{Rails.env}" do %>/,
          to: '<div class="layout--content">'
        },{
          from: /<%= content_for\?\(:global\) \? yield\(:global\) : yield %>/,
          to: '<h1>Hello world.</h1>'
        },{
          from: /<% end %>/,
          to: '</div>'
        },{
          from: /<%= javascript_include_tag "application_bottom" %>/,
          to: '<script src="js/application_bottom.min.js"></script>'
        },{
          from: /<%= yield :scripts_bottom %>/,
          to: ''
        }]
      },
      ornament_fotorama_css: {
        src: ['css/components/_fotorama-custom.scss'],
        overwrite: true,
        replacements: [{
          from: '@import "fotorama"',
          to:   '@import "vendor/fotorama"'
        }]
      },
      ornament_lightbox_css: {
        src: ['css/components/_lightbox.scss'],
        overwrite: true,
        replacements: [{
          from: '@import "magnific-popup"',
          to:   '@import "vendor/magnific-popup"'
        }]
      }
    }

  });

  grunt.loadNpmTasks('grunt-text-replace');
  grunt.loadNpmTasks('grunt-includes');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-grunticon');

  grunt.registerTask('css', ['compass:dist']);
  grunt.registerTask('js', ['concat:top', 'concat:bottom', 'uglify']);
  grunt.registerTask('ornament_patch', ['replace:ornament_index', 'replace:ornament_fotorama_css', 'replace:ornament_lightbox_css']);
  grunt.registerTask('icons', ['grunticon:myIcons']);
};