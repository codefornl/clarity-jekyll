export default function (cbase) {
    function test () {
        console.log(cbase);
    }
    return {
        test: test
    };
};