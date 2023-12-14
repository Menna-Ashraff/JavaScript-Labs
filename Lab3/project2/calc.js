 const count = parseInt(prompt("How many numbers do you want to enter?"));

 if (isNaN(count) || count <= 0) {
  alert("Please enter a valid positive number for count.");
} 
 else {

  const numbers = [];
  for (let i = 0; i < count; i++) {
    const input = parseFloat(prompt(`Enter number ${i + 1}:`));

    if (isNaN(input)) {
      alert("Please enter a valid number.");
      i--;
    } else {
      numbers.push(input);
    }
  }

  const sum = numbers.reduce((acc, num) => acc + num, 0);
  const average = sum / count;
  alert(`Sum: ${sum}\nAverage: ${average}`);
}


