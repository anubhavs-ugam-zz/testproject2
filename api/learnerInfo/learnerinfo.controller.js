module.exports = LearnerInfoController;

function LearnerInfoController() {
     console.log("Jelsp");
  return {

     
    //deleteDepartment: _deleteDepartment,
    getLearnerInfo: _getLearnerInfo,
    // createDepartment: _createDepartment,
    // updateDepartment: _updateDepartment,
    getLearnerInfoById: _getLearnerInfoById,
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
        return orm.models.learner.findOne({
          where: {
            QLearnerID: req.params.id
          },
          include: [
            {
              model: orm.models.learner_LearnerAttribute
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
  function _getLearnerInfoById(req, res, next) {
      console.log("You are @ _getLearnerInfoById");
    res.json({
      results: [req.learner]
    });
  }

  function _getLearnerInfo(req, res, next) {
      console.log("You are @ _getLearnerInfo");
    var limit = Number(req.query.limit) || 10;
    var offset = Number(req.query.offset) || 0;
    var where = {};
    if(req.query.term) {
      where.name = {
        $like: req.query.term + "%"
      };
    }
    return req.app.ormPromise
      .then(function(orm) {
        return orm.models.learner.findAndCountAll({
          limit: limit,
          offset: offset,
          where: where,
          include: [
            {
              model: orm.models.learner_LearnerAttribute
            }
          ]
        });
      }).then(function(result) {
        res.json({
          total: result.count,
          results: result.rows
        });
      })
      .catch(function(error) {
        res.sendStatus(500);
        return next(error);
      });
  }


 
}
