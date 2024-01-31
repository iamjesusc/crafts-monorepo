// Document elements
const resultEl = document.getElementById('result')
const callButtonEl = document.getElementById('call-button')
const authorEl = document.getElementById('author')

// Fetch random quote
const fetchRandomQuote = async () => {
	const apiUrl = 'https://famous-quotes4.p.rapidapi.com/random?category=all&count=1'
	const OPTIONS = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'c55a9dd061msh0f6c65fa2934b98p19554ejsnd2515d57b7e3',
			'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com'
		}
	}

	try {
		const response = await fetch(apiUrl, OPTIONS)
		const result = await response.json()
		return result[0]
	} catch (err) {
		//  Manage err here
		console.log(err)
	}
}

let loadInterval
// Loader function
const Loader = element => {
	element.textContent = '.'
	loadInterval = setInterval(() => {
		element.textContent += '.'

		if (element.textContent.length > 3) {
			element.textContent = '.'
		}
	}, 300)
}

// Type text function
const typeText = (element, quote) => {
	element.textContent = ''
	let index = 0

	let interval = setInterval(() => {
		if (index < quote.text.length) {
			element.textContent += quote.text.charAt(index)
			++index
		} else {
			element.textContent += '”'
			callButtonEl.disabled = false
			return clearInterval(interval)
		}
	}, 20)
}

// Execute to click event
const executeTypeBot = async element => {
	callButtonEl.disabled = true
	element.textContent = ''
	Loader(element)
	const randomQuote = await fetchRandomQuote()
	authorEl.textContent = randomQuote.author
	clearInterval(loadInterval)
	typeText(element, randomQuote)
}

// Event listener
callButtonEl.addEventListener('click', event => {
	event.preventDefault()
	executeTypeBot(resultEl)
})
