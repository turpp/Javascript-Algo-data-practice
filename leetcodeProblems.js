//Given a roman numeral, convert it to an integer.
var romanToInt = function(s) {
    //given a roman convert it to a number
    //input= string output numbr
    //"II" => 2 "IV" => 4
    //take input and check to see if there are any edgecases for subtraction
    //if there is an edge case do subtraction
    //if there is an edge case do addition
    //add or subtract each numeral to get total
    let romanArr = s.split("");
    let converted = []
    
    for(numeral of romanArr){
        switch(numeral){
            case "I":
                converted.push(1)
                break;
            case "V":
                converted.push(5)
                break;
            case "X":
                converted.push(10)
                break;
            case "L":
                converted.push(50)
                break;
            case "C":
                converted.push(100)
                break;
            case "D":
                converted.push(500)
                break;
            case "M":
                converted.push(1000)
                break;
            default:
                console.log("invalid input")       
        }
    }
    console.log(converted)
    let number = 0
    for(let i = 0; i < converted.length; i++){
        if(converted[i] < converted[i+1]){
            let diff = converted[i+1] - converted[i]
            number += diff
            i++
        } else {
            number += converted[i]
        }
    }
       return number
    
};


//longest common prefix. 

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".



var longestCommonPrefix = function(strs) {
    //given an array of strings find out how they start the same. if they do not start the same return empty string
    //input => array of strings
    //output => string of common letters at the beginning of all the words in array
    //if no common return ""

    //["hi", "high", "height"] => "h"
    //["dog", "car", "bird"] => ""

    //take the first word and compare it to the next word.
    //compare each letter to see if they match. if they match add letter to an array. once they stop matching stop and move to next letter
    //this time compare letters in the array to the rest of the words. 
    //if they all match move to next word
    //if they do not match remove a letter from the array
    //once went through all words join the array and return it.

    let commonLetters = []

    if(strs.length == 1){
        return strs[0]
    }

    for(word of strs){
        if(word == strs[0]){
        for(let i = 0; i < word.length; i++){
            if(word[i] == strs[1][i]){
                commonLetters.push(word[i])
            } else {
                break;
            }
        }
    } else{
        if(commonLetters.length == 0){
            break;
        }
        for(let i = 0; i < commonLetters.length; i++){
            if(commonLetters[i] !== word[i]){
                let num = (commonLetters.length + 1) - i;
                commonLetters.splice(i,num)
                break;
            }
        }
    }
    }

  
    return commonLetters.length == 0 ? "" : commonLetters.join('')
   
};



//======Palindrome Number==========
 function isPalindrome(int){
    //understand given a number check to see if it is a plaidrome if it is return true if not false

    //breakdown
        //take number and split it into an array and then reverse the array
        //then compare the two arrays. if they are the same then true if not return false

    if(int < 0){
        return false
    }

    let intArr = String(int).split("")
    let reversedIntArr = [...intArr]

    return intArr.join("") == reversedIntArr.reverse().join("") ? true : false
 }

