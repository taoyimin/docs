const map = {
  "//localhost:7000/": "//192.168.0.129:7100/",
  "//localhost:7001/": "//192.168.0.129:7101/",
  "//localhost:7002/": "//192.168.0.129:7102/",
  "//localhost:8000/": "//192.168.0.129:8100/",
};

export default function hostMap(host) {
  if (process.env.NODE_ENV === "production") return map[host];
  return host;
}
