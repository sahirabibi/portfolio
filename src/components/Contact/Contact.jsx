import React from 'react';
import contacts from '/Users/sahirabibi/sei/projects/portfolio/src/data/contactslogos.jsx';
import './Contact.css'


function Contact(props) {
    return (
			<div id='contact' className='contact-container'>
				<div className='contact-details'>
					<h2 className='contact-title'>Lets Connect!</h2>
					<div className='stacks'>
						{contacts.map((logo) => (
							<div className='stack-item'>{logo.link}</div>
						))}
					</div>
				</div>
				<div className='contact-form-container'>
					<form className='contact-form' action=''>
						<input className='form-item' type='text' placeholder='your name' />
						<input className='form-item' type='text' placeholder='your email' />
						<textarea
							className='form-item'
							name=''
							id=''
							cols='40'
							rows='10'
							placeholder='your message'></textarea>
						<button className='btn form-btn'>Submit</button>
					</form>
				</div>
			</div>
		);
}

export default Contact;