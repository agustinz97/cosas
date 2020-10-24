const input = document.querySelector('#password')
const iconOpen = document.querySelector('#password-icon-open')
const iconClose = document.querySelector('#password-icon-close')

document.addEventListener('DOMContentLoaded', () => {
    console.log(iconClose)
    iconClose.style.display = 'none'
})

iconOpen.addEventListener('click', () => {
    input.type = 'text'
    iconOpen.style.display = 'none'
    iconClose.style.display = 'block'
})

iconClose.addEventListener('click', () => {
    input.type = 'password'
    iconOpen.style.display = 'block'
    iconClose.style.display = 'none'
})
