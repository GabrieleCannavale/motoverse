import React, { useRef, useState } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
import { useSession } from '../../middlewares/protectedRoutes';
import { useParams } from 'react-router-dom';
import NavigationBar from '../navigationBar/NavigationBar';
import { useDispatch } from 'react-redux';
import { addMotoToUserProfileAsync } from '../../redux/userSlice'; 

export default function ProfileInfo() {
  const { id } = useParams();
  console.log(id);

  const session = useSession();
  console.log(session);

  const dispatch = useDispatch();
 
  const brand = useRef("");
  const model = useRef("");
  const motoImage = useRef("");

  const bio = useRef("");

  const handleAddMoto = async (e) => {
    e.preventDefault();
  
    const motoData = {
      brand: brand.current.value,
      model: model.current.value,
      motoImage: motoImage.current.files[0]
    }
  
    await dispatch(addMotoToUserProfileAsync({ user: motoData, userId: id }));
  }


  return (
    <>
      <NavigationBar />
      <div className="gradient-custom-2 my-5" style={{ backgroundColor: '#9de2ff' }}>
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol lg="9" xl="7">
              <MDBCard>
                <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#000', height: '200px' }}>
                  <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                    <MDBCardImage src={session.userAvatar} alt="user profile image" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '150px', zIndex: '1' }} />
                    <MDBBtn outline color="dark" style={{ height: '36px', overflow: 'visible' }}>
                      Modifica
                    </MDBBtn>
                  </div>
                  <div className="ms-3" style={{ marginTop: '130px' }}>
                    <MDBTypography tag="h5">{session.username}</MDBTypography>
                    <MDBCardText>{session.fullName}</MDBCardText>
                  </div>
                </div>
                <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
                  <div className="d-flex justify-content-end text-center py-1">
                    <div>
                      <MDBCardText className="mb-1 h5">253</MDBCardText>
                      <MDBCardText className="small text-muted mb-0">Photos</MDBCardText>
                    </div>
                    <div className="ms-3">
                      <MDBCardText className="mb-1 h5">1000</MDBCardText>
                      <MDBCardText className="small text-muted mb-0">Followers</MDBCardText>
                    </div>
                  </div>
                </div>
                <MDBCardBody className="text-black p-4">
                  <div className="mb-5">
                    <p className="lead fw-normal mb-1">Su di me:</p>
                    <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                      <MDBCardText className="font-italic mb-0">{session.bio}</MDBCardText>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <MDBCardText className="lead fw-normal mb-0">GARAGE:</MDBCardText>
                    <div>
                      <input
                        type="text"
                        placeholder="Marca"
                       ref={brand}
                        
                      />
                      <input
                        type="text"
                        placeholder="Modello"
                        ref={model}
                       
                      />
                      <input
                        type="file"
                        accept="image/*"
                        ref={motoImage}
                      />
                      <MDBBtn onClick={handleAddMoto} >AGGIUNGI MOTO</MDBBtn>
                    </div>
                  </div>
                 
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </>
  );
}