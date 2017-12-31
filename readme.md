# [broccoli](https://github.com/joliss/broccoli)-defeatureify [![Build Status](https://travis-ci.org/sindresorhus/broccoli-defeatureify.svg?branch=master)](https://travis-ci.org/sindresorhus/broccoli-defeatureify)

> Remove specially flagged feature blocks and debug statements using [Defeatureify](https://github.com/thomasboyt/defeatureify)

Defeatureify is used in the [ember-dev](https://github.com/emberjs/ember-dev) package to enable or remove features and strip debug statements during the [Ember.js](https://github.com/emberjs/ember.js) build process.

*Issues with the output should be reported on the Defeatureify [issue tracker](https://github.com/thomasboyt/defeatureify/issues).*


## Install

```
$ npm install --save-dev broccoli-defeatureify
```


## Usage

```js
const Defeatureify = require('broccoli-defeatureify');
tree = new Defeatureify(tree, options);
```


## API

### Defeatureify([options])

See the Defeatureify [options](https://github.com/craigteegarden/grunt-ember-defeatureify#options).


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
