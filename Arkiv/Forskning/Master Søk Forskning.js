/*
Under utvikling.
Use this as a bookmarklet by saving it as a web browser bookmark. Then mark a piece of text in a page and click the bookmark.
*/

javascript:var a = prompt("Hvilke språk ønsker du å søke på? \n1 = Norsk \n2 = Engelsk \n3 = Dansk \n4 = Svensk \n5 = Nynorsk");
(function() {
    if (a == 1) {
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
    } else if (a == 2) {
        function se(d) {
            return d.selection ? d.selection.createRange().text : d.getSelection()
            }
            s = se(document);
            for (i=0; i<frames.length && (s==null || s==''); i++) 
                s = se(frames[i].document);
            if (!s || s=='') 
                s = prompt('Enter search terms for Wikipedia','');
          open('https://en.wikipedia.org' + (s ? '/w/index.php?title=Special:Search&search=' + encodeURIComponent(s) : ''))
          .focus();
    } else if (a == 3) {
        function se(d) {
            return d.selection ? d.selection.createRange().text : d.getSelection()
            }
            s = se(document);
            for (i=0; i<frames.length && (s==null || s==''); i++) 
                s = se(frames[i].document);
            if (!s || s=='') 
                s = prompt('Enter search terms for Wikipedia','');
          open('https://dk.wikipedia.org' + (s ? '/w/index.php?title=Special:Search&search=' + encodeURIComponent(s) : ''))
          .focus();
    } else if (a == 4) {
        function se(d) {
            return d.selection ? d.selection.createRange().text : d.getSelection()
            }
            s = se(document);
            for (i=0; i<frames.length && (s==null || s==''); i++) 
                s = se(frames[i].document);
            if (!s || s=='') 
                s = prompt('Enter search terms for Wikipedia','');
          open('https://sv.wikipedia.org' + (s ? '/w/index.php?title=Special:Search&search=' + encodeURIComponent(s) : ''))
          .focus();
      } else if (a == 5) {
        function se(d) {
            return d.selection ? d.selection.createRange().text : d.getSelection()
            }
            s = se(document);
            for (i=0; i<frames.length && (s==null || s==''); i++) 
                s = se(frames[i].document);
            if (!s || s=='') 
                s = prompt('Enter search terms for Wikipedia','');
          open('https://nn.wikipedia.org' + (s ? '/w/index.php?title=Special:Search&search=' + encodeURIComponent(s) : ''))
          .focus();
    } 
})();
