// exercise #1
const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));


// exercise #2
  const isAdult = (age) =>{
    if (age >= 18){
        return 'Adult';
    }
    else{
        return 'Minor'
    }
  }

  console.log('Exercise 2 Result:', isAdult(21));
  console.log('Exercise 2 Result:', isAdult(15));

//exercise #3
  const isCharAVowel = (letter) =>{
    if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u'){
        return `${letter} is a vowel`
    }
    else {
        return `${letter} is not a vowel`  
    }
  }

  console.log('Exercise 3 Result:', isCharAVowel("a"));
  console.log('Exercise 3 Result:', isCharAVowel("b"));

//   exercise #4
const generateEmail = (name, domain) =>{
    return `${name}@${domain}`
}


console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));

//   exercise #5

  const greetUser = (name, time) =>{
    if (time === 'morning'){
        return `Good morning, ${name}`;
    }
    else if (time === 'afternoon') {
        return `Good afternoon, ${name}`;
    }
    else if (time === 'evening'){
        return `Good evening, ${name}`;
    }
  }
  
console.log('Exercise 5 Result:', greetUser("Sam", 'morning'));
console.log('Exercise 5 Result:', greetUser("Zainab", 'afternoon'));
console.log('Exercise 5 Result:', greetUser("Eman", 'evening'));

//   exercise #6
  const maxOfThree = (num1, num2, num3) => {
    if (num1 > num2 && num1 > num3){
        return num1;
    }
    else if (num2 > num1 && num2 > num3){
        return num2;
    }
    else if (num3 > num1 && num3 > num2){
        return num3;
    }
  }

console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));
console.log('Exercise 6 Result:', maxOfThree(11, 8, 10));
console.log('Exercise 6 Result:', maxOfThree(5, 10, 15));

// exercise #7
  const calculateTip = (bill, tip) =>{
    return `Amount of tip for this bill is ${(bill*tip)/100}`;
  }
  console.log('Exercise 7 Result:', calculateTip(50, 20));

//exercise#8
const convertTemperature = (temperature, scale)=>{
    if (scale === 'C' || scale === 'Celsius'){
        return `The temperature is ${(temperature*1.8)+32} degress Fahrenheit.`;
    }
    else if (scale === 'F' || scale === 'Fahrenheit'){
        return `The temperature is ${(temperature-32)*1.8} degress Celsius.`;
    }
    else{
        return `Information entered is not correct or complete, please try again.`;
    }
}


console.log('Exercise 8 Result:', convertTemperature(32, "C"));

console.log('Exercise 8 Result:', convertTemperature(32, "F"));
  

// exercise#9
const basicCalculator = (num1, num2, operation)=>{
    if (operation === 'add' || operation === '+'){
        return `value of the performed operation is ${num1+num2}`;
    }
    else if (operation === 'subtract' || operation === '-'){
        return `value of the performed operation is ${num1-num2}`;
    }
    else if (operation === 'multiply' || operation === 'x' || operation === '*'){
        return `value of the performed operation is ${num1*num2}`;
    }
    else if (operation === 'divide' || operation === '/'){
        return `value of the performed operation is ${num1/num2}`;
    }
    else {
        return `values entered are invalid or incorrect.`;
    }
}

console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));
console.log('Exercise 9 Result:', basicCalculator(10, 5, "add"));
console.log('Exercise 9 Result:', basicCalculator(10, 5, "x"));
console.log('Exercise 9 Result:', basicCalculator(10, 5, "/"));

//exercise#10
const calculateGrade = (grade) =>{
    if (grade>=90 && grade <100){ return "A";}
    else if (grade>=80 && grade <90){ return "B";}
    else if (grade>=70 && grade <80){ return "C";}
    else if (grade>=60 && grade <70){ return "D";}
    else { return "F";}
}
console.log('Exercise 10 Result:', calculateGrade(85));