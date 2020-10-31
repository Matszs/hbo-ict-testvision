var studentNumbers = [...window.prompt("kopieer en plak uit DLO: Groepen -> kolom: Leden -> alle tekst (achternaam, voornaam, emailadres, student nummer)").matchAll(/(500[0-9]{5,})/g)].flat();

vulAfnameBeoordelenOverzicht2 = vulAfnameBeoordelenOverzicht;
highlightStudents = function() {
        Array.from(document.querySelectorAll("#beoordelen_list #toew_kandidaatnaam .innerveld")).filter(e => studentNumbers.some(t => e.textContent.includes(t))).forEach(e => {
            e.closest("tr").style.backgroundColor = "#32BF84";
        });
};

vulAfnameBeoordelenOverzicht = function(e) {
    var t;
    vulAfnameBeoordelenOverzicht2(e), t = setInterval(function() {
        gBeoOverzichtIsBezig || (clearInterval(t), highlightStudents())
    }, 500);
};

highlightStudents();
$('<div style="position: fixed; z-index: 30001; bottom: 0; left: 0; background: white; padding: 10px;"><select><option>IT101</option><option>IT102</option></select><button>+</button><button>-</button></div>').appendTo('body');
