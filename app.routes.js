module.exports = Routes;

var logger = require("./lib/logger");

function Routes(app) {
  //logger.info("STARTUP Basepath set to: " + process.env.PATHS_BASE);

app.use(require("./api/learnerInfo/routes.js"));
app.use(require("./api/learnerInstitute/routes.js"));
app.use(require("./api/learners/routes.js"));
app.use(require("./api/learningActivity/routes.js"));

}

