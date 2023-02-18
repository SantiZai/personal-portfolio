import { useEffect } from 'react'
import { Navbar } from '../pures/Navbar'
import Typed from 'typed.js'

export const Header = () => {
	useEffect(() => {
		const typedName = new Typed('.name', {
			strings: ['Santiago Zaidan'],
			typeSpeed: 100,
			startDelay: 1000,
			showCursor: false,
		})

        const typedPresen = new Typed('.i-am', {
			strings: ['I am a software developer'],
			typeSpeed: 60,
			startDelay: 4000,
			showCursor: false,
		})
	})

	return (
		<div className='h-screen header'>
			<Navbar />
			<div className='w-full h-2/3 text-center flex flex-col items-center justify-center gap-12'>
				<span className='name text-8xl text-slate-300 font-semibold'></span>
				<span className='i-am text-4xl text-slate-300 font-semibold'></span>
			</div>
		</div>
	)
}
