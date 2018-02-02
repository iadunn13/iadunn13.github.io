import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import Collapsible from './Collapsible.js';
import { Well } from 'react-bootstrap';
import LineOfCode from './LineOfCode.js';


export default class ChallengeRow extends React.Component {
	constructor(props) {
		super(props);

		this.parseSolution = () => {
			let solutionLines = this.props.solutionText.split('\r\n');
			return _.map(solutionLines, (line, lineNumber) => (
				<LineOfCode
					code={line}
					lineNumber={lineNumber}
				/>
			));
		};

		this.render = () => {
			return (
				<Collapsible trigger={this.props.title}>
					<p><strong>Challenge: </strong>{this.props.challengeText}</p>
					<br/>
				    <p><strong>My Solution:</strong></p>
				    <Well bsSize="large">
				    	{this.parseSolution()}
				    </Well>
				</Collapsible>
			);
		};
	}
}

ChallengeRow.propTypes = {
	'title': PropTypes.string.isRequired,
	'challengeText': PropTypes.string.isRequired,
	'solutionText': PropTypes.string.isRequired,
}