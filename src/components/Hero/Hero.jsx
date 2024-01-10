import React from 'react'
import './Hero.css'

const Hero = () => {
	return (
		<section className='hero-wrapper'>
			<div className='paddings innerWidth flexCenter hero-container'>
				{/* LADO ESQUERDO */}
				<div className='flexColStart hero-left'>
					<div className='hero-title'>
						<div className='orange-circle'>
							<h1>
								Langdom <br /> Idiomas <br /> Lorem, ipsum dolor.
							</h1>
						</div>

						<div className='flexColStart hero-des'>
							<span className='secondaryText'>
								{' '}
								Find a veriety of properties that suit you very easily
							</span>
							<span className='secondaryText'>
								{' '}
								Forget all difficulties in finding a residence for you
							</span>
						</div>
					</div>
				</div>
        {/* LADO DIREITO */}

        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./escolita.JPG" alt="imagem da escola" />
          </div>
        </div>
			</div>
		</section>
	)
}

export default Hero
