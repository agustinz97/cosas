const btnSliderNext = document.getElementById('btn-slider-next')
const btnSliderPrev = document.getElementById('btn-slider-prev')
const slider = document.getElementById('slider')

btnSliderNext &&
    btnSliderNext.addEventListener('click', () => {
        // Scroll
        const sliderWidth = slider.clientWidth
        slider.scrollTo(sliderWidth, 0)

        //enable back button
        btnSliderPrev.classList.remove('slider-hidden')

        //disable next button
        btnSliderNext.classList.add('slider-hidden')
    })

btnSliderPrev &&
    btnSliderPrev.addEventListener('click', () => {
        // Scroll
        slider.scrollTo(0, 0)

        //enable next button
        btnSliderNext.classList.remove('slider-hidden')

        //disable prev button
        btnSliderPrev.classList.add('slider-hidden')
    })
