module.exports = institution;

function institution(sequelize, Sequelize) {
  return sequelize.define("institution", {
    QInstitutionID: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true
    },
    InstitutionName: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          msg: "Institution Name cannot be empty"
        },
      }
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
    tableName: "institution",
    freezeTableName: true,
    underscored: true,
    charset: "utf8",
    collate: "utf8_general_ci",
    classMethods: {
      associate: function(models) {
  
    models.institution.hasMany(models.institutionHealthProfessionGrp, {
    foreignKey: 'QInstitutionID'
    });


    }
    }
   });
}