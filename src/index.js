const express = require('express');
const app = express();

app.get('/',function(req,res){
	console.log('Hello World');
})

app.listen(3000,function(){console.log('server is listening')})

module.exports = app