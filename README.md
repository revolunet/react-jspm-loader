# react-jspm-loader [![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

[![npm version](https://img.shields.io/npm/v/react-jspm-loader.svg)](http://npmjs.org/react-jspm-loader)

Async load any [jspm](http://jspm.io/) compatible React component into your app.

This component use [script.js](https://github.com/ded/script.js/) to load the jspm.io browser runtime.

See also : [React UMD loader](https://github.com/revolunet/react-umd-loader)

## Usage

You can require modules in the [jspm](http://jspm.io/) registry : github and npm

This example loads the npm `react-json-viewer` component into our app

```js
import JsPmLoader from 'react-jspm-loader'

let cmp = (<JsPmLoader module="npm:react-json-viewer" props={ props }>
             <p>Loading remote component...</p>
           </JsPmLoader>);

```


## Dev

This project use the great [react-component-boilerplate](https://github.com/survivejs/react-component-boilerplate)

