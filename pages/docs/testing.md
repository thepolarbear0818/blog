# Browser Tests

There are many browser testing sites on the Internet. Here are just a few that
we find most useful, which might also help providing details in issues.

## Fingerprinting and Security

- [TorZillaPrint](https://arkenfox.github.io/TZP/index.html) by Arkenfox is a
  fingerprinting test suite for Firefox and Tor Browser.
- [PrivacyTests.org](https://privacytests.org/) by Arthur Edelstein shows
  results of regular tests run against several browsers, including LibreWolf.
- [BrowserLeaks](https://browserleaks.com/) is an all in one browser testing
  tool.
- [Device Info](https://www.deviceinfo.me/) is another all in one browser
  testing tool.
- [SSL Labs](https://www.ssllabs.com/ssltest/viewMyClient.html) is a client side
  SSL test.

These tests are not intended to be used as oracles, but rather as a way to check
your setup and verify that your changes are applied. You should not read too
much into the results unless you are sure you understand them, as explained
[in this article](https://matt.traudt.xyz/posts/2019-01-19-about-to-use-tor/#testing-your-fingerprint).

## Performance

Performance tests can be done with [Octane](https://chromium.github.io/octane/).
It needs to be launched with other applications closed and with no other
activity. It is recommended to run the test multiple times and then calculate
the average.
