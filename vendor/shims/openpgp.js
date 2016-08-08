(function () {
  function vendorModule() {
    'use strict';
    
    var openpgp = self['openpgp'];
    return {
      'armor': openpgp.armor,
      'AsyncProxy': openpgp.AsyncProxy,
      'cleartext': openpgp.cleartext,
      'config': openpgp.config,
      'crypto': openpgp.crypto,
      'default': openpgp,
      'enums': openpgp.enums,
      'HKP': openpgp.HKP,
      'key': openpgp.key,
      'Keyid': openpgp.Keyid,
      'Keyring': openpgp.Keyring,
      'message': openpgp.message,
      'MPI': openpgp.MPI,
      'openpgp': openpgp,
      'packet': openpgp.packet,
      'S2K': openpgp.S2K,
      'util': openpgp.util
    };
  }
  
  define('openpgp', [], vendorModule);
})();
