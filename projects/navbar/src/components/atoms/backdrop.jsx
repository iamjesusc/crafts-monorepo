import React from 'react'
import '../../styles/atoms/backdrop.css'
export default function Backdrop({ rect, backdropRef }) {
	return (
		<div
			ref={backdropRef}
			className="backdrop"
			style={{
				top: rect.relativeTop,
				left: rect.relativeLeft,
				width: rect.width,
				height: rect.height
			}}
		></div>
	)
}
