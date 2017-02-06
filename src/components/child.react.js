var React = require('react');
var css = require('../less/child.less');
var ChildComponent = React.createClass({
	render:function(){
		return (
			<span className={css.greenText}>我是子组件啊</span>
		)
	}
})

module.exports = ChildComponent;