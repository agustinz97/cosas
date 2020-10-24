const btnEmpresa = document.getElementById('btn-empresa')
const btnVacantes = document.getElementById('btn-vacantes')
const sectionEmpresa = document.getElementById('section-empresa')
const sectionVacantes = document.getElementById('section-vacantes')

btnEmpresa.addEventListener('click', () => {
    btnEmpresa.classList.add('active')
    btnVacantes.classList.remove('active')

    sectionEmpresa.classList.add('d-block')
    sectionVacantes.classList.add('d-none')
})

btnVacantes.addEventListener('click', () => {
    btnVacantes.classList.add('active')
    btnEmpresa.classList.remove('active')

    sectionEmpresa.classList.remove('d-block')
    sectionVacantes.classList.remove('d-none')
})

function sendMessage() {
    closeModal('modal-support')
    openModal('modal-ok')
}
