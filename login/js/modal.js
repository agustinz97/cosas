//MODAL
const modal = document.getElementById('modal')

const btnOpen = document.getElementById('open-modal')
const btnClose = document.getElementById('close-modal')
const btnBack = document.getElementById('back-modal')

function open() {
    modal.style.opacity = 1
    modal.style.zIndex = 9

    const wrapper = modal.children[0]

    if (wrapper) {
        wrapper.style.animationName = 'modal-1'
    }
}

function close() {
    const wrapper = modal.children[0]

    if (wrapper) {
        wrapper.style.animationName = 'modal-2'
    }

    setTimeout(() => {
        modal.style.opacity = 0
        modal.style.zIndex = -1
    }, modal.style.animationDuration + 300)
}

btnOpen.addEventListener('click', open)

btnClose.addEventListener('click', close)

btnBack.addEventListener('click', close)

modal.addEventListener('click', evt => {
    if (evt.target === modal) {
        close()
    }
})
