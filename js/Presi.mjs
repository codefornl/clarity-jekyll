export default function (cbase, template) {
    var showcases = cbase["_embedded"];

    function arrayRotate(arr, reverse) {
        if (reverse) arr.unshift(arr.pop());
        else arr.push(arr.shift());
        return arr;
    }

    function start() {
        document.getElementById("showcase").innerHTML = tmpl("showcase_template", showcases[0]);
    }

    function next() {
        document.getElementById("showcase").innerHTML = tmpl("showcase_template", arrayRotate(showcases)[0]);
    }

    function prev() {
        document.getElementById("showcase").innerHTML = tmpl("showcase_template", arrayRotate(showcases, true)[0]);
    }

    return {
        start: start,
        next: next,
        prev: prev
    };
};