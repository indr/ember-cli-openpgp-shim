import { module, test } from 'qunit';

import defaultBinding from 'openpgp';
import { openpgp } from 'openpgp';
import {
  armor,
  AsyncProxy,
  cleartext,
  config,
  crypto,
  enums,
  HKP,
  key,
  Keyid,
  Keyring,
  message,
  MPI,
  packet,
  S2K,
  util
} from 'openpgp';

module('Acceptance | Shim', {});

test('import default binding', function (assert) {
  assert.expect(3);
  assert.ok(defaultBinding, 'defaultBinding is not defined');
  assert.ok(defaultBinding.initWorker, 'defaultBinding.initWorker is not defined');
  assert.ok(defaultBinding.key, 'defaultBinding.key is not defined');
});

test('import member openpgp', function (assert) {
  assert.expect(3);
  assert.ok(openpgp, 'openpgp is not defined');
  assert.ok(openpgp.initWorker, 'openpgp.initWorker is not defined');
  assert.ok(openpgp.key, 'openpgp.key is not defined');
});

test("import members", function (assert) {
  assert.expect(15);
  assert.ok(armor, 'armor is not defined');
  assert.ok(AsyncProxy, 'AsyncProxy is not defined');
  assert.ok(cleartext, 'cleartext is not defined');
  assert.ok(config, 'config is not defined');
  assert.ok(crypto, 'crypto is not defined');
  assert.ok(enums, 'enums is not defined');
  assert.ok(HKP, 'HKP is not defined');
  assert.ok(key, 'key is not defined');
  assert.ok(Keyid, 'Keyid is not defined');
  assert.ok(Keyring, 'Keyring is not defined');
  assert.ok(message, 'message is not defined');
  assert.ok(MPI, 'MPI is not defined');
  assert.ok(packet, 'packet is not defined');
  assert.ok(S2K, 'S2K is not defined');
  assert.ok(util, 'util is not defined');
});
