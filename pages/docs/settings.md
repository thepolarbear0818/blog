# Settings and `librewolf.overrides.cfg`

While you can always tweak your settings in the Settings page as well as in the
`about:config` page, Librewolf can also be personalized by using a configuration
file called `librewolf.overrides.cfg`.

Using overiddes is a great way to change your default settings across multiple
profiles and installations, which means that it also allows you to easily backup
and port your preferences.

On this page you can find some quick recipes for commonly-requested changes that
you can simply paste in your own `librewolf.overrides.cfg` file, as well as tips
for a more advanced setup!

## Overrides How To

### Where do I find my `librewolf.overrides.cfg`?

If this is your first time working with overrides, you'll have to create the
file yourself. In some cases, you may also have to create the `.librewolf`
folder. The location depends on your operating system and
[installation method](/installation/).

On Linux with Flatpak:

```
$HOME/.var/app/io.gitlab.librewolf-community/.librewolf/librewolf.overrides.cfg
```

On macOS and most Linux distros (without Flatpak), in the home directory:

```
$HOME/.librewolf/librewolf.overrides.cfg
```

On Windows, in your profile directory:

```
%USERPROFILE%\.librewolf\librewolf.overrides.cfg
```

## Common `.cfg` Recipes

Simply add these lines to your `librewolf.overrides.cfg` file. The order is not
important, though if you accidentally include the same option more than once,
only the last one will be applied.

### Enable Google Safe Browsing

If you want to re-enable Google Safe Browsing insert the following prefs in your
overrides:

```js
defaultPref("browser.safebrowsing.malware.enabled", true);
defaultPref("browser.safebrowsing.phishing.enabled", true);
defaultPref("browser.safebrowsing.blockedURIs.enabled", true);
defaultPref(
  "browser.safebrowsing.provider.google4.gethashURL",
  "https://safebrowsing.googleapis.com/v4/fullHashes:find?$ct=application/x-protobuf&key=%GOOGLE_SAFEBROWSING_API_KEY%&$httpMethod=POST"
);
defaultPref(
  "browser.safebrowsing.provider.google4.updateURL",
  "https://safebrowsing.googleapis.com/v4/threatListUpdates:fetch?$ct=application/x-protobuf&key=%GOOGLE_SAFEBROWSING_API_KEY%&$httpMethod=POST"
);
defaultPref(
  "browser.safebrowsing.provider.google.gethashURL",
  "https://safebrowsing.google.com/safebrowsing/gethash?client=SAFEBROWSING_ID&appver=%MAJOR_VERSION%&pver=2.2"
);
defaultPref(
  "browser.safebrowsing.provider.google.updateURL",
  "https://safebrowsing.google.com/safebrowsing/downloads?client=SAFEBROWSING_ID&appver=%MAJOR_VERSION%&pver=2.2&key=%GOOGLE_SAFEBROWSING_API_KEY%"
);
```

If you also want Safe Browsing to locally check your downloads add:

```js
defaultPref("browser.safebrowsing.downloads.enabled", true);
```

With these preferences set, all the checks made by Safe Browsing will be
performed **locally**.

### Enable letterboxing

Letterboxing helps limit fingerprinting by only expanding or shrinking the inner
window size in fixed increments, letting you blend in with a larger number of
users.

```js
defaultPref("privacy.resistFingerprinting.letterboxing", true);
```

### Enable IPv6

Before enabling IPv6 make sure you are using **IPv6 privacy extension** at the
OS level: while macOS and Windows users are already covered, some Linux distros
do not enable it by default.

```js
defaultPref("network.dns.disableIPv6", false);
```

### Enable WebGL

```js
defaultPref("webgl.disabled", false);
```

