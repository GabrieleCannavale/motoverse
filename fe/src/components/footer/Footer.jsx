import React from 'react';
import {
	MDBFooter,
	MDBContainer,
} from 'mdb-react-ui-kit';
import { BsFacebook, BsGithub, BsTwitter, BsLinkedin } from 'react-icons/bs';
import './footer.css'; 

export default function Footer() {
	return (
		<MDBFooter className='text-center text-white' style={{ backgroundColor: '#FFA559' }}>
			<MDBContainer className='pt-4'>
				<section className='mb-4 d-flex justify-content-center space-evenly'>
					<a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer'><BsFacebook className='icon mx-2' /></a>
					<a href='https://github.com/' target='_blank' rel='noopener noreferrer'><BsGithub className='icon mx-2' /></a>
					<a href='https://twitter.com/' target='_blank' rel='noopener noreferrer'><BsTwitter className='icon mx-2' /></a>
					<a href='https://www.linkedin.com/' target='_blank' rel='noopener noreferrer'><BsLinkedin className='icon mx-2' /></a>
				</section>
			</MDBContainer>

			<div className='text-center text-dark p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
				© 2023 Copyright:
				<a className='text-dark' href='https://mdbootstrap.com/'>
					Motoverse.it
				</a>
			</div>
		</MDBFooter>
	);
}
