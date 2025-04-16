import { ElMessage } from 'element-plus';
import { toDataURL } from 'qrcode';

const qrCode = {
  toDataURL: async (content, options) => await toDataURL(content, options),
  downLoadQRCode: async (content, fileName = "\u4E8C\u7EF4\u7801.png", options) => {
    try {
      const qrCode2 = await toDataURL(content, options);
      const link = document.createElement("a");
      link.download = fileName;
      link.href = qrCode2;
      link.click();
    } catch (error) {
      ElMessage.error("\u4E0B\u8F7D\u6587\u4EF6\u5931\u8D25");
    }
  }
};

export { qrCode };
//# sourceMappingURL=index.mjs.map
