var hboIctselectedGroupStudentNumbers = null;

vulAfnameBeoordelenOverzicht2 = vulAfnameBeoordelenOverzicht;
highlightStudents = function() {
        if(!hboIctselectedGroupStudentNumbers) return;
        Array.from(document.querySelectorAll("#beoordelen_list #toew_kandidaatnaam .innerveld")).filter(e => hboIctselectedGroupStudentNumbers.some(t => e.textContent.includes(t))).forEach(e => {
            e.closest("tr").style.backgroundColor = "#32BF84";
        });
};

vulAfnameBeoordelenOverzicht = function(e) {
    var t;
    vulAfnameBeoordelenOverzicht2(e), t = setInterval(function() {
        gBeoOverzichtIsBezig || (clearInterval(t), highlightStudents())
    }, 500);
};

$('<div style="position: fixed; z-index: 30001; bottom: 0; left: 0; background: white; padding: 10px;"><select id="hbo-ict-selector"></select><button id="hbo-ict-selector-add">+</button><button id="hbo-ict-selector-delete">-</button><button id="hbo-ict-selector-export">export</button><button id="hbo-ict-selector-import">import</button></div>').appendTo('body');

var hboIctScriptDataTxt = localStorage.getItem("hbo_ict_groups");
if(hboIctScriptDataTxt == null) {
        hboIctScriptDataTxt = JSON.stringify({"groups": {}});
        localStorage.setItem("hbo_ict_groups", hboIctScriptDataTxt);
}

var hboIctScriptData = JSON.parse(hboIctScriptDataTxt);

var hboIctLoadGroups = function() {
        $('#hbo-ict-selector').html('');
        for (var groupName in hboIctScriptData.groups) {
                $('#hbo-ict-selector').append('<option value="' + groupName + '">' + groupName + '</option>');
        }
};

$('#hbo-ict-selector-add').click(function() {
        var groupName = window.prompt("Naam van de groep");
        var studentNumbers = [...window.prompt("kopieer en plak uit DLO: Groepen -> kolom: Leden -> alle tekst (achternaam, voornaam, emailadres, student nummer)").matchAll(/(500[0-9]{5,})/g)].flat();

        hboIctScriptData.groups[groupName] = studentNumbers;
        localStorage.setItem("hbo_ict_groups", JSON.stringify(hboIctScriptData));
        
        $('#hbo-ict-selector').append('<option value="' + groupName + '">' + groupName + '</option>');
});

hboIctLoadGroups();

$('body').on('change', '#hbo-ict-selector', function() {
        hboIctselectedGroupStudentNumbers = hboIctScriptData.groups[$(this).val()];
        highlightStudents();
}).change();


$('body').on('click', '#hbo-ict-selector-delete', function() {
        var groupName = $('#hbo-ict-selector').val();
        var element = $('#hbo-ict-selector option[value="' + groupName + '"]');
        
        delete hboIctScriptData.groups[groupName];
        localStorage.setItem("hbo_ict_groups", JSON.stringify(hboIctScriptData));
        element.remove();
        
        $('#hbo-ict-selector').change();
}).change();

$('#hbo-ict-selector-export').click(function() {
        alert(JSON.stringify(hboIctScriptData));
});

$('#hbo-ict-selector-import').click(function() {
        var data = window.prompt("Voer JSON data in");
        localStorage.setItem("hbo_ict_groups", data);
        hboIctScriptData = JSON.parse(data);
        hboIctLoadGroups();
});
