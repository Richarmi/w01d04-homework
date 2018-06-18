// a parameter is a variable passed into a function, while an argument is a value that
// is passed to an invocation of the function.

// When the keyword return is used in a function, the function returns a value
// to be stored in a variable that exists within the calling program, while console.log() only prints

const checkPalindrome = (thisString) =>
{
  let palindromeCheck = [];
  let thisNewString = thisString.toLowerCase();

  for(let i = 0; i < thisNewString.length; i++)
  {
    palindromeCheck.push(thisNewString[(thisNewString.length - 1) - i]);
  }

  palindromeCheck = palindromeCheck.join("");

  if(palindromeCheck === thisNewString)
  {
    return true;
  }
  else {
    return false;
  }
}

console.log(checkPalindrome("AManAPlanACanalPanama"));

const sumDigits = (num) => {
  // convert the number into a thisString
  let countSum = 0;
  let numString = num.toString();

  console.log(numString);

  for(let i = 0; i < numString.length; i++)
  {
    if(numString[i] === "1"){ countSum += 1;}
    else if(numString[i] === "2"){ countSum += 2;}
    else if(numString[i] === "3"){ countSum += 3;}
    else if(numString[i] === "4"){ countSum += 4;}
    else if(numString[i] === "5"){ countSum += 5;}
    else if(numString[i] === "6"){ countSum += 6;}
    else if(numString[i] === "7"){ countSum += 7;}
    else if(numString[i] === "8"){ countSum += 2;}
    else if(numString[i] === "9"){ countSum += 2;}
    else{}
  }

  return countSum;
}

console.log(sumDigits(222));
console.log(789567);
console.log(sumDigits(53));

const calculateSide = (sideA, sideB) => {
  let sideCSquared = ((sideA * sideA) + (sideB * sideB));

  console.log(sideCSquared)
  let sideC = Math.sqrt(sideCSquared);
  return sideC;
}

console.log(calculateSide(8,6));

const sumArray = (arr) => {
  let sum = 0;


  for(let i = 0; i < arr.length; i++)
  {
    sum += arr[i];
  }
  return sum;
}

console.log(sumArray([1,2,3,4]));

const isPrime = (num) => {
  let primeCounter = 0;

  for(let i = num - 1; i > 0; i--)
  {
    if(num % i !== 0)
    {
      primeCounter++;
    }
  }

  if(primeCounter === (num - 2))
  {
    return true;
  }
  else {
    return false;
  }
}

function checkPrimes(num)
{
  for(let i = 1; i <= num; i++)
  {
    if(isPrime(i) === true)
    {
      console.log(i);
    }
  }
}

checkPrimes(100);
