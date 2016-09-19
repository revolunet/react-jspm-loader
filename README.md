# react-jspm-loader [![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

[![npm version](https://img.shields.io/npm/v/react-jspm-loader.svg)](http://npmjs.org/react-jspm-loader)

Async load any [jspm](http://jspm.io/) compatible React component into your app.

See also : [React UMD loader](https://github.com/revolunet/react-umd-loader)

## Usage

You can require modules in the [jspm](http://jspm.io/) registry : github and pm

This example loads the npm `react-svg-piechart` component into our app

```js
import jspmLoader from 'react-jspm-loader'

let cmp = (<JsPmLoader module="npm:react-svg-piechart" props={ props }>
             <p>Loading remote component...</p>
           </JsPmLoader>);

```


## Dev

This project use the great [react-component-boilerplate](https://github.com/survivejs/react-component-boilerplate)

