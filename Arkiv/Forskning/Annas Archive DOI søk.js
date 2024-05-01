javascript:(function(){
    var selected_text = '';
    if (window.getSelection){
        selected_text = window.getSelection();
    }
    else if (document.getSelection){
        selected_text = document.getSelection();
    }
    else if (document.selection){
        selected_text = document.selection.createRange().text;
    }
    else return;
    window.open('https://annas-archive.org/search?index=journals&q=%22doi:' + selected_text,'DOI-søk Anna's Archive');
})();
