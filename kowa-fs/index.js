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

KowaFs.accessAsync = function(path, mode) {
  return new Promise(
    function(resolve, reject) {
      fs.access(path, mode, function (err) {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    }
  );
};

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

KowaFs.chmodAsync = function(path, mode) {
  return new Promise(
    function(resolve, reject) {
      fs.chmod(path, mode, function (err) {
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

KowaFs.closeAsync = function(fd) {
  return new Promise(
    function(resolve, reject) {
      fs.close(fd, function (err) {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    }
  );
};

KowaFs.existsAsync = function(path) {
  return new Promise(
    function(resolve, reject) {
      fs.exists(path, function (err) {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    }
  );
};

KowaFs.fchmodAsync = function(fd, mode) {
  return new Promise(
    function(resolve, reject) {
      fs.fchmod(fd, mode, function (err) {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    }
  );
};

KowaFs.fchownAsync = function(fd, uid, gid) {
  return new Promise(
    function(resolve, reject) {
      fs.fchown(fd, uid, gid, function (err) {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    }
  );
};

KowaFs.fstatAsync = function(fd) {
  return new Promise(
    function(resolve, reject) {
      fs.fstat(fd, function (err) {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    }
  );
};

KowaFs.fsyncAsync = function(fd) {
  return new Promise(
    function(resolve, reject) {
      fs.fsync(fd, function (err) {
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

KowaFs.futimesAsync = function(fd, atime, mtime) {
  return new Promise(
    function(resolve, reject) {
      fs.futimes(fd, atime, mtime, function (err) {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    }
  );
};

KowaFs.lchmodAsync = function(path, mode) {
  return new Promise(
    function(resolve, reject) {
      fs.lchmod(path, mode, function (err) {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    }
  );
};

KowaFs.lchownAsync = function(path, uid, gid) {
  return new Promise(
    function(resolve, reject) {
      fs.lchown(path, uid, gid, function (err) {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    }
  );
};

KowaFs.linkAsync = function(srcpath, dstpath) {
  return new Promise(
    function(resolve, reject) {
      fs.link(srcpath, dstpath, function (err) {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    }
  );
};

KowaFs.lstatAsync = function(path) {
  return new Promise(
    function(resolve, reject) {
      fs.lstat(path, function (err) {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    }
  );
};

KowaFs.mkdirAsync = function(path, mode) {
  return new Promise(
    function(resolve, reject) {
      fs.mkdir(path, mode, function (err) {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    }
  );
};

KowaFs.openAsync = function(path, flags, mode) {
  return new Promise(
    function(resolve, reject) {
      fs.open(path, flags, mode, function (err) {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    }
  );
};

KowaFs.readAsync = function(fd, buffer, offset, length, position) {
  return new Promise(
    function(resolve, reject) {
      fs.read(fd, buffer, offset, length, position, function (err) {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    }
  );
};

KowaFs.readFileAsync = function(filename, options) {
  return new Promise(
    function(resolve, reject) {
      fs.readFile(filename, options, function (err) {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    }
  );
};

KowaFs.readdirAsync = function(path) {
  return new Promise(
    function(resolve, reject) {
      fs.readdir(path, function (err) {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    }
  );
};

KowaFs.readlinkAsync = function(path) {
  return new Promise(
    function(resolve, reject) {
      fs.readlink(path, function (err) {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    }
  );
};

KowaFs.realpathAsync = function(path, cache) {
  return new Promise(
    function(resolve, reject) {
      fs.realpath(path, cache, function (err) {
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

KowaFs.rmdirAsync = function(path) {
  return new Promise(
    function(resolve, reject) {
      fs.rmdir(path, function (err) {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    }
  );
};

KowaFs.statAsync = function(path) {
  return new Promise(
    function(resolve, reject) {
      fs.stat(path, function (err) {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    }
  );
};

KowaFs.symlinkAsync = function(destination, path, type) {
  return new Promise(
    function(resolve, reject) {
      fs.symlink(destination, path, type, function (err) {
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
      fs.truncate(path, len, function (err) {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    }
  );
};

KowaFs.unlinkAsync = function(path) {
  return new Promise(
    function(resolve, reject) {
      fs.unlink(path, function (err) {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    }
  );
};

KowaFs.utimesAsync = function(path, atime, mtime) {
  return new Promise(
    function(resolve, reject) {
      fs.utimes(path, atime, mtime, function (err) {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    }
  );
};

KowaFs.writeAsync = function(fd, buffer, offset, length, position) {
  return new Promise(
    function(resolve, reject) {
      fs.write(fd, buffer, offset, length, position, function (err) {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    }
  );
};

KowaFs.writeAsync = function(fd, data, position, encoding) {
  return new Promise(
    function(resolve, reject) {
      fs.write(fd, data, position, encoding, function (err) {
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
