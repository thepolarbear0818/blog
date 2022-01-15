# Frequently Asked Questions

This FAQ documents version 5.1 of the settings. Please always upgrade to the
latest version of the browser. If your question is not answered here, you can
try to get answers in our [Gitter](https://gitter.im/librewolf-community) /
[Matrix](https://matrix.to/#/#librewolf:matrix.org) room, or on
[r/LibreWolf](https://www.reddit.com/r/LibreWolf/) and
[c/LibreWolf](https://lemmy.ml/c/librewolf).

Alternatively, you could check the parts in the Firefox documentation that could
be relevant:

- [Protect your privacy](https://support.mozilla.org/en-US/products/firefox/protect-your-privacy).
- [Manage preferences and add-ons](https://support.mozilla.org/en-US/products/firefox/manage-preferences-and-add-ons-firefox).
- [Fix slowness, crashing, error messages and other problems](https://support.mozilla.org/en-US/products/firefox/fix-problems).
- <a name="performance"></a>[Tweak the performance](https://support.mozilla.org/en-US/kb/performance-settings?as=u&utm_source=inproduct).
- <a name="prefs-connection-settings"></a>[Network settings](https://support.mozilla.org/en-US/kb/connection-settings-firefox).

## General questions:

- [Can I use LibreWolf with Tor?](#can-i-use-librewolf-with-tor)
- [How often do you update LibreWolf?](#how-often-do-you-update-librewolf)
- [Do you recommend using any extension?](#do-you-recommend-using-any-extension)
- [Does LibreWolf make any outgoing connection?](#does-librewolf-make-any-outgoing-connection)

## Settings and _librewolf.override.cfg_:

- [Where do I find my _librewolf.overrides.cfg_?](#where-do-i-find-my-librewolfoverridescfg)
- The ~/.librewolf directory does not exist, so
  [where should I put my overrides?](#the-librewolf-directory-does-not-exist-so-where-should-i-put-my-overrides)
- [What are some tips on a more hardened setup?](#what-are-some-tips-on-a-more-hardened-setup)
- My cookies are gone.
  [How do I stay logged into specific websites?](#how-do-i-stay-logged-into-specific-websites)
- [How do I enable DRM?](#how-do-i-enable-drm)
- [How do I enable WebGL?](#how-do-i-enable-webgl)
- [Why am I seeing striped images?](#why-am-i-seeing-striped-images)
- [How do I allow canvas access?](#how-do-i-allow-canvas-access)
- [What are the most common downsides of RFP (resist fingerprinting)?](#what-are-the-most-common-downsides-of-rfp-resist-fingerprinting)
- [Why is LibreWolf forcing light theme?](#why-is-librewolf-forcing-light-theme)
- [What should I do if video conferencing is not working?](#what-should-i-do-if-video-conferencing-is-not-working)
- [How do I enable IPv6?](#how-do-i-enable-ipv6)
- [How do I disable extension auto-updates?](#how-do-i-disable-extension-auto-updates)
- [How do I enable search suggestions?](#how-do-i-enable-search-suggestions)
- [How do I add a search engine?](#how-do-i-add-a-search-engine)
- [How do I allow autoplay of media?](#how-do-i-allow-autoplay-of-media)
- [How do I enable Google Safe Browing?](#how-do-i-enable-google-safe-browing)
- [How do I enable OCSP certificate revocation?](#how-do-i-enable-ocsp-certificate-revocation)
- [How do I enable the extension firewall?](#how-do-i-enable-the-extension-firewall)
- [How do I enable push notifications?](#how-do-i-enable-push-notifications)
- [How do I disable Mozilla Tracking Protection?](#how-do-i-disable-mozilla-tracking-protection)
- [How do I change language in the browser?](#how-do-i-change-language-in-the-browser)
- [Why is the built-in password manager disabled?](#why-is-the-built-in-password-manager-disabled)
- [Why isn't First Party Isolate enabled by default?](#why-isnt-first-party-isolate-enabled-by-default)
- [Does LibreWolf use HTTPS-Only mode?](#does-librewolf-use-https-only-mode)
- [How do I set a default download directory?](#how-do-i-set-a-default-download-directory)
- [How do I stop LibreWolf from resuming after a crash?](#how-do-i-stop-librewolf-from-resuming-on-crash)

## Linux specific questions:

- [Can't open links with Librewolf when using Wayland](#cant-open-links-with-librewolf-when-using-wayland)
- [How do I get native messaging to work?](#how-do-i-get-native-messaging-to-work)
- [How can I get Tridactyl's native messaging to work when I install Librewolf with Flatpak?](#how-can-i-get-tridactyls-native-messaging-to-work-when-i-install-librewolf-with-flatpak)
- [I get the APT error "Certificate verification failed"](#i-get-the-apt-error-certificate-verification-failed)

## macOS specific questons:

- [How do I install LibreWolf on macOS?](#how-do-i-install-librewolf-on-macos)
- [How do I build LibreWolf on macOS?](#how-do-i-build-librewolf-on-macos)
- [How do I update LibreWolf on macOS?](#how-do-i-update-librewolf-on-macos)
- [Is LibreWolf available via Homebrew?](#is-librewolf-available-via-homebrew)
- [Does LibreWolf work on M1 machines?](#does-librewolf-work-on-m1-machines)
- [Why is LibreWolf marked as broken?](#why-is-librewolf-marked-as-broken)

## Windows specific questions:

# Answers

## General questions:

### [Can I use LibreWolf with Tor?](#general-questions)

Please **don't**.

Tor Browser is specifically designed to reduce fingerprintability. Using
LibreWolf or any other browser would make you stand out. From a personal
security perspective it's also a good idea to have a seperate browser for .onion
sites and general Tor browsing.

### [How often do you update LibreWolf?](#general-questions)

LibreWolf is always based on the latest version of Firefox. Updates usually come
within three days from each upstream stable release, at times even the same day.
Unless problems arise, we always try to release often and in a timely manner.

It should however be noted that LibreWolf does not have auto-update
capabilities, and therefore it relies on package managers or users to apply
them.

<a name="addons-help"></a>

### [Do you recommend using any extension?](#general-questions)

Yes, in fact we include uBlockOrigin in the browser. As a general rule you
shouldn't install too many add-ons, but we have a few
[suggestions](/docs/addons/) that you can look at.

### [Does LibreWolf make any outgoing connection?](#general-questions)

Yes, but they aren't in any way privacy invading and they were carefully
evaluated. Specifically they are needed to fetch and update the blocking lists
used by
[uBO](https://github.com/gorhill/uBlock/wiki/Can-you-trust-uBlock-Origin%3F),
[Tracking Protection](#how-do-i-disable-mozilla-tracking-protection) and
[CRL](https://en.wikipedia.org/wiki/Certificate_revocation_list), which we
considered more important than disabling all outgoing connections, especially
ones that are harmless. LibreWolf also makes an occasional connection to check
wether you have received push notifications from websites you have subscribed
to.

With that being said, LibreWolf is still commited to removing all privacy
invading connections, and to keep all connections to the bare minimum required
to maximize and balance privacy and security.

## Settings and _librewolf.override.cfg_:

### [Where do I find my _librewolf.overrides.cfg_?](#settings-and-librewolfoverridecfg)

Using overiddes is a great way to change your default settings across multiple
profiles and installations, which means that it also allows you to easily backup
and port your preferences.

On most Linux (not Flatpak), in the home directory:

```
$HOME/.librewolf/librewolf.overrides.cfg
```

On Linux with Flatpak:

```
$HOME/.var/app/io.gitlab.librewolf-community/.librewolf/librewolf.overrides.cfg
```

On macOS, in your home directory:

```
$HOME/.librewolf/librewolf.overrides.cfg
```

On Windows, in your profile directory:

```
%USERPROFILE%\.librewolf\librewolf.overrides.cfg
```

### [The ~/.librewolf directory does not exist, so where should I put my overrides?](#settings-and-librewolfoverridecfg)

You can simply create that directory by going to your home/profile directory and
entering `mkdir .librewolf`.

### [What are some tips on a more hardened setup?](#settings-and-librewolfoverridecfg)

To improve your privacy we suggest enabling letterboxing, in order to prevent
your real window size from being fingerprinted. This can be especially useful if
you resize your window.

You can do this in the LibreWolf settings, or by adding to your overrides:

```js
defaultPref("privacy.resistFingerprinting.letterboxing", true);
```

<a name="storage-permissions"></a>

### [How do I stay logged into specific websites?](#settings-and-librewolfoverridecfg)

Add an exception at Settings > Privacy & Security > Cookies and Site Data >
Manage Exceptions. Make sure you add a website to the exceptions **before** you
login, both _http_ and _https_ versions of the domain. If you want to stay
logged into `www.example.com` enter `example.com` and click on "Allow": you
should then see the two versions listed, and you can go ahead and save the
changes.

Please notice that these exceptions are bypassed by the settings at Privacy &
Security > History > Clear history when LibreWolf closes > Settings.

<a name="drm-content"></a>

### [How do I enable DRM?](#settings-and-librewolfoverridecfg)

We disable DRM by default, as we consider it a limitation to user freedom. Take
a moment to [read about it](https://www.eff.org/issues/drm) before you go ahead
and enable it.

DRM support can be enabled from Settings > General > Digital Right Management
(DRM) Content. Additionally, a pop-up and an icon in your URL bar will show up
when a website is trying to use DRM.

### [How do I enable WebGL?](#settings-and-librewolfoverridecfg)

You can do this in the LibreWolf setting, or alternatively add this in your
_librewolf.overrides.cfg_:

```js
defaultPref("webgl.disabled", false);
```

If you enable WebGL please consider using an extension like
[CanvasBlocker](https://addons.mozilla.org/en-US/firefox/addon/canvasblocker/).

### [Why am I seeing striped images?](#settings-and-librewolfoverridecfg)

If you see striped images in your browser, that's most like caused by the fact
that the website needs canvas access to display properly. Check out
[how to allow it](#how-do-i-allow-canvas-access).

### [How do I allow canvas access?](#settings-and-librewolfoverridecfg)

Canvas can be handled on a per-site basis thank to RFP. You will be prompted for
access next to the URL bar, so look for the icon there. Please be mindful when
allowing canvas access as it is a very strong fingerprinting vector, however it
is required by websites more and more often.

Generally speaking, if you are already logged into a website you shouldn't
stress too much about giving it canvas access because they already know who you
are.

### [What are the most common downsides of RFP (resist fingerprinting)?](#settings-and-librewolfoverridecfg)

It is possible that users will experience breakage because of RFP: usually this
is caused by canvas access, which can be relaxed on a per-site basis, as
[described previously](#how-do-i-allow-canvas-access). There's currently no
workaround for keyboard alt-keys.

Other common problems brought by RFP include: spoofed **timezone**, forced light
**theme**, fixed **user agent**, smaller and fixed **window size** on startup.
There's no real workaround for these annoyances as they are intended to protect
your privacy. Tweaking them using extensions or preferences significantly
impacts the effectiveness of RFP, both for the user himself/herself, and the
rest of the userbase: in fact modifications create a subset of users who stand
out, and they reduce the number of RFP users who look the same, making it worse
for everyone.

For this very reason we suggest **against** modifying any metric involved in
RFP, as even a single change could make it useless. We also suggest users to get
used to RFP and stick with it as much as possible: it is a very powerful tool
that gets improvements as the result of the
[Tor Uplift Project](https://wiki.mozilla.org/Security/Tor_Uplift), and it will
surely benefit your privacy in a **major** way.

If you don't like the downsides of resist fingerprinting, or if you are not
concerned about fingerprinting, you can disable RFP in the LibreWolf settings,
or by adding to your overrides:

```js
defaultPref("privacy.resistFingerprinting", false);
```

In that case consider using an extension like
[CanvasBlocker](https://addons.mozilla.org/en-US/firefox/addon/canvasblocker/)
to retain at least a minimum amount of fingerprinting protection.

### [Why is LibreWolf forcing light theme?](#settings-and-librewolfoverridecfg)

This is a privacy measure which is part of RFP. Please read
[this](#what-are-the-most-common-downsides-of-rfp-resist-fingerprinting) before
you go on: as stated there, our stance is that if you care about fingerprinting
protection you should **never** alter RFP behavior in any way.

If you still want the dark theme for web content, first check wether your
favourite websites allow to set it manually. Alternatively, another possible
solution is represented by using an
[extension that enforces a dark theme](/docs/addons#other-useful-addons), but be
careful as it could make you stand out.

### [What should I do if video conferencing is not working?](#settings-and-librewolfoverridecfg)

While we do not disable WebRTC, we still protect your private IP. This might
cause breakage on some video conferencing websites, and in that case you should
add to your overrides:

```js
defaultPref("media.peerconnection.ice.no_host", false);
```

Other video conferencing services also require to
[enable WebGL](#how-do-i-enable-webgl) and to allow autoplay, which can be set
on a per-site basis from the URL bar.

### [How do I enable IPv6?](#settings-and-librewolfoverridecfg)

Before enabling IPv6 make sure you are using **IPv6 privacy extension** at the
OS level: while macOS and Windows users are already covered, some Linux distros
do not enable it by default.

You can enable IPv6 in the LibreWolf settings, or by adding the following pref
to your overrides:

```js
defaultPref("network.dns.disableIPv6", false);
```

### [How do I disable extension auto-updates?](#settings-and-librewolfoverridecfg)

To disable extension auto-updates you can use the LibreWolf settings, or you can
go to Settings > Extensions and Themes, then click on the settings icon and tap
'Update Add-ons automatically'.

If you do not plan to review the code of your extensions before you install
updates, please **do not** disable this.

### [How do I enable search suggestions?](#settings-and-librewolfoverridecfg)

If you use a privacy respecting search engine go to Settings > Search > Search
Suggestions, and enable search suggestions.

### [How do I add a search engine?](#settings-and-librewolfoverridecfg)

LibreWolf provides a selection of privacy respecting search engines, but you can
add more by following
[this guide](https://support.mozilla.org/en-US/kb/add-or-remove-search-engine-firefox).

### [How do I allow autoplay of media?](#settings-and-librewolfoverridecfg)

Autoplay can be controlled on a per-site basis from your urlbar.

<a name="phishing-malware"></a>

### [How do I enable Google Safe Browing?](#settings-and-librewolfoverridecfg)

We disable Safe Browsing as we consider it a censorship concern, and we would
rather not let Google control another aspect of the internet. With that being
said, Safe Browsing is still a good security tool and Mozilla's implementations
is privacy respecting. For this reason less technical users, and those who feel
like they need the extra security, can and should safely **enable it**.

If you want to re-enable Google Safe Browsing you can use LibreWolf settings, or
you can insert the following prefs in your overrides:

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

If you also want Safe Browsing to locally check your downloads use the same UI,
or add:

```js
defaultPref("browser.safebrowsing.downloads.enabled", true);
```

With the following preferences all the checks made by Safe Browsing will be
performed **locally**.

### [How do I enable OCSP certificate revocation?](#settings-and-librewolfoverridecfg)

To enable OCSP certificate revocation without soft-fail add to your overrides:

```js
defaultPref("security.OCSP.enabled", 1);
defaultPref("security.OCSP.require", true);
```

### [How do I enable the extension firewall?](#settings-and-librewolfoverridecfg)

To enable the extension firewall and prevent internet access to the extensions,
add to your overrides:

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

<a name="push"></a>

### [How do I enable push notifications?](#settings-and-librewolfoverridecfg)

Push notifications require to set a per-site exception,
[just like with cookies](#how-do-i-stay-logged-into-specific-websites).

<a name="enhanced-tracking-protection"></a> <a name="turn-off-etp-desktop"></a>

### [How do I disable Mozilla Tracking Protection?](#settings-and-librewolfoverridecfg)

In LibreWolf we decided to keep Tracking Protection, as it plays nicely with uBO
and it can block some extra scripts. Additionaly, when set to strict it includes
dFPI, SmartBlock, enhanced cookie cleaning and stricter referrer policies. For
this reason, we always suggest the default **strict** mode, and when using it
please
[do not enable FPI](/docs/faq#why-isnt-first-party-isolate-enabled-by-default),
as it interferes with the more recent dFPI.

Tracking Protection requires some occasional outgoing connections, in order to
fetch its blocking lists: these connections are harmless for privacy, and TP has
a flawless track record in this regard. A particular important connection is the
one that TP makes on first launch, as without it the feature cannot effectively
work.

If you want, you can block these outgoing connections by using:

```js
defaultPref("browser.safebrowsing.provider.mozilla.updateURL", "");
defaultPref("browser.safebrowsing.provider.mozilla.gethashURL", "");
```

As stated above, and despite what you see in the Settings UI, blocking these
connections will cause TP to **stop working**, as it won't be able to use the
lists that allow it to block known tracking, cryptomining and fingerprinting
scripts.

### [How do I change language in the browser?](#settings-and-librewolfoverridecfg)

You can normally apply language packs from the settings. To protect your
privacy, LibreWolf will make you appear to websites as a en-US user.

<a name="lockwise-alerts"></a> <a name="primary-password-stored-logins"></a>

### [Why is the built-in password manager disabled?](#settings-and-librewolfoverridecfg)

We believe you should use a password manager that is better for your security
and comfort, please consider some of the options in our
[recommended addons](/docs/addons#recommended-addons).

<a name="containers"></a>

### [Why isn't First Party Isolate enabled by default?](#settings-and-librewolfoverridecfg)

FPI is not enabled by default as we use dFPI, and the two do not work well
togheter. dFPI is a newer implementation and it causes less breakage, plus it is
included by default when using Tracking Protection in strict mode.

Please also notice that dFPI makes containers and containers extensions
redudant, unless you want to protect your privacy when visiting the same website
multiple times, during the same browsing sessions.

<a name="https-only-prefs"></a>

### [Does LibreWolf use HTTPS-Only mode?](#settings-and-librewolfoverridecfg)

Yes, and you won't need any extension for that. HTTP can still be
[allowed for certain sites](https://support.mozilla.org/en-US/kb/https-only-prefs#w_turn-off-https-only-mode-for-certain-sites).

### [How do I set a default download directory?](#settings-and-librewolfoverridecfg)

As a security measure, LibreWolf asks for user interaction after each download.
You can change that in Settings > General > Files and Applications > Downloads >
Save files to..

### [How do I stop LibreWolf from resuming after a crash?](#settings-and-librewolfoverridecfg)

While that feature is meant to provide a way to keep your tabs after an
unexpected close event, you can disable it by adding to your overrides:

```js
defaultPref("browser.sessionstore.resume_from_crash", false);
```

## Linux specific questions:

### [Can't open links with Librewolf when using Wayland](#linux-specific-questions)

The solution is also described in
[this issue](https://github.com/flathub/io.gitlab.librewolf-community/issues/2).

When setting LibreWolf as a handler to open links with, in some circumstances,
environment variables parsed during "regular" launch are not parsed / applied
when opening LibreWolf as a handler (XDG MIME handling) when using Wayland.
Librewolf then either gets launched without opening the link or by giving an
error ('Librewolf is already running').

This can be fixed by placing a modified `.desktop` file in
`~/.local/share/applications/`.

It's easiest to just copy the existing `.desktop` file (for native packages
`/usr/share/applications/librewolf.desktop`, for Flatpak
`~/.local/share/flatpak/exports/share/applications/io.gitlab.librewolf-community.desktop`)
to `~/.local/share/applications/` and edit the `Exec` lines:

##### Flatpak

```
# io.gitlab.librewolf-community.desktop
Exec=/usr/bin/flatpak run --env=GDK_BACKEND=wayland --branch=stable --arch=x86_64 --command=librewolf --file-forwarding io.gitlab.librewolf-community @@u %u @@
Exec=/usr/bin/flatpak run --env=GDK_BACKEND=wayland --branch=stable --arch=x86_64 --command=librewolf --file-forwarding io.gitlab.librewolf-community @@u %u @@
Exec=/usr/bin/flatpak run --env=GDK_BACKEND=wayland --branch=stable --arch=x86_64 --command=librewolf --file-forwarding io.gitlab.librewolf-community --private-window @@u %u @@
Exec=/usr/bin/flatpak run --env=GDK_BACKEND=wayland --branch=stable --arch=x86_64 --command=librewolf --file-forwarding io.gitlab.librewolf-community --ProfileManager @@u %u @@
```

For Flatpak, this might also be possible by using
`flatpak override --user --env=GDK_BACKEND=wayland io.gitlab.librewolf-community`,
but this is not yet tested.

##### Native Linux Package

```
# librewolf.desktop

Exec=env GDK_BACKEND=wayland MOZ_ENABLE_WAYLAND=1 /usr/lib/librewolf/librewolf %u
Exec=env GDK_BACKEND=wayland MOZ_ENABLE_WAYLAND=1 /usr/lib/librewolf/librewolf --new-window %u
Exec=env GDK_BACKEND=wayland MOZ_ENABLE_WAYLAND=1 /usr/lib/librewolf/librewolf --private-window %u
```

### [How do I get native messaging to work?](#linux-specific-questions)

To get
[native messaging](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Native_messaging)
to work, for example for the
[Plasma Integration](https://addons.mozilla.org/en-US/firefox/addon/plasma-integration/),
create two symlinks by running these commands:

```
ln -s ~/.mozilla/native-messaging-hosts ~/.librewolf/native-messaging-hosts

sudo ln -s /usr/lib/mozilla/native-messaging-hosts /usr/lib/librewolf/native-messaging-hosts
```

### [How can I get Tridactyl's native messaging to work when I install Librewolf with Flatpak?](#linux-specific-questions)

To get [Tridactyl's](https://github.com/tridactyl/tridactyl) native feature to
work Tridactyl's install script needs to look into Librewolf's app data
directory and be allowed to read the user's RC file.

Execute the following:

```sh
curl \
	https://gitlab.com/librewolf-community/browser/common/-/raw/master/helpers/tridactyl-install.sh \
	> /tmp/tridactyl-install.sh
sed -i \
	's/\.librewolf/\.var\/app\/io\.gitlab\.librewolf-community\/\.librewolf/g' \
	/tmp/tridactyl-install.sh
chmod +x /tmp/tridactyl-install.sh
/tmp/tridactyl-install.sh

# If installed onto the system, rather than the user, then remove `--user`
flatpak --user override io.gitlab.librewolf-community --filesystem="${XDG_DATA_HOME:-~/.local/share}"/tridactyl
```

### [I get the APT error "Certificate verification failed"](#linux-specific-questions)

If you get an error message that looks something like this

```
Err:5 https://deb.librewolf.net uma Release
  Certificate verification failed: The certificate is NOT trusted. The certificate chain uses expired certificate.  Could not handshake: Error in the certificate verification. [IP: 116.203.248.82 443]
Reading package lists... Done
E: The repository 'http://deb.librewolf.net uma Release' does not have a Release file.
N: Updating from such a repository can't be done securely, and is therefore disabled by default.
N: See apt-secure(8) manpage for repository creation and user configuration details.
```

You can try to fix it by running

```
sudo apt install ca-certificates
```

## macOS specific questons:

### [How do I install LibreWolf on macOS?](#macos-specific-questons)

As explained in the [install section](https://librewolf.net/installation/macos/)
you can either build from source following the
[build guide](https://gitlab.com/librewolf-community/browser/macos/-/blob/master/build_guide.md),
install using a disk image from the
[releases](https://gitlab.com/librewolf-community/browser/macos/-/releases) or
install using HomeBrew.

### [How do I build LibreWolf on macOS?](#macos-specific-questons)

You can build from source following the
[build guide](https://gitlab.com/librewolf-community/browser/macos/-/blob/master/build_guide.md).

### [How do I update LibreWolf on macOS?](#macos-specific-questons)

To update the browser on macOS you need to grab the latest .app and drag it into
your `Applications` directory, or if you installed using HomeBrew you can do it
as you would for every other cask.

### [Is LibreWolf available via Homebrew?](#macos-specific-questons)

LibreWolf is available as a cask, so you can install entering
`brew install --cask librewolf`.

### [Does LibreWolf work on M1 machines?](#macos-specific-questons)

Yes, we provide native builds for both Intel and ARM based machines. If you own
a M1 powered MacBook the relative builds are refered to as `aarch64`, and they
are also marked as `experimental`, as they are cross-compiled on Intel machines
and we did not test them before release. Please consider that the build time on
M1 is relatively low, so building from source is probably worth it in any case.

### [Why is LibreWolf marked as broken?](#macos-specific-questons)

It is possible that M1 users see their recently downloaded LibreWolf flagged as
broken or unsafe by the OS.

This happens because we do not notarize the macOS version of the browser: we
don't have a paid Apple Developer license and we don't want to suppose this
signing mechanism that is put behind a paywall without providing significant
gains.

[Here](https://gitlab.com/librewolf-community/browser/macos/-/issues/19#note_597640488)
you can find a proposed fix, and the relative discussion.

## Windows specific questions:
