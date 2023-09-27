import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useSelector } from 'react-redux';

function MotoCard({ moto }) {


	return (
		<Col>
			<Card>
				<Card.Img variant="top" src={moto.motoImage} />
				<Card.Body>
					<Card.Title>{moto.brand + " " + moto.model}</Card.Title>
				</Card.Body>
			</Card>
		</Col>
	);
}

export default MotoCard;