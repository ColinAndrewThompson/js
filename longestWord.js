// find longest work in a string

let s1 = "123 1234 123456"
let s2 = "123456 1234 123"


var longestWord = function(s) {
    
    let counter = 0;
    let temp = 0;
    
    for(i=0; i<s.length; i++){
        if(s[i] != " "){
            temp +=1
        }
        if(i === s.length - 1 && temp >= counter){
            counter = temp
        }
        
        if (s[i] === " " && temp >= counter ){
            counter = temp
            temp = 0
        }
        
        if(s[i] === " "){
            temp = 0
        }
    }
    
    return counter
    
};

console.log(longestWord(s2));