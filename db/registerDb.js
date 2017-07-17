module.exports = RegisterDb;

//var Orm = require("./models/orm");
var Orm = require("./orm");
//var Dts = require("./dts");
var Sequelize = require("sequelize");

module.exports = RegisterDb;

function RegisterDb(app, options) {
  console.log("Inside Register DB");
  if(!options || !options.db) {
    throw new Error("RegisterDb: Incorrect options setup.");
  }
 console.log("options");
 console.log(options); 
console.log(options.db.host+"Host");
  var sequelizeOptions = {
    host: options.db.host,
    port: options.db.port,
    dialect: options.db.dialect,
    dialectOptions: {
      charset: "utf8mb4"
    },
    logging: false
  };

  sequelizeOptions.pool = {
    max: Number(options.db.pool.max),
    min: Number(options.db.pool.min),
    idle: Number(options.db.pool.idle)
  };
  if(options.db.storage !== undefined) {
    sequelizeOptions.storage = options.db.storage;
  }

  var sequelize = new Sequelize(options.db.name, options.db.username, options.db.password, sequelizeOptions);
  //var dtsService = new Dts(options.dts, sequelize);
  //return dtsService.process().then(function() {
    var orm = new Orm(sequelize, options.db.forceSync);
  app.ormPromise = orm.hook().then(function(ormObject) {
  app.orm = ormObject;
   return ormObject;
  }).then(function(oo) {
  var options = {};
  // if(process.env.DTS_MIGRATE_PATH) {
  //   options.migrate = {
  //     direction: process.env.DTS_MIGRATE_DIRECTION,
  //     path: process.env.DTS_MIGRATE_PATH,
  //     storeInFile: process.env.DTS_MIGRATE_STOREINFILE
  //   };
  // }
  // if(process.env.DTS_SEED_PATH) {
  //   options.seed = {
  //     direction: process.env.DTS_SEED_DIRECTION,
  //     path: process.env.DTS_SEED_PATH,
  //     storeInFile: process.env.DTS_SEED_STOREINFILE
  //   };
  // }
  // if(options.migrate || options.seed) {
  //   dtsService = new Dts(options, oo.sequelize);
  //   dtsService.process();
  // }
  return app.orm;
});
}
