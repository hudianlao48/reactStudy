var React = require('react');
var ReactDom = require('react-dom');
var StyleSheet = require('../less/main.css');

var AppMainComponent = React.createClass({
	render:function(){
		return(
			<h1>hello React</h1>
		)
	}
})

ReactDom.render(
	<AppMainComponent/>,
	document.getElementsByClassName('appMain')[0]
);
