// Menu Modal
let modalMenu = document.querySelector('#modal-menu')
let body = document.body
let openMenuButton = document.querySelector('#open-menu-button')
let closeMenuButton = document.querySelector('#close-menu-button')

openMenuButton.addEventListener("click", function(e) {
    e.preventDefault()
    modalMenu.classList.remove('hide')
    modalMenu.classList.add('show')
    body.classList.add('stop-scroll')
})

closeMenuButton.addEventListener("click", function(e) {
    e.preventDefault()
    modalMenu.classList.remove('show')
    modalMenu.classList.add('hide')
    body.classList.remove('stop-scroll')
})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault()
        modalMenu.classList.remove('show')
        modalMenu.classList.add('hide')
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        })
        body.classList.remove('stop-scroll')
    })
})

// Project Detail Modal

let modalDetail = document.querySelector('#modal-detail')
let openDetailButton = document.querySelector('#open-detail-button')
let closeDetailButton = document.querySelector('#close-detail-button')

openDetailButton.addEventListener("click", function(e) {
    e.preventDefault()
    modalDetail.classList.remove('hide')
    modalDetail.classList.add('show')
    body.classList.add('stop-scroll')
})

closeDetailButton.addEventListener("click", function(e) {
    e.preventDefault()
    modalDetail.classList.remove('show')
    modalDetail.classList.add('hide')
    body.classList.remove('stop-scroll')
})

// Store each project into an Object
let work = {
  name: "",
  description: "",
  image: "", 
  technologies: [],
  liveVersion: "",
  source: ""
}

work.name = document.querySelector('#work1 h4').textContent
// work.image = document.querySelector('#work1 img').textContent
// work.name = document.querySelector('#work1 h4').textContent
// work.name = document.querySelector('#work1 h4').textContent
console.log(work.name);