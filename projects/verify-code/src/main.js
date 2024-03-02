import { KEYDOWN_KEYS, VALIDATING_REGEX } from './conts.js'

// Select document elements
const allInputs = document.querySelectorAll('input')
const button = document.querySelector('button')

// Define global variables
const TOTAL_INPUTS = allInputs.length
const VALIDATY_REGEX = 'REGEXP_ONLY_DIGITS'
let FIELD_VALUE = ''

allInputs[0].focus()

// Función para validar la entrada, evitar ingresar más de un carácter y caracteres no válidos.
const validateEntry = (entry, inputIndex) => {
  const currentInput = allInputs[inputIndex]
  const validateEntry = VALIDATING_REGEX[VALIDATY_REGEX]?.test(entry)

  // Validamos el entry si no se cumple asignamos vacio
  if (!validateEntry) {
    currentInput.value = ''
    return validateEntry
  }

  // Evita que se ingrese más de un valor al input.
  currentInput.value = entry.charAt(0)
  return validateEntry
}

// Función para establecer el valor del input uno por uno.
function setCodeInput (event, inputIndex) {
  const entry = event.target.value

  // Validamos la entrada
  if (!validateEntry(entry, inputIndex)) return

  // Si se cumplen las condiciones anteriores, enfocamos en el siguiente input.
  const nextInput = allInputs[inputIndex + 1]
  if (inputIndex < TOTAL_INPUTS - 1 && nextInput) {
    nextInput.focus()
    nextInput.setSelectionRange(0, 0)
  }
}

// Manejar la opcion de enfoque para atras
function handleBackspace (e, inputIndex) {
  // Verifica si la tecla presionada es "Backspace"
  if (e.key !== KEYDOWN_KEYS.BACKSPACE) return

  // Obtiene el input anterior y el input actual
  const currentInput = allInputs[inputIndex]
  const prevInput = allInputs[inputIndex - 1]

  // Para eleminar seleccionamos rango 0 - 1 para el primer caracter
  currentInput.setSelectionRange(0, 1)

  // Si el input actual no está vacío, no realiza ninguna acción
  if (currentInput.value.length > 0) return

  // Si hay un input anterior, enfoca en él
  if (inputIndex > 0 && prevInput !== undefined) prevInput.focus()
}

// Manejar la opcion de pegado
function handlePaste (e) {
  e.preventDefault()

  const textoPegado = (e.clipboardData || window.Clipboard).getData('text')

  allInputs.forEach((input, index) => {
    if (!validateEntry(textoPegado[index], index)) return
    input.value = textoPegado[index] ? textoPegado[index].trim() : ''
  })
}

function handleMove (e, inputIndex) {
  if (e.key !== KEYDOWN_KEYS.ARROWLEFT && e.key !== KEYDOWN_KEYS.ARROWRIGHT) return

  if (e.key === KEYDOWN_KEYS.ARROWLEFT) {
    const prevInput = allInputs[inputIndex - 1]
    if (inputIndex > 0 && prevInput !== undefined) prevInput.focus()
  }

  if (e.key === KEYDOWN_KEYS.ARROWRIGHT) {
    const nextInput = allInputs[inputIndex + 1]
    if (inputIndex < TOTAL_INPUTS - 1 && nextInput) {
      nextInput.focus()
      nextInput.setSelectionRange(0, 0)
    }
  }
}

// Event Listener
allInputs.forEach((input, inputIndex) => {
  input.addEventListener('input', e => setCodeInput(e, inputIndex))
  input.addEventListener('keydown', e => handleBackspace(e, inputIndex))
  input.addEventListener('keydown', e => handleMove(e, inputIndex))
  input.addEventListener('paste', handlePaste)
})

button.addEventListener('click', (e) => {
  FIELD_VALUE = ''
  allInputs.forEach((input) => {
    FIELD_VALUE += input.value
  })

  window.alert(FIELD_VALUE)
})
