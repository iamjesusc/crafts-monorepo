import { useRef } from 'react'
import '../styles/components/navbar.css'
import Backdrop from './atoms/backdrop'
import useBackDrop from '../hooks/useBackDrop'
import { NavLink } from './atoms/nav-link'

export const Navbar = ({ links }) => {
	const backdropRef = useRef(null)
	const parentRef = useRef(null)
	const { rect, handleMouseEnter, handleMouseLeave } = useBackDrop(parentRef, backdropRef)

	return (
		<>
			<header className="header" data-header>
				<nav className="nav">
					<ul className="nav-list" ref={parentRef}>
						{links.map(link => (
							<NavLink
								link={link.link}
								label={link.label}
								key={link.label}
								onMouseEnter={e => handleMouseEnter(e)}
								onMouseLeave={handleMouseLeave}
							/>
						))}
					</ul>

					<Backdrop rect={rect} backdropRef={backdropRef} />
				</nav>
			</header>
		</>
	)
}
