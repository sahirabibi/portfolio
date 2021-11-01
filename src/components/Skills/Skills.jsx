import React from 'react';
import { stacks } from '../../data/stacklogos';
import './Skills.css'

function Skills(props) {
	return (
		<div className='skills-container'>
			<h2 className='skills-title'>Stacks I Use</h2>
			<div className='stacks'>
				{stacks.map((stack) => (
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
