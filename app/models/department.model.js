module.exports = (sequelize, Sequelize) => {
    const Department = sequelize.define('Departments', {
        name: {
            type: Sequelize.STRING
        },
        created_at: {
            type: "TIMESTAMP",
            defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
            allowNull: false,
        },
        created_by: {
            type: Sequelize.STRING
        },
        deleted_at: {
            type: "TIMESTAMP"
        },
        deleted_by: {
            type: Sequelize.STRING
        },
        updated_at: {
            type: "TIMESTAMP",
        },
        updatedBy: {
            type: Sequelize.STRING
        },
    }, {
        tableName: 'Departments',
        createdAt: false, // don't add createdAt attribute
        updatedAt: false, // don't add updatedAt attribute
    })
    return Department;
}