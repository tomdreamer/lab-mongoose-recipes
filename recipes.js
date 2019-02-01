const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const data = require('./data.js');

const Recipe = require('./models/recipe-model');

mongoose.connect('mongodb://localhost/recipeApp')
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch(err => {
    console.error('Error connecting to mongo', err);
  });
 
  
    //connecting the program to dog-model.js
  //(Where Dog model and the schema are defined)
  const Dog = require("./models/recipe-model.js")

  // CRUD - create, read, update & delete
//=============================================================================


// (C)reating new DOGS in our database with Mongoose
//-----------------------------------------------------------------------------
Recipe.create({title: "Couscous",cuisine: "Marocan",})
// then() callbacks get called if th operation succeded
.then(recipesDoc=>{
    //DoggyDog is the result of our create() query
    console.log("Coucous recipe CREATE sucess!", recipesDoc);
})
// catch() callbacks get called if the operation FAILS
.catch(err=>{
    console.log("Coucous recipe CREATE Failure!", err);
});

Recipe.insertMany(data)
.then(recipesDoc=>{
  //DoggyDog is the result of our create() query
  recipesDoc.forEach((oneRecipe)=>{
    console.log(oneRecipe.title);
  })
  console.log("Coucous recipe CREATE sucess!", recipesDoc);
})
// catch() callbacks get called if the operation FAILS
.catch(err=>{
  console.log("Coucous recipe CREATE Failure!", err);
});

Recipe.findByIdAndUpdate ("5c5457bafb80ae03cc0e8841", {
  $set: { duration: 100}
  }) // $set is like the =operator in Javascript
    .then(recipesDoc => {
      console.log(`Dog UPDATE ${recipesDoc._id}`);
    })
    .catch(err => {
      console.log(`Dog UPDATE faillure`, err);
    });

  Recipe.findByIdAndRemove("5c545977810b4d2f98689fe1")
  .then(recipesDoc =>{
      if (recipesDoc){
          console.log(`DELETE ${recipesDoc.dogName} (id: ${recipesDoc._id})`);
      }else{
          console.log("Couldn't find anything to DELETE.");
      }
  })
  .catch(err =>{
      console.log("Dog.findByIdAndRemove() FAILURE", err);
  });