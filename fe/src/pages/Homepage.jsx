import React from 'react'
import NavigationBar from '../components/navigationBar/NavigationBar';
import PostContainer from '../components/postContainer/PostContainer';
import HomeCarousel from '../components/HomeCarousel/HomeCarousel';

const Homepage = () => {
  return (
	<div>
	  <NavigationBar />
	  <HomeCarousel />
	  <PostContainer />
	</div>
  )
}

export default Homepage
