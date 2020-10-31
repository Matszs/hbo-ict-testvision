$('<div style="position: fixed; z-index: 30001; bottom: 0; left: 0; background: white; padding: 10px;"><select id="hbo-ict-selector"></select><button id="hbo-ict-selector-add">+</button><button id="hbo-ict-selector-delete">-</button></div>').appendTo('body');

var hboIctScriptDataTxt = localStorage.getItem("hbo_ict_groups");
if(hboIctScriptDataTxt == null) {
        hboIctScriptDataTxt = JSON.stringify({"groups": {}});
        localStorage.setItem("hbo_ict_groups", hboIctScriptDataTxt);
}

var hboIctScriptData = JSON.parse(hboIctScriptDataTxt);

$('#hbo-ict-selector-add').click(function() {
        var groupName = window.prompt("Naam van de groep");
        var studentNumbers = [...window.prompt("kopieer en plak uit DLO: Groepen -> kolom: Leden -> alle tekst (achternaam, voornaam, emailadres, student nummer)").matchAll(/(500[0-9]{5,})/g)].flat();

        hboIctScriptData.groups[groupName] = studentNumbers;
        localStorage.setItem("hbo_ict_groups", JSON.stringify(hboIctScriptData));
        
        $('#hbo-ict-selector').append('<option>' + groupName + '</option>');
});

for (var groupName in hboIctScriptData.groups) {
    $('#hbo-ict-selector').append('<option>' + groupName + '</option>');
}
