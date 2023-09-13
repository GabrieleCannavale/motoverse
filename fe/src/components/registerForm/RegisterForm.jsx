import React, { useRef } from 'react';
import {
	MDBBtn,
	MDBContainer,
	MDBRow,
	MDBCol,
	MDBCard,
	MDBCardBody
} from 'mdb-react-ui-kit';
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';

import { FaMotorcycle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userPost } from '../../redux/userSlice';


function RegisterForm() {

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const username = useRef("");
	const fullName = useRef("");
	const email = useRef("");
	const password = useRef("")
	const userAvatar = useRef("");
	const birthDate = useRef("");
	const drivingExperienceLevel = useRef("");

	const handleSubmit = () => {

		const data = {
			username: username.current.value,
			fullName: fullName.current.value,
			birthDate: birthDate.current.value,
			email: email.current.value,
			password: password.current.value,
			userAvatar: userAvatar.current.files[0],
			drivingExperienceLevel: drivingExperienceLevel.current.value
		};

		dispatch(userPost(data));
		navigate("/")
	}




	return (
		<>

			<MDBContainer fluid className='p-4'>

				<MDBRow>

					<MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

						<h1 className="my-5 display-3 fw-bold ls-tight px-3">
							motoverSe.it <br />
							<span className="text-danger">inserisci slogan qui</span>
						</h1>

						<p className='px-3' style={{ color: 'hsl(217, 10%, 50.8%)' }}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Eveniet, itaque accusantium odio, soluta, corrupti aliquam
							quibusdam tempora at cupiditate quis eum maiores libero
							veritatis? Dicta facilis sint aliquid ipsum atque?
						</p>

					</MDBCol>

					<MDBCol md='6'>

						<MDBCard className='py-4 m-5'>

							<MDBCardBody className='p-5'>
								<Form>


									<Form.Control type="input" className='my-1' ref={username} placeholder="Username" />
									<Form.Control type="input" className='my-1' ref={fullName} placeholder="Name and Second Name" />
									<Form.Control type="email" className='my-1' ref={email} placeholder="email" />
									<Form.Control type="date" className='my-1' ref={birthDate} placeholder="Enter your birthdate" />
									<Form.Control type="password" className='my-1' ref={password} placeholder="Password" />
									<Row>
										<Col md={6} xs={12}>
											<label>Avatar:</label>
											<Form.Control type="file" className='my-1' ref={userAvatar} />
										</Col>
										<Col md={6} xs={12}>
											<label>Esperienza di guida</label>
											<Form.Select aria-label="Default select example" ref={drivingExperienceLevel}>
												<option value="Beginner">Beginner</option>
												<option value="Intermediate">Intermediate</option>
												<option value="Expert">Expert</option>
											</Form.Select>
										</Col>

									</Row>


									<MDBBtn className='mt-4 w-100 mb-4 bg-danger' onClick={handleSubmit} size='md'> Register <FaMotorcycle /> </MDBBtn>

								</Form>

							</MDBCardBody>

						</MDBCard>

					</MDBCol>

				</MDBRow>

			</MDBContainer>
		</>
	);
}

export default RegisterForm;