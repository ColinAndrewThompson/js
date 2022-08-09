let strs1 = ["flower","flow","flight"]  // result "fl"
let strs2 = ["dog","racecar","car"]     // result ""

function longestCommonPrefix(arrayOfStrings){
    let result = ""
    let temp = ""

        for(i=0; i<arrayOfStrings.length; i++){
            temp = arrayOfStrings[0][i];
            for(j=1; j<arrayOfStrings.length; j++){
                if(arrayOfStrings[j][i]==temp && j===arrayOfStrings.length-1){
                    result += temp
                }
                else if(arrayOfStrings[j][i] === temp){
                    continue
                }
            }
           }
    
    return result;
}

console.log(longestCommonPrefix(strs2))