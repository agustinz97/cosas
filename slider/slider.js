const btnSliderNext = document.getElementById('btn-slider-next')
const btnSliderPrev = document.getElementById('btn-slider-prev')
const slider = document.getElementById('slider')

btnSliderNext &&
    btnSliderNext.addEventListener('click', () => {
        // Scroll
        const sliderWidth = slider.clientWidth
        const currentPosition = slider.scrollLeft
        const elementWidth = slider.children[0].getBoundingClientRect().width
        const newCurrentPosition = currentPosition + elementWidth

        slider.scrollTo(newCurrentPosition, 0)

        if (newCurrentPosition > 0) {
            btnSliderPrev.classList.remove('slider-hidden')
        }
    })

btnSliderPrev &&
    btnSliderPrev.addEventListener('click', () => {
        // Scroll
        const currentPosition = slider.scrollLeft
        const elementWidth = slider.children[0].getBoundingClientRect().width
        const newCurrentPosition = currentPosition - elementWidth

        slider.scrollTo(newCurrentPosition, 0)
    })
