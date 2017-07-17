module.exports = observerRole;

function observerRole(sequelize, Sequelize) {
  return sequelize.define("observerRole", {
    QObserverRoleID: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true
    },
    Code: {
      type: Sequelize.STRING,
      defaultValue: Sequelize.STRING,
      allowNull: false
    },
    Description: {
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
    tableName: "observerRole",
    freezeTableName: true,
    underscored: true,
    charset: "utf8",
    collate: "utf8_general_ci",
    classMethods: {
      associate: function(models) {
        models.observerRole.belongsTo(models.healthProfessionGroup, {
          foreignKey:'QProfGroupID'
        });

      }
    }
  });
}