//START OF REVIEW

// As discussed in class, 2 of the most common and important
// data structures native to javascript: Arrays and Objects

//To review, an array is an ordered collection of data where each item is assigned
//an index starting from 0
//e.g.
let mySampleArray = ["Index 0", "Index 1", "Index 2"];

//An object, is used to store collections of data in a key-value pair format,
//where each key is a string (although quotes are optional for keys without spaces in them) and
//the values can be any data type

let mySampleObject = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
};

//END OF REVIEW

//START OF ASSIGNMENT
//Given what we just learned, your assignment is to create an array of objects!
//Set the myZooAnimals variable underneath this text to an array of objects that have the
//following keys:
//1. animalType
//2. name
//3. age
//4. pictureURl

//Hint: go to https://unsplash.com for some great, high-res pics and search up whatever animal you want!

//Make sure to make at least 3 animal objects with these keys inside of the myZooAnimals array!

let myZooAnimals = [{
  animalType: "Dog",
  name: "Ben",
  age: 3,
  pictureURL: "https://images.unsplash.com/photo-1590319541269-4513d04a9d6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2024&q=80"
},{
  animalType: "Cat",
  name: "Angela",
  age: 4,
  pictureURL:"https://images.unsplash.com/photo-1572590285030-0ae6a4715671?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
},{
  animalType: "Fish",
  name: "Nemo",
  age: 1,
  pictureURL:"https://images.unsplash.com/photo-1542454520-7455ce6eb991?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80"
}, {
  animalType: "Sinbiote",
  name: "Mark Zuckerberg",
  age: 714,
  pictureURL: "https://cdn.vox-cdn.com/thumbor/vpucUMUmqNaTMXxNVNSwGgSQJCo=/0x0:5238x3492/1200x800/filters:focal(3228x1307:4066x2145)/cdn.vox-cdn.com/uploads/chorus_image/image/65544609/1182969866.jpg.0.jpg"
}
  
]

//END OF ASSIGNMENT
