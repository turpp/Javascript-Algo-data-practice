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