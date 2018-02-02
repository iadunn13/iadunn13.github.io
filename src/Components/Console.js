import React from 'react';


export default class Console extends React.Component {
	constructor(props) {
		super(props);

		this.handleKeyPress = (event) => {
			console.log(event.key);
		}

		this.render = () => {
			return(
				<div>
					<input type="text" id="console-input" onKeyPress={this.handleKeyPress}/>
				</div>
			);
		}
	}
}