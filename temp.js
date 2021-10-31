//=======frequency counter problem========
function sameFrequency(num1, num2){
    //understand
        //inputs two positive integers
        //find out if they have the same amount of each indv number in them.
    //breakdown
        //create two objects and loop through each digit of each number and odd them to the objecct
            //if no number add it if number already there increase it
            //then compare the two objects at the end to make sure they are the same.

    //example
        //123  321 => true
    if(num1.length !== num2.length){
        return false
    }

// [1,2,3] [3,2,1]
    let numArr1 = Array.from(String(num1))
    let numArr2 = Array.from(String(num2))

    let freqObj ={}
    let freqObj2 = {}

    for(num of numArr1){
        if(freqObj[num]){
            freqObj[num] += 1
        } else {
            freqObj[num] = 1
        }
    }

    for(num of numArr2){
        if(freqObj2[num]){
            freqObj2[num] += 1
        } else {
            freqObj2[num] = 1
        }
    }

    for(key in freqObj){
        if(freqObj2[key] !== freqObj[key]){
            return false
        }
    }

    return true
}






function areThereDuplicates(...args){
    //understand
        //input will vary insize but will be represented as an array
        //need to look through the array and check to see if ther are any duplicates
        //return true if there is a duplicate and false if no duplicate
    //breakdown
        //created a counter object and go through each element of the input array. add them up. if there are more than one return false


    let counterObj = {}

    for(input of args){
        if(counterObj[input]){
            return true
        } else {
            counterObj[input] = 1
        }
    }
    console.log(counterObj)

    return false
}

//=======multiple pointer==========


function areThereDuplicatesPointerMethod(...args){
    let sortedArgs = args.sort((a,b) => a - b)

    let left = 0
    let right = 1

    while(right < args.length){
        if(sortedArgs[left] === sortedArgs[right]){
            return true
        }
        left++
        right++
    }

    return false

}


function averagePair(array, avg){
    //understand
        //inputs sorted array of integers and a value that represetns an average
        //look through the array and see if any two elements have an average equal to the avg
    //breakdown
        //since array is sorted I will start with a pointer on the start and end
        //find the average. if the average is smaller than avg will increase start
        //if average is bigger will decresase end
        //once the two pointers pass each other then there is no average and can return false

    //example
        //[1,2,3], 2.5
    
    let start = 0
    let end = array.length-1

    while(start < end){
        let computedAvg = ((array[start] + array[end])/2)
        if(computedAvg ===  avg){
            return true
        }

        if( computedAvg < avg){
            start++
        } else {
            end--
        }
    }

    return false
}

function isSubsequence(str1, str2){
//understand
    //inputs => two strings. first string is smaller than the second. The first string must be in the second string
        //they do not have to be together but the have to appear in the same order
        //return ture if sub string is presetn and false if it is not
    //breakdown
        //create two pointers. One pointer for str1 and one for str2 starting at the begining
        //check to see if they match.
            //if they match increase both counters 
            //if no match increase the str2 counter
        //keep increaseing till the str1 counter or str2 counter is equal to lenght of string
    if(str1.length > str2.length){
        return false
    }
    //example 
        //sing sting
    let str1Point = 0
    let str2Point = 0

    while ((str1Point < str1.length) && (str2Point < str2.length)){
        if(str1[str1Point] === str2[str2Point]){
            str1Point++
            str2Point++
        } else {
            str2Point++
        }
    }

    return str1Point === str1.length ? true : false
}



//========sliding window================

function maxSubarraySum(array, int){
    //understand
        //inputs => array of number and a number that represents length of subarray
        //return the largest sum fount
    //breakdown
        //create an varaible for maxsum.
        //create a windown of the length of int passed in
        //find the sum of that windown and then increase everything by one
        //once the end of window is equal to the length of array stop the loop and return the maxsum var
    
    // example
        // [1,2,3,4,5],2 => 9
    let maxSum = 0
    let left = 0
    let right = int - 1

    for(let i = 0; i < int; i++){
        maxSum += array[i]
    }
    console.log('first window', maxSum)
    while(right < array.length){
        let tempSum = maxSum
        tempSum += array[right]
        console.log('left', left , 'right', right+1 , 'sum', tempSum)
        right++
        left++
        
        if(tempSum > maxSum){
            maxSum = tempSum
        }
    }

    return maxSum
    
}






//=======minSubArrayLen===========
function minSubArrayLen(array, int){
    //understand
        //input is an array of positive numbers and an integer that represents a sum of a subarray
        //I need to find out what is the smallest subarray in the array that will give me a sum that is equal or greater than the int
    //breakdown
        //first sort the array
        //create a window with two pointers. one at the begineing and one at the end
        //increase the window till you have the passed in int or greater sum

    
    let sortedArr = array.sort((a,b) => b - a)

    if(sortedArr[0] >= int){
        return sortedArr[0]
    }

    let left = 0
    let right = 2
    let sum = sortedArr[0] + sortedArr[1]
    while(sum < int){
        sum += sortedArr[right]
        if(sum < int){
            right++
        }
    }
console.log("left",left,"right",right)
    return sum >= int ? [array[left], array[right]] : 0
}