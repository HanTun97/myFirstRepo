function reverse(str){
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    console.log(str +" Reverse is " + result);
    return result;
}

function changeReverse() {
    let str = document.getElementById("reverse").value;
    document.getElementById("res5").innerHTML = reverse(str);
} 