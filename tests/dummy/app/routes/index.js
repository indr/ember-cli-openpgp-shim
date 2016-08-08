import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    generateKeys() {
      console.log('generating key');
    }
  }
});
