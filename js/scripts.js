//Global constants created 
const searchContainer = document.getElementsByClassName('search-container');
const gallery = document.getElementById('gallery');//select gallery markup 
const url = 'https://randomuser.me/api/?results=12&inc=picture,name,email,location,cell,dob&nat=US';
let users = [];
const button = document.querySelector("button");
const div = document.querySelectorAll("card-img-container")

// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------
//Promise fetch data to load 
Promise.all([fetchData(url)])
    .then(data => {
        users = data[0].results
        usersToDisplay(users);
        // userCards(i);
  });
//   console.log(Error.response)

////create a fetch function to generate the data needed for each of the 12 profiles 
function fetchData(url){
    return fetch (url)
        .then (checkStatus)
        .then(res => res.json())
        // .then(data => console.log(data.results))
        .catch(err => console.log("There was an error!", err))
};

//response to check url
function checkStatus(response) {
    if (response.ok) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(new Error(response.statusText));
    }
  }

// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------
//create a function that displays information for 12 people tha include their image, first+last name, email, and location
function usersToDisplay(users){
gallery.innerHTML = '';
for (let i=0; i<users.length; i++) {
    let html = 
    `<div class="card" data-index=${i}>
    <div class="card-img-container">
        <img class="card-img" src="${users[i].picture.medium}" alt="profile picture">
    </div>
    <div class="card-info-container">
        <h3 id="name" class="card-name cap">${users[i].name.first} ${users[i].name.last}</h3>
        <p class="card-text">${users[i].email}</p>
        <p class="card-text cap">${users[i].location.city}, ${users[i].location.state}</p>
    </div>`; 

gallery.insertAdjacentHTML('beforeend', html)
}}

// ------------------------------------------
//  Module
// ------------------------------------------
// Store the fetched employee data in a global variable  
// With that index you can grab the data of the clicked employee (for example employees[index]
gallery.addEventListener("click", (e) =>{
  if (e.target !== gallery ){
   let card = e.target.closest(".card");
   console.log(card)
   const i = card.getAttribute("data-index");
  //  usersToDisplay(users);
   userCards(i);
  //  console.log(i)

  }
})


// Create a function to show the modal that accepts an index
function userCards(i) {
//create an object that holds employee information to store in an index
  let { picture: {large}, name: {first, last}, dob, email, cell, location : {street, city, state, postcode } } = users[i];
  // let birthDate = new Date(dob.date);
  let month = new Date(dob.date).getMonth()+1;
  let day = new Date(dob.date).getDay();
  let year = new Date(dob.date).getFullYear();
  // Use that user object to generate the HTML for the Modal
    const htmlModal = `
    <div class="modal-container" >
    <div class="modal">
        <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
        <div class="modal-info-container">
            <img class="modal-img" src="${large}">
            <h3 id="name" class="modal-name cap">${first} ${last}</h3>
            <p class="modal-text">${email}</p>
            <p class="modal-text cap">${city}</p>
            <hr>
            <p class="modal-text">${cell}</p>
            <p class="modal-text">${street.number} ${street.name}, ${city}, ${state} ${postcode}</p>
            <p class="modal-text">Birthday: ${month}/${day}/${year}</p>
        </div>
    </div>`;


// Append the modal HTML to the body of the document
document.body.insertAdjacentHTML('beforeend', htmlModal) //insert in the html to the document body 

//close button 
const closeModal = document.getElementById("modal-close-btn"); //select the close modal id 
const modalContainer = document.querySelector(".modal-container");
closeModal.addEventListener("click", () => { //add event listener to close modal 
  // modalContainer.style.display = "none"; ---> why wont this work????
  modalContainer.remove(); 
});
}

// function formatPhoneNumber(cell) {
//   var cleaned = ('' + cell).replace(/\D/g, '');
//   var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
//   if (match) {
//     return '(' + match[1] + ') ' + match[2] + '-' + match[3];
//   }
//   return null;
// }
