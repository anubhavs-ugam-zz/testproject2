module.exports = CreateORM;

var fs = require("fs");
var path = require("path");

function CreateORM(sequelize, forceSync) {
    console.log("Inside ORM");
  var db = {};

  return {
    hook: function() {


        fs.readdirSync(__dirname + "/models")  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== "orm.js");
  }).forEach(function(file) {
        var model = sequelize.import(path.join(__dirname + "/models", file));
        db[model.name] = model;
      });


  Object.keys(db).forEach(function(modelName) {
    if ("associate" in db[modelName]) {
      db[modelName].associate(db);
    }
  });

  return sequelize.sync().then(function() {
    console.log('Nice! Database looks fine');
    
    return {models: db, sequelize: sequelize};
  });
    }
  };
}
