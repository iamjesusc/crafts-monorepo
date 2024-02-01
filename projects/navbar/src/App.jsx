import { Navbar } from './components/navbar'

function App() {
	const links = [
		{ label: 'Vehículos', href: '#', dataSection: 'Vehículos' },
		{ label: 'Energía', href: '#', dataSection: 'Energía' },
		{ label: 'Carga', href: '#', dataSection: 'Carga' },
		{ label: 'Descubrir', href: '#', dataSection: 'Descubrir' },
		{ label: 'Tienda', href: '#', dataSection: 'Tienda' }
	]

	return <Navbar links={links} />
}

export default App
