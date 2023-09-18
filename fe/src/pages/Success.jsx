import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useSession } from '../middlewares/protectedRoutes';
import { useEffect } from 'react';

const Success = () => {
  
	const navigate = useNavigate();
	
	const { token } = useParams()
	
	const saveUserOnLocalStorage = () => {
		localStorage.setItem("userLoggedIn", JSON.stringify(token))
	};

	const session = useSession();

	useEffect(() => {
		if (token) {
			saveUserOnLocalStorage(token);
			navigate(`/success/${token}`);
			setTimeout(() => {
				navigate('/homepage')
			}, 3500)
		}
	}, [token, navigate])
	
	return (
		<>
		{session ? 
		<div className="d-flex justify-content-center">
			Benvenuto {session.username} 
		</div> 
		: <div> Github Login error </div>}
	</>
  )
}

export default Success
