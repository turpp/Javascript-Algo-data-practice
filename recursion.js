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



//Reursion
//1. Has a base case that stops the recursion
//2. calls itself with a differetn argument passed

//Call stack
    // when a function is invoked it is added to the top of the call stack
    //whenever a function is done or hits a return it is removed from the stack
    //recusive functions work by adding itself to the call stack till the base case it reached
    //once the base case is reached it can then solve the rest of the functions on the stack

//Helper Recursion
    //having an outer function that has a inner recursive function
    //this allows you to have an outside data structure that you can build with your inner recursive function


function power(base,exp){
    //Understand
        //function that takes in a base and an exponent and returns the product
        //inputs are numbers. First is the base and the second is the power
        //output product of the power
    //examples
        //(2,2) = 4 => 2*2
        //(2,3) = 8 => 2*2*2
    //break it down
        //needs to multiply the base by itsself as many times as the exponent says
        //base will stay the same
        //exponent will decrease by one on each call
        //will stop decreaseing till exponent is = 1 => base case
        //arg will be exp - 1 on the recall

    //base
        if(exp === 0) return 1
        if(exp === 1) return base
        let newExp = exp - 1
        return base * power(base, newExp)
}


function factorial(num){
    //Understand
        //write a function that takes in a number and multiples all the numbers less in order till it reaches number
        //input number
        //output product of the multiplication of all the numbers
    //examples
        //(2) = 1*2 => 2
        //(4) = 1*2*3*4 => 24
    //Break it down
        //need to decrease the number down to 1
        //when it hits one then that will stop => base case
        //call its self passing in num - 1
        if(num === 0) return 1
        if(num ===1) return 1
        return num * factorial(num - 1)
}



function productOfArray(arr){
    //understand
        //write a function that takes in an array and returns the product of all the elements in the array
        //inputs = array of numbers
        //output = product of all the numbers in the array
    //examples
        //[1,2,3] = 1*2*3 => 6
        //[1,2,3,4,5,6] = 1*2*3*4*5*6 => 720 ~
    //Break it down
        //will need to decrease the arr.length by 1 element each time when calling itsself
        //will go till the length of the arr is 1 and will return that number => basecase

    if(arr.length === 1) return arr[0]
    return arr[0] * productOfArray(arr.slice(1))
}


function recursiveRange(num){
    //understand
        //takes in a number and starts at 0 and addes every number up to the orignal number and returns the sum
        //inputs = number
        // output = sum of all then numbers from 0 to num
    //examples
        //(3) = 0 + 1 + 2 + 3 => 6
        //(5) = 0 + 1 + 2 + 3 + 4 +5 +6 => 21
    //break it down
        //will decrease the num by 1 till the base case
        //will stop decreaseing whenever the num = 0
    if(num === 0) return 0
    if(num > 0){
        return num + recursiveRange(num - 1)
    } else {
        return num + recursiveRange(num + 1)
    }
}

function fib(num,arr){
    //understand
        //takes in a number that represents a place in the fibonacci sequence. must return what that number is in that place
        //the fibonacci sequence starts with 1,1 and then after each number is the sum of the previous two
        //inputs = number that represents place on fib seq
        //outputs = the number that represents the number in the sequence
    //examples 
        // fib(4) // 3 => 1,1,2,3
        // fib(10) // 55
        // fib(28) // 317811
        // fib(35) // 9227465
    
}


