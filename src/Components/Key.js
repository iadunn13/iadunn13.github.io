import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import './keyboard-keys.css';


export default class Key extends React.Component {
	constructor(props) {
		super(props);

		this.render = () => {
			return (
				<Button className={this.props.DisplayClass}>{this.props.KeyCode}</Button>
			);
		}
	}
}

Key.propTypes = {
	"KeyCode": PropTypes.string.isRequired,
	"DisplayClass": PropTypes.string.isRequired, // the css class to use
}

Key.defaultProps = {
	"DisplayClass": "default-key",
}