# Steroid-hook

[![Build Status](https://travis-ci.org/bredele/steroid-hook.svg?branch=master)](https://travis-ci.org/bredele/steroid-hook)
[![NPM](https://img.shields.io/npm/v/steroid-hook.svg?style=flat-square)](https://www.npmjs.com/package/steroid-hook)
[![Downloads](https://img.shields.io/npm/dm/steroid-hook.svg?style=flat-square)](http://npm-stat.com/charts.html?package=steroid-hook)
[![pledge](https://bredele.github.io/contributing-guide/community-pledge.svg)](https://github.com/bredele/contributing-guide/blob/master/community.md)


This module bind itself to node’s require and automatically compile files on the fly to create jsx-like templates using ES6 only and [Steroid](https://github.com/bredele/steroid).

## Usage

```js
const html = require('steroid')

const component = html`
  <HelloMessage name="world" />
`

function HelloMessage(props) {
  return html`<h2>Hello ${props.name}</h2>`
}
```

When an element represents a user-defined component (a function starting with an uppercase character), it passes the defined attributes to this function as a single object as well as this element children.

## Installation

```shell
npm install steroid-hook --save
```

All subsequent files required by node with the defined extension will be transformed by this module.

```js
// transpile files with the html extension
require('steroid-hook')('.html')
```

[![NPM](https://nodei.co/npm/steroid-hook.png)](https://nodei.co/npm/steroid-hook/)

## Question

For questions and feedback please use our [twitter account](https://twitter.com/bredeleca). For support, bug reports and or feature requests please make sure to read our
<a href="https://github.com/bredele/contributing-guide/blob/master/community.md" target="_blank">community guideline</a> and use the issue list of this repo and make sure it's not present yet in our reporting checklist.

## Contribution

Steroid-hook is an open source project and would not exist without its community. If you want to participate please make sure to read our <a href="https://github.com/bredele/contributing-guide/blob/master/community.md" target="_blank">guideline</a> before making a pull request. If you have any steroid-hook related project, component or other let everyone know in our wiki.


## Licence

The MIT License (MIT)

Copyright (c) 2016 Olivier Wietrich

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
