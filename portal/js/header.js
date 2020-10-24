const btnOpen = document.getElementById('btn-open-navbar')
const btnClose = document.getElementById('btn-close-navbar')
const mobileHeader = document.getElementById('mobile-header')

btnOpen.addEventListener('click', () => {
    mobileHeader.classList.add('active')
})

btnClose.addEventListener('click', () => {
    mobileHeader.classList.remove('active')
})
