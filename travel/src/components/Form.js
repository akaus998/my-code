import React from 'react';
import {Field,reduxForm} from 'redux-form';
import '../css/styles.css';


class Form extends React.Component{
	
	//this function will render the error when user fails to
		//enter any required values//
	renderError({error,touched}){
		if(error&&touched){
			return(
				<div>
				<div style={{color:'red'}}>{error}</div>
				</div>
				);
			
		}
		return null;
	}

	//this function will render the input form//
	renderInput=({input,label,meta})=>{
		return(
			<div>
			<label style={{color:'grey'}}>{label}</label><br />
			<input {...input} autocomplete="off" className="form-input" required ref={this.props.inputRef}/>
			{this.renderError(meta)}

			</div>
			);
		}


		render(){

			return(
			<div>
			<p style={{marginLeft:'30%',color:'rgb(0,21,60)',fontSize:'30px'}}><b>Travelling as a group? Get a Quote</b></p>
			<div style={{marginLeft:'25%'}}>
			<form>
			<Field name='userName' component={this.renderInput} label="Your Name" />
			<Field name='contactNum' component={this.renderInput} label="Contact No" />
			<Field name='emailId' component={this.renderInput} label="Email" />
			<button className="form-button">Submit</button>
			
			
			</form>
			</div>
			</div>		);
		}
	}

	//this function will validate the form's input fields//
	
	const validate=(formValues)=>{
		const validEmail = new RegExp(
		'^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
		);
		const validContactNum= new RegExp('^[0-9]');
		const error={};
		if(!formValues.userName){
			error.userName='Name is required';
		}
		if(!formValues.contactNum){
			error.contactNum='Contact No is required';

		}
		if(!formValues.emailId){
			error.emailId='Email is required';
		}
		if(formValues.contactNum){
			if((formValues.contactNum.length<10) || (formValues.contactNum.length>10)){
				error.contactNum='Invalid Contact No';
			}
			if(formValues.contactNum){
				if(!validContactNum.test(formValues.contactNum)){
					error.contactNum='Contact Num cannot be alphanumeric!';
				}
			}
			if(formValues.emailId){
				if(!validEmail.test(formValues.emailId)){
					error.emailId='Invalid Email';
				}
			}
		}
		return error;
	}

	export default reduxForm({form:'userDetails',validate:validate})(Form);