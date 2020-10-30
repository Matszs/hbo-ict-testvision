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
