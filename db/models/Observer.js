module.exports = observer;

function observer(sequelize, Sequelize) {
  return sequelize.define("observer", {
    QObserverID: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true
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
    tableName: "observer",
    freezeTableName: true,
    underscored: true,
    charset: "utf8",
    collate: "utf8_general_ci",
    classMethods: {
      associate: function(models) {
        models.observer.belongsTo(models.institutionHealthProfessionGrp, {
          foreignKey: 'QInstitutionProfGroupID'
        });

        models.observer.belongsTo(models.observerRole, {
          foreignKey: 'QObserverRoleID'
        });

      }
    }
  });
}