const assert = require('assert');



var Kowa = require('kowa');
var KowaFs = require('../kowa-fs')();

Kowa.spawn(function* () {
  try {
    yield KowaFs.writeFileAsync('/tmp/f1', 'content');
    yield KowaFs.appendFileAsync('/tmp/f2', 'content');
    yield KowaFs.ftruncateAsync('/tmp/f1', 5);
    yield KowaFs.truncateAsync('/tmp/f1', 1);
    yield KowaFs.renameAsync('/tmp/f1', '/tmp/f2');
  } catch (e) {
    assert.ok(false);
  }
});
