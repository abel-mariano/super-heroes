import Swal from 'sweetalert2';
import './style.css';

// Elements
const button = document.querySelector('#button');
const divCardFront = document.querySelector('.card__body');
const divCardBack = document.querySelector('.card__body--back');
const titleH2 = document.querySelector('.card__title');
const listPowerstats = document.querySelector('.powerstats');

// Access token for the API
const ACCESS_TOKEN = '5991109497643080';

// URL of API
const BASE_URL = `https://superheroapi.com/api.php/${ACCESS_TOKEN}`;

// Simulate error
const MAX_HEROES = 1000;

// Function that returns a random integer value
const randomID = () => Math.floor(Math.random() * MAX_HEROES);

// Function render card
const renderCard = (data) => {
  divCardFront.classList.remove('hidden');
  divCardBack.classList.remove('hidden');
  const image = document.createElement('img');
  image.src = data.image.url;
  image.alt = 'card image';
  divCardFront.appendChild(image);
  titleH2.innerHTML = data.name;
};

// Function render power status
const renderPowerStats = (data) => {
  const powerStatsArray = Object.entries(data.powerstats);

  console.log(powerStatsArray);
  powerStatsArray.forEach((power) => {
    const [powerName, number] = power;

    const li = document.createElement('li');
    li.classList.add('skills');
    const spanName = document.createElement('span');
    spanName.classList.add('skill-name');
    spanName.innerHTML = `${powerName} :`;
    li.appendChild(spanName);
    const spanNumber = document.createElement('span');
    spanNumber.classList.add('skill-number');
    spanNumber.innerHTML = number;
    li.appendChild(spanNumber);
    listPowerstats.append(li);
  });
};

// Adding event to button
button.addEventListener('click', (event) => {
  event.preventDefault();
  const id = randomID();

  fetch(`${BASE_URL}/${id}`)
    .then((response) => response.json())
    .then((data) => {
      divCardFront.innerHTML = '';
      listPowerstats.innerHTML = '';

      renderCard(data);
      renderPowerStats(data);
      console.log(data);
    }).catch((error) => Swal.fire({
      title: 'Hero not found',
      text: error.message,
      icon: 'error',
      confirmButtonText: 'OK',
      errorfront: divCardFront.classList.add('hidden'),
      errorback: divCardBack.classList.add('hidden'),
    }));
});
