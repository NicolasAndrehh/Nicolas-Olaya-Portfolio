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
    name: 'Multi-Post Stories Gain+Glory',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    image: 'images/img-placeholder.png',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    live: '#',
    source: '#',
  },
];

let workCard = '';

for (let i = 0; i < 6; i += 1) {
  workCard = `
<div class="work">
  <img src="${projectsArray[0].image}" alt="Image-Placeholder" class="img-placeholder">  
  <div id="work1" class="work-info">
    <h4 class="text-blue text-center">${projectsArray[0].name}</h4>
    <ul class="works-languajes-container">
      <li><p class="works-languajes text-blue text-center">${projectsArray[0].technologies[0]}</p></li>
      <li><p class="works-languajes text-blue text-center">${projectsArray[0].technologies[1]}</p></li>
      <li><p class="works-languajes text-blue text-center">${projectsArray[0].technologies[2]}</p></li>
      <li><p class="works-languajes text-blue text-center">${projectsArray[0].technologies[3]}</p></li>
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
  ${workCard.repeat(6)}  
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

const form = document.querySelector('#contactForm');
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