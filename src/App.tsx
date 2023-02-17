import './App.css'
import { About } from './components/containers/About'
import { Contact } from './components/containers/Contact'
import { Footer } from './components/containers/Footer'
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
			<Footer />
		</div>
	)
}

export default App
