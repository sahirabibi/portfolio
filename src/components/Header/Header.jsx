import React from 'react';
import './Header.css'

function Header(props) {
    return (
			<div className='header'>
				<h1 className='logo-item'>sb</h1>
				<ul className='nav'>
					<a href='#home'>
						<li className='nav nav-item'>Home</li>
					</a>
					<a href='#about'>
						<li className='nav nav-item'>About</li>
					</a>
					<a href='#skills'>
						<li className='nav nav-item'>Skills</li>
					</a>
					<a href='#projects'>
						<li className='nav nav-item'>Projects</li>
					</a>
					<a href='#contact'>
						<li className='nav nav-item'>Contact</li>
					</a>
				</ul>
			</div>
		);
}

export default Header;