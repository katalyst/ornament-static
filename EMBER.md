# Ornament for Ember

## Stylesheets

1. Create a temporary folder for ornament and generate the static version as per the readme
1. Copy across the stylesheets to the app/styles folder, ignoring the compiled .css files.
1. Rename application.scss to <app-name>.scss
1. Add compass to your project: `npm install --save-dev ember-cli-compass-compiler`

## Javascripts

1. Create an ornament folder in the vendor folder and copy across the javascripts. Copy the loose files in to a "core" folder for tidiness.
1. Open your `Brocfile.js` and add in each Javascript file you want to add to your project. eg:

```
// Vendor
app.import('vendor/ornament/vendor/modernizr.js');
app.import('vendor/ornament/vendor/picturefill.js');
app.import('vendor/ornament/vendor/jquery.placeholder.js');
app.import('vendor/ornament/vendor/velocity.js');
app.import('vendor/ornament/vendor/magnific-popup.js');
app.import('vendor/ornament/vendor/fotorama.js');

// Ornament
app.import('vendor/ornament/core/defaults.js');
app.import('vendor/ornament/core/debounce.js');
app.import('vendor/ornament/core/refresh.js');
app.import('vendor/ornament/core/window-dimensions.js');
app.import('vendor/ornament/components/navigation-primary.js');
app.import('vendor/ornament/components/navigation-mobile.js');
app.import('vendor/ornament/components/text-limiter.js');
app.import('vendor/ornament/components/column-conform.js');
app.import('vendor/ornament/components/show.js');
app.import('vendor/ornament/components/lightbox.js');
app.import('vendor/ornament/components/map.js');
app.import('vendor/ornament/components/select-link.js');
app.import('vendor/ornament/components/fotorama.js');
app.import('vendor/ornament/components/tooltip.js');
app.import('vendor/ornament/components/tabs.js');
app.import('vendor/ornament/components/menu-aim.js');
```

## Markup

For now markup will need to be copied across from the generated index.html to your app.hbs and views as necessary. 