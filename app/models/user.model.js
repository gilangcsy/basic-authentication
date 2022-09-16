module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('Users', {
        employee_id: {
            type: Sequelize.STRING
        },
        full_name: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: Sequelize.STRING
        },
        gender: {
            type: Sequelize.STRING
        },
        address: {
            type: Sequelize.TEXT,
        },
        avatar: {
            type: Sequelize.STRING,
            defaultValue: 'default.jpg'
        },
        is_active: {
            type: Sequelize.BOOLEAN,
            defaultValue: false,
        },
        is_verified: {
            type: Sequelize.BOOLEAN,
            defaultValue: false,
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
        tableName: 'Users',
        createdAt: false, // don't add createdAt attribute
        updatedAt: false, // don't add updatedAt attribute
    })
    return User;
}