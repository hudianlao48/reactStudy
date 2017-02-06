var React = require('react');
var ReactDom = require('react-dom');
var css = require('../less/main.less');
var ChildCom = require('../components/child.react');

var AppMainComponent = React.createClass({
	render:function(){
		return(
			<h1 className={css.myClass}>我是父组件
				<ChildCom/>
			</h1>
		)
	}
})

ReactDom.render(
	<AppMainComponent/>,
	document.getElementsByClassName('appMain')[0]
);
