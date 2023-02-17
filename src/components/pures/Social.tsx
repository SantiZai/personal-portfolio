import '../../styles/social.css'

export const Social = () => {
	return (
		<div className='w-full text-white mx-auto my-12'>
			<h3 className='text-4xl text-center mb-6 font-semibold' style={{ letterSpacing: '.15rem' }}>Contact me</h3>
			<div className='container-social text-6xl w-full sm:w-3/4 flex flex-wrap justify-center items-center gap-12 m-auto rounded-md py-6 px-4'>
				<a href='https://github.com/SantiZai'>
					<i className='fa fa-github' aria-hidden='true'></i>
				</a>
				<a href='https://www.instagram.com/santizaidan_/'>
					<i className='fa fa-instagram' aria-hidden='true'></i>
				</a>
				<a href='https://www.linkedin.com/in/santiago-zaidan-b68841229/'>
					<i className='fa fa-linkedin' aria-hidden='true'></i>
				</a>
				<a href='https://linktr.ee/santizai?utm_source=linktree_profile_share&ltsid=a181f762-69d7-49c7-b471-43f60ea76371'>
					<i className='fa fa-link' aria-hidden='true'></i>
				</a>
			</div>
		</div>
	)
}
