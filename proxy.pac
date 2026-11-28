// proxy-scraper, 2026-11-28 19:04, 30 proxies, best first.
// The browser tries them in order. Local names and private IPv4 addresses go direct; no DIRECT fallback.
var PROXIES = "PROXY 129.153.97.250:9443; PROXY 216.125.18.67:3128; PROXY 173.212.207.102:1214; SOCKS5 209.50.255.91:1080; PROXY 106.14.104.209:8080; SOCKS5 69.55.49.177:38182; PROXY 103.237.102.191:11111; PROXY 80.90.178.167:1081; SOCKS5 208.102.51.6:58208; PROXY 210.8.69.103:808; PROXY 103.133.26.50:8080; SOCKS5 114.55.168.172:1080; SOCKS5 72.49.49.11:31034; PROXY 103.133.26.11:8080; SOCKS5 66.42.224.229:41679; PROXY 103.133.26.73:3128; PROXY 102.244.78.61:8090; SOCKS5 45.194.33.12:30002; SOCKS5 45.194.33.12:30001; SOCKS5 98.188.47.132:4145; SOCKS5 45.144.49.64:5443; SOCKS5 95.216.8.124:1081; SOCKS5 216.105.130.131:4145; SOCKS5 199.66.182.232:4145; PROXY 103.133.26.72:8080; SOCKS5 152.86.78.16:1080; PROXY 102.244.78.61:8084; PROXY 50.238.106.26:3128; PROXY 45.144.49.64:5443; PROXY 154.92.133.66:8080";

function isLocal(host) {
  if (isPlainHostName(host) || host === "localhost" ||
      shExpMatch(host, "*.localhost") || shExpMatch(host, "*.local")) {
    return true;
  }
  var ip = /^(\d{1,3})\.(\d{1,3})\.\d{1,3}\.\d{1,3}$/.exec(host);
  if (!ip) {
    return false;
  }
  var a = parseInt(ip[1], 10), b = parseInt(ip[2], 10);
  return a === 127 || a === 10 || (a === 192 && b === 168) || (a === 169 && b === 254) ||
    (a === 172 && b >= 16 && b <= 31);
}

function FindProxyForURL(url, host) {
  return isLocal(host) ? "DIRECT" : PROXIES;
}
