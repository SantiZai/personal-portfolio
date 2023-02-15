import img from '../../assets/Lawn Tennis tribuna.jpeg'

export const About = () => {
	return (
		<div className='w-full py-8' id='about'>
			<div className='container m-auto flex flex-col sm:flex-row justify-between items-center text-slate-300'>
				<div className='w-3/4 sm:w-1/3'>
					<img
						src={img}
						alt='Image profile'
						className='rounded-full w-full'
					/>
				</div>
				<div className='w-3/4 sm:w-1/3'>
					<p className='my-6' style={{ letterSpacing: '.15rem' }}>
						I am a software developer in constant training and
						growth, I specialize in creating complete web
						applications tailored to each project.
					</p>
					<p className='my-6' style={{ letterSpacing: '.15rem' }}>
						Among my qualities are proactivity, leadership,
						teamwork, decision making, project structuring, among
						others.
					</p>
					<p className='my-6' style={{ letterSpacing: '.15rem' }}>These are some of my most <a style={{ color: '#C62368' }} href='#projects'>recent projects</a>.</p>
				</div>
			</div>
		</div>
	)
}
