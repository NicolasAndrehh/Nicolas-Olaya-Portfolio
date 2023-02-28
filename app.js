// Menu Modal
const modalMenu = document.querySelector('#modal-menu');
const html = document.querySelector('html');
const openMenuButton = document.querySelector('#open-menu-button');
const closeMenuButton = document.querySelector('#close-menu-button');

openMenuButton.addEventListener('click', (e) => {
  e.preventDefault();
  modalMenu.classList.remove('hide');
  modalMenu.classList.add('show');
  html.classList.add('stop-scroll');
});

closeMenuButton.addEventListener('click', (e) => {
  e.preventDefault();
  modalMenu.classList.remove('show');
  modalMenu.classList.add('hide');
  html.classList.remove('stop-scroll');
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function anchorScroll(e) {
    e.preventDefault();
    modalMenu.classList.remove('show');
    modalMenu.classList.add('hide');
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
    html.classList.remove('stop-scroll');
  });
});

// Store each project into an Object - Show every project
const projectsArray = [
  {
    name: 'Mr Olympia Project',
    description: 'This project is about Mr Olympia Website where you can learn about the Mr Olympia Categories, Athletes and previous competitions',
    image: './images/MrOlympiaProject.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    live: '#',
    source: '#',
  },
];

let workCard = '';
let technologies = '';

for (let i = 0; i < projectsArray.length; i += 1) {
  for (let j = 0; j < projectsArray[i].technologies.length; j += 1) {
    technologies += `<li><p class="works-languajes text-blue text-center">${projectsArray[i].technologies[j]}</p></li>`;
  }
  workCard += `
<div class="work">
  <img src="${projectsArray[i].image}" alt="Image-Placeholder" class="img-placeholder">  
  <div id="work1" class="work-info">
    <h4 class="text-blue text-center">${projectsArray[i].name}</h4>
    <ul class="works-languajes-container">
      ${technologies}
    </ul>
    <a href="#" id="open-detail-button${i}" class="button">See Project</a>
  </div>
</div>`;
}

const worksSection = document.querySelector('#works-section');
worksSection.innerHTML += `
<h2 class="text-blue text-center">My Recent<br class="desktop-hide"> Works</h2>
<hr class="desktop-hide">
<div class="works-container">
  ${workCard}  
</div>`;

// Project Detail Modal

const modalDetail = document.querySelector('#modal-detail');
modalDetail.innerHTML += `
<div class="modal-works-detail">
<img src="${projectsArray[0].image}" alt="Image-Placeholder" class="img-placeholder">
<button id="close-detail-button" class="close-detail-button">
  <i class="las la-times"></i>
</button>
<div class="button-alignment">
  <h4 class="text-blue text-center">${projectsArray[0].name}</h4>
  <div class="detail-buttons mobile-hide">
  <a href="${projectsArray[0].live}" class="button">See Live <i class="las la-share-square"></i></a>
  <a href="${projectsArray[0].source}" class="button">See source <i class="lab la-github"></i></a>
</div>
</div>
<ul class="works-languajes-container">
  <li><p class="works-languajes text-blue text-center">${projectsArray[0].technologies[0]}</p></li>
  <li><p class="works-languajes text-blue text-center">${projectsArray[0].technologies[1]}</p></li>
  <li><p class="works-languajes text-blue text-center">${projectsArray[0].technologies[2]}</p></li>
</ul>
<p>${projectsArray[0].description}</p>
<div class="detail-buttons desktop-hide">
  <a href="${projectsArray[0].live}" class="button">See Live <i class="las la-share-square"></i></a>
  <a href="${projectsArray[0].source}" class="button">See source <i class="lab la-github"></i></a>
</div>
</div>`;

const openDetailButton = document.querySelectorAll('#works-section .button');
const closeDetailButton = document.querySelector('#close-detail-button');

openDetailButton.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    modalDetail.classList.remove('hide');
    modalDetail.classList.add('show');
    html.classList.add('stop-scroll');
  });

  closeDetailButton.addEventListener('click', (e) => {
    e.preventDefault();
    modalDetail.classList.remove('show');
    modalDetail.classList.add('hide');
    html.classList.remove('stop-scroll');
  });
});

// Form validation

const form = document.querySelector('#contact-form');
const emailMessage = document.querySelector('#email-message');
const emailRegex = /[A-Z]/;
form.addEventListener('submit', (e) => {
  const email = document.querySelector('#email').value;
  if (emailRegex.test(email)) {
    e.preventDefault();
    emailMessage.innerHTML += `*The email field has to be in lower case try with this one instead: <strong>${email.toLowerCase()}</strong>*`;
    emailMessage.classList.remove('hide');
  }
});

// Local storage

const formInputs = document.querySelectorAll('#contact-form .input');
const fullNameInput = document.querySelector('#contact-form #full-name');
const emailInput = document.querySelector('#contact-form #email');
const messageInput = document.querySelector('#contact-form #textarea');

formInputs.forEach((input) => {
  input.addEventListener('keyup', () => {
    const formData = {
      name: fullNameInput.value,
      email: emailInput.value,
      message: messageInput.value,
    };

    localStorage.setItem('formData', JSON.stringify(formData));
  });
});

const formData = JSON.parse(localStorage.getItem('formData')) ? JSON.parse(localStorage.getItem('formData')) : {
  name: '',
  email: '',
  message: '',
};

fullNameInput.value = formData.name;
emailInput.value = formData.email;
messageInput.value = formData.message;