let modalMenu = document.querySelector('#modal-menu')
let openMenuButton = document.querySelector('#open-menu-button')
let closeMenuButton = document.querySelector('#close-menu-button')

openMenuButton.addEventListener("click", function(e) {
    e.preventDefault()
    modalMenu.classList.remove('hide')
    modalMenu.classList.add('show')
})

closeMenuButton.addEventListener("click", function(e) {
    e.preventDefault()
    modalMenu.classList.remove('show')
    modalMenu.classList.add('hide')
})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault()
        modalMenu.classList.remove('show')
        modalMenu.classList.add('hide')
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        })
    })
})