//Global constants created 
const searchContainer = document.getElementsByClassName('search-container')
const gallery = document.getElementById('gallery')//select gallery markup 
const url = 'https://randomuser.me/api/?results=12&inc=picture,name,email,location,&nat=us'
let employees = [];

// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------
//create a function that displays information for 12 people tha include their image, first+last name, email, and location
//create a fetch  to generate the data needed for each of the 12 profiles 
fetch (url)
    .then(res=> res.json())
    .then(data => console.log(data.results));

//Promise fetch data to load ???
//   Promise.all([
//     fetchData(url)
//   ])

// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------
function usersToDisplay (user){
gallery.innerHTML = '';

for (let i=0; i<gallery.length; i++) {
    let html = 
    `<div class="card">
    <div class="card-img-container">
        <img class="card-img" src="${user[i].picture.medium}" alt="profile picture">
    </div>
    <div class="card-info-container">
        <h3 id="name" class="card-name cap">${user[i].name.first} ${user[i].name.last}</h3>
        <p class="card-text">${user[i].email}</p>
        <p class="card-text cap">${user[i].location.city}</p>
    </div>`; 
}

html.insertAdjacentHTML('beforeend', 'HTML string')
}


  

