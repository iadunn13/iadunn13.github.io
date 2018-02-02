import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import ChallengeRow from './ChallengeRow.js';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { StaticApiBaseUrl } from '../Constants.js';


export default class CoderByteChallengeList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			'challenges': []
		};

		this.getChallengeData = () => {
			console.log(this.props.difficulty);
			let url = `${StaticApiBaseUrl}/${this.props.difficulty}.json`
			return fetch(url).then(response => {
    			if (response.status >= 400) {
      				return [];
    			}
    			return response.json();
  			}).then(challenges => this.setState({challenges}));
		};

		this.componentDidMount = () => {
			this.getChallengeData();
		};

		this.render = () => {

			let challengeRows = _.map(this.state.challenges, challenge => (
				<ChallengeRow
					title={challenge['title']}
					challengeText={challenge['question_text']}
					solutionText={challenge['solution_text'][0]}
				/>
			));
			if (challengeRows.length === 0) {
				challengeRows.push(
					<h4>Looks like I haven't completed any of the {this.props.difficulty} challenges yet.  Check back again</h4>
				);
			}

			return (
				<div>
					<Row>
						<Col xsOffset={3} xs={2}>
							<Link className={`difficulty-nav ${this.props.difficulty === 'easy' ? 'active' : ''}`} to="/coderbyte/easy"><h3>Easy</h3></Link>
						</Col>
						<Col xs={2}>
							<Link className={`difficulty-nav ${this.props.difficulty === 'medium' ? 'active' : ''}`} to="/coderbyte/medium"><h3>Medium</h3></Link>
						</Col>
						<Col xs={2}>
							<Link className={`difficulty-nav ${this.props.difficulty === 'hard' ? 'active' : ''}`} to="/coderbyte/hard"><h3>Hard</h3></Link>
						</Col>
					</Row>
					<br />
					<Row>
				  		{challengeRows}
				  	</Row>
				</div>
			);
		};
	}
}
