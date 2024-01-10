import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'

function App() {
	return (
		<div className='App'>
			<div>
				<div className='white-gradient' />
				<Navbar />
				<Hero />
			</div>
		</div>
	)
}

export default App
