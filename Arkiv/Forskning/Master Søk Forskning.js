javascript:var a = parseInt(prompt("Søk etter forskning \nHvor vil du søke? \n1 = Anna's Archive DOI \n2 = Anna's Archive fritekst \n3 = Google Scholar \n4 = Z-Library \n5 = Library Genesis \n6 = PubMed"));

function search() {
    var selected_text = '';
    if (window.getSelection){
        selected_text = window.getSelection();
    } else if (document.getSelection){
        selected_text = document.getSelection();
    } else if (document.selection){
        selected_text = document.selection.createRange().text;
    } else return;

    if (a === 1) {
        window.open('https://annas-archive.org/search?index=journals&q=%22doi:' + selected_text,'DOI Annas Archive');
    } else if (a === 2) {
        window.open('https://annas-archive.org/search?q=' + selected_text,'Annas Archive');
    } else if (a === 3) {
        window.open('https://scholar.google.com/scholar?q=' + selected_text,'Google Scholar');
    } else if (a === 4) {
        window.open('https://singlelogin.re/s?q=' + selected_text,'Z-Library');
    } else if (a === 5) {
        window.open('https://libgen.is/search.php?req=' + selected_text,'Library Genesis');
    } else if (a === 6) {
        window.open('https://pubmed.ncbi.nlm.nih.gov/?term=' + selected_text,'PubMed');
    } else {
        alert("Ugyldig valg. Vennligst velg et tall fra 1 til 6.");
    }
}

search();
