
// https://www.competa.com/blog/storing-javascript-object-localstorage/

/*

https://www.youtube.com/watch?v=AUOzvFzdIk4
You can only store strings in local storage
Converting an object to a string is called "serialisation"

*/

//It would be cool to be able to save this trip in local storage - and then have it displayed
//Add a display from local storage button
let tripTest = {
  tripName : "Alpamayo",
  tripDescription : "The most beautiful mountain in the world",
  tripPrice : 3200,
  tripLength : 8,    
}
//tripDurationTest isn't really working as I would have hoped
let tripDurationTest = {
    title : "Alpamayo",
    description : "The most beautiful mountain in the world",
    price : 3200,
    // add a function to return the duration based on the number of days
    // this is not working
    length : 6,    
    // add a function to return the duration based on the number of days
    // this is not working
    /*
    duration(){
        alert(this.description);
    },
    */
    itinerary : {
        day1 : "This is what you will be doing day one",
        day2 : "Walk up the mountain",
        day3 : "Walk down the mountain",
        day4 : " go home"
    }
}

//Forms have a form data object on them? 
//Ian would grab the individual things (using JQuary or whatever) - then combine them into an object


//When called adds a new input box
//Can we make it so we remove an input box?
function addInput() {
  var node = document.createElement("INPUT");
  document.getElementById("magicBox").appendChild(node);
}

//When called saves specific pre-defined trip object in local storage
//It would be possible to change the parameter of the function to return particular trips
function putLocal() {
  let tripTest_serialised = JSON.stringify(tripTest)
  //localStorage.removeItem("tripTest")
  localStorage.setItem("tripTest", tripTest_serialised);
  console.log(localStorage);
}

//When called puts content of local storage on 'second trip'
function getLocal() {
  document.getElementById("title-2").innerHTML = localStorage.getItem("trip_name")
  document.getElementById("desc-2").innerHTML = localStorage.getItem("trip_desc")
  console.log("Local storage displayed")
}

function clearLocal() {
  localStorage.clear();
  console.log("Local storage cleared")
}



//Seeing if I can use JQuery to serilise forms - It doesn't seem to be working
//Maybe the input's have to have name attributes for this to work
$( "tripForm" ).on( "submit", function( event ) {
  event.preventDefault();
  console.log( $( this ).serialize() );
  console.log("The function ran")
});


/*This is working but only be doing each Element one by one - I would like it to build JSON to save in local storage
This looks at the form that I've created and goes through each of the fields and saves it to local storage
I was getting confused because local storage was not being cleared (I've added a clear button now)
How do I create a JSON object from a form!

Look into flexbox as well*/

var submit = document.getElementById("save");
submit.onclick = function(event) {

  var myDays = [];
  //Ian added this cos he's a hero
  document.querySelectorAll('#magicBox input').forEach(input => { if(input.value !== '') myDays.push(input.value); } );
  console.log(myDays);
  
  var myObj = {
    name: document.getElementById("trip_name").value,
    description: document.getElementById("trip_desc").value,
    days: myDays
  };
  //Preventing default stops the form action being carried out
  event.preventDefault();
  let tripName = document.getElementById("trip_name");
    localStorage.setItem("trip_name", tripName.value);
  let tripDesc = document.getElementById("trip_desc");
    localStorage.setItem("trip_desc", tripDesc.value);
  console.log(localStorage)
  console.log(myObj)
}

/*This works now

var submit = document.getElementById("save");
submit.onclick = function() {
  alert("Button pressed!");
  console.log("They pressed the button")

*/


//This is how to save stuff in local storage

/*

let myObj = {
    name : "dominic",
    age : 56
};

//Stringify is used to serialised an object (turn it into a string)
let myObj_serialised = JSON.stringify(myObj)

console.log(myObj_serialised)

localStorage.setItem("myObj", myObj_serialised);
console.log(localStorage);

let myObj_deserialised = JSON.parse(localStorage.getItem("myObj"))

console.log(myObj_deserialised)
*/