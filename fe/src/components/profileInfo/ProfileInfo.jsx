import React, { useEffect, useRef, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBTypography,
  MDBModal,
  MDBModalBody,
  MDBModalTitle,
  MDBModalFooter,
  MDBModalContent,
  MDBModalDialog,
  MDBModalHeader
} from 'mdb-react-ui-kit';
import { useSession } from '../../middlewares/protectedRoutes';
import { useParams } from 'react-router-dom';
import NavigationBar from '../navigationBar/NavigationBar';
import { useDispatch, useSelector } from 'react-redux';
import { addMotoToUserProfileAsync, getSingleUser } from '../../redux/userSlice';
import { nanoid } from 'nanoid';
import MotoCard from '../motoCard/MotoCard';
import Footer from '../footer/Footer';
import { FaPencilAlt } from 'react-icons/fa';

export default function ProfileInfo() {
  const { id } = useParams();
  console.log(id);

  const { singleUser } = useSelector((state) => state.users)


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

    await dispatch(addMotoToUserProfileAsync({ user: motoData, userId: id })).then(() => toggleShow());
  }

  const [isOpen, setIsOpen] = useState(false);
  const toggleShow = () => setIsOpen(!isOpen);

  useEffect(() => {
    dispatch(getSingleUser(id));
    console.log(singleUser)
  }, [dispatch, id, singleUser]);



  return (
    <>
      <NavigationBar />
      <div className="gradient-custom-2 my-5" style={{ backgroundColor: '#454545' }}>
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
                      <MDBCardText className="mb-1 h5">{session.birthDate}</MDBCardText>
                      <MDBCardText className="small text-muted mb-0 me-1">Data di nascita</MDBCardText>
                    </div>
                    <div className="ms-3">
                      <MDBCardText className="mb-1 h5">{session.drivingExperienceLevel}</MDBCardText>
                      <MDBCardText className="small text-muted mb-0">Driving Experience</MDBCardText>
                    </div>
                  </div>
                </div>
                <MDBCardBody className="text-black p-4">
                  <div className="mb-5">
                    <div className='container d-flex justify-content-between align-items-baseline mb-1'>
                      <p className="lead fw-normal mb-1">Su di me: </p>
                      <MDBBtn style={{ backgroundColor: '#FF6000' }} className='py-1 align-items-center'>
                         <FaPencilAlt />
                      </MDBBtn>
                     
                    </div>

                    <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                      <MDBCardText className="font-italic mb-0">Sono Valentino Rossi, un'appassionato di motociclismo che brucia l'asfalto con passione e determinazione. Sempre in cerca di nuovi amici con cui condividere avventure su due ruote e scoprire nuovi percorsi emozionanti.{session.bio}</MDBCardText>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-baseline mb-4">
                    <MDBCardText className="lead fw-normal mb-0">GARAGE:</MDBCardText>
                    <MDBBtn style={{ backgroundColor: '#FF6000' }} onClick={toggleShow}>AGGIUNGI MOTO</MDBBtn>
                  </div>
                  <Container>
                    <Row className='align-items-center justify-content-center no-gutters g-2'>
                      {singleUser && singleUser.motos && singleUser.motos.map((moto) => (
                        <MotoCard
                          key={nanoid()}
                          moto={moto}
                          userId={id}
                        />
                      ))}

                    </Row>
                  </Container>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>

      {/* modale aggiunta moto */}
      <MDBModal tabIndex='-1' show={isOpen} getOpenState={(e) => setIsOpen(e)}>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Aggiungi Moto</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
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
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleShow}>Chiudi</MDBBtn>
              <MDBBtn onClick={handleAddMoto}>Salva</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
      <Footer />
    </>
  );
}
