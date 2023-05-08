var seq = [];

function printFibo(n, a, b) {
    if (n == 0) return 1;
    seq.push(a);
    nextTerm = a + b;
    let fibo = printFibo(n - 1, b, nextTerm)
    return seq;
}

function fibo() {
    let length = document.getElementById("fi1").value;
    let input1 = document.getElementById("fi2").value;
    let input2 = document.getElementById("fi3").value;
    document.getElementById("res12").innerHTML = printFibo(length, parseInt(input1), parseInt(input2));
    console.log("Total Fibonacci sequence is " + seq);
} 