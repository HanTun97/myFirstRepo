function sumReduce(arr) {
    let total = arr.reduce((sum, current) => sum + parseInt(current), 0);
    console.log("Total Sum is " + total);
    return total;
}

function multiplyReduce(arr) {
    let total = arr.reduce((sum, current) => sum * current, 1);
    console.log("Total Multiply is " + total);
    return total;
}

function calculateSumMultiply() {
    let input1 = document.getElementById("rinput1").value;
    let input2 = document.getElementById("rinput2").value;
    let input3 = document.getElementById("rinput3").value;
    let input4 = document.getElementById("rinput4").value;
    let arr = [input1, input2, input3, input4];
    document.getElementById("res11_1").innerHTML = sumReduce(arr) +  " (Sum)";
    document.getElementById("res11_2").innerHTML = multiplyReduce(arr) +  " (Multiply)";
}