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

## Example

This code snippet is from the dummy app. [Install](#installation-1)
and [run](#running) it to create your own PGP key pair.

```js
import Ember from 'ember';
import layout from '../templates/components/generate-key';
import openpgp from 'openpgp';

export default Ember.Component.extend({
  layout,
  
  init() {
    this._super(...arguments);
    openpgp.initWorker({path: 'assets/openpgp.worker.min.js'});
  },
  
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
