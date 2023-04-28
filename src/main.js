// import Swal from 'sweetalert2';
import './style.css';

/* // Elements

const image = document.querySelector('#image');
const name = document.querySelector('#name');
const button = document.querySelector('#button');
const powerstats = document.querySelector('.powerstats');

// Access token for the API

const ACCESS_TOKEN = '5991109497643080';

// URL of API

const BASE_URL = `https://superheroapi.com/api.php/${ACCESS_TOKEN}`;

// Simulate error

const MAX_HEROES = 1000;

// Function that returns a random integer value

const randomID = () => Math.floor(Math.random() * MAX_HEROES);

// Adding event to button

button.addEventListener('click', (event) => {
  event.preventDefault();
  const id = randomID();

  fetch(`${BASE_URL}/${id}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      image.src = data.image.url;
      name.innerHTML = `Name: ${data.name}`;
      powerstats.innerHTML = `
      Intelligence: ${data.powerstats.intelligence}
      Strength: ${data.powerstats.strength}
      Speed: ${data.powerstats.speed}
      Power: ${data.powerstats.power}
      `;
    }).catch((error) => Swal.fire({
      title: 'Hero not found',
      text: error.message,
      icon: 'error',
      confirmButtonText: 'Cool',
    }));
});
 */
