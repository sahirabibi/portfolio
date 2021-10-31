import React from 'react';
import './Header.css'

function Header(props) {
    return (
			<div className='header'>
				<h1 className='logo-item'>bb</h1>
				<ul className='nav'>
					<li className='nav nav-item'>About</li>
					<li className='nav nav-item'>Skills</li>
					<li className='nav nav-item'>Projects</li>
					<li className='nav nav-item'>Resume</li>
					<li className='nav nav-item'>Contact</li>
				</ul>
			</div>
		);
}

export default Header;