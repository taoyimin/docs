import CryptoJS from 'crypto-es'

export function encryptAES(string: string) {
  const dataBytes = CryptoJS.enc.Utf8.parse(string)
  const keyBytes = CryptoJS.enc.Utf8.parse(import.meta.env.VITE_AES_KEY)
  const encrypted = CryptoJS.AES.encrypt(dataBytes, keyBytes, {
    iv: keyBytes,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  })
  return CryptoJS.enc.Base64.stringify(encrypted.ciphertext as any)
}

export function decryptAES(string: string) {
  const keyBytes = CryptoJS.enc.Utf8.parse(import.meta.env.VITE_AES_KEY)
  const decrypted = CryptoJS.AES.decrypt(string, keyBytes, {
    iv: keyBytes,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  })
  return CryptoJS.enc.Utf8.stringify(decrypted)
}
