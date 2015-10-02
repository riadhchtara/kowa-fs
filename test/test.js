const assert = require('assert');



var Kowa = require('kowa');
var KowaFs = require('../kowa-fs')();

Kowa.spawn(function* () {
  try {
    //yield KowaFs.writeFileAsync('/tmp/f1', 'content');
    //yield KowaFs.appendFileAsync('/tmp/f2', 'content');
    var files = yield KowaFs.readdirAsync('/tmp/');
    console.log(files);
    yield KowaFs.renameAsync('/tmp/f1', '/tmp/f2');
    //console.log(yield KowaFs.readFileAsync('/tmp/f2'));
  } catch (e) {
    console.log(error, e);
    assert.equal(false, true);
  }
});
