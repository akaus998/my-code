import React from 'react';
import '../css/styles.css';

const Footer=()=>{

	return(
		<div>
		<div className="footer">
		<div className="first-list">
		<ul className="no-bullets">
		<li className="first-list-width">Tripzone</li><br />
		<li className="first-list-width">About</li>
		<li className="first-list-width">Awards</li>
		<li className="first-list-width">Contact us</li>
		<li className="first-list-width">Feedback</li>
		</ul>
		</div>
		<div className="second-list">
		<ul className="no-bullets">
		<li className="second-list-width">Main Offices</li><br />
		<li className="second-list-width">The United States</li>
		<li className="second-list-width">India</li>
		<li className="second-list-width">Brazil</li>
		<li className="second-list-width">Canada</li>
		</ul>
		</div>
		<div className="third-list">
		<ul className="no-bullets">
		<li className="third-list-width">Sub Offices</li><br />
		<li className="third-list-width">Australia</li>
		<li className="third-list-width">England</li>
		<li className="third-list-width">France</li>
		<li className="third-list-width">Germany</li>
		</ul>
		</div>
		<div className="fourth-list">
		<ul className="no-bullets">
		<li className="fourth-list-width">Disclaimer</li>
		</ul>
		<p style={{fontSize:'16px',paddingTop:'10px'}}>This Layout is created as part of Sirius Ui Requirements<br />
		All the above content has no direct relations with Sirius<br />
		business
		</p>
		</div>

		</div>

		</div>

		);

}

export default Footer;