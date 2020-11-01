# HBO-ICT Testvision

### usage:

Create a bookmark in your webbrowser and use the following data as location-input:

```javascript:var%20injectScript%20%3D%20function%28%29%20%7B%0Avar%20script%20%3D%20document.createElement%28%22script%22%29%3B%0Ascript.type%20%3D%20%22text%2Fjavascript%22%3B%0Ascript.src%20%3D%20%22https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2Fmatszs%2Fhbo-ict-testvision%2Fscript.js%22%3B%0Adocument.getElementsByTagName%28%22head%22%29%5B0%5D.appendChild%28script%29%3B%0A%7D%3B%0A%0AinjectScript%28%29%3B```

Click on the bookmark on the testvision website to activate the script.

---

### beta usage:

Create a bookmark in your webbrowser and use the following data as location-input:

```javascript:var%20injectScript%20%3D%20function%28%29%20%7B%0Avar%20script%20%3D%20document.createElement%28%22script%22%29%3B%0Ascript.type%20%3D%20%22text%2Fjavascript%22%3B%0Ascript.src%20%3D%20%22https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2Fmatszs%2Fhbo-ict-testvision%2Fscript_beta.js%22%3B%0Adocument.getElementsByTagName%28%22head%22%29%5B0%5D.appendChild%28script%29%3B%0A%7D%3B%0A%0AinjectScript%28%29%3B```

Click on the bookmark on the testvision website to activate the script.

Interface:

![test](https://i.imgur.com/k9qzjU8.png)

- Select-box: Select the group of students you want to highlight.
- '+'-button: Add new group, popup will ask for name & data.
- '-'-button: Remove the selected group
- 'export'-button: Export your localstorage data to back-up or share.
- 'import'-button: Import JSON-data to your localstorage, restoring backup


---

### CDN:

CDN takes 24 hours to update the cache.
Use one of the latests builds:

```728970487bd629b1ff55e540727b4e58e2cd3687```

```javascript:var%20injectScript%20%3D%20function%28%29%20%7B%0Avar%20script%20%3D%20document.createElement%28%22script%22%29%3B%0Ascript.type%20%3D%20%22text%2Fjavascript%22%3B%0Ascript.src%20%3D%20%22https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2Fmatszs%2Fhbo-ict-testvision%40728970487bd629b1ff55e540727b4e58e2cd3687%2Fscript_beta.js%22%3B%0Adocument.getElementsByTagName%28%22head%22%29%5B0%5D.appendChild%28script%29%3B%0A%7D%3B%0A%0AinjectScript%28%29%3B```

---

### Greasemonkey script (beta script)

```// ==UserScript==
// @name     Testvision group sorter
// @version  1
// @include https://hva.testvision.nl/*
// ==/UserScript==

var injectScript = function() {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "https://cdn.jsdelivr.net/gh/matszs/hbo-ict-testvision/script_beta.js";
  document.getElementsByTagName("head")[0].appendChild(script);
};

injectScript();```
