import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import ChallengeRow from './ChallengeRow.js';
import { Col, Row } from 'react-bootstrap';


export default class CoderByteChallengeList extends React.Component {
	constructor(props) {
		super(props);

		this.render = () => {

			let challengeRows = _.map(this.props.challenges, challenge => (
				<ChallengeRow
					title={challenge.title}
					challengeText={challenge.challengeText}
					solutionText={challenge.solutionText}
				/>
			));

			return (
				<div>
					<Row>
						<h2>CoderByte Challenge List</h2>
					</Row>
					{challengeRows}
				</div>
			);
		};
	}
}

CoderByteChallengeList.propTypes = {
	'challenges': PropTypes.arrayOf(
		PropTypes.shape({
			'title': PropTypes.string.isRequired,
			'challengeText': PropTypes.string.isRequired,
			'solutionText': PropTypes.string.isRequired,
		})
	).isRequired,
}