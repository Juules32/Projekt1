var value = [0, 1];

function fib(n) {
    for (let i = 2; i < n; i++) {
        value.push(value[i-1] + value[i-2]);
    }
    document.getElementById("fibonacci").innerHTML = value;
    console.log(value);
    value = [0, 1];
}
