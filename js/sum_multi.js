function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += parseInt(arr[i]);
    }
    console.log("Total Sum is " + total);
    return total;
}

function multiply(arr) {
    let total = 1;
    for (let i = 0; i < arr.length; i++) {
        total *= arr[i];
    }
    console.log("Total Multiply is " + total);
    return total;
}

function calculate() {
    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;
    let input3 = document.getElementById("input3").value;
    let input4 = document.getElementById("input4").value;
    let arr = [input1, input2, input3, input4];
    document.getElementById("res4_1").innerHTML = sum(arr) +  " (Sum)";
    document.getElementById("res4_2").innerHTML = multiply(arr) +  " (Multiply)";
}