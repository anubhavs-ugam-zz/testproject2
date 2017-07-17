var express = require("express");
var router = new express.Router();
// var mustBe = require("mustbe").routeHelpers();
// var access = require("../../middlewares/authorize").Access;
var learnerInstituteController = require("./learnerinstitute.controller")();

module.exports = router;

console.log("Inside Router1");

///institution-profgroups?observerQInstitutionProfGroupID=123456

router.route('/institutionprofgroups/:id')
	.all(learnerInstituteController.middlewares.findById)
	.get(learnerInstituteController.getLearnerInstituteById);
