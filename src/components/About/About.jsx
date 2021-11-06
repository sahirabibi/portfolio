import React from 'react';
import './About.css'
import profile from '../../assets/profilepic.png'
function About(props) {
    
	return (
		<section id='about' className='about-container'>
			<div className='right section-info about-me'>
				<h2>Get To Know Me</h2>
				{/* <a href="https://cdnlogo.com/logo/python_358.html"><img src="https://cdn.cdnlogo.com/logos/p/3/python.svg"/></a> */}
				<p className='about-info'>
					I am currently based in Brooklyn, NY. I am a software developer,
					trained researcher, and avid reader and writer with a passion for
					finding creative and analytical solutions to life's many problems. I
					am trained in quantitative and qualitative research with the goal to
					generate sophisticated solutions. I am motivated by the story that
					each of our creations can tell, whether that be writing an
					inspiration-struck short story or building a carefully cultivated
					website for any business needs.
				</p>
			</div>
			<div className='section-title left-section'>
				<img src={profile} className='pic profile' alt='profile'></img>
			</div>
		</section>
	);
}

export default About;
