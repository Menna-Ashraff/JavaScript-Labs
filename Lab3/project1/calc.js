let result = 0;

function performOperation(num1, operator, num2) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  switch (operator) {
    case '+':
      return num1 + num2;
    case '*':
      return num1 * num2;
    case '-':
      return num1 - num2;
    case '/':
      if (num2 !== 0) {
        return num1 / num2;
      } else {
        return 'Error: Division by zero';
      }
    case '%':
      if (num2 !== 0) {
        return num1 % num2;
      } else {
        return 'Error: Modulus by zero';
      }
    default:
      return 'Error: Invalid operation';
  }
}

while (true) {
  const userInput1 = prompt(`Enter the first number:`);
  if (userInput1.toLowerCase() === 'cancel') {
    break;
  }
  
  const num1 = userInput1.toLowerCase() === 'ans' ? result : userInput1;

  const operation = prompt('Enter the operation:');
  const userInput2 = prompt('Enter the second number:');
  const operationResult = performOperation(num1, operation, userInput2);
  
  alert(`Result: ${operationResult}`);
  result = operationResult;
}