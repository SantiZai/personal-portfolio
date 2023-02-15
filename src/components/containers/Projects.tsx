import { Project } from '../pures/Project'
import projects from '../../config/projects.json'

export const Projects = () => {
	return (
		<div className='w-full'>
			{projects.map((project, i) => {
				return <Project project={project} key={i} />
			})}
		</div>
	)
}
