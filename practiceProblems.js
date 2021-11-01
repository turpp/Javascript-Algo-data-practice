//General Problem Solving
//1. Understand the problem
    // - restate in own words
    // what are my inputs?
    // what are my outputs?
    //can outputs be determined by my inputs?
    //how to label the important pieces of data that are part of the problem
//2. Concret Examples
    //start with the simplest example
    //make a harder example
    //examples with empty inputs
    //example with invalid inputs
//3. Break it down
    //write out steps in plain english
    //help catch any sticking points
//4. solve or simplify
    //if you can solve solve
    //if you can not get started with what you can and leave plain english break down for later
//5. look back and refactor
    //does it get the correct results?
    //easily readable
    //imporove performance
    //how could you have solved it differently
    //how have other done it






//Freuency Counter Pattern
// use an object to tract to frequnecy/break down of an input and then compare it to the break down of the other input
//use whenever you have two inputs that you need to compare to each other. Can be strings or numbers

function validAnagram(str1, str2){
    //understand
        //inputs are strings all lowercase and letters only
        //output is a boolean
    //examples
        //'cat' 'tac' return true
        // 'hi' 'bye' return false
        // 'hello' 'elhlo' return true
    //Break down
        //Create an charMap for the first input
        //Create a charMap for the second input
        //compare each key in object to other charMap.
            //if different return false
        //return true

    let charMap1 = {}
    let charMap2 = {}

    for(let char of str1){
        if(charMap1[char]){
            charMap1[char] += 1
        } else{
            charMap1[char] = 1
        }
    }
 console.log(charMap1)
    for(let char of str2){
        if(charMap2[char]){
            charMap2[char] += 1
        } else{
            charMap2[char] = 1
        }
    }
console.log(charMap2)
    for(let key in charMap1){
        if(charMap2[key]){
            if(charMap2[key]!==charMap1[key]){
                return false
            }
        } else {
            return false
        }
    }

    return true
}

function sameFrequency(num1, num2){
    //understand
        //two inputs. both are positive numbers.
        //check to see if both inputs contain the same numbers and the same amount of each number
        //return true or false
    //examples
        //123, 321 => true
        //123, 1234 => false
        //123, 543 => false
    //break down
        //Take each number and turn it into an array.
        //loop through array and create an object with number as key and how many times it occurs as the value
        //compare each object to make sure its the same.
        //if same return true if not false

    let freqObj1 = {}
    let freqObj2 = {}

    let arr1 = Array.from(String(num1), Number)
    let arr2 = Array.from(String(num2), Number)
    

    if(arr1.length !== arr2.length){
        return false
    }

    for(let num of arr1){
        if(freqObj1[num]){
            freqObj1[num] +=1
        } else {
            freqObj1[num] = 1
        }
    }

    for(num of arr2){
        if(freqObj2[num]){
            freqObj2[num] +=1
        } else {
            freqObj2[num] = 1
        }
    }
    console.log(freqObj1)
    console.log(freqObj2)

    for(key in freqObj1){
        if(freqObj2[key] && ( freqObj1[key] == freqObj2[key])){
            
        } else {
            return false
        }
    }

    return true



        
}

function areThereDuplicates(...args){
    //understand
        //input can be be anything and also can vary in number of aruguments
        //check the input to see if there are any duplicate inputs
        //return true or false
    //breakdown
        //use the rest operator to allow function to take multiple arguments and also produce an array of the arguemnts to iterate through
        //produce and object with key of argument and the value the number of times it is in our arg array
        //look through the object and see if there are any value of two.
        //if value of two return false else return true

    let argMap = {}
    for(let arg of args){
        if(argMap[arg]){
            argMap[arg] += 1
        } else {
            argMap[arg] = 1
        }
    }


    for(let key in argMap){
        if(argMap[key] == 2){
            return true
        }
    }

    return false

}

