import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
}
  from 'mdb-react-ui-kit';

import './loginForm.css';

import { FaMotorcycle, FaFacebookF, FaGoogle, FaGithub } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


function LoginForm() {

  const navigate = useNavigate();


  const goToRegistration = () => {
    navigate("/registration"); 
  };

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

                <MDBRow className='text-center'>
                  <h3>LOGIN!</h3>
                </MDBRow>

                <MDBInput wrapperClass='mb-4' label='Email'  type='email' />
                <MDBInput wrapperClass='mb-4' label='Password' type='password' />


                <MDBBtn className='w-100 mb-4 bg-danger' size='md'>Login <FaMotorcycle /> </MDBBtn>
                
                <div className='d-flex justify-content-center mb-4'>
                  don't have an account?   <a onClick={goToRegistration}> Register now!</a>
                </div>

                <div className="text-center">

                  <p>or sign up with:</p>

                  <MDBBtn tag='a' color='none' className='mx-3 text-danger' >
                    <FaFacebookF />
                  </MDBBtn>

                  <MDBBtn tag='a' color='none' className='mx-3 text-danger'>
                    <FaGoogle />
                  </MDBBtn>

                  <MDBBtn tag='a' color='none' className='mx-3 text-danger'>
                    <FaGithub />
                  </MDBBtn>

                </div>

              </MDBCardBody>
            </MDBCard>

          </MDBCol>

        </MDBRow>

      </MDBContainer>
    </>
  );
}

export default LoginForm;