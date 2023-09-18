import React from 'react';
import {
	MDBDropdown,
	MDBDropdownMenu,
	MDBDropdownToggle,
	MDBDropdownItem
} from 'mdb-react-ui-kit';
import './profileDropdown.css';

import jwt_decode from 'jwt-decode';

export default function ProfileDropdown() {

	const token = localStorage.getItem("userLoggedIn")
	const decodedToken = jwt_decode(token);
	const userAvatar = decodedToken.userAvatar;
	const username = decodedToken.username;

	return (
		<MDBDropdown>
			<MDBDropdownToggle tag='a'>
				<img
					src={userAvatar}
					className="rounded-circle profile-image"
					alt="Avatar"
				/>
			</MDBDropdownToggle>
			<MDBDropdownMenu>
				<MDBDropdownItem link disabled className='bg-tertiary white'>{username} MENU</MDBDropdownItem>
				<MDBDropdownItem link>info/settings</MDBDropdownItem>
				<MDBDropdownItem link>bug report</MDBDropdownItem>
				<MDBDropdownItem link>Logout</MDBDropdownItem>
			</MDBDropdownMenu>
		</MDBDropdown>
	);
}