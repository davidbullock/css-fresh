# CSS Fresh

A simple CSS starting point for new projects, this starting point framework will expand and grow as the project grows. Includes Bourbon and Bootstrap, add modules to the modules directory. Enable / disable partials using the directory SASS partials. Enable / disable an entire directory in the main SASS file (app.sass). Extend global styles using ghost classes in the global style partials.

Starting structure

sass/
  ├── 0-plugins/
  │   ├── bourbon/
  │   ├── jacket/
  │   ├── neat/
  │   └── _0-plugins-dir.sass
  ├── 1-variables/
  │   ├── _1-variables-dir.sass
  │   ├── _my-mixins-scss.scss
  │   └── _my-mixins.sass
  ├── 2-base/
  │   ├── _2-base-dir.sass
  │   ├── _base.scss
  │   ├── _normalize.scss
  │   └── _reset.scss  
  ├── 3-layouts/
  │   ├── _3-layouts-dir.sass
  │   ├── _clear.scss
  │   ├── _container.scss
  │   ├── _global-layout.scss
  │   └── _grid.scss
  ├── 4-modules/
  │   ├── _4-modules-dir.sass
  │   ├── _accordion.scss
  │   ├── _global-module-layout.scss
  │   └── _utilities.scss
  ├── 5-themes/
  │   ├── _5-global-styles.sass
  │   ├── _global-styles.scss
  │   ├── _svg.scss
  │   └── _typography.scss
  ├── app.sass
  └── app.css

