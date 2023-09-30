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

import { toast } from 'react-toastify';

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
		
		toast.success('Registration success', {
			position: "top-center",
			autoClose: 1200,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "colored",
			});
	}


	const goToLogin = () => {
		navigate("/");
	};


	return (
		<>

			<MDBContainer fluid className='p-4'>

				<MDBRow className='align-items-center justify-content-center'>

					<MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

					<img src="https://i.postimg.cc/9QVHNRxB/motoverse-FINAL.png" alt="mtverse" border="0" />
					
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

									<div className='d-flex justify-content-center mb-4'>
										Already have an account?   <a onClick={goToLogin}>go to Login</a>
									</div>

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