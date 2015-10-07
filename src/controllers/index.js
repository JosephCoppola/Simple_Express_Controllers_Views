var path = require('path'); //path is a built-in node library to handle file system paths

//There is no reason for the name here except as an example of how to set something for the POST
var name = "unknown"; //We will set and get an arbitrary name

var hostIndex = function(req,res){
	res.sendFile(path.resolve(__dirname + "../../../views/index.html"));
};

var hostPage1 = function(req,res){
	res.sendFile(path.resolve(__dirname + "../../../views/page1.html"));
};

var hostPage2 = function(req,res){
	res.sendFile(path.resolve(__dirname + "../../../views/page2.html"));
};

var getName = function(req,res){
	res.json({name:name});
};

var notFound = function(req,res){
	res.status(404).sendFile(path.resolve(__dirname + "../../../views/notFound.html")); 
};

var setName = function(req,res){
	
	if(!req.body.firstname || !req.body.lastname){
		return res.status(400).json({error:"Both firstname and lastname required"});
	}
	
	name = req.body.firstname + " " + req.body.lastname;
	
	res.json({name:"name"});
	
};

module.exports = {
	index: hostIndex,
	page1: hostPage1,
	page2: hostPage2,
	getName: getName,
	setName: setName,
	notFound: notFound
};