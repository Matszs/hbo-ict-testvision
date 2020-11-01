var hboIctselectedGroupStudentNumbers = null;

if(typeof(vulAfnameBeoordelenOverzicht) !== 'undefined')
        vulAfnameBeoordelenOverzicht2 = vulAfnameBeoordelenOverzicht;
if(typeof(hideToetsView) !== 'undefined')
        hideToetsView2 = hideToetsView;
   
highlightStudents = function() {
        if(!hboIctselectedGroupStudentNumbers) return;
        Array.from(document.querySelectorAll("#beoordelen_list #toew_kandidaatnaam .innerveld")).filter(e => hboIctselectedGroupStudentNumbers.some(t => e.textContent.includes(t))).forEach(e => {
            e.closest("tr").style.backgroundColor = "#32BF84";
        });
        
        $.each($('#beoordelen_list #toew_kandidaatnaam .innerveld, #of_items_list #knaam .innerveld, #av_kand_list #knaam .innerveld'), function(elem) {
                var text = $(this).text();
                var row = $(this).closest('tr');
                
                if(hboIctselectedGroupStudentNumbers.some(t => text.includes(t))) {
                        row.css('backgroundColor', '#32BF84');
                } else {
                        row.css('backgroundColor', '');
                }
        });
};

vulAfnameBeoordelenOverzicht = function(e) {
    var t;
    vulAfnameBeoordelenOverzicht2(e); 
    t = setInterval(function() {
        gBeoOverzichtIsBezig || (clearInterval(t), highlightStudents())
    }, 500);
};

hideToetsView = function() {
    hideToetsView2();
    highlightStudents();
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
        $('#hbo-ict-selector').change();
};

$('#hbo-ict-selector-add').click(function() {
        var groupName = window.prompt("Naam van de groep");
        var studentNumbers = [ ... new Set([...window.prompt("kopieer en plak uit DLO: Groepen -> kolom: Leden -> alle tekst (achternaam, voornaam, emailadres, student nummer)").matchAll(/(500[0-9]{5,})/g)].flat() ];

        hboIctScriptData.groups[groupName] = studentNumbers;
        localStorage.setItem("hbo_ict_groups", JSON.stringify(hboIctScriptData));
        
        hboIctLoadGroups();
});

$('body').on('change', '#hbo-ict-selector', function() {
        hboIctselectedGroupStudentNumbers = hboIctScriptData.groups[$(this).val()];
        highlightStudents();
});

hboIctLoadGroups();

$('body').on('click', '#hbo-ict-selector-delete', function() {
        var groupName = $('#hbo-ict-selector').val();
       
        delete hboIctScriptData.groups[groupName];
        localStorage.setItem("hbo_ict_groups", JSON.stringify(hboIctScriptData));
        hboIctLoadGroups();
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
