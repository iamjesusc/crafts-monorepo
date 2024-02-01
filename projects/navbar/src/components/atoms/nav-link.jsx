import '../../styles/atoms/nav-link.css'

export const NavLink = ({ link, label, ...props }) => {
	return (
		<li>
			<a className="nav-link" href={link} data-section={label} {...props}>
				{label}
			</a>
		</li>
	)
}
