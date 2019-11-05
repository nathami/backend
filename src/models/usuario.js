const Sequelize = require('sequelize');

const sequelize = require('../database/database');

const Usuario = sequelize.define("usuario",{
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    nome: {
        allowNull: false,
        type: Sequelize.STRING(100),
        validate: {
            len: [3, 100]
        }
    },
    cpf: {
        allowNull: false,
        type: Sequelize.STRING(),
        validate: {
            len: [3, 100]
        }
    },
    email: {
        allowNull: false,
        type: Sequelize.STRING(100),
        validate: {
            len: [3, 100]
        }
    },
    telefone: {
        allowNull: false,
        type: Sequelize.STRING(15),
        validate: {
            len: [2, 15]
        }
    }

})

module.exports = Usuario;