import React from 'react';
import './Header.css';

function Header(props) {
	return (
		<div className='nav-header'>
			<nav class='navbar navbar-expand-lg navbar-dark'>
				<h1 className='logo-item'>sb</h1>
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
					<div class='navbar-nav ml-auto'>
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
						<a
							class='nav-item nav-link'
							href='https://docs.google.com/document/d/14mZyFVWBE1qoxXGAAg_P425PHsRcF7RC43q_EBvdd30/edit?usp=sharing'
							target='_blank'
							rel='noreferrer'>
							Resume <span class='sr-only'>(current)</span>
						</a>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Header;
