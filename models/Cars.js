const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

// Create a new Sequelize model for Cars
class Cars extends Model { }

Cars.init(
    {
        // define columns
        // An `id` is automatically created by Sequelize, though best practice would be to define the primary key ourselves
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        Make: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Model: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Year: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Mileage: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Color: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Sold: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Description: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        // Link to database connection
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Cars',
    }
);

module.exports = Cars;