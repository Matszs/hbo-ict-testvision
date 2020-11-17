# HBO-ICT Testvision
This git repo introduces a javaScript-injector for Testvision. By using this tool you can highlight students from a specific group. The groups are NOT included, you can copy-paste this data from DLO or import data from someone else.

You can use this in two different ways:
 - Greasemonkey/Tampermonkey script which injects the script every time you visit Testvision / renew data automatically.
 - Create a bookmark in your browser, you have to press this bookmark every time you go to a new page or data refreshes.

### How to use

Interface:

![test](https://i.imgur.com/k9qzjU8.png)

- Select-box: Select the group of students you want to highlight.
- '+'-button: Add new group, popup will ask for name & data.
- '-'-button: Remove the selected group
- 'export'-button: Export your localstorage data to back-up or share.
- 'import'-button: Import JSON-data to your localstorage, restoring backup

Example data:

```
lastname1, firstname1, student1@hva.nl, 500111111
lastname2, firstname2, student2@hva.nl, 500222222
lastname3, firstname3, student3@hva.nl, 500333333
```


### Greasemonkey/Tampermonkey script (recommended)
```
// ==UserScript==
// @name     Testvision group sorter
// @version  1
// @include https://hva.testvision.nl/*
// ==/UserScript==

var injectScript = function() {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "https://cdn.jsdelivr.net/gh/matszs/hbo-ict-testvision@latest/script_beta.js";
  document.getElementsByTagName("head")[0].appendChild(script);
};

injectScript();
```

----

### Bookmark:

Create a bookmark in your webbrowser and use the following data as location-input:

```javascript:var%20injectScript%20%3D%20function%28%29%20%7B%0Avar%20script%20%3D%20document.createElement%28%22script%22%29%3B%0Ascript.type%20%3D%20%22text%2Fjavascript%22%3B%0Ascript.src%20%3D%20%22https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2Fmatszs%2Fhbo-ict-testvision%40latest%2Fscript_beta.js%22%3B%0Adocument.getElementsByTagName%28%22head%22%29%5B0%5D.appendChild%28script%29%3B%0A%7D%3B%0A%0AinjectScript%28%29%3B```

Click on the bookmark on the testvision website to activate the script.

---

### CDN (development):

CDN takes 24 hours to update the cache. This script includes the git build-version.
Use one of the latests builds:

```728970487bd629b1ff55e540727b4e58e2cd3687```

```javascript:var%20injectScript%20%3D%20function%28%29%20%7B%0Avar%20script%20%3D%20document.createElement%28%22script%22%29%3B%0Ascript.type%20%3D%20%22text%2Fjavascript%22%3B%0Ascript.src%20%3D%20%22https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2Fmatszs%2Fhbo-ict-testvision%40728970487bd629b1ff55e540727b4e58e2cd3687%2Fscript_beta.js%22%3B%0Adocument.getElementsByTagName%28%22head%22%29%5B0%5D.appendChild%28script%29%3B%0A%7D%3B%0A%0AinjectScript%28%29%3B```

---
