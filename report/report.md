# The week in free proxies: Nov 21 – Nov 28, 2026

About every hour, [proxy-scraper](https://github.com/maximilianfeix/proxy-scraper) collects public HTTP, SOCKS4 and
SOCKS5 proxies from 700+ lists, checks 150,000 of the candidates and keeps only the ones that pass a basic check, a
second request to another site and a content check. This is what 20 of those runs looked like. An entry
that is not on the list was not necessarily measured as failing.

4,310 different type://ip:port entries passed every check at least once (many are ports on the same host). Of the 3,414 that left the list again, 82 % were not on the next list. None of them had been on it for 24 runs in a row (about a day).

In the last run Google let 59 % of the 245 HTTPS-capable proxies that gave a clear answer through – 25 % of datacenter exits, 66 % of the other exits.

In the last run Reddit let 88 % of the 226 HTTPS-capable proxies that gave a clear answer through – 45 % of datacenter exits, 97 % of the other exits.

In the last run Amazon let 36 % of the 256 HTTPS-capable proxies that gave a clear answer through – 44 % of datacenter exits, 34 % of the other exits.

In the last run Instagram let 63 % of the 214 HTTPS-capable proxies that gave a clear answer through – 40 % of datacenter exits, 68 % of the other exits.

In the last run TikTok let 27 % of the 226 HTTPS-capable proxies that gave a clear answer through – 55 % of datacenter exits, 20 % of the other exits.

In the last run Discord let 99 % of the 223 HTTPS-capable proxies that gave a clear answer through – 95 % of datacenter exits, 99 % of the other exits.

Between 507 and 1,053 entries were on the list at any one time. Right now: 774, 55 % of them tunnel HTTPS to the test host, 16 % are datacenter exits (the provider name looks like a hosting company).

Downloading 100 KB through the HTTPS-capable ones, counting the downloads that finished: half manage 79 KiB/s or more, the fastest tenth over 117 KiB/s.

Most exit IPs are in United States (96), Indonesia (72), Vietnam (50), Russia (43), China (41).

![How long free proxies last](https://proxy-scraper.de/report/lifetimes-light.svg)

The list, filters and a page per proxy: https://proxy-scraper.de/
Raw data (JSON, CSV, TXT): https://proxy-scraper.de/proxies.json

*Generated automatically from the hourly checks. Public proxies are run by strangers – never send passwords or
personal data through them.*
