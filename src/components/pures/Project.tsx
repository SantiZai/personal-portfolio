import IProject from "../../interfaces/IProject"

interface Props {
	project: IProject
}

export const Project = ({ project }: Props) => {
	return (
		<div
			className='w-10/12 sm:w-1/2 flex flex-col gap-4 text-white mx-auto my-16 p-6 rounded-md'
			style={{ background: 'linear-gradient(131deg, rgba(106,45,111,1) 0%, rgba(198,35,104,1) 100%)', letterSpacing: '.10rem' }}>
			<h3 className="text-center font-semibold text-3xl">{project.name}</h3>
			<p className="text-center font-semibold text-xl">{project.description}</p>
			<div className='w-full flex flex-wrap'>
				{project.technologies.map((image, i) => {
					return <img src={image} key={i} className='w-28 m-auto p-4' />
				})}
			</div>
			<div className="flex justify-center items-center gap-2">
				<button
					className='py-2 px-8 rounded-md w-max font-semibold'
					style={{ backgroundColor: '#CBD5E1', color: '#001220' }}>
						<a href={project.repo}>Repo</a>
				</button>
				<button
					className='py-2 px-8 rounded-md w-max font-semibold'
					style={{ backgroundColor: '#001220', color: '#CBD5E1' }}>
						<a href={project.preview}>Preview</a>
				</button>
			</div>
		</div>
	)
}
