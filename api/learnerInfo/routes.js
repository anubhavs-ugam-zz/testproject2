var express = require("express");
var router = new express.Router();
// var mustBe = require("mustbe").routeHelpers();
// var access = require("../../middlewares/authorize").Access;
var learnerInfoController = require("./learnerinfo.controller")();

module.exports = router;

console.log("Inside Router");

router.route( '/testproject/learnerInfo')
	.get(learnerInfoController.getLearnerInfo);

router.route('/learnerInfo/:id')
	.all(learnerInfoController.middlewares.findById)
	.get(learnerInfoController.getLearnerInfoById);
