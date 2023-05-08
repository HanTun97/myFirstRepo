function computeSumOfSquaresOfEvensOnly(arr){
    let total = arr.reduce(function (sum, current) { 
        if((current%2) == 0)
            sum += current * current; 
        return sum;
    }, 0);
    console.log("Total Even Square Sum is " + total);
    return total;
}

function calculateEvenSquareTotal() {
    let input1 = document.getElementById("se1").value;
    let input2 = document.getElementById("se2").value;
    let input3 = document.getElementById("se3").value;
    let input4 = document.getElementById("se4").value;
    let arr = [input1, input2, input3, input4];
    document.getElementById("res10").innerHTML = computeSumOfSquaresOfEvensOnly(arr);
} 