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