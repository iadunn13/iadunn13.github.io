import React from 'react';
import CoderByteChallengeList from '../Components/CoderByteChallengeList.js';
import { Button, Col, Nav, NavItem, Row } from 'react-bootstrap';
import { Link, Route } from 'react-router-dom';


export default class CoderBytePage extends React.Component {
	constructor(props) {
		super(props);

		this.render = () => {
			const repoLink = <a href="https://github.com/iadunn13/coderbyte-challenges">
				https://github.com/iadunn13/coderbyte-challenges
			</a>;
			const lastUpdated = "2/1/2018";
			return (
				<div>
					<Col xs={12}>
				    <Row>
				    	<h4>Isaac Dunn</h4>
						<h2>CoderByte Challenge List</h2>
					</Row>
					<Row>
						<h4 className="description-header">
							CoderByte divides their challenges into 3 categories of Easy, Medium, and Hard.  This is a list of my solutions to some of the challenges as of {lastUpdated}.  This list updated via a Python script I wrote to scrape the CoderByte website and produce a JSON file of the relevant data.  The source code for that script, as well as the latest JSON files, can be found at {repoLink}.
						</h4>
					</Row>
					
					<Route path="/coderbyte/easy" render={() => <CoderByteChallengeList difficulty="easy"/>} />
`					<Route path="/coderbyte/medium" render={() => <CoderByteChallengeList difficulty="medium"/>} />
					<Route path="/coderbyte/hard" render={() => <CoderByteChallengeList difficulty="hard"/>} />
				  </Col>
					
				</div>
			);
		}
	}
}