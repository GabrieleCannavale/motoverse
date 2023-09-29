import React from 'react';
import PostContainer from '../postContainer/PostContainer';
import MapBox from '../mapBox/MapBox';
import './homeContainer.css'

const HomeContainer = () => {
  return (
    <div className='d-flex flex-md-row bg-secondary main-body'>


      <div className='order-md-1 order-2 col-md-8 col-sm-12 main-body'>
        <PostContainer />
      </div>


      <div className='order-md-2 order-1 col-md-4 col-sm-12 map-cont'>
        <MapBox  />
      </div>


    </div>
  );
};

export default HomeContainer;