//Multiple Pointers
    // use with strings and arrays
    //use two pointers to progress throught the input
    //pointers can start anywhere
    //pointers can go in any direction
    //only used on sorted stuff

function countUniqueValues(arr){

    //Understand
        //how many different numbers are in this array
        //input array of number sorted
        //output is the number of unquie values
    //concrete examples
        //[1,2,3] returns 3
        //[1,1,1] return 1
        //[-1,0,1,2,2,3] returns 5
    //Break it down
        //create pointer1
        //create pointer2
        //while pointer2 is less than arr.length - 1
            //check to see if pointer1 == pointer2
            //if they are equal increase pointer2
            //if they are different increase pointer1 and then replace pointer1 with value of pointer2 in the array
        //when pointer2 is at the end of the array
        //return pointer1 + 1
    if(arr.length === 0){
        return 0
    }
    let pointer1 = 0
    let pointer2 = 1
    while(pointer2 < arr.length){
        if(arr[pointer1] == arr[pointer2]){
            pointer2++
        } else{
            pointer1++
            arr[pointer1]=arr[pointer2]
            pointer2++
        }
    }
    pointer1++
    return pointer1

}

function areThereDuplicatesPointer(...args){
    //understand
        //input can be anything and can have different number of inputs
        //check the inputs to see if there are any duplicates in the inputs
        //if a duplicate input return true else return false
    //break down
        //use rest parameter to take multiple arguments into an array
        //sort args array
        //create my pointers. left will start at beginning and right will start at next one
        //check both pointers to see if they equal each other
        //if they equal each other increase both pointers by 1.
        //if they do not eqaul each other increase right pointer
        //do this till right pointer is at the end.
        //if there is a match return true
        //if there is no match return false after right pointer hits the end
    console.log(args)
        args.sort()
        console.log(args)
        let lPoint = 0
        let rPoint = 1

        while(rPoint < args.length){
            if(args[lPoint] == args[rPoint]){
                return true
            } else {
                lPoint++
                rPoint++
            }
        }

        return false

}

function averagePair(array, targetAvg){
    //understand
        //input sorted array of numbers and a number that represents a target average
        //check to see if there are two elements of the given array that have an average of give target
        //if they do return true
        //if not return false

    //break down
        //create two pointers to go through the array.
        //left pointer start at 0 and second start at 1
        //find average of both pointers and check against target value
        //if a match return true
        //if not continue untill the right pointer is out side of the array

    if(array.length < 2){
        return false
    }

    let lPoint = 0
    let rPoint = array.length - 1

    while (rPoint > lPoint){
        let average = (array[lPoint] + array[rPoint]) / 2
        if(average == targetAvg){
            return true
        }
        if (average < targetAvg){
            lPoint++
        } else {
            rPoint--
        }

    }

    return false
}

function isSubsequence(str1, str2){
    //understand
        //inputs 2 strings
        //look to see if the same letters in str1 are in str2. They must be in the same order but do not have to be together
        //return true or false depending if str1 letters are in str2 and in corrrect order
    //break down
        //create two pointers. one will be for string 1 and second for str2.
        //start both pointers at first letter in word. 
            //if a match increase each pointer by 1.
            // if no match increase str2 pointer by 1
            //do this till pointer is out of bounds
                //if str1 pointer is out of bounds then return true if str2 pointer is out of bounds return false

    let str1Point = 0
    let str2Point = 0

    while(str2Point < str2.length){
        if(str1Point >= str1.length - 1){
            return true
        }
        if(str1[str1Point] !== str2[str2Point]){
            str2Point++
        }

        if(str1[str1Point]== str2[str2Point]){
            str1Point++
            str2Point++
        }

        
    }

    return false
}



//==============Sliding Window=====================
//useful for keeping tract of a subset of data in an array/string
//create a window and move the window depending on a condition
//does not have to be sorted

