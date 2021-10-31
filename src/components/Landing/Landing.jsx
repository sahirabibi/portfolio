import React from 'react';
import './Landing.css';
import TypeAnimation from 'react-type-animation';
import programmer from '../../assets/programmer.png'


function Landing(props) {

    return (
			<div className='landing'>
				<div className='left'>
					<img className='pic' src={programmer} alt='programmer' />
				</div>
				<div className='right'>
					<TypeAnimation
						cursor={false}
						sequence={["Hi. I'm Sahira.", 3000]}
						wrapper='h1'
					/>
					<TypeAnimation
						cursor={true}
						sequence={[
							'I am a Software Engineer.',
							3000,
							'I am a Web Developer.',
							3000,
							'I love designing beautiful interfaces.',
							3000,
							'I am an avid reader.',
							3000,
							'I am a horror enthusiast.',
							3000,
							'Let build something together.',
						]}
						wrapper='h2'
					/>
				</div>
			</div>
		);
}

export default Landing;