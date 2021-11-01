import React from 'react';
import contacts from '../../data/stacklogos'


function Contact(props) {
    return (
			<div>
				<form action=''>
					<label htmlFor=''>Lets Connect!</label>
					<div className='stacks'>
						{contacts.map((logo) => (
							<div className='stack-item'>
								{logo.link}
							</div>
						))}
					</div>
					<textarea name='' id='' cols='40' rows='10'></textarea>
					<button>Submit</button>
				</form>
			</div>
		);
}

export default Contact;