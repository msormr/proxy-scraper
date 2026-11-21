# The week in free proxies: Nov 14 – Nov 21, 2026

About every hour, [proxy-scraper](https://github.com/maximilianfeix/proxy-scraper) collects public HTTP, SOCKS4 and
SOCKS5 proxies from 700+ lists, checks 150,000 of the candidates and keeps only the ones that pass a basic check, a
second request to another site and a content check. This is what 24 of those runs looked like. An entry
that is not on the list was not necessarily measured as failing.

8,079 different type://ip:port entries passed every check at least once (many are ports on the same host). Of the 6,539 that left the list again, 92 % were not on the next list. None of them had been on it for 24 runs in a row (about a day). 46 proxies on the list right now have been on it for 24 runs in a row or more.

In the last run Google let 80 % of the 377 HTTPS-capable proxies that gave a clear answer through – 52 % of datacenter exits, 90 % of the other exits.

In the last run Reddit let 75 % of the 354 HTTPS-capable proxies that gave a clear answer through – 24 % of datacenter exits, 93 % of the other exits.

In the last run Amazon let 34 % of the 422 HTTPS-capable proxies that gave a clear answer through – 19 % of datacenter exits, 40 % of the other exits.

In the last run Instagram let 36 % of the 391 HTTPS-capable proxies that gave a clear answer through – 9 % of datacenter exits, 48 % of the other exits.

In the last run TikTok let 29 % of the 368 HTTPS-capable proxies that gave a clear answer through – 49 % of datacenter exits, 21 % of the other exits.

In the last run Discord let 100 % of the 334 HTTPS-capable proxies that gave a clear answer through – 100 % of datacenter exits, 100 % of the other exits.

Between 541 and 1,645 entries were on the list at any one time. Right now: 1,278, 57 % of them tunnel HTTPS to the test host, 27 % are datacenter exits (the provider name looks like a hosting company).

Downloading 100 KB through the HTTPS-capable ones, counting the downloads that finished: half manage 81 KiB/s or more, the fastest tenth over 128 KiB/s.

Most exit IPs are in United States (224), Indonesia (128), Japan (93), Vietnam (86), Colombia (78).

![How long free proxies last](https://proxy-scraper.de/report/lifetimes-light.svg)

The list, filters and a page per proxy: https://proxy-scraper.de/
Raw data (JSON, CSV, TXT): https://proxy-scraper.de/proxies.json

*Generated automatically from the hourly checks. Public proxies are run by strangers – never send passwords or
personal data through them.*
