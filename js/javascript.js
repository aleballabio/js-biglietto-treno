const etaOld = 65;
const etaYoung = 17;
const prezzoalKm = 0.21;
const scontoOld = 40;
const scontoYoung = 20;

let userEtà = prompt('Quanti anni hai?');
let userKm = prompt('Quanti KM hai percorso (usare i . se in decimale)?');

let prezzoScont = 0;

let prezzoTotale = userKm * prezzoalKm;

let outputElement = document.getElementById('biglietto-treno-prezzo');

if (userEtà >= etaOld) {
    prezzoScont = prezzoTotale - (prezzoTotale * scontoOld) / 100;
    prezzoScont = prezzoScont.toFixed(2)
    outputElement.innerHTML = ('Il prezzo del suo biglietto è di' + ' ' + prezzoScont);
} else if (userEtà <= etaYoung) {
    prezzoScont = prezzoTotale - (prezzoTotale * scontoYoung) / 100;
    prezzoScont = prezzoScont.toFixed(2)
    outputElement.innerHTML = ('Il prezzo del suo biglietto è di' + '  ' + prezzoScont);
} else {
    prezzoTotale = prezzoTotale.toFixed(2)
    outputElement.innerHTML = ('Il prezzo del suo biglietto è di' + ' ' + prezzoTotale);
}