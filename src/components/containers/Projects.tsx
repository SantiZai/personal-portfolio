import { Project } from '../pures/Project'
import projects from '../../config/projects.json'

export const Projects = () => {
	return (
		<>
			<h2 className='mt-8 mb-14 text-white font-semibold text-4xl text-center'>
				My projects
			</h2>
			<div id='projects' className='w-full flex flex-wrap gap-4'>
				{projects.map((project, i) => {
					return <Project project={project} key={i} />
				})}
			</div>
		</>
	)
}
