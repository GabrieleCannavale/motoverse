import React, { useRef, useState } from 'react';
import jwt_decode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { Form, Button, Row, Col, Modal } from "react-bootstrap";
import { PiSignpostBold } from 'react-icons/pi';
import { postPost } from '../../redux/postSlice';

const AddPostModal = () => {
	const dispatch = useDispatch();

	const token = localStorage.getItem('userLoggedIn');
	let decodedToken;
	if (token) {
		decodedToken = jwt_decode(token);
	}

	const title = useRef('');
	const startingPoint = useRef('');
	const endingPoint = useRef('');
	const province = useRef('');
	const image = useRef('');
	const content = useRef('');
	const kilometers = useRef('');
	const travelTime = useRef('');
	const date = useRef("");

	const [optSmModal, setOptSmModal] = useState(false);

	const toggleShow = () => setOptSmModal(!optSmModal);

	const handleSubmit = (e) => {
		e.preventDefault();

		const token = localStorage.getItem('userLoggedIn');
		if (token) {
			const decodedToken = jwt_decode(token);
			const userId = decodedToken.id;
			//console.log(decodedToken)
			const postData = {
				user: userId,
				title: title.current.value,
				startingPoint: startingPoint.current.value,
				endingPoint: endingPoint.current.value,
				province: province.current.value,
				image: image.current.files[0],
				content: content.current.value,
				kilometers: kilometers.current.value,
				travelTime: travelTime.current.value,
				date: date.current.value
			}
			dispatch(postPost(postData)).then(() => setOptSmModal(false))
		}


	};

	return (
		<>
			<Button variant="primary" onClick={toggleShow}>Aggiungi post</Button>
			<Modal show={optSmModal} onHide={toggleShow}>
				<Modal.Header closeButton>
					<Modal.Title>Aggiungi un post alla bacheca!</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={handleSubmit}>
						<Row>
							<Col>
								<Form.Group controlId="formStartingPoint">
									<Form.Label className='mb-0 pb-0 mt-2'>Da:</Form.Label>
									<Form.Control type="text" ref={startingPoint} />
								</Form.Group>
							</Col>
							<Col>
								<Form.Group controlId="formEndingPoint">
									<Form.Label className='mb-0 pb-0 mt-2'>A:</Form.Label>
									<Form.Control type="text" ref={endingPoint} />
								</Form.Group>
							</Col>
						</Row>
						<Form.Group controlId="formTitle">
							<Form.Label className='mb-0 pb-0 mt-2'>Titolo del post</Form.Label>
							<Form.Control type="text" ref={title} />
						</Form.Group>

						<Row>
							<Col>
								<Form.Group controlId="formTitle">
									<Form.Label className='mb-0 pb-0 mt-2'>Data e ora:</Form.Label>
									<Form.Control type="text" ref={date} />
								</Form.Group>
							</Col>
							<Col>
								<Form.Group controlId="formTitle">
									<Form.Label className='mb-0 pb-0 mt-2'>Provincia:</Form.Label>
									<Form.Control type="text" ref={province} />
								</Form.Group>
							</Col>
						</Row>


						<Row>
							<Col>
								<Form.Group controlId="formKilometers">
									<Form.Label className='mb-0 pb-0 mt-2'>Km:</Form.Label>
									<Form.Control type="text" ref={kilometers} />
								</Form.Group>
							</Col>
							<Col>
								<Form.Group controlId="formTravelTime">
									<Form.Label className='mb-0 pb-0 mt-2'>tempo di percorrenza:</Form.Label>
									<Form.Control type="text" ref={travelTime} />
								</Form.Group>
							</Col>
						</Row>
						<Form.Group controlId="formContent">
							<Form.Label className='mb-0 pb-0 mt-2'>Contenuto:</Form.Label>
							<Form.Control as="textarea" rows={3} ref={content} />
						</Form.Group>
						<Form.Label className='mb-0 pb-0 mt-2'>Immagine del punto di partenza:</Form.Label>
						<Row className='d-flex space-between'>
							<Col sm={9}>
								<Form.Group controlId="formImage">
									<Form.Control type="file" ref={image} />
								</Form.Group>
							</Col>
							<Col sm={3}>
								<Button variant="danger" type="submit" block>POST <PiSignpostBold /></Button>
							</Col>


						</Row>

					</Form>
				</Modal.Body>
			</Modal>
		</>
	);
}

export default AddPostModal;
