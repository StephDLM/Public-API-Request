//Global constants created 
const searchContainer = document.getElementsByClassName('search-container')//
const gallery = document.getElementById('gallery')//select gallery markup 
let employees = [];


//creating constants to select classes of each property 
// const image = document.getElementsByClassName('.card-img');
// const firstName = document.getElementsByClassName('.card-name cap'); 
// const email = document.querySelector('.card-text');
// const city = document.querySelector('.card-text cap');

//create a function that displays information for 12 people tha include their image, first+last name, email, and location

function peopleToDisplay (image, name, email, location){
let html = 
`<div class="card">
<div class="card-img-container">
    <img class="card-img" src="https://placehold.it/90x90" alt="profile picture">
</div>
<div class="card-info-container">
    <h3 id="name" class="card-name cap">${firstName}</h3>
    <p class="card-text">${email}</p>
    <p class="card-text cap">${location}</p>
</div>`;
}

//create a fetch  to generate the data needed for each of the 12 profiles 
fetch("https://randomuser.me/")
    .then(response => response.json())
    .then(data => console.log(data.message))

    // .then (checkStatus);
    // .then((response) => response.json)
    // .then((data) => console.log(data));

//   Promise.all([
//     fetchData('https://randomuser.me/')
//   ])
//   fetch("https://randomuser.me/api/?format=json")
//   .then((response) => response.json)
//   .then((data) => console.log(data));

  

