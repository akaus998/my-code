import React from 'react';
import '../css/styles.css';
import promoImage from '../css/images/promo-image.png';

const FormBanner=()=>{

	return(
		<div className="container">
		<img src={promoImage} alt="loading" style={{width:'100%'}}/>
		<div className="bottom-left">
		<b><h2>PLAN A TRIP</h2></b>
		<div style={{fontSize:'22px',width:'100%'}}>Make your vacation the most<br/>
		Memorable one</div>
		
		</div>
		</div>
		);
	};

	export default FormBanner;