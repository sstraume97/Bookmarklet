javascript:var a = prompt("Hvilke bokmerke ønsker du å aktivere? \n1 = Archive.today \n2 = 1ft betalingsmur \n3 = PreserveTube \n4 = MediaWiki2LaTeX");
(function() {
     if (a == 1) {
         var DELAY = 0;
         var url = encodeURIComponent(window.location.href);
         window.open(%27http://archive.today/?run=1&url=%27+encodeURIComponent(document.location));
    }
     else if (a == 2) {
         void(location.href=%27https://1ft.io/%27+location.href);
    }
     else if (a == 3) {
         var url = encodeURIComponent(window.location.href);
        window.open(%27https://preservetube.com/save?url=%27 + url, %27_blank%27);
    }
     else if (a == 4) {
         var url = encodeURIComponent(window.location.href);
        window.open(%27https://mediawiki2latex.wmflabs.org/fill/%27 + url, %27_blank%27);
    }
}
)();
