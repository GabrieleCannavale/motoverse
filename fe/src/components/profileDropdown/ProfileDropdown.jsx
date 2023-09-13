import React from 'react';
import { MDBDropdown, 
	MDBDropdownMenu, 
	MDBDropdownToggle, 
	MDBDropdownItem } from 'mdb-react-ui-kit';
import './profileDropdown.css';

export default function ProfileDropdown() {
	return (
		<MDBDropdown>
			<MDBDropdownToggle tag='a'>
				<img
					src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
					className="rounded-circle profile-image"  // Aggiunta di una classe personalizzata
					alt="Avatar"
				/>
			</MDBDropdownToggle>
			<MDBDropdownMenu>
				<MDBDropdownItem link>info/settings</MDBDropdownItem>
				<MDBDropdownItem link>bug report</MDBDropdownItem>
				<MDBDropdownItem link>Logout</MDBDropdownItem>
			</MDBDropdownMenu>
		</MDBDropdown>
	);
}