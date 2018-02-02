import React from 'react';
import './Terminal.css';


const Clamp = (val, min, max) => (
	Math.min(
		Math.max(
			val,
			min
		),
		max
	)
);

export default class Terminal extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			'commandHistory': [],
			'currentDirectory': '/home/isaac',
			'inputBuffer': '',
			'cursorIndex': 0,
		}

		this.moveCursor = offset => {
			let cursorIndex = Clamp(
				this.state.cursorIndex + offset,
				0,
				this.state.inputBuffer.length
			);
			this.setState({cursorIndex});
		}

		this.onKeyDown = (event) => {
			switch(event.key) {
				case "F1":
				case "F2":
				case "F3":
				case "F4":
				case "F5":
				case "F6":
				case "F7":
				case "F8":
				case "F9":
				case "F10":
				case "F11":
				case "F12":
				case "Insert":
				case "Control":
				case "Shift":
					// no op
					break;

				case "ArrowRight":
					this.moveCursor(1);
					break;

				case "ArrowLeft":
					this.moveCursor(-1);
					break;

				case "Backspace":
					this.setState({
						'inputBuffer': this.state.inputBuffer.substring(0, this.state.inputBuffer.length - 1)
					});
					break;

				default:
					this.setState({
						'inputBuffer': this.state.inputBuffer + event.key,
						'cursorIndex': this.state.cursorIndex + event.key.length
					});
					break;
			}
			
		}

		this.render = () => {

			let currentDirectoryDisplay = `${this.state.currentDirectory}$ `;

			let preCursorBuffer = this.state.inputBuffer.substring(0, this.state.cursorIndex);
			let cursorChar = this.state.inputBuffer[this.state.cursorIndex];
			let postCursorBuffer = this.state.inputBuffer.substring(this.state.cursorIndex + 1, this.state.inputBuffer.length);

			let inputBufferDisplay = (
				<span>
					<span>{preCursorBuffer}</span>
					<span style={{'backgroundColor': 'green', 'color': 'black'}}>|{cursorChar}|</span>
					<span>{postCursorBuffer}</span>
				</span>
			)

			return (
				<div className="terminal-block" onKeyDown={this.onKeyDown} tabIndex="0">
					<span>{currentDirectoryDisplay}</span><span>{inputBufferDisplay}</span>
					<br/>
					<span>length: {this.state.inputBuffer.length}</span>
					<br/>
					<span>cursor: {this.state.cursorIndex}</span>
				</div>
			)
		}
	}
}