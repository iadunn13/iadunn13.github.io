import React from 'react';
import Key from './Key.js';
import { Row } from 'react-bootstrap';


export default class Keyboard extends React.Component {
	constructor(props) {
		super(props);

		this.render = () => {
			return (
				<div>
					<Key KeyCode="1"/>
					<Key KeyCode="2"/>
					<Key KeyCode="3"/>
					<Key KeyCode="4"/>
					<Key KeyCode="5"/>
					<Key KeyCode="6"/>
					<Key KeyCode="7"/>
					<Key KeyCode="8"/>
					<Key KeyCode="9"/>
					<Key KeyCode="0"/>
				</div>
			);
		}
	}
}