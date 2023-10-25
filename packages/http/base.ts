const env = import.meta.env;
let url: string = "";

switch (env.MODE) {
  case "development":
    url = "http://192.168.0.108";
    //url = "http://106.225.129.34:8019"
    break;
  case "production":
    url = "http://192.168.0.108:8088";
    break;
  default:
    url = "http://218.64.85.229:8088";
}

// 获取密钥
export const baseUrl = url;
