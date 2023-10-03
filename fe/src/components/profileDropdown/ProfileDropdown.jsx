import React from 'react';
import {
	MDBDropdown,
	MDBDropdownMenu,
	MDBDropdownToggle,
	MDBDropdownItem
} from 'mdb-react-ui-kit';
import './profileDropdown.css';

import jwt_decode from 'jwt-decode';
import { Link, useNavigate } from 'react-router-dom';
import { useSession } from '../../middlewares/protectedRoutes';

export default function ProfileDropdown() {

	const navigate = useNavigate();
	const session = useSession();
	console.log(session);


	const handleLogout = () => {
		localStorage.removeItem("userLoggedIn");
		// Puoi anche fare altre azioni di logout qui, come cancellare lo stato dell'utente o fare altre pulizie.
		navigate("/"); 
	};

	const token = localStorage.getItem("userLoggedIn")
	const decodedToken = jwt_decode(token);
	const userAvatar = decodedToken.userAvatar;
	const username = decodedToken.username;

	return (
		<MDBDropdown className='no-arrow'>
			<MDBDropdownToggle tag='a'  >
				<img
					src={userAvatar}
					className="rounded-circle profile-image border border-2 border-white"
					alt="Avatar"
				/>
			</MDBDropdownToggle>
			<MDBDropdownMenu>
				<MDBDropdownItem link disabled className='bg-tertiary white'>{username} MENU</MDBDropdownItem>
				<Link to={`/homepage/user/${session.id}`}>
					<MDBDropdownItem link >info/settings</MDBDropdownItem>
				</Link>
				<MDBDropdownItem link>bug report</MDBDropdownItem>
				<MDBDropdownItem link onClick={handleLogout}>Logout</MDBDropdownItem>
			</MDBDropdownMenu>
		</MDBDropdown>
	);
}