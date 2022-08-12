let s1 ="how are you"
let s2 ="I am doing exuberantly"

function lengthOfLastWord(stringOfWords){
    let result = 0

    for(i=0; i<stringOfWords.length; i++){
        if(stringOfWords[i] === " "){
            result = 0
        }
        if(stringOfWords[i] != " "){
            result++
        }
    }

    return result

}

console.log(lengthOfLastWord(s2))