javascript:var a = prompt("Hvilke bokmerke ønsker du å aktivere? \n1 = 1ft.io \n2 = Remove Paywall \n3 = SBS Fifteen Feet \n4 = SMRY.ai \n5 = 12ft.io \n6 = Google cache \n7 = Facebook-redirect");
(function() {
     if (a == 1) {
         void(location.href='https://1ft.io/'+location.href);
    }
     else if (a == 2) {
         void(location.href='https://www.removepaywall.com/'+location.href);
    }
     else if (a == 3) {
         void(location.href='https://sbs-fifteen-feet.netlify.app/proxy?q='+location.href);
    }
     else if (a == 4) {
         void(location.href='https://smry.ai/'+location.href);
    }
     else if (a == 5) {
         void(location.href='https://12ft.io/'+location.href);
    }
     else if (a == 6) {
         void(location.href='https://webcache.googleusercontent.com/search?q=cache:'+location.href);
    }
     else if (a == 7) {
         void(location.href='https://facebook.com/l.php?u='+location.href);
    }
}
)();
