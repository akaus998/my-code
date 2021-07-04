import React from 'react';
import {useEffect,useState} from 'react';

const CountDown=()=>{
	//initialization of states for the live Timer//
	const[days,setDays]=useState(null);
	const[hours,setHours]=useState(null);
	const[seconds,setSeconds]=useState(null);
	const[minutes,setMinutes]=useState(null);
	//calculating live time for every one seconds
	useEffect(() => {
		const timer = setTimeout(() => {
			const then=new Date("jul 10,2021 18:00:00").getTime();
			const now=new Date().getTime();
			const timeLeft=then-now;
			setDays(Math.floor(timeLeft/(1000*60*60*24)));
			setHours(Math.floor((timeLeft%(1000*60*60*24))/(1000*60*60)));
			setMinutes(Math.floor((timeLeft%(1000*60*60))/(1000*60)));
			setSeconds(Math.floor((timeLeft%(100*60*60))/(1000)));
		}, 1000);
		return () => clearTimeout(timer);
	},);

	
	
		//Added code to show time up when it reaches '10th jul 2021 18:00'//
		if((days<0) && (hours<0) && (minutes<0) &&(seconds<=0)){
			return<div style={{color:'white'}}>Time up! Better Luck Next time!</div>;
		}
		return(
		<div> <p>Book now to get exciting deals.Up to 40% off on credit card payments<br/>
		offer ends in {days}d {hours}h {minutes}m {seconds}s</p></div>);
};

export default CountDown;