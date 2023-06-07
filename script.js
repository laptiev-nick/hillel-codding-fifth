const numbers = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

let sumOfPositive = 0;
let amountOfPositive = 0;
let maxElement = numbers[0];
let ordinalNumber = 0;
let amountOfNegative = 0;
let amountOfOddPositive = 0;
let amountOfEvenPositive = 0;
let sumOfEvenPositive = 0;
let sumOfOddPositive = 0;
let positiveElemsMultiply = 1;


for(let i = 0; i < numbers.length; i++){
   
    if(numbers[i] > 0){                                         
        sumOfPositive += numbers[i];                    
        amountOfPositive++;
        positiveElemsMultiply *= numbers[i];           

        if(numbers[i] % 2 === 0){
            sumOfEvenPositive += numbers[i];           
            amountOfEvenPositive++;                      
        }
        else{
            sumOfOddPositive += numbers[i];             
            amountOfOddPositive++;                      
        }
    }

    if(maxElement < numbers[i]){                                
        maxElement = numbers[i];
        ordinalNumber = i;
    }

    if(numbers[i] < 0){                                         
        amountOfNegative++;
    }
                                
}

alert(`
        Summary of positive elements: ${sumOfPositive}\r\n
        Amount of positive elements: ${amountOfPositive}\r\n
        Maximum element: ${maxElement}\r\n
        Ordinal number of maximum number: ${ordinalNumber}\r\n
        Amount of negative elements: ${amountOfNegative}\r\n
        Amount of odd positive elements: ${amountOfOddPositive}\r\n
        Amount of even positive elements: ${amountOfEvenPositive}\r\n
        Summary of even positive elements: ${sumOfEvenPositive}\r\n
        Summary of odd positive elements: ${sumOfOddPositive}\r\n
        Multiply of positive elements: ${positiveElemsMultiply}\r\n
    `);