import React from 'react'
import NavigationBar from '../components/navigationBar/NavigationBar';
import HomeCarousel from '../components/HomeCarousel/HomeCarousel';
import HomeContainer from '../components/homeContainer/HomeContainer';
import Footer from '../components/footer/Footer';

const Homepage = () => {
	return (
		<div>
			<NavigationBar />
			<HomeCarousel />
			<HomeContainer />
			<Footer />
		</div>
	)
}

export default Homepage
