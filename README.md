# ember-cli-openpgp-shim

[![npm version](https://badge.fury.io/js/ember-cli-openpgp-shim.svg)](https://badge.fury.io/js/ember-cli-openpgp-shim)
[![Build Status](https://travis-ci.org/indr/ember-cli-openpgp-shim.svg?branch=master)](https://travis-ci.org/indr/ember-cli-openpgp-shim)
[![dependencies Status](https://david-dm.org/indr/ember-cli-openpgp-shim/status.svg)](https://david-dm.org/indr/ember-cli-openpgp-shim)
[![Code Climate](https://codeclimate.com/github/indr/ember-cli-openpgp-shim/badges/gpa.svg)](https://codeclimate.com/github/indr/ember-cli-openpgp-shim)

ES6 accessible module for [OpenPGP.js](https://github.com/openpgpjs/openpgpjs) within your Ember applications.

## Features

 - ES6 assessible module for OpenPGP.js
 - FastBoot support

## Installation

You can install either with `ember install`:

For Ember CLI >= `0.2.3`:

```shell
ember install ember-cli-openpgp-shim
```

For Ember CLI < `0.2.3`:

```shell
ember install:addon ember-cli-openpgp-shim
```

## Compatibility

This addon ist tested against the `release`, `beta`, `canary` channels and version `1.13`.

## Usage

```js
import openpgp from 'openpgp';
```

## Options

```js
// config/environment.js
module.exports = function(environment) {
  return {
    openpgp: {
      // Specify the output path of `openpgp.min.js` and `openpgp.worker.min.js`
      // 
      // If you don't want to use web workers, you can disable
      // assets export by setting this option to `null`.
      //
      // Default: 'assets'
      assetsOutputPath: 'assets/openpgp'
    }
  }
}
```

## Examples

These code snippets are from the dummy app. [Install](#installation-1)
and [run](#running) it to create your own PGP key pair.

### Generate Key

```js
// tests/dummy/app/components/generate-key.js
import Ember from 'ember';
import layout from '../templates/components/generate-key';
import openpgp from 'openpgp';

export default Ember.Component.extend({
  layout,
  
  actions: {
    generateKey() {
      const {name, email, passphrase} = this.getProperties('name', 'emailAddress', 'passphrase');
      
      const options = {
        userIds: [{name, email}],
        passphrase
      };
      
      openpgp.generateKey(options).then((result) => {
        this.set('privateKeyArmored', result.privateKeyArmored);
        this.set('publicKeyArmored', result.publicKeyArmored);
      }).catch((err) => {
        console.log(err);
        window.alert(err.message || err);
      });
    }
  }
});
```

### Init Worker

```js
// tests/dummy/app/components/init-worker.js
import Ember from 'ember';
import layout from '../templates/components/init-worker';
import openpgp from 'openpgp';

export default Ember.Component.extend({
  layout,
  
  path: 'assets',
  
  actions: {
    initWorker() {
      const path = this.get('path');
      openpgp.initWorker({path: path + '/openpgp.worker.min.js'});
    }
  }
});
```

## Changelog

[CHANGELOG](CHANGELOG.md)

## Credits

I've used these projects to figure out stuff and copy code from:

 - Jason Mitchell and his [ember-cli-moment-shim](https://github.com/jasonmit/ember-cli-moment-shim)
 - Damian Senn and his [ember-cli-emojione-shim](https://github.com/topaxi/ember-cli-emojione-shim)

Thank you!

## License

[MIT](LICENSE.md)

## Contributing

### Installation

* `git clone` this repository
* `npm install`
* `bower install`

### Running

The dummy app provides an interface to generate keys.

* `ember serve`
* Visit your app at http://localhost:4200.

### Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

### Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
