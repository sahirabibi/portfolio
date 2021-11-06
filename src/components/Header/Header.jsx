import React from 'react';
import './Header.css';

function Header(props) {
	return (
		<div className='header'>
			<h1 className='logo-item'>sb</h1>
			<nav class='navbar navbar-expand-lg navbar-dark'>
				<button
					class='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarNavAltMarkup'
					aria-controls='navbarNavAltMarkup'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<span class='navbar-toggler-icon'></span>
				</button>
				<div class='collapse navbar-collapse' id='navbarNavAltMarkup'>
					<div class='navbar-nav'>
						<a class='nav-item nav-link active' href='#home'>
							Home <span class='sr-only'>(current)</span>
						</a>
						<a class='nav-item nav-link' href='#about'>
							About <span class='sr-only'>(current)</span>
						</a>
						<a class='nav-item nav-link' href='#skills'>
							Tools <span class='sr-only'>(current)</span>
						</a>
						<a class='nav-item nav-link' href='#projects'>
							Projects <span class='sr-only'>(current)</span>
						</a>
						<a class='nav-item nav-link' href='#contact'>
							Contact <span class='sr-only'>(current)</span>
						</a>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Header;
