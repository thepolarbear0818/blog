# Recommended Addons

## uBlock Origin tweaks

[uBlock Origin](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/)
comes bundled with LibreWolf. We'll mention a few filter lists and entry points
to the [uBlock wiki](https://github.com/gorhill/uBlock/wiki), but consider
visiting it in full.

**Essential reads**:

- [How to use filter lists](https://github.com/gorhill/uBlock/wiki/Filter-lists-from-around-the-web).
- [Easy mode](https://github.com/gorhill/uBlock/wiki/Blocking-mode:-easy-mode),
  the default mode that we ship with the browser.
- [Dynamic filtering](https://github.com/gorhill/uBlock/wiki/Dynamic-filtering:-quick-guide),
  suggested for enhanced protection.
- [Medium mode](https://github.com/gorhill/uBlock/wiki/Blocking-mode:-medium-mode),
  suggested for enhanced protection and might require to fix some websites
  manually.
- [JavaScript blocking](https://github.com/gorhill/uBlock/wiki/Per-site-switches#no-scripting)
  on a per-site basis.

**Filter lists:**

- [NoCoin list](https://github.com/hoshsadiq/adblock-nocoin-list) from
  hoshsadiq, prevent JavaScript miners.
- [DandelionSprout's lists](https://github.com/DandelionSprout/adfilt), which is
  a collection of filter lists that are available on
  [filterlists.com](https://filterlists.com/). In particular, his
  [LegitimateURLShortener](https://github.com/DandelionSprout/adfilt/blob/master/LegitimateURLShortener.txt)
  list is a good alternative to extensions like ClearURLs.

## Recommended Addons

Recommended addons are not bundled and need to be installed manually, depending
on your needs. The best suggestion is always to keep a very **minimal** addons
setup, but you might want to give a try to the ones below, either to block more
granularly trackers, or to migrate to a good password manager.

- [NoScript](https://addons.mozilla.org/en-US/firefox/addon/noscript/): powerful
  extension that allows to block scripts granularly. Included into Tor Browser
  by default.
- [uMatrix](https://addons.mozilla.org/en-US/firefox/addon/umatrix/): extension
  that gives _more control_ over what gets blocked than NoScript. Development
  has recently [restarted](https://github.com/gorhill/uMatrix/releases),
  although the repository is currently archived.
- [Bitwarden](https://addons.mozilla.org/en-US/firefox/addon/bitwarden-password-manager/):
  open source password manager.
- [KeepassXC-Browser](https://addons.mozilla.org/en-US/firefox/addon/keepassxc-browser/):
  official browser plugin for the KeePassXC password manager.

## Other Addons

### Privacy addons

- [ClearURLs](https://addons.mozilla.org/en-US/firefox/addon/clearurls/):
  removes tracking elements from URLs.
- [Canvas Blocker](https://addons.mozilla.org/en-US/firefox/addon/canvasblocker/):
  prevents some fingerprinting techniques and it can be especially useful for
  users that
  [disable RFP](https://gitlab.com/librewolf-community/settings/-/wikis/FAQ#q-disable-rfp)
  or
  [enable WebGL](https://gitlab.com/librewolf-community/settings/-/wikis/FAQ#q-how-do-i-enable-webgl),
  as reported in our [FAQ](/docs/faq).
- [Smart Referer](https://addons.mozilla.org/en-US/firefox/addon/smart-referer/):
  manually control refereres' behavior.
- [LocalCDN](https://addons.mozilla.org/en-US/firefox/addon/localcdn-fork-of-decentraleyes/):
  the successor to Decentraleyes. Its functionalities are partially covered by
  dynamic first party isolation, which LibreWolf enables by default.

### Container addons

- [Mozilla's Multi Account Containers](https://addons.mozilla.org/en-US/firefox/addon/multi-account-containers/):
  manage containers and assign sites to specific ones. Particularly useful for
  repeated visits to the same domain across the same session.
- [Temporary-Containers](https://addons.mozilla.org/en-US/firefox/addon/temporary-containers/):
  maximizing and automating container potential.

### Other useful addons

- [Dark Reader](https://addons.mozilla.org/en-US/firefox/addon/darkreader/):
  very popular addon, also useful for visually impaired people. We suggest this
  addon for RFP users that want to enforce dark theme.
