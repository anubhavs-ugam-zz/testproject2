module.exports = learnerController;

function learnerController() {
     
  return {

    getLearnerById: _getLearnerById,
    middlewares: {
      findById: _findById
    }
  };

  function _findById(req, res, next) {
      console.log("You are @ findById");
    if(!req.params.id1 && !req.params.id2 ) {
      res.sendStatus(400);
      return next(new Error("Bad request"));
    }
    return req.app.ormPromise
      .then(function(orm) {
        return orm.models.learner.findAll({
          where: {
            QInstitutionProfGroupID: req.params.id1,
            QHomeInstitutionProfGroupID: req.params.id2
          },
          include: [
            {
              model: orm.models.learner_LearnerAttribute,
                        include: [
            {
              model: orm.models.learnerAttribute
            }
          ]
            }
          ]
        });
      }).then(function(learner) {
        if(!learner) {
          res.sendStatus(404);
          return next(new Error("Not found"));
        }
        req.learner = learner;
        return next();
      })
      .catch(function(error) {
        res.sendStatus(500);
        return next(error);
      });
  }
  function _getLearnerById(req, res, next) {
      console.log("You are @ _getLearnerById");
    res.json({
      results: [req.learner]
    });
  }


 
}
