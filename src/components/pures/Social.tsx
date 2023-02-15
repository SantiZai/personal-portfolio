import '../../styles/social.css'

export const Social = () => {
	return (
		<div className='w-full text-white mx-auto my-12'>
			<h3 className='text-4xl text-center mb-6 font-semibold' style={{ letterSpacing: '.15rem' }}>Contact me</h3>
			<div className='container-social text-6xl w-full sm:w-3/4 flex flex-wrap justify-center items-center gap-12 m-auto rounded-md py-6 px-4'>
				<a href=''>
					<i className='fa fa-github' aria-hidden='true'></i>
				</a>
				<a href=''>
					<i className='fa fa-instagram' aria-hidden='true'></i>
				</a>
				<a href=''>
					<i className='fa fa-linkedin' aria-hidden='true'></i>
				</a>
				<a href=''>
					<i className='fa fa-facebook' aria-hidden='true'></i>
				</a>
			</div>
		</div>
	)
}
