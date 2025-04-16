import CryptoJS from 'crypto-es';

function aesEncrypt(string, key) {
  var keyBytes = CryptoJS.enc.Utf8.parse(key);
  var srcs = CryptoJS.enc.Utf8.parse(string);
  var encrypted = CryptoJS.AES.encrypt(srcs, keyBytes, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  });
  return encrypted.toString();
}

export { aesEncrypt };
//# sourceMappingURL=index.mjs.map
