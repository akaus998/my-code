import React from 'react';
import Header from './Header';
import WeatherChannel from './WeatherChannel';
import Banner from './Banner';
import Navigation from './Navigation';
import ScrollBar from './ScrollBar';
import Form from './Form';
import Footer from './Footer';
import {useRef,useEffect} from 'react';

import FormBanner from './FormBanner';
const App=()=>{
	return (
		<div>
		<Header/>
		<Navigation />
		</div>); 
	};

	export default App;