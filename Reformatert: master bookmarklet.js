javascript: var a = prompt("What bookmarklet would you like to activate? click=1 mini=2 x=3 fs=4 edit=5 blanker=6 browser=7 snake=8");
(function() {
        if (a == 1) {
            var DELAY = 0;
            var autoClickerStyleElement = document.createElement("style");
            autoClickerStyleElement.innerHTML = "*{cursor: crosshair !important;}";
            document.body.appendChild(autoClickerStyleElement);

            function addClicker(e) {
                if (!e.isTrusted) {
                    return;
                }
                if (e.target.classList.contains("auto-clicker-target")) {
                    e.target.classList.remove("auto-clicker-target");
                } else {
                    e.target.classList.add("auto-clicker-target");
                }
                document.body.removeChild(autoClickerStyleElement);
                document.body.removeEventListener("click", addClicker);
                e.preventDefault();
                autoClick(e.target);
            }

            function autoClick(element) {
                if (element.classList.contains("auto-clicker-target")) {
                    element.click();
                    setTimeout(function() {
                        autoClick(element);
                    }, DELAY);
                }
            }
            document.body.addEventListener("click", addClicker, 0);
        } else if (a == 2) {
            var s = prompt("What website?%22);((function()%7Bvar%20a,b,c;c=s,b=document.createElement(%22iframe%22),b.setAttribute(%22src%22,c),b.setAttribute(%22id%22,%22rusic-modal%22),b.setAttribute(%22style%22,%22position:%20fixed;%20z-index:%20999999;%20width:%20400px;%20height:%20270px;%20left:%2010px;%20top:%2010px;%20border:%205px%20solid%20#009933;%20overflow:%20hidden;%20background-color:%20#fff;%22),a=document.getElementsByTagName(%22body%22)%5B0%5D,a.appendChild(b)%7D)).call(this)} else if (a==3) {var element = document.getElementById("
                rusic - modal "); element.parentNode.removeChild(element);} else if (a==4) {var s = prompt("
                What website ? % 22);
            ((function() % 7 Bvar % 20 a, b, c; c = s, b = document.createElement( % 22 iframe % 22), b.setAttribute( % 22 src % 22, c), b.setAttribute( % 22 id % 22, % 22 rusic - modal % 22), b.setAttribute( % 22 style % 22, % 22 position: % 20 fixed; % 20 z - index: % 20999999; % 20 width: % 201375 px; % 20 height: % 20675 px; % 20 right: % 200 px; % 20 top: % 200 px; % 20 border: % 200 px % 20 solid % 20 #8834af;%20overflow:%20hidden;%20background-color:%20# fff; % 22), a = document.getElementsByTagName( % 22 body % 22) % 5 B0 % 5 D, a.appendChild(b) % 7 D)).call(this)
        } else if (a == 5) {
            document.body.contentEditable = 'true';
            document.designMode = 'on';
            void 0
        } else if (a == 6) {
            (function() {
                var url = prompt("Paste the link you want to be embedded into an about:blank page.", "ex. https://example.com");
                var urlObj = new window.URL(window.location.href);
                win = window.open();
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
            })()
        } else if (a == 7) {
            ((function() % 7 Bvar a, b, c; c = "https://www.google.com/?igu=1%22,b=document.createElement(%22iframe%22),b.setAttribute(%22src%22,c),b.setAttribute(%22id%22,%22rusic-modal%22),b.setAttribute(%22style%22,%22position:%20fixed;%20z-index:%20999999;%20width:%201375px;%20height:%20675px;%20right:%200px;%20top:%200px;%20border:%200px%20solid%20#8834af;%20overflow:%20hidden;%20background-color:%20#fff;%22),a=document.getElementsByTagName(%22body%22)%5B0%5D,a.appendChild(b)%7D)).call(this)} else if (a==8) {Q=64;m=b=Q*Q;a=[P=l=u=d=p=S=w=0];u=89;f=(h=j=t=(b+Q)/2)-1;(B=(D=document).body).appendChild(x=D.createElement("
                    p "));(X=x.style).position="
                    fixed ";X.left=X.top=0;X.background="#
                    FFF % 22; x.innerHTML = % 22 % 3 Cp % 3E % 3 C / p % 3E % 3 Ccanvas % 3E % 22; v = (s = x.childNodes)[0];
                    (s = s[1]).width = s.height = 5 * Q; c = s.getContext( % 222 d % 22); % 20 onkeydown = onblur = F = function(e, g) {
                        g ? a[f] ? (w += m, f = Math.random(l += 8) * (R = Q - 2) * R | (u = 0), F(f += Q + 1 + 2 * (f / R | 0), g)) : F(f) : 0 % 3E e ? (l ? --l : (y = t, t = a[t] - 2, F(y)), S += (w *= 0.8) / 4, m = 999 / (u++ % 20 + 10), a[h += [-1, -Q, 1, Q][d = p]] ? B.removeChild(x, alert( % 22 Game % 20 Over % 22)) : (F(h), F(e, j = h), v.innerHTML = P ? (setTimeout(F, 50, e, 0), S | 0) : % 22 Press % 20 P % 22)) : -e ? (y = (a[e] = e % 3 CQ | e % 3E = Q * Q - Q | !(e % Q) | e % Q == Q - 1 | 2 * (e == h)) + (e == f), e == h && (a[j] = 2 + h), c.fillStyle = % 22 hsl( % 22 + 99 * !a[e] + % 22, % 22 + 2 * m + % 22 % , % 22 + 50 * y + % 22 % ) % 22, c.fillRect(e % Q * 5, 5 * (e / Q | 0), 5, 5)) : isNaN(y = e.keyCode - 37) | 43 == y ? (P = y && !P) && F(-1) : % 20 p = !P | y & -4 | !(y ^ 2 ^ d) ? p : y;
                        return !1
                    };
                    for (; --b; F(b)); void % 20 F(-1)
                } {
                    alert("the actual bookmarklets are NOT BY ME");
                }
            })();
