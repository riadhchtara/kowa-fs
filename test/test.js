const assert = require('assert');



var Kowa = require('kowa');
var KowaFs = require('../kowa-fs')();

Kowa.spawn(function* () {
  try {
    yield KowaFs.renameAsync('/tmp/f1', '/tmp/f2');
  } catch (e) {
    console.log(e);
  }
});
