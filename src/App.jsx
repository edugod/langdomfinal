import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Footer from './components/Footer/Footer'

function App() {
	return (
		<div className='App'>
			<div>
				<div className='white-gradient' />
				<Navbar />
				<Hero />
			</div>
			<Footer />
		</div>
	)
}

export default App
