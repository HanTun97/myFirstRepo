function printOddNumbersOnly(arr){
    let odd = arr.filter(item => (item%2) != 0);
    console.log("Total Print Odd is " + odd);
    return odd;
}

function oddNum() {
    let input1 = document.getElementById("odd1").value;
    let input2 = document.getElementById("odd2").value;
    let input3 = document.getElementById("odd3").value;
    let input4 = document.getElementById("odd4").value;
    let arr = [input1, input2, input3, input4];
    document.getElementById("res9").innerHTML = printOddNumbersOnly(arr);
} 