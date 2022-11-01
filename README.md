# KSR-URL-Expander #

This is a browser omnibox extension that facilitates navigation to web resources
available on `kamailio.org` website. It was tested with Chromium-based browsers
(Chrome, Chromium, Brave) and Firefox (based on its Chromium-compatibility API).

Among others, it targets to auto-generate the URL to documentation of modules
(stable and development versions), wiki, search on `kamailio.org` or
`lists.kamailio.org` using `Google`.

This extension can be useful for people spending daily significant time within
Kamailio project (open source SIP/VoIP server) ecosystem:

  * https://www.kamailio.org

See it in action:

![Screencast](https://github.com/miconda/vresources/raw/master/ksr-url-expander/ksr-url-expander.gif)

## Installation ##

At this moment the extension is not packaged, not being available in the
extensions store of the browsers. It has to be manually installed from the
source code folder.

Given that is required to register as a developer for each browser organization
in order to be able to sign and publish the extension in their stores, there is
no plan at this moment to do it, installation from source folder not being a
complex process.

### Chromium Browsers ###

Type in URL bar `chrome://extensions`, then activate `Developer Mode`.

The button `Load Unpacked` shows up. Use it to select the folder with this
extension (the `KSR-URL-Expander` folder).

To update when a new version is available, go again to `chrome://extensions`
and reload the extension from the list of loaded extensions (click on
corresponding spin arrow).

Useful details about managing unpacked extensions can be found at:

  * https://developer.chrome.com/extensions/getstarted

### Firefox ###

Open the `about:debugging` page (enter it in URL bar), then click `This Firefox`
(in newer versions of Firefox), click `Load Temporary Add-on`, then select any
file from `KSR-URL-Expander` folder.

**Note:** Firefox does not seem to allow persistent unsigned extensions,
therefore you may have to do the installation after each restart.

Useful details about managing unpacked extensions can be found at:

  * https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension

## Usage ##

Type `ksr ` (`ksr` followed by `space`) in the browser URL box (address bar) and
the extension is activated. It should show `KSR URL Expander`. Pressing `Enter`
at that moment, the browser goes to `kamailio.org` home page.

After the extension is activated, couple of commands are available. Type the
command followed by `space` and parameters (where is the case).

If the command is unknown, then it is expected to be a full module name, the
navigation goes to the documentation of that module in the stable branch. This
is like a shortcut to `m` command, but without auto-complete suggestions
(see next for details about `m` command).

The commands are listed in the next sections.

### Command: m name ###

Navigate to documentation of the module specified by `name` in the stable branch.
The command presents suggestions of module names as you type, based on prefix
matching. You can continue typing the full name of the module or select from
the suggestions.

Example:

```
m acc
```

If no module name is provided after `m`, then the navigation jumps to the index
of modules for stable branch.

**Note**: the list of module names is included in the extension, based on current
Kamailio development version. Therefore some modules might not be available in
stable and older versions of Kamailio.

**Note**: the browsers present only the first N suggestions (where N can be 5, 8
or other number specific to the browser). Therefore be aware that not all kamailio
modules matching what is typed are presented by the browser, you may have to type
further to narrow down suggestions list to include the module you are looking for.
The number of suggstions (the value of N) can be changed in the browser settings,
although it seems to be an upper limit like `15` (as seen in Chrome).

### Command: md name ###

Similar to `m`, but navigates to documentation of the module in the development
branch.

Example:

```
md tm
```

If no module name is provided after `md`, then the navigation jumps to the index
of modules for development branch.

### Command: mi name ###

Similar to `m`, but the suggestions are presented based on includes matching.

Example:

```
mi red
```

### Command: mid name ###

Similar to `md`, but the suggestions are presented based on includes matching.

Example:

```
mid red
```

### Command: s text ###

Navigate to `google.com` with URL built to search `text` on `kamailio.org` site.

The `text` can be single or many words.

Example:

```
s htable with dmq replication
```

### Command: sl text ###

Similar to `s`, but narrows the search on `lists.kamailio.org` site.

```
sl location with dmq replication
```

### Command: w ###

Navigate to main wiki site. No parameters are expected, if there is text after
`w`, then it is not considered to be this command.

Example:

```
w
```

### Command: wo ###

Navigate to old wiki site. No parameters are expected, if there is text after
`wo`, then it is not considered to be this command.

Example:

```
wo
```

### Command: cc series ###

Navigate to Kamailio wiki core cookbook. The `series` parameter can be:

  * devel
  * 5.6.x
  * 5.5.x
  * 5.4.x
  * 5.3.x
  * 5.2.x
  * 5.1.x
  * 5.0.x
  * 4.4.x

If `series` parameter is missing, then it goes to the latest stable series
(the second in the above list).

Example:

```
cc 5.4.x
```

### Command: ccd ###

Navigate to Kamailio wiki core cookbook for development branch.

### Command: pv series ###

Navigate to Kamailio wiki pseudo-variables cookbook. The `series` parameter is
the same as for `cc` command.

Example:

```
pv 5.4.x
```

### Command: pvd ###

Navigate to Kamailio wiki pseudo-variables cookbook for development branch.

### Command: tr series ###

Navigate to Kamailio wiki transformations cookbook. The `series` parameter is
the same as for `cc` command.

Example:

```
tr 5.4.x
```

### Command: trd ###

Navigate to Kamailio wiki transformations cookbook for development branch.

### Command: aif series ###

Navigate to Kamailio wiki alphabetic index of functions. The `series` parameter is
the same as for `cc` command.

Example:

```
aif 5.5.x
```

### Command: air series ###

Navigate to Kamailio wiki alphabetic index of rpc commands. The `series` parameter is
the same as for `cc` command.

Example:

```
air 5.5.x
```

### Command: faq ###

Navigate to Frequently Asked Questions page on the wiki portal.

  * https://www.kamailio.org/wikidocs/tutorials/faq/main

No parameters are expected, if there is text after `faq`, then it is not considered
to be this command.

Example:

```
faq
```

### Command: gh ###

Navigate to main `github.com` project page. No parameters are expected, if there is text after
`gh`, then it is not considered to be this command.

Example:

```
gh
```

### Command: ghc commitid ###

Navigate to commit page on `github.com` project. The parameter has to be the hexa commit id.
If the parameter is not provided, it jumps to the page listing the commits in master branch.

Example:

```
ghc dd717b80be6f8e9519aa4b3d627cb88267b81146
```

### Command: ghi ###

Navigate to issues page on `github.com` project. No parameters are expected, if there is text after
`ghi`, then it is not considered to be this command.

Example:

```
ghi
```

### Command: ghd ###

Navigate to `kamailio-docs` repository on `github.com` project. No parameters are expected, if there is text after
`ghd`, then it is not considered to be this command.

Example:

```
ghd
```

### Command: ghw ###

Navigate to `kamailio-wiki` repository on `github.com` project. No parameters are expected, if there is text after
`ghw`, then it is not considered to be this command.

Example:

```
ghw
```

### Command: ghk ###

Navigate to KEMI tutorial in `kamailio-docs` repository on `github.com` project. No parameters are expected, if there is text after
`ghk`, then it is not considered to be this command.

Example:

```
ghk
```

### Command: ghm name ###

Navigate to folder of the module specified by `name` in the development branch of the
`github.com` repository. The command presents suggestions of module names as you
type. You can continue typing the full name of the module or select from the suggestions.

Example:

```
ghm acc
```

If no module name is provided after `ghm`, then the navigation jumps to the index
of modules for development branch.

### Command: ghv ###

Navigate to `vim-kamailio-syntax` repository on `github.com` project. No parameters are expected, if there is text after
`ghv`, then it is not considered to be this command.

Example:

```
ghv
```

### Command: ghp ###

Navigate to pull requests page on `github.com` project . No parameters are expected, if there is text after
`ghp`, then it is not considered to be this command.

Example:

```
ghp
```

### Command: gho name ###

Navigate to the github page of the organization specified by `name`.

Example:

```
gho asipto
```

### Command: ke ###

Navigate to KEMI documentation (development branch). No parameters are expected, if there is text after
`ke`, then it is not considered to be this command.

Example:

```
ke
```

### Command: l listid ###

Navigate to mailing list archive. If `listid` parameter is not provided, then
navigate to the index page of the mailing lists.

Example:

```
l sr-users
```

### Command: u ###

Navigate to `KSR-URL-Expander` github project page. No parameters are expected, if there is text after
`u`, then it is not considered to be this command.

Example:

```
u
```

### Command: ke ###

Navigate to main `kamailioworld.com` page. No parameters are expected, if there is text after
`kw`, then it is not considered to be this command.

Example:

```
kw
```

### Command: re ###

Navigate to `https://github.com/sipwise/rtpengine` - RTPEngine project page. No parameters are expected, if there is text after
`re`, then it is not considered to be this command.

Example:

```
re
```

## License ##

`BSD 3-Clause License`

**Copyright:** Daniel-Constantin Mierla <miconda@gmail.com>

## Contributions ##

Requests for new features and issues have to be reported to:

  * https://github.com/miconda/KSR-URL-Expander/issues

Code and content contributions have to submitted via pull requests:

  * https://github.com/miconda/KSR-URL-Expander/pulls