function maxSubarraySum(array, length){
    //understand
        //input is an array of number and a number that represents the lenght of the subset we will find the sum to
        //I take the input and find out what the largest sum of contiunious elements in the array for the length of the passed in
        //return the sum
    //examples
        //[1,2,3,4], 2 => 7
        //[100,200,300], 1 => 300
    //break down 
        //make a window of length elements
        //find the sum of the first window
        //then iterate through array moving the window over one element at a time
        //find sum of each window and compare it to the current max sum. save the highest
        //once finished throught he array return the max sum

    let maxSum = 0;
   
    for(let i = 0; i < length; i++){
      maxSum += array[i]
    }

    console.log(maxSum)

    let tempSum = maxSum
    for(let i = length; i < array.length; i++){
        tempSum += array[i]-array[i-length]
        console.log("front", array[i-length], "back", array[length], "old max", maxSum)
        console.log("tempSum", tempSum)
        console.log('i =', i)
        if(tempSum > maxSum){
            maxSum = tempSum
        }
    }

    return maxSum
}


function minSubArrayLen(array, int){
    //understand
        //inputs => array of positive numbers. an positive number to sum up to
        //given an array. find out the least number of elements needed to add up to the last number. Must be next to each other. if none equals it then return 0

    //break down
        //use slidingwindow method.
        //loop through the length of the array. 
        //start with a window of 1 and then move up to a window of array.lenght
        //sum the window to see if it is equal to int or more.
        //at anytime it is then return the length of the window.
        //if you go all the way through the loop and never equal or greater than int return 0.

        function minSubArrayLen(nums, sum) {
            let total = 0;
            let start = 0;
            let end = 0;
            let minLen = Infinity;
           
            while (start < nums.length) {
              // if current window doesn't add up to the given sum then 
                  // move the window to right
              if(total < sum && end < nums.length){
                total += nums[end];
                      end++;
              }
              // if current window adds up to at least the sum given then
                  // we can shrink the window 
              else if(total >= sum){
                minLen = Math.min(minLen, end-start);
                      total -= nums[start];
                      start++;
              } 
              // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
              else {
                break;
              }
            }
           
            return minLen === Infinity ? 0 : minLen;
          }
        
}




//recursion practice

function power(base, exp){
    //understand
        //inputs => base to be multipled by itself over and over determined by the exp input. all positive number inputs
    //examples
        //[2,2]=> 2 * 2 = 4
        //[2,4] => 2 * 2 * 2 * 2 = 16
    //breakdown
        //solution must be recusrse
        //we will take the base and mulitple it by itself over and over
        //base case will be my exponent down to zero
        //decrease exp each recursive call
        

    if(exp === 0) return 1
    if(exp === 1 ) return base

    let newExp = exp - 1
    return base * power(base, newExp)


    
}


function factorial(number){
    //understand
        //given a positive number return its factorial.
        //answer must be recursive
    //breakdown
        //base case will be number at 1 to return it
        //different input will be decreaseing the number by one each time
        //return will be number times the factorial function with new num

    if(number === 0){
        return 1
    }

    if(number === 1){
        return 1
    }

    let newNumber = number - 1

    return number * factorial(newNumber)
}

function productOfArray(array){
    //understand
        //input is an array of numbers
        //go through the array and mulitply each number togehter to a product and return it.
    //breakdown
        //edge case will if array is 0 return 0
        //base case will be array at 0 length
        //different input will be decreasing the size of array by 1

    if(array.length === 0 ){
        return 0
    }

    if(array.length === 1){
        return array[0]
    }

    let newArr = array.slice(1)

    return array[0] * productOfArray(newArr)


}

function recursiveRange(num){
    //understand
        //takes in a positive number and adds up all the numbers from num to 0
        //return the sum of all the numbers
    //breakdown
        //base case will be num = 1
        //different input will be decreasing number by 1
        //return willl be num plus recusrive call

    if(num === 1){
        return 1
    }

    let newNum = num - 1

    return num + recursiveRange(newNum)
}






