import React from 'react';
import {useEffect,useState} from 'react';
import axios from 'axios';
import icon from '../css/images/icon.png';
import ScrollBar from './ScrollBar';


const WeatherChannel=({inputRef})=>{

const[weather,setWeather]=useState("");


	useEffect(()=>{
		getWeather();
		});

	const getWeather=async ()=>{
		const {data}=await axios.get('https://run.mocky.io/v3/e3ae9d2e-78f5-403d-b6cd-fa7f8c7e1576');
		setWeather(data);	
	}
		
console.log(weather.result);
const renderWeather=()=>{
	if(!weather){
		return 'Loading';
	}
	return weather.result.map((weath)=>{
	
	// const className={weath.city};
	return(
		<div ref={inputRef}>
		
		<div  className={weath.city}>
			<div>{weath.city}</div>
			<div><img style={{padding:'15px'}} src={icon} alt='loading'/></div>
			<div>{weath.temp_Celsius}°</div>
		</div>
		</div>
		);
});	
}	
return(<div>
			
			<div className="weather-header"> THE WEATHER CHANNEL</div>
			<div>{renderWeather()}</div>
			
			<ScrollBar />
		</div>
		);
}
	export default WeatherChannel;
		

