'use strict';

var CryptoJS = require('crypto-es');

function aesEncrypt(string, key) {
  var keyBytes = CryptoJS.enc.Utf8.parse(key);
  var srcs = CryptoJS.enc.Utf8.parse(string);
  var encrypted = CryptoJS.AES.encrypt(srcs, keyBytes, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  });
  return encrypted.toString();
}

exports.aesEncrypt = aesEncrypt;
//# sourceMappingURL=index.js.map