//==================problems from mock interviwe===============
// 1- reverse a string (without using str.reverse())

function reverseStr(str){
    //understand
        //input is a string and I need to reverse the sting with out using the reverse method on the string
    //breakdown
        //creat an empty array
        //iterate through the string and either unshift from start or push if going in reverse
        //join the string and return it

        let revArr = []

        for(let i = str.length - 1; i >= 0; i--){
            revArr.push(str[i])
        }

        return revArr.join('')
}


// find out if a word is palindrome. kayak mom racecar

function isPalindrom(str){
    //understand
        //given a string find out if it is a palindrom.
    //breakdown
        //a palidrom is the same back and forth.
        //take the string and compare it to the reversed string to see if it is the same.
        //to find out if sentences are I need to use regex

    let lowercaseStr = str.toLowerCase()
    return lowercaseStr === lowercaseStr.split("").reverse().join("") ? true : false
}

// given an array of integers find the most repeated number.
function mostRepeated(arr){
    //understand
        //given an array of numbers find out which number occurs the most
    //breakdown
        //loop through the array and keep track of how many times a number comes up
        //return the number that has the most occurences

    let objMap = {}
    let numberOfRep = 0
    let mostRepeated

    for(num of arr){
        if(objMap[num]){
            objMap[num] += 1
        } else {
            objMap[num] = 1
        }
    }

    for(key in objMap){
        if(objMap[key] > numberOfRep){
            numberOfRep = objMap[key]
            mostRepeated = key
        }
    }

    return mostRepeated
}



//=========Problem from ArcBest========

//Given a string of letters that represent the week seperated by , return a string with the days given and Underscore for the days not given


//assumptions => week starts on a sunday and sunday is represented by u. input can be a mix of lowercase and capital letters and also unsorted according to calendar week
function daysOfWeek(str){
    //created array for edge case of empty string and also to replace _ with correct letter
    let resultArr = ["_","_","_","_","_","_","_"]

    //removed the ,  to get just letters and also lowercase incase there are any capital letters in input
    let cleanStr = str.replace(/[,]+/g, "").toLowerCase()

    //iterate through each letter of the cleanStr. Depending on what letter will determine what it replaces in the resultArr
    //switch statement allows for the input to be unsorted and still get a sorted result
    for(char of cleanStr){
        switch(char){
            case 'u':
                resultArr[0] = 'u'
                break
            case 'm':
                resultArr[1] = 'm'
                break
            case 't':
                resultArr[2] = 't'
                break;
            case 'w':
                resultArr[3] = 'w'
                break;
            case 'r':
                resultArr[4] = 'r'
                break;
            case 'f':
                resultArr[5] = 'f'
                break;
            case 's':
                resultArr[6] = 's'
                break;
            default:
                
        }
    }
    //join the array to return a string
    return resultArr.join(",")
}

daysOfWeek("m,t,w") 
// => '_,m,t,w,_,_,_' 

daysOfWeek("u,r,f") 
// => 'u,_,_,_,r,f,_'

daysOfWeek('U,m,R,s') 
// => 'u,m,_,_,r,_,s'

daysOfWeek('') 
// => '_,_,_,_,_,_,_'



//=============naive string search===========
//given a string and sub string. find out how many times the sub string is inside of the larger string
function subStringRepeat(lstr, str){

    //examples
        //"womgfhsomg", "omg" =2
    let numOfRepeats = 0
    
    for(let i = 0; ){
        let i = 0
        while(i < str.length){
            if(char !== str[i]){
                i = str.length
            }

            i++
            
        }

   

        if(i === str.length){
            numOfRepeats++
        }
    }

    return numOfRepeats
}





//========bubble sort=======
//[3,2,1]
function bubbleSortAcc(arr){
    
    for(let i = arr.length - 1; i >= 0; i--){
        let noSwaps
        for(let j = 0; j < i - 1 ; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                noSwaps = false
            }
        }
        if(noSwaps){
            break;
        }
    }

    return arr
}


