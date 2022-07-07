//Global constants created 
const searchContainer = document.getElementsByClassName('search-container');
const gallery = document.getElementById('gallery');//select gallery markup 
const url = 'https://randomuser.me/api/?results=12&inc=picture,name,email,location,&nat=US';
let users = [];

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
        <p class="card-text cap">${users[i].location.city}</p>
    </div>`; 

gallery.insertAdjacentHTML('beforeend', html)
}}


  

