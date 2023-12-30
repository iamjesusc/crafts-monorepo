const theme = document.querySelector('#theme')
const range = document.getElementById('range')

range.oninput = () => {
  document.body.style.setProperty('--pos', range.value + '%')
}

theme.oninput = () => {
  document.body.style.setProperty('--base', theme.value)
}

const images = document.querySelectorAll('.section__image')
const compareImages = document.querySelectorAll('.compare__image')

const memory = {
  previousIndexCompare: 0
}

const changeImage = () => {
  images.forEach((image) => {
    image.addEventListener('click', () => {
      if (memory.previousIndexCompare === 0) {
        compareImages[0].src = image.src
        compareImages[0].setAttribute('alt', image.alt)
        memory.previousIndexCompare = 1
      } else {
        image.style.opacity = 1
        compareImages[1].src = image.src
        memory.previousIndexCompare = 0
      }
    })
  })
}

changeImage()
