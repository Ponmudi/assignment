import React from 'react';
import { Layout,Divider,Button } from 'antd';

const rightSection = () => {
	return(
		<Layout>
			<div className="rightSection">
			<div className="rightAdBlockOne">
				<img src="images/track-time-logo.jpg" alt="Track time" className="logo" />
				<h2>Track time on Hubstaff</h2>
				<Button type="primary" >Sign Up</Button>
				<a href="/" >Learn More </a>
			</div>
			<div className="rightSectionList">
				<p><b>TOP JOBS</b> </p>
				<Divider />
				<div className="ad-container">
				<div className="tobJobList">
					<div>
						<div className="left">
							<div className="title">Senior Product Designer</div>
							<p className="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						</div>
						<div className="right title">$60/hr</div>
					</div>
					<div>
						<div className="left">
							<div className="title">Senior Ruby on Rails Engineer</div>
							<p className="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						</div>
						<div className="right title">$45/hr</div>
					</div>
				</div>
				</div>
			</div>
			<div className="rightSectionList">
				<p><b>MOST VIEWED THIS WEEK</b> </p>
				<Divider />
				<div className="ad-container">
					<div className="viewedList">
					<div>
						<div className="left">
							<div className="title">Senior Product Designer</div>
							<p className="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						</div>
						<div className="right title">$60/hr</div>
					</div>
					<div>
						<div className="left">
							<div className="title">Senior Ruby on Rails Engineer</div>
							<p className="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						</div>
						<div className="right title">$45/hr</div>
					</div>
					</div>
				</div>
			</div>
			</div>
		</Layout>
	)
}

export default rightSection;