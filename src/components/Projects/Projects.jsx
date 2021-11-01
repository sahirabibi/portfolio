import React from 'react';
import { projects } from '../../data/projects'
import Project from './Project';

function Projects(props) {
    return (
        <div>
            <h2>Projects</h2>     
            {projects.map(project => <Project project={project}/>)}
        </div>
    );
}

export default Projects;