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

## Security and Privacy:

### How often do you update LibreWolf?

LibreWolf is always based on the latest version of Firefox. Updates usually come
within three days from each upstream stable release, at times even the same day.
Unless problems arise, we always try to release often and in a timely manner.

It should however be noted that LibreWolf does not have auto-update
capabilities, and therefore it relies on package managers or users to apply
them.

### Can I use LibreWolf with Tor?

Please **don't**.

Tor Browser is specifically designed to reduce fingerprintability. Using
LibreWolf or any other browser would make you stand out. From a personal
security perspective it's also a good idea to have a seperate browser for .onion
sites and general Tor browsing.

<a name="phishing-malware"></a>

### Why do you disable Google Safe Browing?

We disable Safe Browsing as we consider it a censorship concern, and we would
rather not let Google control another aspect of the internet. With that being
said, Safe Browsing is still a good security tool and Mozilla's implementations
is privacy respecting. For this reason less technical users, and those who feel
like they need the extra security,
[can and should safely **enable it**](/docs/settings/#enable-google-safe-browsing).

<a name="addons-help"></a>

### Do you recommend using any extensions?

Yes, in fact we include [uBlockOrigin](https://github.com/gorhill/uBlock) in the
browser. We also have a few [suggestions](/docs/addons/) that you can look at.

However, as a general rule, you shouldn't install too many add-ons. Each add-on
is a new potential source of security vulnerabilities and may make you stand
out.

### What are some tips on a more hardened setup?

To improve your privacy we suggest
[enabling letterboxing](/docs/settings/#enable-letterboxing), in order to
prevent your real window size from being fingerprinted. This can be especially
useful if you resize your window.

### Should I allow canvas access? How do I do it?

Please be mindful when allowing canvas access as it is a very strong
fingerprinting vector; however, if you are already logged into a website you
shouldn't stress too much about giving it canvas access because they already
know who you are.

Canvas can be handled on a per-site basis thank to RFP. You will be prompted for
access next to the URL bar, so look for the icon there.

<a name="lockwise-alerts"></a>

<a name="primary-password-stored-logins"></a>

### Why is the built-in password manager disabled?

We believe you should use a password manager that is better for your security
and comfort, please consider some of the options in our
[recommended addons](/docs/addons#recommended-addons).

<a name="https-only-prefs"></a>

### Does LibreWolf use HTTPS-Only mode?

Yes, and you won't need any extension for that. HTTP can still be
[allowed for certain sites](https://support.mozilla.org/en-US/kb/https-only-prefs#w_turn-off-https-only-mode-for-certain-sites).

### Does LibreWolf make any outgoing connections?

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

<a name="enhanced-tracking-protection"></a>

<a name="turn-off-etp-desktop"></a>

### What is Mozilla Tracking Protection?

In LibreWolf we decided to enable Tracking Protection, as it plays nicely with
uBO and it can block some extra scripts. Additionally, when set to strict it
includes dFPI, SmartBlock, enhanced cookie cleaning and stricter referrer
policies. For this reason, we always suggest the default **strict** mode, and
when using it please
[do not enable FPI](/docs/faq#why-isnt-first-party-isolate-enabled-by-default),
as it interferes with the more recent dFPI.

Tracking Protection requires some occasional outgoing connections, in order to
fetch its blocking lists: these connections are harmless for privacy, and TP has
a flawless track record in this regard. A particular important connection is the
one that TP makes on first launch, as without it the feature cannot effectively
work.

If you want, you can block these outgoing connections by using the following
[overrides](/docs/settings/):

```js
defaultPref("browser.safebrowsing.provider.mozilla.updateURL", "");
defaultPref("browser.safebrowsing.provider.mozilla.gethashURL", "");
```

As stated above, and despite what you see in the Settings UI, blocking these
connections will cause TP to **stop working**, as it won't be able to use the
lists that allow it to block known tracking, cryptomining and fingerprinting
scripts.

<a name="containers"></a>

### Why isn't First Party Isolate enabled by default?

FPI is not enabled by default as we use dFPI, and the two do not work well
together. dFPI is a newer implementation and it causes less breakage, plus it is
included by default when
[using Tracking Protection](#what-is-mozilla-tracking-protection) in strict
mode.

Please also notice that dFPI makes containers and containers extensions
redudant, unless you want to protect your privacy when visiting the same website
multiple times, during the same browsing sessions.

## Usability

### What are the most common downsides of RFP (Resist Fingerprinting)?

It is possible that users will experience breakage because of RFP: usually this
is caused by canvas access, which
[can be relaxed on a per-site basis](#should-i-allow-canvas-access-how-do-i-do-it).

Other common problems brought by RFP include:

- spoofed **timezone**.
- forced light **theme**.
- fixed **user agent**.
- smaller and fixed **window size** on startup.
- suppressed keyboard modifier events using **alt-keys**.

There's no real workaround for these annoyances as they are intended to protect
your privacy. Tweaking them using extensions or preferences significantly
impacts the effectiveness of RFP, both for the users themselves, and the rest of
the userbase: modifications create a subset of users who stand out and reduce
the number of RFP users who look the same, making it worse for everyone.

For this very reason we suggest **against** modifying any metric involved in
RFP, as even a single change could make it useless. We also suggest users to get
used to RFP and stick with it as much as possible: it is a very powerful tool
that gets improvements as the result of the
[Tor Uplift Project](https://wiki.mozilla.org/Security/Tor_Uplift), and it will
surely benefit your privacy in a **major** way.

If you don't like the downsides of RFP, or you are not concerned about
fingerprinting, you can disable RFP in the LibreWolf settings, or
[in your overrides](/docs/settings/#disable-rfp-resist-fingerprinting).

In that case consider using an extension like
[CanvasBlocker](https://addons.mozilla.org/en-US/firefox/addon/canvasblocker/)
to retain at least a minimum amount of fingerprinting protection.

### Why am I seeing striped images?

If you see striped images in your browser, that's most likely caused by the fact
that the website needs canvas access to display them properly. Check out
[how to allow it](#should-i-allow-canvas-access-how-do-i-do-it).

### What should I do if video conferencing is not working?

Videoconferencing platforms may require one or more of the following features:

- [`media.peerconnection.ice.no_host` disabled](/docs/settings/#disable-mediapeerconnectioniceno_host).
- [WebGL enabled](/docs/settings/#enable-webgl).
- [Autoplay allowed](#how-do-i-allow-autoplay-of-media).

<a name="storage-permissions"></a>

### How do I stay logged into specific websites?

Add an exception at Settings > Privacy & Security > Cookies and Site Data >
Manage Exceptions. Make sure you add a website to the exceptions **before** you
login, both _http_ and _https_ versions of the domain. If you want to stay
logged into `www.example.com` enter `example.com` and click on "Allow": you
should then see the two versions listed, and you can go ahead and save the
changes.

Please notice that these exceptions are bypassed by the settings at Privacy &
Security > History > Clear history when LibreWolf closes > Settings.

### Why is LibreWolf forcing light theme?

This is one of the privacy measure that come with RFP (Resist Fingerprinting).
Please read
[this](#what-are-the-most-common-downsides-of-rfp-resist-fingerprinting) before
you go on: as stated there, our stance is that if you care about fingerprinting
protection you should **never** alter RFP behavior in any way.

If you still want the dark theme for web content, first check whether your
favourite websites allow to set it manually. Alternatively, you could
[use an extension](/docs/addons#other-useful-addons), but be careful as it could
make you stand out.

### How do I enable search suggestions?

If you use a privacy respecting search engine go to Settings > Search > Search
Suggestions, and enable search suggestions.

### How do I add a search engine?

LibreWolf provides a selection of privacy respecting search engines, but you can
add more by following
[this guide](https://support.mozilla.org/en-US/kb/add-or-remove-search-engine-firefox).

Please note that at the moment there doesn't seem to be an easy way of restoring
Google as a search engine.

### How do I allow autoplay of media?

Autoplay can be controlled on a per-site basis from your urlbar.

### How do I enable push notifications?

Push notifications require to set a per-site exception,
[just like with cookies](#how-do-i-stay-logged-into-specific-websites).

<a name="drm-content"></a>

### How do I enable DRM?

We disable DRM by default, as we consider it a limitation to user freedom. Take
a moment to [read about it](https://www.eff.org/issues/drm) before you go ahead
and enable it.

DRM support can be enabled from Settings > General > Digital Right Management
(DRM) Content. Additionally, a pop-up and an icon in your URL bar will show up
when a website is trying to use DRM.

### Can I safely change language in the browser?

Yes, you can normally apply language packs from the settings. To protect your
privacy, LibreWolf will make you appear to websites as a en-US user.

### Can I set a default download directory?

As a security measure, LibreWolf asks for user interaction after each download.
You can change that in Settings > General > Files and Applications > Downloads >
Save files to..

## Linux specific questions:

### Can't open links with Librewolf when using Wayland

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

### How do I get native messaging to work?

To get
[native messaging](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Native_messaging)
to work, for example for the
[Plasma Integration](https://addons.mozilla.org/en-US/firefox/addon/plasma-integration/),
create two symlinks by running these commands:

```
ln -s ~/.mozilla/native-messaging-hosts ~/.librewolf/native-messaging-hosts

sudo ln -s /usr/lib/mozilla/native-messaging-hosts /usr/lib/librewolf/native-messaging-hosts
```

### [How can I get Tridactyl's native messaging to work when I install Librewolf with Flatpak?

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

### I get the APT error "Certificate verification failed"

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

### How do I install LibreWolf on macOS?

As explained in the [install section](https://librewolf.net/installation/macos/)
you can either build from source following the
[build guide](https://gitlab.com/librewolf-community/browser/macos/-/blob/master/build_guide.md),
install using a disk image from the
[releases](https://gitlab.com/librewolf-community/browser/macos/-/releases) or
install using HomeBrew.

### How do I build LibreWolf on macOS?

You can build from source following the
[build guide](https://gitlab.com/librewolf-community/browser/macos/-/blob/master/build_guide.md).

### How do I update LibreWolf on macOS?

To update the browser on macOS you need to grab the latest .app and drag it into
your `Applications` directory, or if you installed using HomeBrew you can do it
as you would for every other cask.

### Is LibreWolf available via Homebrew?

LibreWolf is available as a cask, so you can install entering
`brew install --cask librewolf`.

### Does LibreWolf work on M1 machines?

Yes, we provide native builds for both Intel and ARM based machines. If you own
a M1 powered MacBook the relative builds are refered to as `aarch64`, and they
are also marked as `experimental`, as they are cross-compiled on Intel machines
and we did not test them before release. Please consider that the build time on
M1 is relatively low, so building from source is probably worth it in any case.

### Why is LibreWolf marked as broken?

It is possible that M1 users see their recently downloaded LibreWolf flagged as
broken or unsafe by the OS.

This happens because we do not notarize the macOS version of the browser: we
don't have a paid Apple Developer license and we don't want to suppose this
signing mechanism that is put behind a paywall without providing significant
gains.

[Here](https://gitlab.com/librewolf-community/browser/macos/-/issues/19#note_597640488)
you can find a proposed fix, and the relative discussion.
