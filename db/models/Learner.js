module.exports = learner;

function learner(sequelize, Sequelize) {
  return sequelize.define("learner", {
    QLearnerID: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true
    },

    LearnerID: {
      type: Sequelize.INTEGER,
      allowNull: false
    },

    familyName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    givenName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    active: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    image: {
      type: Sequelize.STRING,
      allowNull: true
    },

    created: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP")
    },
    updated: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP")
    },
    deleted: {
      type: Sequelize.DATE,
      allowNull: true,
      defaultValue: null
    }
  }, {
    timestamps: true,
    createdAt: "created",
    updatedAt: "updated",
    paranoid: true,
    deletedAt: "deleted",
    tableName: "learner",
    freezeTableName: true,
    underscored: true,
    charset: "utf8",
    collate: "utf8_general_ci",
    classMethods: {
      associate: function(models) {
        // models.learner.hasMany(models.institutionHealthProfessionGrp, {
          
        //   as: 'learnerx',
        //     allowNull: false
          
        // });

 models.learner.belongsTo(models.institutionHealthProfessionGrp, {
     as: 'QInstitutionProfGroupID1',
    foreignKey: 'QInstitutionProfGroupID'
});

models.learner.belongsTo(models.institutionHealthProfessionGrp, {
    as: 'QHomeInstitutionProfGroupID1',
    foreignKey: 'QHomeInstitutionProfGroupID'
});

models.learner.hasMany(models.learner_LearnerAttribute, {
    foreignKey: 'QLearnerID'
});
models.learner.hasMany(models.learningActivity, {
    targetKey:'QInstitutionProfGroupID',
    foreignKey: 'QLeanerInstitutionProfGroupID'
});


      }
    }
  });
}
