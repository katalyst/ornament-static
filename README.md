# Ornament - Static Site

Converts the rails Ornament framework in to a static-site friendly format, including grunt 
tasks for sass and JS building. 


## Prerequesites

1. NPM (`brew install npm`)
1. Compass (`gem install compass`)

## Getting Started

1. Git clone this repo in to your project folder.  
1. Run `./generate_ornament` to pull css, js and html files in to your project.  
1. Run `grunt watch` and start developing!  

## Optional Steps

1. Customise file paths in gruntfile.js
1. Customise what JS components are needed in your gruntfile.js  
1. Remove css/styleguide.[css|scss]  

## Grunt tasks   

`grunt css` - Builds your CSS via SASS and Compass.   
`grunt js` - Concatenates your JS files and then minifies them.   
`grunt watch` - Auto-runs the CSS and JS tasks when .scss and .js files are updated.   
`grunt icons` - The usual ornament icon builder. See the ornament docs for more info.   

## LiveReload

1. Install the [LiveReload browser extension](http://feedback.livereload.com/knowledgebase/articles/86242-how-do-i-install-and-use-the-browser-extensions-), visit your page and enable it.  
1. Run `grunt watch`  

## Todo

1. Includes (grunt-includes)  
1. Re-import webfonts include  
1. Loops, basic logic helpers (grunt-html-build?)  
1. Image minification (grunt-imagemin)  
1. Do something with the styleguide  