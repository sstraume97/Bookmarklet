/*
Marker teksten fra linje 5 til 31, dra deretter teksten til bokmerkeraden.

Teksten "Hvilke bokmerke ønsker du å aktivere? \n"
Var opprinnelig plassert her: javascript:var a = prompt(Hvilke bokmerke ønsker du å aktivere? \n"---- Arkiver side ---- \n   1 = Archive.today \n   2 = Web Archive \n   3 = PreserveTube \n---- Finn arkivert side ---- \n   4 = Archive.today \n   5 = Web Archive \n   6 = Google Cache");
*/

javascript:var a = prompt("---- Arkiver side ---- \n   1 = Archive.today \n   2 = Web Archive \n   3 = PreserveTube \n---- Finn arkivert side ---- \n   4 = Archive.today \n   5 = Web Archive \n   6 = Google Cache");
(function() {
     if (a == 1) {
         var url = encodeURIComponent(window.location.href); window.open('http://archive.today/?run=1&url='+encodeURIComponent(document.location));
      } 
         else if (a == 2) {
            var url = encodeURIComponent(window.location.href);
            window.open('https://web.archive.org/save/' + url, '_blank');
      }
        else if (a == 3) {
            var url = encodeURIComponent(window.location.href);
            window.open('https://preservetube.com/save?url=' + url, '_blank');
      }
        else if (a == 4) {
            var url = encodeURIComponent(window.location.href);
            window.open('https://archive.today/latest/'+location.href);
      }
       else if (a == 5) {
            var url = encodeURIComponent(window.location.href);
            window.open('https://web.archive.org/web/2/'+location.href);
      }
       else if (a == 6) {
            var url = encodeURIComponent(window.location.href);
            window.open('https://webcache.googleusercontent.com/search?q=cache:'+location.href);
      }
}
)();
