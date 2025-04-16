import SparkMD5 from 'spark-md5';

const getFileName = (path) => {
  var _a;
  if (!path) return "";
  return (_a = path.split("/").pop()) != null ? _a : path;
};
const getMd5ByFile = (file) => {
  return new Promise((resolve) => {
    const fileReader = new FileReader();
    fileReader.readAsArrayBuffer(file);
    fileReader.onload = (e) => {
      var _a;
      const buffer = (_a = e.target) == null ? void 0 : _a.result;
      const spark = new SparkMD5.ArrayBuffer();
      spark.append(buffer);
      const md5 = spark.end() + (/* @__PURE__ */ new Date()).getTime();
      resolve(md5);
    };
  });
};

export { getFileName, getMd5ByFile };
//# sourceMappingURL=index.mjs.map
