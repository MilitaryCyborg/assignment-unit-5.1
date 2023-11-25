console.log('***** Object Practice *****')

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/

//start about me
const me = {
  firstName: 'Dean',
  lastName: 'McNevin',
  hasSiblings: 1,
  shoeCount: 8,
  favThreeFoods: ['Pizza', 'Sushi', 'Wings'],
};
console.log( 'A little about me:', me );
// end about me

/* 2. Accessing object properties.
  - Create a variable called fullName 
  - Use the firstName & lastName properties of the object you 
    created above to set its value. 
  - Console.log fullName
*/

//start fullName
let fullName = me.firstName + me.lastName;
  console.log( 'My name is: ', fullName );
//end fullName


/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food 
*/

//start favorite food
console.log( 'My first favorite food is: ', me.favThreeFoods[0] );
console.log( 'My third favorite food is: ', me.favThreeFoods[2] );
//end favorite food


/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count. 
*/

// start of shoes, lets get some shoes
console.log( 'Current amount of shoes: ', me.shoeCount );
me.shoeCount += 1;
console.log( 'I bought a new pair of shoes and now have: ', me.shoeCount );
// end of shoes, lets get some shoes


/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/

//add favoriteColor
me.favoriteColor = 'Blue';
  console.log('Added favorite color: ', me.favoriteColor);
//end favoriteColor