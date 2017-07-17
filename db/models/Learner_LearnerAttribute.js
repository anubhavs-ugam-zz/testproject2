module.exports = learner_LearnerAttribute;

function learner_LearnerAttribute(sequelize, Sequelize) {
  return sequelize.define("learner_LearnerAttribute", {
    QLearnerID: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true,
      foreignKey: true
    },
    QLearnerAttributeID: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true,
      foreignKey: true
    },

    value: {
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
    tableName: "learner_LearnerAttribute",
    freezeTableName: true,
    underscored: true,
    charset: "utf8",
    collate: "utf8_general_ci",
    classMethods: {
      associate: function(models) {
        models.learner_LearnerAttribute.belongsTo(models.learner, { foreignKey: 'QLearnerID' });
        models.learner_LearnerAttribute.belongsTo(models.learnerAttribute, { foreignKey: 'QLearnerAttributeID' });
        // models.learner_LearnerAttribute.belongsTo(models.learner);
        // models.learner_LearnerAttribute.belongsTo(models.learnerAttribute);
      }
    }
  });
}