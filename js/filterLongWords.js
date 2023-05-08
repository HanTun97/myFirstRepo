function filterLongWords(arr, limit){
    let words_arr = arr.filter(word => word.length > limit)
    console.log("Total Filter Words is " + words_arr);
    return words_arr;
}

function filterWords() {
    let input1 = document.getElementById("filter1").value;
    let input2 = document.getElementById("filter2").value;
    let input3 = document.getElementById("filter3").value;
    let limit = document.getElementById("filter4").value;
    let arr = [input1, input2, input3];
    document.getElementById("res7").innerHTML = filterLongWords(arr, limit);
} 