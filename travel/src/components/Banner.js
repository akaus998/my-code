import React from 'react';
import welcomeImage from '../css/images/welcome-image.png';
import '../css/styles.css';

const Banner=()=>{

	return(
		<div className="banner">
		<div className="bannerImageWidth"><img className="banner-image" src={welcomeImage} alt="loading"/></div>
		<div className="bannerContent">
		<h1>Life is short<br /> And the world is wide!</h1>
		<p>Stay at the comfort of your homes and book a trip to travel<br />
		after the post pandemic era<br />
		<button className="staticButton">PLAN A TRIP</button>
		</p>
		</div>
		</div>
		);
};

export default Banner;