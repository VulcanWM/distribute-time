var doc = new jsPDF();

 function saveDiv(divId, title, name) {
  doc.fromHTML(`<html><head><title>${title}</title></head><body>` + document.getElementById(divId).innerHTML + `</body></html>`);
  doc.save(name + '.pdf');
}
