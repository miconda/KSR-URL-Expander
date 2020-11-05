# KSR-URL-Expander #

This is a browser omnibox extension that facilitates navigation to web resources
available on `kamailio.org` website. It was tested with Chromium-based browsers
(Chrome, Chromium, Brave) and Firefox (based on its Chromium-compatibility API).

Among others, it targets to auto-generate the URL to documentation of modules
(stable and development versions), wiki, search on `kamailio.org` or
`lists.kamailio.org`. It can be useful for people spending significant time
offering services for Kamailio project (open source SIP/VoIP server):

  * https://www.kamailio.org

## Installation ##

At this moment the extension is not packaged, not being available in the
extensions store of the browsers. It has to be manually installed from the
source code folder.

Given that is require to register as a developer for each browser in order to
get the extension signed and published in the stores, at this moment is not
expected to make it available there.

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

The commands are listed in the next sections.

### Command: m name ###

Navigate to documentation of the module specified by `name` in the stable branch.
The command presents suggestions of module names as you type. You can continue
typing the full name of the module or select from the suggestions.

Example:

```
m acc
```

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
sl htable with dmq replication
```

## To-Do ##

Among planned features:

  * [ ] navigate to core cookbooks by version
  * [ ] navigate to pseudo-variables cookbooks by version
  * [ ] navigate to transformations cookbooks by version

## License ##

`BSD 3-Clause License`

**Copyright:** Daniel-Constantin Mierla <miconda@gmail.com>

## Contributions ##

Requests for new features and issues have to be reported to:

  * https://github.com/miconda/KSR-URL-Expander/issues

Code and content contributions have to submitted via pull requests:

  * https://github.com/miconda/KSR-URL-Expander/pulls
