//import libraries 
var path = require('path'); //path is a built-in node library to handle file system paths
var express = require('express'); //express is a popular Model-View-Controller framework for Node

var compression = require('compression');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var router = require('./router.js');

var port = process.env.PORT || process.env.NODE_PORT || 3000;

var app = express();

//Host image folder 
app.use('/assets',express.static(path.resolve(__dirname + '../../client')));
//Zips request and response to send large files
app.use(compression());

app.use(bodyParser.urlencoded({
	extended: false
}));

app.use(bodyParser.json());
app.set('view engine','jade');
app.set('views',__dirname + "../../views");
app.use(favicon(__dirname + "../../client/img/favicon.png"));
app.use(cookieParser());

router(app);

app.listen(port, function(err){
	if(err){
		throw err;
	}
	
	console.log('listening on port ' + port);
});