"use strict";


var fs = require('fs');

// external dependencies
module.exports = function () {
  var KowaFs = Object.create(fs);
  KowaFs.renameAsync = function(oldPath, newPath, callback) {
     return new Promise(
      function(resolve, reject) {
        fs.rename(oldPath, newPath, function (err) {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
      });
  };
  return KowaFs;
};
