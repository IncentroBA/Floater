# Floater

A component to create awesome tooltips, modals and more!

## Features

A widget that supports placing your own widgets inside the target and the content. Hovering / clicking over the target
will trigger the content to show.

-   Trigger Event Type (`click | hover`): The event that will trigger the Floater. It can be hover or click. Default is
    click.
-   No Styling (`boolean`): Make Floater transparent, letting you create a custom Floater within your scss files.
-   Auto-open (`boolean`): Open the Floater automatically.
-   Disable Flip (`boolean`): Disable changes in the Floater position on scroll/resize.
-   Disable Hover to Click (`boolean`): Don't convert hover event to click on mobile.
-   Hide Arrow (`boolean`): Don't show the arrow. Useful for centered or modal layout.
-   Offset (`Decimal`): The distance between the Floater and its target in pixels.
-   Placement (`top | bottom | left | right | auto | center`): The placement of the Floater. It will update the position
    if there's no space available.
    -   Show Close Button (`boolean`): Display a ⨉ button to close the Floater.

## Usage

1. Install NPM package dependencies by using: `npm install`. If you use NPM v7.x.x, which can be checked by executing
   `npm -v`, execute: `npm install --legacy-peer-deps`.
1. Run `npm start` to watch for code changes. On every change:
    - the widget will be bundled;
    - the bundle will be included in a `dist` folder in the root directory of the project;
    - the bundle will be included in the `deployment` and `widgets` folder of the Mendix test project.
