// 1
while (true) {

    let ageInput = prompt("Enter your age:");
  

    if (ageInput === null) {

      break;
    } else {
      
      let age = parseFloat(ageInput);
  
      
      if (!isNaN(age) && age > 0) {
        
        let status;
        switch (true) {
          case age >= 1 && age <= 10:
            status = "Child";
            break;
          case age >= 11 && age <= 18:
            status = "Teenager";
            break;
          case age >= 19 && age <= 50:
            status = "Grown up";
            break;
          default:
            status = "Old";
        }
  
        
        alert(`Your status: ${status}`);
      } else {
        
        alert("Please enter a valid positive number.");
      }
    }
  }

// 2

function countVowels(inputString) {

  inputString = inputString.toLowerCase();

  const vowels = ['a', 'e', 'i', 'o', 'u'];

  let vowelCount = 0;

  for (let i = 0; i < inputString.length; i++) {
      if (vowels.includes(inputString[i])) {
          vowelCount++;
      }
  }

  return vowelCount;
}

const userInput = prompt("Enter a string:"); 
const result = countVowels(userInput);
alert(`The number of vowels in this string is: ${result}`);


// 3
function convertTo12HourFormat(hour) {
  if (hour < 0 || hour > 23) {
      return "Invalid hour";
  }

  const period = hour < 12 ? "am" : "pm";
  const formattedHour = (hour % 12 === 0) ? 12 : hour % 12;
  return `${formattedHour} ${period}`;
}

const userHour = prompt("Enter an hour (0-23):");
const returnHour = convertTo12HourFormat(parseInt(userHour));
alert(`Converted time: ${returnHour}`);




