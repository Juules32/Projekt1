console.clear()
a = [1]

function g(a) {
    let t = [];
    for (e of a) {
        if(e == t[0] || t.length < 1) {
            t.push(e)
        }  else {
            return t;
        }
    }
    return t;
}
function r(a) {
    var set = g(a)
    var str = String(set.length) + String(a[0])
    a.splice(0, set.length)
    if(a.length > 1) {
        str += r(a)
    }
    else if (a.length == 1) {
        str += "1" + a[0];
    }
    return str
}


function repeat(value, max, x) {

    if (!x) {
        x = 0
    }
    x++;
    
    if (typeof value == "string") {
        value = value.split('')
    }

    let new_value = r(value)

    console.log(`x: ${x}; ${new_value}`)

    if (x >= max) {
        return
    }
    repeat(new_value, max, x)
}

