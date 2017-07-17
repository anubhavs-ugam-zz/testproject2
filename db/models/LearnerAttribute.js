module.exports = learnerAttribute;

function learnerAttribute(sequelize, Sequelize) {
  return sequelize.define("learnerAttribute", {
    QLearnerAttributeID: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true
    },

    Description: {
      type: Sequelize.STRING,
      allowNull: true
    },
    EmbeddedDataFieldName: {
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
    tableName: "learnerAttribute",
    freezeTableName: true,
    underscored: true,
    charset: "utf8",
    collate: "utf8_general_ci",
    classMethods: {
      associate: function(models) {
        models.learnerAttribute.belongsTo(models.healthProfessionGroup, {
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });
}