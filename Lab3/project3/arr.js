
// --> Array.push(): Adds one or more elements to the end of an array and returns the new length of the array.
   let arr1 = [1, 2, 3]; 
   arr1.push(4, 5); 
   console.log(arr1);
   // output:[1, 2, 3, 4, 5]


// --> Array.pop(): Removes the last element from an array and returns that element.
   let arr2 = [1, 2, 3]; 
   let lastElement = arr2.pop();
   console.log(lastElement);
   // Outputs: 3

// --> Array.join(): Joins all elements of an array into a string, using a specified separator.
   let arr3 = ["Hello", "World"]; 
   console.log(arr3.join(" ")); 
   // Outputs: Hello World


// --> Array.slice(): Returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included).
   let arr4 = [1, 2, 3, 4, 5]; 
   console.log(arr4.slice(2, 4)); 
   // Outputs: [3, 4]


// --> Array.reverse(): Reverses the elements of an array in place.
   let arr5 = [1, 2, 3]; 
   arr5.reverse(); 
   console.log(arr5); 
   // Outputs: [3, 2, 1]


// --> Array.forEach(): Executes a provided function once for each array element.
   let arr6 = [1, 2, 3];
   arr6.forEach((element, index) => {
   console.log(`Index ${index}: ${element}`);
   });
   // Outputs:
   // Index 0: 1
   // Index 1: 2
   // Index 2: 3


// --> Array.includes(): Determines whether an array includes a certain element, returning true or false.
   let arr7 = [1, 2, 3, 4, 5];
   console.log(arr7.includes(3)); 
   // Outputs: true



// --> Array.shift(): Removes the first element from an array and returns that element.
   let arr8 = [1, 2, 3];
   let firstElement = arr8.shift();
   console.log(firstElement); 
   // Outputs: 1


// --> Array.Sort(): sorts the elements of an array in place and returns the reference to the same array, now sorted, default sort order is ascending.
   let arr9 = ['banana', 'apple', 'orange', 'grape', 'kiwi'];
   arr9.sort();
   console.log(arr9);
   // Outputs: ['apple', 'banana', 'grape', 'kiwi', 'orange']


// --> Array.toSorted(): instances is the copying version of the sort() method. It returns a new array with the elements sorted in ascending order.
   let numbers = [5, 2, 8, 1, 9];
   let sortedNumbers = [...numbers].sort((a, b) => a - b);
   console.log("Original array:", numbers);
   console.log("Sorted array:", sortedNumbers);
   // Outputs: 
   //Original array: [5, 2, 8, 1, 9]
   //Sorted array: [1, 2, 5, 8, 9]





