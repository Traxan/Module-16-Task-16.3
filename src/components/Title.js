import React from 'react';

class Title extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div id="data">TodoApp ({this.props.count})</div>
		);
	}
}

export default Title;