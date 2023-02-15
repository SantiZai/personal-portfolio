import ISkill from '../../interfaces/ISkill'

interface Props {
	skill: ISkill
}

export const Skill = ({ skill }: Props) => {
	return (
		<div className='w-44 flex flex-col justify-center items-center text-white gap-4 font-semibold rounded-sm p-4' style={{ letterSpacing: '.10rem', backgroundColor: '#6a2d6f' }}>
			<h3>{skill.name}</h3>
			<img src={skill.image} className='w-20 h-20' />
		</div>
	)
}
