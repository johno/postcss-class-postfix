# postcss-class-postfix [![Build Status](https://secure.travis-ci.org/johnotander/postcss-class-postfix.svg?branch=master)](https://travis-ci.org/johnotander/postcss-class-postfix) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

Postfix class selectors

## Installation

```bash
npm install --save postcss-class-postfix
```

## Usage

```javascript
var postcss = require('postcss')
var classPostfix = require('postcss-class-postfix')

postcss([ classPostfix('-bar') ]).process(myCss).css
```

#### Input

```css
.foo #baz {
  color: tomato;
}
```

#### Output

```css
.foo-bar #baz {
  color: tomato;
}
```

## Related

* <https://github.com/johnotander/class-postfix>

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by John Otander ([@4lpine](https://twitter.com/4lpine)).

***

> This package was initially generated with [yeoman](http://yeoman.io) and the [p generator](https://github.com/johnotander/generator-p.git).
