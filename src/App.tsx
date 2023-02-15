import './App.css'
import { About } from './components/containers/About'
import { Contact } from './components/containers/Contact'
import { Header } from './components/containers/Header'
import { Projects } from './components/containers/Projects'

function App() {
	return (
		<div className='App'>
			<Header />
			<About />
			<Projects />
			<Contact />
		</div>
	)
}

export default App
