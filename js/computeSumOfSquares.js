function computeSumOfSquares(arr){
    let total = arr.reduce((sum, current) => sum + current*current, 0);
    console.log("Total Square Sum is " + total);
    return total;
}

function calculateSquareTotal() {
    let input1 = document.getElementById("square1").value;
    let input2 = document.getElementById("square2").value;
    let input3 = document.getElementById("square3").value;
    let input4 = document.getElementById("square4").value;
    let arr = [input1, input2, input3, input4];
    document.getElementById("res8").innerHTML = computeSumOfSquares(arr);
} 