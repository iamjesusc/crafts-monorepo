import { useState } from 'react'

export default function useBackDrop(parentRef, backdropRef) {
	const [rect, setRect] = useState({})

	const handleMouseEnter = e => {
		const parentRect = parentRef.current.getBoundingClientRect()
		const { top, left, width, height } = e.target.getBoundingClientRect()

		let relativeTop = top - parentRect.top
		let relativeLeft = left - parentRect.left

		setRect({ relativeTop, relativeLeft, width, height })

		backdropRef.current.style.opacity = 0.9
		backdropRef.current.style.visibility = 'visible'
	}

	const handleMouseLeave = () => {
		backdropRef.current.style.opacity = 0
		backdropRef.current.style.visibility = 'hidden'
	}

	return {
		rect,
		handleMouseEnter,
		handleMouseLeave
	}
}
