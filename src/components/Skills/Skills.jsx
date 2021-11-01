import React from 'react';
import { stacks } from '../../data/stacklogos';
import './Skills.css'

function Skills(props) {
	return (
		<div id='skills' className='skills-container'>
			<h2 className='skills-title'>Tools In My Belt</h2>
			<div className='stacks'>
				{stacks.slice(0, 9).map((stack) => (
					<div className='stack-item'>
						<p>{stack.title}</p>
						{stack.link}
					</div>
				))}
			</div>
		</div>
	);
}

export default Skills;
