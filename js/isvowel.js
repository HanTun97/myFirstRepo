function isVowel(argument) {
    var text;
    var argument = argument.toLowerCase();
    var vowels = (['a', 'e', 'i', 'o', 'u']);
    for (var i = 0; i <= vowels.length; i++) {
        if (argument != vowels[i]) {
            continue;
        }
        return true;
    }
    return false;
}

function findVowel() {
    let input1 = document.getElementById("vowel").value;
    let result = isVowel(input1);
    console.log("Is Vowel: " + isVowel(input1));
    document.getElementById("res3").innerHTML = result;
}