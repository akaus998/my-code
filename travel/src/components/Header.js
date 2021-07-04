import React from 'react';
import CountDown from './CountDown.js';
import '../css/styles.css';
class Header extends React.Component{
	render(){
		return(
			<div ref={this.props.startRef} className="header">
			<CountDown />
			</div>
			);
		}
	};

	export default Header;