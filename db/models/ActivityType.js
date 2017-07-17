module.exports = activityType;

function activityType(sequelize, Sequelize) {
  return sequelize.define("activityType", {

    QActivityTypeID: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true
    },
    ActivityTypeCode: {
      type: Sequelize.STRING,
      defaultValue: Sequelize.STRING,
      unique: true,
      allowNull:false
    },
    description: {
      type: Sequelize.STRING,
      allowNull:true,
      
    },
    active: {
      type: Sequelize.BOOLEAN,
      allowNull:false,
      defaultValue:false
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
    tableName: "activityType",
    freezeTableName: true,
    underscored: true,
    charset: "utf8",
    collate: "utf8_general_ci",
    classMethods: {
      associate: function(models) {
        models.activityType.belongsTo(models.healthProfessionGroup, {
          foreignKey: {
            allowNull: false
          }
        });
      //   models.activityType.hasMany(models.learningActivity, {
      // foreignKey: 'QActivityTypeID'
      // });

      }
    }
  });
}