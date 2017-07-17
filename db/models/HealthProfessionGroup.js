module.exports = healthProfessionGroup;

function healthProfessionGroup(sequelize, Sequelize) {
  return sequelize.define("healthProfessionGroup", {
    QProfGroupID: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
   description: {
      type: Sequelize.STRING,
      allowNull: true,
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
    tableName: "healthProfessionGroup",
    freezeTableName: true,
    underscored: true,
    charset: "utf8",
    collate: "utf8_general_ci",
        classMethods: {
      associate: function(models) {
     
    models.healthProfessionGroup.hasMany(models.institutionHealthProfessionGrp, {
    foreignKey: 'QProfGroupID'
   });
      }
    }
  });
}