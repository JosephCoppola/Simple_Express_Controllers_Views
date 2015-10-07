var controllers = require('./controllers');

var router = function(app){
	
	app.get('/page1',controllers.page1);
	app.get('/page2',controllers.page2);
	app.get('/getName', controllers.getName);
	app.get('/',controllers.index);
	
	app.get('/*',controllers.notFound);
};

module.exports = router;