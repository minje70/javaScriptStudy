// NODE_ENV가 production이면 deploy가 되어 있다는 뜻
if(process.env.NODE_ENV === 'production') {
	module.exports = require('./prod');
} else {
	module.exports = require('./dev');
}