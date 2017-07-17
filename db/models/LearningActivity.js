module.exports = learningActivity;

function learningActivity(sequelize, Sequelize) {
  return sequelize.define("learningActivity", {
    QLearnigActivityID: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true
    },

    StartDate: {
      type: Sequelize.DATEONLY,
      allowNull: false
      
    },
    EndDate: {
      type: Sequelize.DATEONLY,
      allowNull: false
     
    },
    StopDataCollectionDate: {
      type: Sequelize.DATEONLY,
      allowNull: false
    },
    active: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
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
    tableName: "learnigActivity",
    freezeTableName: true,
    underscored: true,
    charset: "utf8",
    collate: "utf8_general_ci",
    classMethods: {
      associate: function(models) {
        models.learningActivity.belongsTo(models.learner, {
            targetKey: 'QHomeInstitutionProfGroupID',
            foreignKey: 'QLeanerInstitutionProfGroupID'
        });

        models.learningActivity.belongsTo(models.activityName, {
          foreignKey:'QActivityNameID'
        });
        models.learningActivity.belongsTo(models.activityType, {
          foreignKey: 'QActivityTypeID'
        });
    //     models.learningActivity.hasMany(models.learner, {
          
    //     targetKey:'QLeanerInstitutionProfGroupID',
    // foreignKey: 'QHomeInstitutionProfGroupID'
    //     });

      }
    }
  });
}