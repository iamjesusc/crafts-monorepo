// documents elements
const form = document.getElementById('main-form')
const legend = document.getElementById('output-legend')
const output = document.getElementById('main-output')
const rangeCurrent = document.getElementById('range-current')
const resultMindReader = document.getElementById('result-mind-reader')
const resultContainer = document.getElementById('main-result')
const closeButton = document.getElementById('close-button')
const formButton = document.querySelector('.form-button')
const cancelButton = document.getElementById('cancel')

const readingLegends = [
  'Analyzing brainwaves...',
  'Scanning memories...',
  'Calculating probabilities...',
  'Decoding thoughts...'
]

const getLegendIndex = (value) => {
  if (value <= 25) return 0
  if (value <= 50) return 1
  if (value <= 75) return 2
  return 3
}

let animateInterval

const animateRange = () => {
  let i = 0
  rangeCurrent.style.background = '#0ecf39'

  animateInterval = setInterval(() => {
    rangeCurrent.style.width = `${i}%`

    const legendIndex = getLegendIndex(i)
    legend.innerText = readingLegends[legendIndex]

    i++

    if (i > 100) {
      output.classList.remove('active')
      resultContainer.classList.add('result-active')
      clearInterval(animateInterval)
    }
  }, 60)
}

// Get form value
const getFormValue = form => {
  const value = new FormData(form).get('number')
  return value
}

form.addEventListener('submit', event => {
  event.preventDefault()
  formButton.disabled = true
  output.classList.add('active')
  const value = getFormValue(form)

  if (isNaN(Number(value))) {
    console.log(Number(value))
    legend.innerText = 'Please enter a number'
    rangeCurrent.style.background = 'red'
    rangeCurrent.style.width = '100%'

    return
  } else {
    resultMindReader.innerText = value
  }

  animateRange()
})

cancelButton.addEventListener('click', () => {
  output.classList.remove('active')
  clearInterval(animateInterval)
  formButton.disabled = false
  rangeCurrent.style.width = 0
})

closeButton.addEventListener('click', () => {
  resultContainer.classList.remove('result-active')
  formButton.disabled = false
})
