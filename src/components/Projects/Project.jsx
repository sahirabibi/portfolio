import React from 'react';
import {stacks} from '../../data/stacklogos'
import { useState, useEffect } from 'react';
import './Project.css'


function Project({project}) {
    const [usedStacks, setUsedStacks] = useState([]);

    useEffect(() => {
        setUsedStacks([...stacks.filter(stack => project.stacks.includes(stack.title))])
    }, [])

    return (
			<div className='project-container'>
				<div className='img-container'>{project.image}</div>
				<div className='project-info'>
					<h3>{project.title}</h3>
					<p>{project.description}</p>
					<a href={project.link}>
						<button>View Live Site</button>
					</a>
					<div className='stacks'>
						{usedStacks.map((stack) => (
							<div className='stack-item'>
								<p>{stack.title}</p>
								{stack.link}
							</div>
						))}
					</div>
				</div>
			</div>
		);
}

export default Project;