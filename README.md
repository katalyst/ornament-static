# Ornament - Static Site

Converts the rails Ornament framework in to a static-site friendly format, including grunt 
tasks for sass and JS building. 

## Getting Started

1. Git clone this repo in to your project folder.  
1. Git clone ornament in to [your project folder]/ornament  
1. Run `npm install` to install the node modules.  
1. Run `./orn_rename` to pull css, js and html files in to your project.  
1. Update vendor css imports from "file" to "vendor/file" 
1. Open index.html and replace the rails stuff with html stuff, ie. title, scripts, yields etc.
1. Run `grunt ornament_patch` to update HTML file. Removes rails commands and replaces with HTML stuff, new JS/CSS includes.  
1. Download jquery.js and add to /js/vendor
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

## Todo

1. Vendor css file updates  
1. Includes (grunt-includes)  
1. Loops, basic logic helpers (grunt-html-build?)  
1. Remove ornament folder or rename when un-needed  
1. Copy over styleguide  
1. Image minification (grunt-imagemin)  