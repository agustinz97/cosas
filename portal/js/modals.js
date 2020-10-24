const btnFaqs = document.getElementById('button-faqs')
const btnFaqsMobile = document.getElementById('button-faqs-mobile')
const btnSupport = document.getElementById('btn-support')
const btnShare = document.getElementById('btn-share')
const btnShareMobile = document.getElementById('btn-share-mobile')

const buttons = [btnFaqsMobile, btnFaqs]

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        openModal('modal-faqs')
    })
})

btnShare.addEventListener('click', () => {
    const tooltip = document.getElementById('tooltip-share')
    tooltip.classList.toggle('active')
})

btnShareMobile.addEventListener('click', () => {
    openModal('modal-share')
})

btnSupport.addEventListener('click', () => {
    closeModal('modal-faqs')
    openModal('modal-support')
})

function closeSupportModal() {
    closeModal('modal-support')
    openModal('modal-faqs')
}

function openModal(modalId) {
    const modal = document.getElementById(modalId)
    modal.style.opacity = 1
    modal.style.zIndex = 9999

    const wrapper = modal.children[0]

    if (wrapper) {
        wrapper.style.animationName = 'modal-1'
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId)
    const wrapper = modal.children[0]

    if (wrapper) {
        wrapper.style.animationName = 'modal-2'
    }

    setTimeout(() => {
        modal.style.opacity = 0
        modal.style.zIndex = -1
    }, modal.style.animationDuration + 300)
}
