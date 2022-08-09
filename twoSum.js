const nums = [2, 7, 11, 15]
const target = 5

var twoSum = function(nums, target) {
    let num = nums

    // could just have empty array, all depends on desired results
    let result = "result not found"
  
    for(i=0; i<num.length; i++){
      
        for(j=i+1; j<nums.length; j++){
          
          if(num[i]+num[j] === target){

            result = []
            result.push(i), result.push(j);
            break;
            
          }
          
          continue;
        }
    }
    return result;
};

console.log(twoSum(nums, target))