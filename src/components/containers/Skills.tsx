import skills from '../../config/skills.json'
import { Skill } from '../pures/Skill'

export const Skills = () => {
	return (
		<>
			<h3 className='font-semibold text-4xl text-white text-center' style={{ letterSpacing: '.15rem' }}>My skills</h3>
			<div
				id='skills'
				className='w-full sm:w-3/4 mx-auto my-8 flex justify-center items-center flex-wrap gap-4'>
				{skills.map((skill, i) => {
					return <Skill skill={skill} key={i} />
				})}
			</div>
		</>
	)
}
