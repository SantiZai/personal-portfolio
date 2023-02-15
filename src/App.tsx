import './App.css'
import { About } from './components/containers/About'
import { Contact } from './components/containers/Contact'
import { Header } from './components/containers/Header'
import { Projects } from './components/containers/Projects'
import { Skills } from './components/containers/Skills'

function App() {
	return (
		<div className='App'>
			<Header />
			<About />
			<Projects />
			<Skills />
			<Contact />
		</div>
	)
}

export default App
