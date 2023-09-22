import React from 'react'
import NavigationBar from '../components/navigationBar/NavigationBar';
import HomeCarousel from '../components/HomeCarousel/HomeCarousel';
import HomeContainer from '../components/homeContainer/HomeContainer';

const Homepage = () => {
	return (
		<div>
			<NavigationBar />
			<HomeCarousel />
			<HomeContainer />
		</div>
	)
}

export default Homepage
