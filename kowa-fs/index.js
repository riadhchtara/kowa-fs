"use strict";


var fs = require('fs');

// external dependencies
module.exports = function () {
  var KowaFs = Object.create(fs);




  KowaFs.appendFileAsync = function(filename, data, options) {
    return new Promise(
      function(resolve, reject) {
        fs.appendFile(filename, data, options, function (err) {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
      }
    );
  };

  KowaFs.chownAsync = function(path, uid, gid) {
    return new Promise(
      function(resolve, reject) {
        fs.chown(path, uid, gid, function (err) {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
      }
    );
  };

  KowaFs.ftruncateAsync = function(fd, len) {
    return new Promise(
      function(resolve, reject) {
        fs.ftruncate(fd, len, function (err) {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
      }
    );
  };

  KowaFs.renameAsync = function(oldPath, newPath) {
    return new Promise(
      function(resolve, reject) {
        fs.rename(oldPath, newPath, function (err) {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
      }
    );
  };

  KowaFs.truncateAsync = function(path, len) {
    return new Promise(
      function(resolve, reject) {
        fs.ftruncate(path, len, function (err) {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
      }
    );
  };

  KowaFs.writeFileAsync = function(filename, data, options) {
    return new Promise(
      function(resolve, reject) {
        fs.writeFile(filename, data, options, function (err) {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
      }
    );
  };

  return KowaFs;
};
