import React from 'react';
import contacts from '../../data/contactslogos';
import './Contact.css'
import {useState} from 'react'
import Alert from 'react-bootstrap/Alert';
import emailjs from 'emailjs-com';


function Contact(props) {
const [show, setShow] = useState(false);

function handleSubmit(e) {
	e.preventDefault();
	emailjs
		.sendForm(
			'service_xfwcbp5',
			'template_20euk9d',
			e.target,
		)
		.then(
			(result) => {
				console.log(result);
			},
			(error) => {
				console.log(error.text);
			}
		);
	setShow(true);
};
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
					<form
						className='contact-form'
						action='mailto:sahirabibi96@gmail.com'
						method='POST'
						enctype='multipart/form-data'
						name='EmailForm'
						onSubmit={handleSubmit}>
						<input className='form-item' type='text' placeholder='your name' />
						<input className='form-item' type='text' placeholder='your email' />
						<textarea
							className='form-item'
							name=''
							id=''
							cols='40'
							rows='10'
							placeholder='your message'></textarea>
						<Alert variant='success' id='contact-alert' show={show} >
							Message Sent!
						</Alert>
						<button className='btn form-btn'>Submit</button>
					</form>
				</div>
			</div>
		);
}

export default Contact;