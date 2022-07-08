//Global constants created 
const searchContainer = document.getElementsByClassName('search-container');
const gallery = document.getElementById('gallery');//select gallery markup 
const url = 'https://randomuser.me/api/?results=12&inc=picture,name,email,location,&nat=US';
let users = [];
const modalContainer = document.getElementsByClassName("modal-container");
const button = document.querySelector("button");

// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------
//Promise fetch data to load 
Promise.all([fetchData(url)])
    .then(data => {
        users = data[0].results
        usersToDisplay(users)
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
    `<div class="card">
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
//idk Store the fetched employee data in a global variable  
// Create a function to show the modal that accepts an index
// With that index you can grab the data of the clicked employee (for example employees[index]
// Use that employee object to generate the HTML for the Modal
// Append that modal HTML to the body of the document



gallery.addEventListener('click', (e) => {
  // const userInfo = document.getElementById("modal-info-container");
  e.target(userInfo);
});


// ------------------------------------------
//  POST DATA
// ------------------------------------------
function userCards(users) {
  for (let i=0; i<users.length; i++)
  var htmlModal = `
<div class="modal-container">
<div class="modal">
    <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
    <div class="modal-info-container">
        <img class="modal-img" src="${users[i].picture.large}">
        <h3 id="name" class="modal-name cap">${users[i].name.first} ${users[i].name.last}</h3>
        <p class="modal-text">${users[i].email}</p>
        <p class="modal-text cap">${users[i].location.city}</p>
        <hr>
        <p class="modal-text">${users[i]}(555) 555-5555</p>
        <p class="modal-text">${users[i].street.number} 
                              ${users[i].street} 
                              ${users[i].city}, 
                              ${users[i].state} 
                              ${users[i].zip}</p>
        <p class="modal-text">Birthday: ${date.getMonth()}/${date.getDate()}/${date.getFullYear()}</p>
    </div>
</div>`;
//insert in the document body 
document.body.insertAdjacentHTML('beforeend', htmlModal) //insert in the document body 

}


//closer button 
 const closeModel = document.getElementById("modal-close-btn");//select the close modal id 
 //add event listener to close modal 
 closeModel.addEventListener("click", e => {
  modalContainer.innerHTML = '';
  modalContainer.classList.add("hide");
 });

  

