javascript:(function() {
    function removeEmpty(elem) {
        var children = elem.children;
        for (var i = 0; i < children.length; i++) {
            if (children[i].textContent.trim() === '' && children[i].innerHTML.trim().length === 0) children[i].parentNode.removeChild(children[i]);
        }
        return elem;
    }

    function convertAbsolute(url) {
        let absolute = new URL(url, document.baseURI).href;
        return absolute;
    }

    function loadScript(url, callback) {
        var head = document.getElementsByTagName("head")[0];
        var script = document.createElement("script");
        script.src = url;
        var done = false;
        script.onload = script.onreadystatechange = function() {
            if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
                done = true;
                callback();
                script.onload = script.onreadystatechange = null;
                head.removeChild(script);
            }
        };
        head.appendChild(script);
    }

    function getSelectionText() {
        var text = "";
        if (window.getSelection) {
            var selectionhtml = rangy.getSelection().toHtml();
            var cleaned = selectionhtml.replace(/(<\/?(?:a|b|p|img|h1|h2|h3|h4|h5|em|strong|ul|ol|li|blockquote)[^>]*>)|<[^>]+>/ig, '%$1');
            var htmlfragment = document.createRange().createContextualFragment(cleaned);
            var descendents = htmlfragment.querySelectorAll("*");
            for (var i = 0; i < descendents.length; i++) {
                e = descendents[i];
                e.removeAttribute("style");
            }
            var links = htmlfragment.querySelectorAll("a");
            links.forEach(e => {
                e.href = convertAbsolute(e.href);
                e.setAttribute("target", "_blank");
                e.setAttribute("rel", "noopener");
            });
            var images = htmlfragment.querySelectorAll("img");
            images.forEach(e => {
                e.src = convertAbsolute(e.src)
            });
            var div = document.createElement('div');
            div.appendChild(htmlfragment.cloneNode(true));
            removeEmpty(div);
            var html = div.innerHTML;
            return (html);
        } else if (document.selection && document.selection.type != "Control") {
            text = document.selection.createRange().text;
        }
    }

    function getMeta(metaName) {
        const metas = document.getElementsByTagName('meta');
        for (let i = 0; i < metas.length; i++) {
            if (metas[i].getAttribute('name') === metaName) {
                return metas[i].getAttribute('content');
            } else if (metas[i].getAttribute('property') === metaName) {
                return metas[i].getAttribute('content');
            }
        }
        return '';
    }
    var qburl = "";

    function blogquote() {
        loadScript("https://cdnjs.cloudflare.com/ajax/libs/rangy/1.3.0/rangy-core.min.js", function() {
            if (getMeta("twitter:title")) {
                var title = getMeta("twitter:title");
            } else if (getMeta("og:title")) {
                var title = getMeta("og:title");
            } else {
                var title = document.title;
            }
            if (getMeta("author")) {
                var author = getMeta("author");
            } else {
                var author = getMeta("twitter:site");
            }
            var title = encodeURIComponent(title);
            var url = encodeURIComponent(document.location);
            var quote = encodeURIComponent(getSelectionText());
            var author = encodeURIComponent(author);
            qburl = `https://quotebacks.net/?url=${url}&title=${title}&author=${author}&quote=${quote}`;
        });
        console.log(qburl);
    }
    document.addEventListener("securitypolicyviolation", function(e) {
        var quote = encodeURIComponent(window.getSelection().toString());
        if (getMeta("twitter:title")) {
            var title = getMeta("twitter:title");
        } else if (getMeta("og:title")) {
            var title = getMeta("og:title");
        } else {
            var title = document.title;
        }
        if (getMeta("author")) {
            var author = getMeta("author");
        } else {
            var author = getMeta("twitter:site");
        }
        var title = encodeURIComponent(title);
        var url = encodeURIComponent(document.location);
        var author = encodeURIComponent(author);
        qburl = `https://quotebacks.net/?url=${url}&title=${title}&author=${author}&quote=${quote}`;
    });
    blogquote();
    console.log(qburl);

    function checkVariable() {
        if (qburl) {
            window.open(qburl);
        }
    }
    setTimeout(checkVariable, 100);
})();
