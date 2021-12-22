# Features

This page lists some of the most important features and default settings present
in LibreWolf. If you have any question check out our [FAQ](/docs/faq), or join
our [Gitter](https://gitter.im/librewolf-community/librewolf) /
[Matrix](https://matrix.to/#/#librewolf:matrix.org) room.

## Privacy

- Delete cookies and wesbites data on close.
- Include only privacy respecting search engines like
  [DuckDuckGo](https://duckduckgo.com/) and
  [Searx](https://searx.github.io/searx/).
- Include [uBlockOrigin](https://ublockorigin.com/) and Tracking Protection in
  strict mode, to block trackers and ads.
- Enable dFPI, also known as
  [Total Cookie Protection](https://blog.mozilla.org/security/2021/02/23/total-cookie-protection/).
- Enable RFP which is part of the
  [Tor Uplift project](https://wiki.mozilla.org/Security/Fingerprinting). RFP is
  considered the best in class anti-fingerprinting solution, and it's goal is to
  make users look the same and cover as many metrics as possible, in an effort
  to block fingerprinting techniques.
- Always display user language as `en-US` for browser, web pages and OS, in
  order to fit in with the largest possible user base.
- Disable WebGL, as it is a strong fingerprinting vector.
- Prevent access to the location services of the OS, and use Mozilla's location
  API instead of Google's API.
- Protect the private IP address of the user when WebRTC is used. Limit ICE
  candidates generation to the default interface when sharing video or audio
  during a videoconference.
- Force DNS and WebRTC inside the proxy, when one is being used.
- Disable IPv6, as not all Linux distros ship with the
  [Privacy Extension](https://datatracker.ietf.org/doc/html/rfc3041#section-2.3)
  enabled by default.
- Trim cross-origin referrers, so that they don't include the full URI.
- Disable browsing, search and form history.
- Disable form autofill.
- Disable link prefetching and speculative connections.
- Disable
  [service workers](https://bugzilla.mozilla.org/show_bug.cgi?id=1320796#c1).
- Disable disk cache and clear temporary files on close.
- Disable OCSP, and instead use
  [CRL](https://en.wikipedia.org/wiki/Certificate_revocation_list), as it is a
  more robust and privacy respecting certificate revocation mechanism.

## Security

- Stay up to date with upstream Firefox releases, in order to timely apply
  security patches.
- Enable HTTPS-only mode.
- Enable stricter negotiation rules for TLS/SSL.
- Disable SHA-1 certificates.
- Always force user interaction when deciding the download location of a file.
- Disable scripting in the built in pdf reader.
- Protect against
  [IDN homograph attack](https://en.wikipedia.org/wiki/IDN_homograph_attack).
- Disable automatic installation of extension updates, to allow code review.
- Implement optional extension firewall, which can be enabled manually.

## Annoyances

- Block pop-up windows and prevent window resizing from scripts.
- Disable autoplay of media.
- Disable search suggestions and ads in the urlbar.
- Remove all the distracting and sponsored content from the home page.
- Remove the Pocket extension at compile time.
- Remove Mozilla VPN ads.
- Disable Firefox accounts and Firefox Sync through policies.
- Disable extension recommendations.

## Others

- Completely open source and community driven.
- Completely disable telemetry, including crash report, normandy, studies and
  personalized recommendations.
- No data collection of any kind. In fact, as stated in our privacy policy, we
  wouldn't even have the infrastructure to do that, making it impossible from a
  technical standpoint.
- Disable Google Safe Browsing, over censorship concerns, and in an effort to
  prevent Google from controlling another aspect of the internet.
- Disable [DRM](https://www.eff.org/issues/drm), as it is a limitation to user
  freedom.
- Avoid making unnecessary changes that increase the fingerprint without giving
  any privacy gain.
- Only allow outgoing connections that are not privacy invading.
- Disable built-in password manager and suggest more robust options.
