javascript:var a=prompt("Hvilke bokmerke ønsker du å aktivere? \n1 = Mini iframe side fra URL \n2 = Stor iframe side fra URL \n3 = Rediger nettsiden \n4 = Bygg inn side fra URL på ny about:blank \n5 = Stor iframe Google søkeside"); 
(function() { 
    if (a == 1) {
        var s = prompt("What website?");
        (function() {
            var a, b, c;
            c = s;
            b = document.createElement("iframe");
            b.setAttribute("src", c);
            b.setAttribute("id", "rusic-modal");
            b.setAttribute("style", "position: fixed; z-index: 999999; width: 400px; height: 270px; left: 10px; top: 10px; border: 5px solid #009933; overflow: hidden; background-color: #fff;");
            a = document.getElementsByTagName("body")[0];
            a.appendChild(b);
        }).call(this);
    } else if (a == 2) {
        var s = prompt("What website?");
        (function() {
            var a, b, c;
            c = s;
            b = document.createElement("iframe");
            b.setAttribute("src", c);
            b.setAttribute("id", "rusic-modal");
            b.setAttribute("style", "position: fixed; z-index: 999999; width: 1375px; height: 675px; right: 0px; top: 0px; border: 0px solid #8834af; overflow: hidden; background-color: #fff;");
            a = document.getElementsByTagName("body")[0];
            a.appendChild(b);
        }).call(this);
    } else if (a == 3) {
        document.body.contentEditable = 'true'; 
        document.designMode = 'on'; 
        void 0;
    } else if (a == 4) {
        (function () {
            var url = prompt("Paste the link you want to be embedded into an about:blank page.", "ex. https://example.com");
            var win = window.open();
            win.document.body.style.margin = "0";
            win.document.body.style.height = "100vh";
            var iframe = win.document.createElement("iframe");
            iframe.style.border = "none";
            iframe.style.width = "100%";
            iframe.style.height = "100%";
            iframe.style.margin = "0";
            iframe.referrerpolicy = "no-referrer";
            iframe.allow = "fullscreen";
            iframe.src = url.toString();
            win.document.body.appendChild(iframe);
            var script = win.document.createElement("script");
            script.src = "https://3kh0.github.io/js/main.js";
            win.document.body.appendChild(script);
        })();
    } else if (a == 5) {
        (function() {
            var a, b, c;
            c = "https://www.google.com/?igu=1";
            b = document.createElement("iframe");
            b.setAttribute("src", c);
            b.setAttribute("id", "rusic-modal");
            b.setAttribute("style", "position: fixed; z-index: 999999; width: 1375px; height: 675px; right: 0px; top: 0px; border: 0px solid #8834af; overflow: hidden; background-color: #fff;");
            a = document.getElementsByTagName("body")[0];
            a.appendChild(b);
        }).call(this);
    } 
})();
