# HBO-ICT Testvision

### usage:

Create bookmark and input the following location:

```javascript:var%20injectScript%20%3D%20function%28%29%20%7B%0Avar%20script%20%3D%20document.createElement%28%22script%22%29%3B%0Ascript.type%20%3D%20%22text%2Fjavascript%22%3B%0Ascript.src%20%3D%20%22https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2Fmatszs%2Fhbo-ict-testvision%2Fscript.js%22%3B%0Adocument.getElementsByTagName%28%22head%22%29%5B0%5D.appendChild%28script%29%3B%0A%7D%3B%0A%0AinjectScript%28%29%3B```


---

### beta usage:

Create bookmark and input the following location:

```javascript:var%20injectScript%20%3D%20function%28%29%20%7B%0Avar%20script%20%3D%20document.createElement%28%22script%22%29%3B%0Ascript.type%20%3D%20%22text%2Fjavascript%22%3B%0Ascript.src%20%3D%20%22https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2Fmatszs%2Fhbo-ict-testvision%2Fscript_beta.js%22%3B%0Adocument.getElementsByTagName%28%22head%22%29%5B0%5D.appendChild%28script%29%3B%0A%7D%3B%0A%0AinjectScript%28%29%3B```

How to use:

![test](https://i.imgur.com/k9qzjU8.png)

- Select-box: Select the group of students you want to highlight.
- '+'-button: Add new group, popup will ask for name & data.
- '-'-button: Remove the selected group
- 'export'-button: Export your localstorage data to back-up or share.
- 'import'-button: Import JSON-data to your localstorage, restoring backup
