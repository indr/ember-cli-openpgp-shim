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
