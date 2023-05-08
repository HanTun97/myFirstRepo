function maxOfThree() {
    let i;
    let max = -Infinity;
    for (i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    console.log("Max number is " + max);
    return max;
}

function computeMax2() {
    let input1 = document.getElementById("num3").value;
    let input2 = document.getElementById("num4").value;
    let input3 = document.getElementById("num5").value;
    document.getElementById("res2").innerHTML = maxOfThree(input1, input2, input3);
}