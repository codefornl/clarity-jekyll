export default function (containerId, templateId, cbase) {
    var showcases = cbase["_embedded"];

    document.onkeydown = function (e) {
        switch (e.key) {
            case 'ArrowLeft': next(); break;
            case 'ArrowRight': prev(); break;
            case 'Escape': e.preventDefault(); document.getElementById('link-close').click(); break;
        }
    };

    function arrayRotate(arr, reverse) {
        if (reverse) arr.unshift(arr.pop());
        else arr.push(arr.shift());
        return arr;
    }

    function start() {
        document.getElementById(containerId).innerHTML = tmpl(templateId, showcases[0]);
        document.getElementById("link-prev").onclick = prev;
        document.getElementById("link-next").onclick = next;
    }

    function next() {
        document.getElementById(containerId).innerHTML = tmpl(templateId, arrayRotate(showcases)[0]);
        document.getElementById("link-prev").onclick = prev;
        document.getElementById("link-next").onclick = next;
    }

    function prev() {
        document.getElementById(containerId).innerHTML = tmpl(templateId, arrayRotate(showcases, true)[0]);
        document.getElementById("link-prev").onclick = prev;
        document.getElementById("link-next").onclick = next;
    }

    return {
        start: start,
        next: next,
        prev: prev
    };
};