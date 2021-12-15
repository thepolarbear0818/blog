# Recommended Addons

## uBlock Origin tweaks

Once you learn
[how to import filter lists](https://github.com/gorhill/uBlock/wiki/Filter-lists-from-around-the-web),
we suggest using:

- [Actually Legitimate URL Shortener Tool](https://github.com/DandelionSprout/adfilt/blob/master/LegitimateURLShortener.txt)
  to remove tracking elements from URLs.
- [NoCoin](https://raw.githubusercontent.com/hoshsadiq/adblock-nocoin-list/master/nocoin.txt)
  to block browser-based crypto mining.

We also suggest enabling the following lists built into uBlock Origin:

- AdGuard URL Tracking Protection.
- Block Outsider Intrusion into LAN.
- Phishing URL Blocklist.
- Fanboy’s Annoyance.

Additionally, we **strongly recommend** using
[medium mode](https://github.com/gorhill/uBlock/wiki/Blocking-mode:-medium-mode)
to block all third-party scripts and control them manually. Advanced users can
also
[block JavaScript](https://github.com/gorhill/uBlock/wiki/Per-site-switches#no-scripting)
per-site.

## Password managers

We suggest that you use a more robust solution than the built-in password
manager available in the browser:

- [Bitwarden](https://addons.mozilla.org/en-US/firefox/addon/bitwarden-password-manager/):
  open source password manager that allows for synchronization across multiple
  devices.
- [KeepassXC-Browser](https://addons.mozilla.org/en-US/firefox/addon/keepassxc-browser/):
  official browser plugin for the open source password manager KeePassXC.

## Other Addons

The best suggestion is always to keep a very **minimal** addons setup, as every
extra piece makes your attack surface larger and is likely going to make you
stand out. For this reason, all the extensions mentioned in this section are
useful only for certain users, and they are **not** strictly necessary.

### Privacy addons

- [Smart Referer](https://addons.mozilla.org/en-US/firefox/addon/smart-referer/):
  allows to manually handle refereres' behavior.
- [Canvas Blocker](https://addons.mozilla.org/en-US/firefox/addon/canvasblocker/):
  protects against some fingerprinting techniques. Suggested exclusively to
  users that
  [disable RFP](/docs/faq/#what-are-the-most-common-downsides-of-rfp-resist-fingerprinting)
  or [enable WebGL](/docs/faq/#how-do-i-enable-webgl).

### Other useful addons

- [Dark Reader](https://addons.mozilla.org/en-US/firefox/addon/darkreader/):
  useful for visually impaired people. It can also be used by RFP users that
  want to force dark theme, but this will make them stand out.
- [xBrowserSync](https://addons.mozilla.org/en-US/firefox/addon/xbs/): allows to
  securely store and sync bookmarks across browsers and devices.
- [LibreWolf Updater](https://addons.mozilla.org/en-US/firefox/addon/librewolf-updater/).
  This addon checks for updates to the Windows and MacOS versions of LibreWolf,
  and deserves the honorable mention as our first community-provided addon.
