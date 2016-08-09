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
