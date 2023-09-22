import React from 'react';
import PostContainer from '../postContainer/PostContainer';
import MapContainer from '../mapContainer/MapContainer';

const HomeContainer = () => {
  return (
    <div className='d-flex flex-md-row flex-column bg-secondary'>
      <div className='order-md-1 order-2 col-md-8 col-sm-12'>
        <PostContainer />
      </div>
      <div className='order-md-2 order-1 col-md-4 col-sm-12'>
        <MapContainer />
      </div>
    </div>
  );
};

export default HomeContainer;
