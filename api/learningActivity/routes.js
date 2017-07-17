var express = require("express");
var router = new express.Router();
var learningActivityController = require("./learningactivity.controller")();
//var learnerInstituteController = require("./learnerinstitute.controller")();
module.exports = router;
console.log("Inside Router3");

/////institution-profgroups/:QInstitutionProfGroupID/learners/:QLearnerID/learning-activities
 //    ?QObserverRoleID=123456

//http://localhost:5000/institutionprofgroups/HPG002/learners/HPG002/learningactivities/observerroleid/OR003
router.route('/institutionprofgroups/:id1/learners/:id2/learningactivities/observerroleid/:id3')
	.all(learningActivityController.middlewares.findById)
	.get(learningActivityController.getLearningActivityById);