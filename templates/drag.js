const OPTIONS = {
    sort: true,
    handle: '.hr-Move',

    chosenClass: 'drag-chosen',
}

const questionsContainer = document.querySelector('.questions')
const sortable = new Sortable(questionsContainer, OPTIONS)
