function max(firstNum, secondNum){
    let max = -Infinity;
    if (firstNum > secondNum) {
        max = firstNum;
    } else {
        max = secondNum;
    }  
    console.log("Max number is " + max);
    return max;
}

function computeMax1() {
    let input1 = document.getElementById("num1").value;
    let input2 = document.getElementById("num2").value;
    document.getElementById("res1").innerHTML = max(input1, input2);
}