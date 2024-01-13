import React from 'react'
import './Footer.css'

const Footer = () => {
	return (
		<footer className='footer-container'>
			<section className='social-media'>
				<div className='social-media-wrap'>
					<div className='footer-logo'>
						<a href='#' className='social-logo'>
							<img src='./logocrop_resize.png' alt='logo' width={100} />
						</a>
					</div>
					<p className='website-rights'>Langdom © 2024</p>
					<div className='social-icons'>
						<a className='social-icon-link facebook' to='https://www.facebook.com/langdomidiomas/' target='_blank' aria-label='Facebook'>
							<i className='fab fa-facebook-f' />
						</a>
						<a className='social-icon-link instagram' to='https://www.instagram.com/langdomidiomas/' target='_blank' aria-label='Instagram'>
							<i className='fab fa-instagram' />
						</a>
						<a className='social-icon-link whatsapp' to='/' target='_blank' aria-label='WhatsApp'>
							<i className='fab fa-whatsapp' />
						</a>
					</div>
				</div>
			</section>
		</footer>
	)
}

export default Footer
