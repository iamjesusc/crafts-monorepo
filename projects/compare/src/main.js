const range = document.getElementById('range')
range.oninput = () => {
  document.body.style.setProperty('--pos', range.value + '%')
}
