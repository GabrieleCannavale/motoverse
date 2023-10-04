import React from 'react';
import {
	MDBFooter,
	MDBContainer,
} from 'mdb-react-ui-kit';
import { BsFacebook, BsGithub, BsTwitter, BsLinkedin } from 'react-icons/bs';
import './footer.css'; 

export default function Footer() {
	return (
		<MDBFooter className='foooter text-center text-white'>
			<MDBContainer className='pt-4'>
				<section className='mb-4 d-flex justify-content-center space-evenly'>
					<a href='https://www.facebook.com/'><BsFacebook className='icon mx-2' /></a>
					<a href='https://github.com/GabrieleCannavale/motoverse'><BsGithub className='icon mx-2' /></a>
					<a href='https://twitter.com/'><BsTwitter className='icon mx-2' /></a>
					<a href='linkedin.com/in/gabriele-cannavale-a8a038140'><BsLinkedin className='icon mx-2' /></a>
				</section>
			</MDBContainer>

			<div className='text-center text-white p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
				this is Motoverse.it proudly developed by <span className='fw-bolder fst-italic'>Il Gringo</span>
				
			</div>
		</MDBFooter>
	);
}
