import React from 'react'

const Footer = () => {
	return (
		<footer className='footer-container'>
			<section className='social-media'>
				<div className='social-media-wrap'>
					<div className='footer-logo'>
						<a href='#' className='social-logo'>
							<img src='./logocrop_resize.png' alt='logo' width={50} />
						</a>
					</div>
					<small className='website-rights'>Langdom © 2024</small>
                    <div className="social-icons">
                        <a href="#" className='social-icon-link facebook' target='_blank'></a>
                    </div>
				</div>
			</section>
		</footer>
	)
}

export default Footer
