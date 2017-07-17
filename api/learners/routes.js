var express = require("express");
var router = new express.Router();
var learnerController = require("./learner.controller")();
//var learnerInstituteController = require("./learnerinstitute.controller")();
module.exports = router;
console.log("Inside Router2");

////institution-profgroups/:observerQInstitutionProfGroupID/learner-institution/:learnerQInstitutionProfGroupID

router.route('/institutionprofgroups/:id1/learnerInstitution/:id2')
	.all(learnerController.middlewares.findById)
	.get(learnerController.getLearnerById);
