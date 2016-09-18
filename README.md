# ship-components-dropzone
Simple HTML5 drag-drop zone for images with validation using React.js.

Try it out here: https://github.com/ship-components/ship-components-dropzone

# ship-components-dropzone
[React](http://facebook.github.io/react/) Upload component (Drag & Drop). Exports a commonjs module that can be used with [webpack](http://webpack.github.io/). Source is in ES6 and is compiled down to ES5 using [Babel](https://babeljs.io/).

[![npm](https://img.shields.io/npm/v/ship-components-dropzone.svg?maxAge=2592000)](https://www.npmjs.com/package/ship-components-dropzone)
[![Build Status](http://img.shields.io/travis/ship-components/ship-components-dropzone/master.svg?style=flat)](https://travis-ci.org/ship-components/ship-components-dropzone)
[![Coverage](http://img.shields.io/coveralls/ship-components/ship-components-dropzone.svg?style=flat)](https://coveralls.io/github/ship-components)
[![devDependencies](https://img.shields.io/david/dev/ship-components/ship-components-dropzone.svg?style=flat)](https://david-dm.org/ship-components/ship-components-dropzone?type=dev)

## Usage

### ES6/JSX (Recommended)
The component is written using ES6/JSX therefore Babel is recommended to use it. The below example is based on using [webpack](http://webpack.github.io/) and [babel-loader](https://github.com/babel/babel-loader).
```javascript

import React from 'react';
import ReactDOM from 'react-dom';
import { UploadContainer } from 'ship-components-dropzone';

class UploadButtonExamples extends React.Component {
  render() {
    return (
      <div>
        <h1>Upload Button Examples</h1>
        <div className='example-group'>
          <h2>Blue Button</h2>
          <UploadContainer
             buttonText='Upload'
          />
        </div>
        <div className='example-group'>
          <h2>Green Button</h2>
          <UploadContainer
             buttonColor='green'
             buttonText='Submit'
             backgroundColor='#4285f4'
          />
        </div>
        <div className='example-group'>
          <h2>Grey Button</h2>
          <UploadContainer
             buttonColor='gray'
             buttonText='Done'
             backgroundColor='#0f9d58'
          />
        </div>
        <div className='example-group'>
          <h2>White Button</h2>
          <UploadContainer
             buttonColor='white'
             buttonText='Press'
             backgroundColor='#d23f31'
          />
        </div>
      </div>
    )
  }
}

```

## Examples and Development
![Sample Demo](https://s14.postimg.org/woo35ndht/ezgif_com_video_to_gif.gif)

Examples can be found in the `examples/` folder. A development server can be run with:

```shell
$ npm install
$ npm start
```

which will live reload any changes you make and serve them at http://localhost:8080.

### Component customization
- **Bachground Color:** You can customize upload container backround color using RGB, HEX or regular colors.

```javascript

<UploadContainer
backgroundColor='#4285f4'
/>

//OR

<UploadContainer
backgroundColor='DarkTurquoise'
/>

```

- **Button Color:** You can customize button text label.

```javascript

<UploadContainer
buttonText='Submit'
/>

//OR

<UploadContainer
buttonText='Upload'
/>
```

- **Button Text:** You can choose materials color for the button.

```javascript

<UploadContainer
buttonColor='blue'
/>

//OR

<UploadContainer
buttonColor='green'
/>

```

#### DEFAULT VALUES:
- [x] background color: transparent
- [x] button color: blue
- [x] button text: Upload

### Webpack Configuration
This module is designed to be used with webpack but requires a few loaders if you are pulling the source into another project.

```shell
$ npm install webpack babel-loader css-loader style-loader postcss-loader extract-text-webpack-plugin postcss-nested postcss-color-hex-alpha postcss-color-function postcss-calc postcss-simple-vars autoprefixer --save-dev
```

Below are is a sample of how to setup the loaders:

```js
/**
 * Relevant Webpack Configuration
 */
{
  [...]
  module: {
    loaders: [
      // Setup support for ES6
      {
        test: /\.(jsx?|es6)$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      // Setup support for CSS Modules
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader')
      }
    ]
  },
  plugins: [
    // Extract the css and put it in one file. Path is relative to output path
    new ExtractTextPlugin('../css/[name].css', { allChunks: true })
  ],
  // CSS Modules
  postcss: [
    require('postcss-nested'),
    require('postcss-color-hex-alpha'),
    require('postcss-color-function'),
    require('postcss-calc'),
    require('autoprefixer')
  ],
  [...]
}
```

## Tests

1. `npm install`
2. `npm test`

## License
The MIT License (MIT)

Copyright (c) 2016 Sepand Assadi @SonyInteractiveAmerica

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
