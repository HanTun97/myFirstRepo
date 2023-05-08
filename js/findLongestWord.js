function findLongestWord(arr){
    let words_len = arr.map(word => word.length).reduce(function (large, current) { 
        if(current > large) large = current;
        return large; 
    }, 0);
    console.log("Total Longest Words is " + words_len);
    return words_len;
    // let large = 0;
    // let words_len = arr.map(word => word.length);
    // let word_length = 0;
    // words_len.forEach((element) => {
    //     if (element > word_length) {
    //         word_length = element;
    //     }
    //   });
    // return word_length;
}

function longestWord() {
    let input1 = document.getElementById("word1").value;
    let input2 = document.getElementById("word2").value;
    let input3 = document.getElementById("word3").value;
    let input4 = document.getElementById("word4").value;
    let arr = [input1, input2, input3, input4];
    document.getElementById("res6").innerHTML = findLongestWord(arr);
} 