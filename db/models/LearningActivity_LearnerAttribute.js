module.exports = learningActivity_LearnerAttribute;

function learningActivity_LearnerAttribute(sequelize, Sequelize) {
  return sequelize.define("learningActivity_LearnerAttribute", {
    QLearnigActivityID: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true,
      foreignKey:true
    },
    QLearnerAttributeID: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true,
      foreignKey:true
    },

    value: {
      type: Sequelize.STRING,
      defaultValue: Sequelize.STRING,
      
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
    tableName: "learnigActivity_LearnerAttribute",
    freezeTableName: true,
    underscored: true,
    charset: "utf8",
    collate: "utf8_general_ci"
 });
}