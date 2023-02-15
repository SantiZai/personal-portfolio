import '../../styles/header.css'

export const Navbar = () => {
	return (
		<div className='w-full py-12'>
			<ul className='flex justify-center items-center flex-wrap gap-12 text-slate-300 text-3xl font-semibold'>
				<a href='#about' className='nav-link'>
					About
				</a>
				<a href='#' className='nav-link'>
					Projects
				</a>
				<a href='#' className='nav-link'>
					Skills
				</a>
				<a href='#' className='nav-link'>
					Contact
				</a>
			</ul>
		</div>
	)
}
