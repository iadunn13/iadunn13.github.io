import React from 'react';
import CoderByteChallengeList from '../Components/CoderByteChallengeList.js';
import { Col, Row } from 'react-bootstrap';
import { StaticApiBaseUrl } from '../Constants.js';


export default class CoderBytePage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			"challenges": []
		};

		this.getChallengeData = () => {
			let url = `${StaticApiBaseUrl}/easy.json`
			return fetch(url).then(response => {
    			if (response.status >= 400) {
      				return [];
    			}
    			return response.json();
  			}).then(challenges => this.setState({challenges}));
		};

		this.componentDidMount = () => {
			this.getChallengeData();
		}

		this.render = () => {
			return (
				<Row>
				  <Col xs={12}>
				    <CoderByteChallengeList 
				    	challenges={this.state.challenges}
				    />
				  </Col>
				</Row>
			);
		}
	}
}