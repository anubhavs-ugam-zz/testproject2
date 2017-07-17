module.exports = learnerInstituteController;

function learnerInstituteController() {
     
  return {
    //deleteDepartment: _deleteDepartment,
    //getLearnerInfo: _getLearnerInfo,
    // createDepartment: _createDepartment,
    // updateDepartment: _updateDepartment,
    getLearnerInstituteById: _getLearnerInstituteById,
    middlewares: {
      findById: _findById
    }
  };

  function _findById(req, res, next) {
      console.log("You are @ findById");
    if(!req.params.id) {
      res.sendStatus(400);
      return next(new Error("Bad request"));
    }
    return req.app.ormPromise
      .then(function(orm) {
        return orm.models.healthProfessionGroup.findAll({
          where: {
            QProfGroupID: req.params.id
          },
          include: [
            {
              model:orm.models.institutionHealthProfessionGrp,

              include: [{
                model: orm.models.institution
                //attributes: [['name', 'Color']]
                }],
                // where:{
                //     QInstitutionID:orm.models.institution.QInstitutionID
                // },
            }

          ]
        });
      }).then(function(healthProfessionGroup) {
        if(!healthProfessionGroup) {
          res.sendStatus(404);
          return next(new Error("Not found"));
        }
        req.healthProfessionGroup = healthProfessionGroup;
        return next();
      })
      .catch(function(error) {
        res.sendStatus(500);
        return next(error);
      });
  }
  function _getLearnerInstituteById(req, res, next) {
      console.log("You are @ _getLearnerInstituteById");
    res.json({
      results: [req.healthProfessionGroup]
    });
  }

  


 
}



