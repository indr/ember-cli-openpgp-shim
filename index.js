/* jshint node: true */
'use strict';

const path = require('path');
const Funnel = require('broccoli-funnel');
const mergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'openpgp',
  
  included: function (app) {
    this._super.included(app);
    
    while (typeof app.import !== 'function' && app.app) {
      app = app.app;
    }
    this.app = app;
    
    app.import('vendor/openpgp.js');
    app.import('vendor/shims/openpgp.js', {
      exports: {
        openpgp: ['default']
      }
    });
    
    return app;
  },
  
  treeForVendor: function (vendorTree) {
    const trees = [];
    
    if (vendorTree) {
      trees.push(vendorTree);
    }
    trees.push(new Funnel(getOpenpgpPath(), {
      include: ['openpgp.js']
    }));
    
    return this._super.treeForVendor(mergeTrees(trees));
  },
  
  treeForPublic: function (publicTree) {
    const trees = [];
    
    if (publicTree) {
      trees.push(publicTree);
    }
    
    trees.push(new Funnel(getOpenpgpPath(), {
      include: [
        'openpgp.min.js',
        'openpgp.worker.min.js'
      ],
      destDir: 'assets'
    }));
    
    return this._super.treeForPublic(mergeTrees(trees));
  }
};

function getOpenpgpPath() {
  return path.dirname(require.resolve('openpgp'));
}
