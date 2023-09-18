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
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';


function LoginForm() {

  const endpoint = "http://localhost:5070"

  const navigate = useNavigate();
  const [loginFormData, setLoginFormData] = useState({});


  const loginSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${endpoint}/login`, loginFormData);
      if (res.data.token) {
        localStorage.setItem("userLoggedIn", JSON.stringify(res.data.token));
        
        toast.success('Login Success!', {
          position: "top-center",
          autoClose: 1200,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });

        setTimeout(() => {
          navigate('/homepage')
        }, 1000)
      }
    } catch (error) {
      console.log(error)

      toast.error('LOGIN ERROR: username or Password wrong', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }

  };


  const goToRegistration = () => {
    navigate("/registration");
  };


  const loginGithugSubmit = () => {
    window.location.href = `${endpoint}/auth/github`
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

                <MDBRow className='text-center'>
                  <h3>LOGIN!</h3>
                </MDBRow>

                <MDBInput
                  wrapperClass='mb-4'
                  label='Email'
                  type='email'
                  onChange={(e) => setLoginFormData({ ...loginFormData, email: e.target.value })}
                />
                <MDBInput
                  wrapperClass='mb-4'
                  label='Password'
                  type='password'
                  onChange={(e) => setLoginFormData({ ...loginFormData, password: e.target.value })} 
                />


                <MDBBtn className='w-100 mb-4 bg-danger' size='md' onClick={loginSubmit}>Login <FaMotorcycle /> </MDBBtn>

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

                  <MDBBtn tag='a' color='none' className='mx-3 text-danger' onClick={loginGithugSubmit}>
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