javascript:var a = prompt("---- Søk på Wikipedia ---- \n   1 = Norsk \n   2 = Engelsk \n   3 = Dansk \n   4 = Svensk \n   5 = Nynorsk \n---- MediaWiki2LaTeX ---- \n   6 = MediaWiki2LaTeX");
(function() {
    function se(d) {
        return d.selection ? d.selection.createRange().text : d.getSelection();
    }
    var s;
    if (a == 1) {
        s = se(document);
        for (var i = 0; i < frames.length && (s == null || s == ''); i++) 
            s = se(frames[i].document);
        if (!s || s == '') 
            s = prompt('Enter search terms for Wikipedia', '');
        open('https://no.wikipedia.org' + (s ? '/w/index.php?title=Special:Search&search=' + encodeURIComponent(s) : '')).focus();
    } else if (a == 2) {
        s = se(document);
        for (var i = 0; i < frames.length && (s == null || s == ''); i++) 
            s = se(frames[i].document);
        if (!s || s == '') 
            s = prompt('Enter search terms for Wikipedia', '');
        open('https://en.wikipedia.org' + (s ? '/w/index.php?title=Special:Search&search=' + encodeURIComponent(s) : '')).focus();
    } else if (a == 3) {
        s = se(document);
        for (var i = 0; i < frames.length && (s == null || s == ''); i++) 
            s = se(frames[i].document);
        if (!s || s == '') 
            s = prompt('Enter search terms for Wikipedia', '');
        open('https://da.wikipedia.org' + (s ? '/w/index.php?title=Special:Search&search=' + encodeURIComponent(s) : '')).focus();
    } else if (a == 4) {
        s = se(document);
        for (var i = 0; i < frames.length && (s == null || s == ''); i++) 
            s = se(frames[i].document);
        if (!s || s == '') 
            s = prompt('Enter search terms for Wikipedia', '');
        open('https://sv.wikipedia.org' + (s ? '/w/index.php?title=Special:Search&search=' + encodeURIComponent(s) : '')).focus();
    } else if (a == 5) {
        s = se(document);
        for (var i = 0; i < frames.length && (s == null || s == ''); i++) 
            s = se(frames[i].document);
        if (!s || s == '') 
            s = prompt('Enter search terms for Wikipedia', '');
        open('https://nn.wikipedia.org' + (s ? '/w/index.php?title=Special:Search&search=' + encodeURIComponent(s) : '')).focus();
    } else if (a == 6) {
        var url = encodeURIComponent(window.location.href);
        window.open('https://mediawiki2latex.wmflabs.org/fill/' + url, '_blank');
    }
})();
