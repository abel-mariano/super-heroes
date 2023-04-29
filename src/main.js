import Swal from 'sweetalert2';
import './style.css';

/* <div class="card">
  <div class="card__inner">
    <div class="card__body card__body--front">
      <img class="card-image" src="./src/images/516.jpg" alt="card image">
    </div>

    <div class="card__body card__body--back">
      <h2 class="card__title">Super Hero Name</h2>

      <ul class="powerstats">
        <li class="skills">
          <span class="skill-name">Intelligence:</span>
          <span class="skill-number">100</span>
        </li>
      </ul>
    </div>
  </div>
</div> */

// Elements
const button = document.querySelector('#button');
const divCard = document.querySelector('.card');

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
      divCard.innerHTML = '';
      const divCardInner = document.createElement('div');
      divCardInner.classList.add('card__inner');
      const divCardBody = document.createElement('div');
      divCardBody.classList.add('card__body');
      divCardInner.appendChild(divCardBody);
      const image = document.createElement('img');
      image.src = data.image.url;
      image.alt = 'card image';
      divCardBody.appendChild(image);
      divCard.append(divCardInner);

      console.log(data);
      /* image.src = data.image.url;
      cardTitle.innerHTML = `Name: ${data.name}`;
      powerstats.innerHTML = `
      Intelligence: ${data.powerstats.intelligence}
      Strength: ${data.powerstats.strength}
      Speed: ${data.powerstats.speed}
      Power: ${data.powerstats.power}
      `; */
    }).catch((error) => Swal.fire({
      title: 'Hero not found',
      text: error.message,
      icon: 'error',
      confirmButtonText: 'Cool',
    }));
});
