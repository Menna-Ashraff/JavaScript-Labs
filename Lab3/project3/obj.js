// --> Object.keys(): Returns an array of a given object's own enumerable property names.
   let obj1 = { a: 1, b: 2, c: 3 }; 
   console.log(Object.keys(obj1)); 
   // Outputs: ['a', 'b', 'c']


// --> Object.values(): Returns an array of a given object's own enumerable property values.
   let obj2= { a: 1, b: 2, c: 3 }; 
   console.log(Object.values(obj2)); 
   // Outputs: [1, 2, 3]


// --> Object.entries(): Returns an array of a given object's own enumerable property [key, value] pairs.
   let obj3 = { a: 1, b: 2, c: 3 };
   console.log(Object.entries(obj3));
   // Outputs: [['a', 1], ['b', 2], ['c', 3]]


// --> Object.assign():Copies the values of all enumerable properties from one or more source objects to a target object.
   let target = { a: 1 };
   let source = { b: 2, c: 3 };
   Object.assign(target, source);
   console.log(target); 
   // Outputs: { a: 1, b: 2, c: 3 }


// --> Object.freeze(): freezes an object, preventing new properties from being added, existing properties from being removed, and values from being changed.
   let obj5 = { a: 1, b: 2 };
   Object.freeze(obj5);
   // Trying to modify the object will result in an error


// --> Object.seal():Seals an object, preventing new properties from being added and marking all existing properties as non-configurable.
   let obj6 = { a: 1, b: 2 };
   Object.seal(obj6);
   // Trying to add or remove properties will result in an error


// --> Object.create(): Creates a new object with the specified prototype object and properties.
   let parent = { a: 1 };
   let child = Object.create(parent);
   console.log(child.a);
   // Outputs: 1


// --> Object.hasOwnProperty(): Returns a boolean indicating whether the object has the specified property as its own property (not inherited).
   let obj8 = { a: 1, b: 2 };
   console.log(obj8.hasOwnProperty('a')); 
   // Outputs: true


// --> Object.is(): Compares two values for equality. Returns true if the values are the same, false otherwise.
   console.log(Object.is(1, 1));
  // Outputs: true


// --> Object.isPrototypeOf():Returns a boolean indicating whether the calling object is part of the prototype chain of the specified object.
   let obj10 = { a: 1, b: 2 };
   let ch = Object.create(obj10);
   console.log(obj10.isPrototypeOf(ch)); 
   // Outputs: true
