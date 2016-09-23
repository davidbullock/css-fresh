# CSS Fresh

A simple CSS starting point for new projects, this starting point framework will expand and grow as the project grows. Includes Jackets, Bourbon, and Compass. Add Bootstrap, etc. modules to the modules directory if required (not included by default). Enable / disable partials using the directory Sass partials. Enable / disable an entire directory in the main Sass file (app.sass). Extend global styles using ghost classes in the global style partials.

## Starting Structure

```
css/
  ├── 0-plugins/
  │   ├── bourbon/
  │   ├── jacket/
  │   ├── neat/
  │   └── _0-plugins-dir.sass
  ├── 1-variables/
  │   ├── _1-variables-dir.sass
  │   ├── _my-mixins-scss.scss
  │   ├── _my-mixins.sass
  │   └── _my-variables.sass
  ├── 2-base/
  │   ├── _2-base-dir.sass
  │   ├── _base.scss
  │   ├── _normalize.scss
  │   └── _reset.scss  
  ├── 3-layouts/
  │   ├── _3-layouts-dir.sass
  │   ├── _clear.scss
  │   ├── _container.scss
  │   ├── _grid.scss
  │   └── _global-layout.scss
  ├── 4-modules/
  │   ├── _4-modules-dir.sass
  │   ├── _accordion.scss
  │   ├── _utilities.scss
  │   └── _global-module-layout.scss
  ├── 5-themes/
  │   ├── _5-global-styles.sass
  │   ├── _typography.scss
  │   ├── _svg.scss
  │   └── _global-styles.scss
  ├── app.sass
  └── app.css
```
