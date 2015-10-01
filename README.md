# Kowa fs
Kowa fs: asynchronous performance and synchronous simplicity


## Install
    npm install kowa-fs

## Example

```
var Kowa = require('kowa');
var KowaFs = require('kowa-fs');

Kowa.spawn(function* () {
  try {
    yield KowaFs.renameAsync('/tmp/f1', '/tmp/f2');
  } catch (e) {
    console.log(e);
  }
});

```


## License

Apache License 2.0
