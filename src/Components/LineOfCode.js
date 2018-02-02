import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './sass/LineOfCode.css';

export default class LineOfCode extends React.Component {
	constructor(props) {
		super(props);

		this.render = () => {
			return (
				<Row>
					<Col xs={1}>
						<p className="line-number">{this.props.lineNumber}</p>
					</Col>
					<Col xs={11}>
						<p className="code">{this.props.code}</p>
					</Col>
				</Row>
			)
		}
	}
}