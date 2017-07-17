module.exports = learneActivityController;

function learneActivityController() {
     
  return {

    getLearningActivityById: _getLearningActivityById,
    middlewares: {
      findById: _findById
    }
  };

  function _findById(req, res, next) {
      console.log("You are @ findById");
    if(!req.params.id1 && !req.params.id2 && !req.params.id3) {
      res.sendStatus(400);
      return next(new Error("Bad request"));
    }
    return req.app.ormPromise
      .then(function(orm) {
        return orm.models.observerRole.findAll({
          where: {
            QObserverRoleID: req.params.id3
          },
          include: [
            {
              model: orm.models.observerRole_ActivityType,
            include: [
            {
              model: orm.models.activityType,
        //     include: [
        //     {
        //       model: orm.models.learningActivity
        //     }
        //   ]
            }
          ]
            }
          ]
        });
      }).then(function(observerRole) {
        if(!observerRole) {
          res.sendStatus(404);
          return next(new Error("Not found"));
        }
        req.observerRole = observerRole;
        return next();
      })
      .catch(function(error) {
        res.sendStatus(500);
        return next(error);
      });
  }
  function _getLearningActivityById(req, res, next) {
      console.log("You are @ _getLearningActivityById");
    res.json({
      results: [req.observerRole]
    });
  }


 
}
