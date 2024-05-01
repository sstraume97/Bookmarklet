/*
Marker teksten fra linje 5 til 16, dra deretter teksten til bokmerkeraden.
*/

javascript:var a = prompt("Hvilke bokmerke ønsker du å aktivere? \n1 = Archive.today \n2 = PreserveTube");
(function() {
     if (a == 1) {
         var url = encodeURIComponent(window.location.href); window.open('http://archive.today/?run=1&url='+encodeURIComponent(document.location));
      } 
         else if (a == 2) {
            var url = encodeURIComponent(window.location.href);
            window.open('https://preservetube.com/save?url=' + url, '_blank');
      } 
}
)();
