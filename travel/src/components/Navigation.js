import React from 'react';
import Header from './Header';
import WeatherChannel from './WeatherChannel';
import Banner from './Banner';
import ScrollBar from './ScrollBar';
import Form from './Form';
import Footer from './Footer';
import FormBanner from './FormBanner';
import {useRef,useState,useEffect} from 'react';

const Navigation=()=>{
	

	//Tried to do navigation based on ref// 

	// const[boolean,setBoolean]=useState('');
	// useEffect(()=>{
	// 	focusRef.current.focus();
	// },[boolean])
	// const focusElement=()=>{
	// 	const newBoolean='false';
	// 	setBoolean(newBoolean);
		// const focusRef=useRef('');

	// }

	return(
		<div>
		<div className="nav-width">
		<div className="nav-header">
		<a  href='' style={{textDecorationLine:'none',color:'rgb(0,21,60)',paddingRight:'50px'}}>WEATHER</a>
		<a style={{textDecorationLine:'none',color:'rgb(0,21,60)',paddingRight:'50px'}}>DESTINATIONS</a>
		<a style={{textDecorationLine:'none',color:'rgb(0,21,60)',paddingRight:'50px'}} href="">GET A QUOTE</a>
		</div>
		</div>
		<Banner />
		<WeatherChannel />
		<FormBanner />
		<Form />
		<Footer />
		</div>
		
		);

	}
	export default Navigation;