If you enable WebGL, please consider using an extension like
[CanvasBlocker](https://addons.mozilla.org/en-US/firefox/addon/canvasblocker/)
to retain at least a minimum amount of fingerprinting protection.

### Disable `media.peerconnection.ice.no_host`

This setting was originally intended to protect your private IP address, but it
became redundant and can be safely disabled unless you're on Windows 7 or 8. You
may need to disable it to get some
[video conferencing](/docs/faq/#what-should-i-do-if-video-conferencing-is-not-working)
websites to work.

```js
defaultPref("media.peerconnection.ice.no_host", false);
```

### Enable Firefox Sync

For a more in-depth look into Firefox Sync,
[check the FAQ](/docs/faq/#can-i-use-firefox-sync-with-librewolf-is-it-safe-to-do-so).

```js
defaultPref("identity.fxaccounts.enabled", true);
```

### Stop LibreWolf from resuming after a crash

This feature allows you to keep your tabs after an unexpected close event. You
can disable it by adding:

```js
defaultPref("browser.sessionstore.resume_from_crash", false);
```

### Enable Autoscroll safely

Autoscroll lets you quickly move through a page by clicking the middle mouse
button: a small circle with two arrows will appear on screen, and simply moving
your mouse cursor will scroll the page in the same direction. The further way
the cursor is from the circle, the faster the scroll.

If you want to enable autoscroll, it's best to disable pasting by clicking the
middle mouse button, as otherwise it'd be easy to accidentally paste data into
the web page while trying to activate autoscroll.

```js
defaultPref("middlemouse.paste", false);
defaultPref("general.autoScroll", true);
```

### Enable OCSP certificate revocation

OCSP is disabled by default as we prefer
[CRL](https://en.wikipedia.org/wiki/Certificate_revocation_list) for both
performance and privacy reasons. You can also read Mozilla's blog about
[CRL's design and implementation](https://blog.mozilla.org/security/2020/01/09/crlite-part-2-end-to-end-design/).

If you still want to re-enable it, you will need to set these preferences:

```js
defaultPref("security.OCSP.enabled", 1);
defaultPref("security.OCSP.require", true); //no soft-fail
```

### Disable RFP (Resist Fingerprinting)

**Careful**: RFP goes a long way towards protecting your privacy and we strongly
recommend keeping it. Make sure you've
[read what it does](/docs/faq/#what-are-the-most-common-downsides-of-rfp-resist-fingerprinting)
before going ahead.

```js
defaultPref("privacy.resistFingerprinting", false);
```

### Enable the extension firewall

The extension firewall denies internet access to your extensions.

**Careful**: this may lead to extensions relying on outdated data, or flat-out
not working, depending on how much they rely on internet access to function. For
example, uBlock will not be able to update its filter lists.

```js
defaultPref(
  "extensions.webextensions.base-content-security-policy",
  "default-src 'none'; script-src 'none'; object-src 'none';"
);
defaultPref(
  "extensions.webextensions.base-content-security-policy.v3",
  "default-src 'none'; script-src 'none'; object-src 'none';"
);
```

## Advanced Concepts

The .cfg file is actually parsed like a Javascript file, so the usual Javascript
syntax applies if you happen to be familiar with it. The file is read by Firefox
on every startup.

There are different functions you can use to set your preferences. You can read
more about them on
[Mozilla's support page](https://support.mozilla.org/en-US/kb/customizing-firefox-using-autoconfig)

In particular, the main ones are `defaultPref()` and `pref()`. The difference,
as the name suggests, is that the former sets a default but doesn't override the
user's preferences, while the latter actually enforces the setting as if it was
manually set by the user.

Also do note that preferences set using `defaultPref()` will not be highlighted
in `about:config`.

### A practical example with `defaultPref()` and `pref()`

Say I wanted to disable WebGL. I could simply do as we've done so far.

```js
defaultPref("webgl.disabled", true);
```

However, say I wanted to keep WebGL disabled most of the times, but occasionally
needed to re-enable it to make certain websites work.

With the previous solution, I would have to turn it on, and then, once I'm
finished, remember to turn it off manually, otherwise it would remain enabled
indefinitely (because `defaultPref()` wouldn't override my user preference).

Alternatively, I could use `pref()`

```js
pref("webgl.disabled", true);
```

This way, I could still turn on WebGL as needed, but, even if I forgot to turn
it off again, it would be disabled next time I launch the browser.
