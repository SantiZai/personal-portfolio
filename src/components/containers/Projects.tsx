import { Project } from '../pures/Project'
import projects from '../../config/projects.json'

export const Projects = () => {
	return (
		<div id='projects' className='w-full'>
			{projects.map((project, i) => {
				return <Project project={project} key={i} />
			})}
		</div>
	)
}
