module.exports = institutionHealthProfessionGrp;

function institutionHealthProfessionGrp(sequelize, Sequelize) {
  return sequelize.define("institutionHealthProfessionGrp", {
    QInstitutionProfGroupID: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true
    },
    clientInstitutionID: {
      type: Sequelize.INTEGER,
      defaultValue: Sequelize.INTEGER,
      allowNull: false,
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
    tableName: "institutionHealthProfessionGrp",
    freezeTableName: true,
    underscored: true,
    charset: "utf8",
    collate: "utf8_general_ci",
    classMethods: {
      associate: function(models) {
          

        models.institutionHealthProfessionGrp.belongsTo(models.institution, {
        foreignKey: 'QInstitutionID'
        });
        models.institutionHealthProfessionGrp.belongsTo(models.healthProfessionGroup, {
        foreignKey: 'QProfGroupID'
      });
      
      models.institutionHealthProfessionGrp.hasMany(models.learner, {
    
    foreignKey: 'QInstitutionProfGroupID'
});

              models.institutionHealthProfessionGrp.hasMany(models.activityName, {
    
    foreignKey: 'institution_health_profession_grp_QInstitutionProfGroupID'
});
//       models.institutionHealthProfessionGrp.hasMany(models.learner, {
    
//     foreignKey: 'QHomeInstitutionProfGroupID'
// });

        // models.institutionHealthProfessionGrp.belongsTo(models.institution, {
        //   foreignKey: {
        //     allowNull: false
        //   }
        // });

        // models.institutionHealthProfessionGrp.belongsTo(models.healthProfessionGroup, {
        //   foreignKey: {
        //     allowNull: false
        //   }
        // });

      }
    }
  });
}