//===============binary search================
function binarySearch(array, number){
    let left = 0
    let right = array.length - 1
    let mid = Math.floor((left + right)/2)

    while(array[mid] !== number && left <= right){
        if(number < array[mid]){
            right = mid - 1
        } else {
            left = mid + 1
        }
        mid = Math.floor((left + right)/2)
    }

    return array[mid] === number ? array[mid] : -1
}


//==========merge sort==================
//below the arrays two input array have to be already sorted. this is my helper function for the mergeSort
function mergeArrays(arr1, arr2){

    let i = 0
    let j = 0
    let resultArr = []

    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            resultArr.push(arr1[i])
            i++
        } else {
            resultArr.push(arr2[j])
            j++
        }
    }

    while(i < arr1.length){
        resultArr.push(arr1[i])
        i++
    }

    while(j < arr2.length){
        resultArr.push(arr2[j])
        j++
    }
    return resultArr
}
//this is a recursive solution and will use helper function above
//works by calling mergeSort over and over till it is reduced to one element array. then that will give an answer for the left and then right then the merge arrays get called on the two sorted halfs left and right
//big time complexety 0(n log n)
function mergeSort(array){
    //base case
    if(array.length === 1){
        return array
    }
    let mid = Math.floor(array.length/2)
    let left = mergeSort(array.slice(0, mid))
    let right = mergeSort(array.slice(mid))

    return mergeArrays(left, right)
}


//======Radix Sort===========
//used for a sorting a list of numbers
//can convert other things to numbers and do same sort but has to be in number format
//it does not compare elements together like the other sorts I have done
//it uses the last digit in each number and sorts then goes to next digit
function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
  }
  
  function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
  }
  
  function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
      maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
  }
  
  function radixSort(nums){
      let maxDigitCount = mostDigits(nums);
      for(let k = 0; k < maxDigitCount; k++){
          let digitBuckets = Array.from({length: 10}, () => []);
          for(let i = 0; i < nums.length; i++){
              let digit = getDigit(nums[i],k);
              digitBuckets[digit].push(nums[i]);
          }
          nums = [].concat(...digitBuckets);
      }
      return nums;
  }
  
  radixSort([23,345,5467,12,2345,9852])



  //===========Quick Sort================
  //Faster than bubble, selection and insertion sort
  //similar to merge sort with the fact that a one element array is already sorted
  //works by selecting a pivot point and finding the index where it should be in the sorted array
  //once pivot point is in correct position can then quick sort on either side of pivot

  function pivot(arr, start = 0, end = arr.length - 1) {
    const swap = (arr, idx1, idx2) => {
      [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };
  
    // We are assuming the pivot is always the first element
    let pivot = arr[start];
    let swapIdx = start;
  
    for (let i = start + 1; i <= end; i++) {
      if (pivot > arr[i]) {
        swapIdx++;
        swap(arr, swapIdx, i);
      }
    }
  
    // Swap the pivot from the start the swapPoint
    swap(arr, start, swapIdx);
    return swapIdx;
  }
  
  
  function quickSort(arr, left = 0, right = arr.length -1){
      if(left < right){
          let pivotIndex = pivot(arr, left, right) //3
          //left
          quickSort(arr,left,pivotIndex-1);
          //right
          quickSort(arr,pivotIndex+1,right);
        }
       return arr;
  } 
             
  quickSort([100,-3,2,4,6,9,1,2,5,3,23])


  //===========insertion sort==================
  //starts off with small sorted section and inserts where is needed
  //first element will always be sorted so start with it 
  //go to next wlement and swap if needed if not move to next iteration


  function insertionSort(arr){
	let currentVal;
    for(let i = 1; i < arr.length; i++){
        currentVal = arr[i];
        for(let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal;
    }
    return arr;
}