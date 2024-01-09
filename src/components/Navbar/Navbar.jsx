import React from 'react'
import './Navbar.css'

const Navbar = () => {
	return (
		<nav className='h-wrapper'>
			<div className='flexCenter paddings innerWidth h-container'>
				<img src='./logocrop_resize.png' alt='logo' width={100} />

				<div className='flexCenter h-menu'>
					<a href=''>Home</a>
					<a href=''>Sobre Nós</a>
					<a href=''>Cursos</a>
					<a href=''>Tobacco 🍂</a>
                    <button className='button'>
						<a href=''>Contact</a>
					</button>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
