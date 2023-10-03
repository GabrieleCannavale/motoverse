import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from 'react-redux';
import {FaTrash} from 'react-icons/fa'
import { deleteMotoFromUserProfileAsync } from '../../redux/userSlice';
import './motoCard.css'

function MotoCard({ moto, userId }) {

	const dispatch = useDispatch();

	const handleDeleteMoto = (userId, motoId) => {
		dispatch(deleteMotoFromUserProfileAsync({userId, motoId}))
	}

	return (
		<Col md={6} sm={12}>
			<Card>
				<Card.Img variant="top" src={moto.motoImage} />
				<Card.Body>
					<Card.Title>{moto.brand + " " + moto.model}</Card.Title>
				</Card.Body>
				<Card.Footer>
					<Button onClick={() => handleDeleteMoto(userId, moto._id)} className='btn-grad'> <FaTrash/> </Button>
				</Card.Footer>
			</Card>
		</Col>
	);
}

export default MotoCard;