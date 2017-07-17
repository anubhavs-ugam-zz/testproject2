    var express    = require('express');
    var app        = express();
    var passport   = require('passport');
    var session    = require('express-session');
    var bodyParser = require('body-parser');
    var cookieParser = require("cookie-parser");
    //var qsystem = require("qsystem");
    var path = require("path");
    var morgan = require("morgan");

    var env        = require('dotenv').load();
    var exphbs     = require('express-handlebars');

    var fs = require("fs");
  require("dotenv").config();


  //qsystem.setBasePath(path.normalize(path.join(__dirname, "../../config")));
//qsystem.loadConfig("config.json");
//var config = qsystem.getConfig();
var config = require('./config/config.json');;
console.log(__dirname);
 //app.use(config.basepath, express.static(path.join(__dirname, "./config")));
 app.use(bodyParser.json());
 app.use(cookieParser());

    //For BodyParser
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

  
    //  //For Handlebars
    // app.set('views', './app/views')
    // app.engine('hbs', exphbs({extname: '.hbs'}));
    // app.set('view engine', '.hbs');
    

    // Routes registration
    require("./app.routes")(app);

    // Register Database
  //  var db = require("./db/registerDb")(app);


    // Register Database
require("./db/registerDb")(app, {
  db: {
    storage: process.env.DB_STORAGE,
    forceSync: process.env.DB_FORCESYNC,
    host: "localhost",
    port: 3306,
    username: "root",
    password: null,
    name: "test_seq7",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    }
  }
});


app.get('/testproject/healthcheck', (req, res) => {
  console.log("ok");
  res.send("ok")
});

	app.listen(80, function(err){
    if(!err)
    {      
      console.log("Site is live"); 
    }      
    else 
      console.log(err)

	});
module.exports=app;