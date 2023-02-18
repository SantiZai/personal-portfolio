import IProject from "../../interfaces/IProject"

interface Props {
	project: IProject
}

export const Project = ({ project }: Props) => {
	//TODO dividir proyectos en front, back o full
	return (
		<div
			className='w-10/12 sm:w-1/3 flex justify-between flex-col gap-4 text-white mx-auto my-16 rounded-md'
			style={{ background: 'linear-gradient(131deg, rgba(106,45,111,1) 0%, rgba(198,35,104,1) 100%)', letterSpacing: '.10rem' }}>
			<h3 className="text-center font-semibold text-3xl sm:text-4xl p-6 mt-4">{project.name}</h3>
			<p className="text-center text-md sm:text-lg p-6">{project.description}</p>
			<div className='w-full flex flex-wrap p-6' style={{ backgroundColor: '#90296C' }}>
				{project.technologies.map((image, i) => {
					return <img src={image} key={i} className='w-28 m-auto p-4' />
				})}
			</div>
			<div className="flex justify-center items-center p-6">
				<button
					className='py-2 px-8 rounded-md w-max font-bold mb-4'
					style={{ backgroundColor: '#CBD5E1', color: '#001220' }}>
						<a href={project.repo}>go to repo</a>
				</button>
			</div>
		</div>
	)
}
