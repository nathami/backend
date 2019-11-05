const Sequelize = require('sequelize');
const sequelize = require('../database/database');
const Usuario = require('../models/usuario');

const Ponto = sequelize.define("ponto",{
    
    codigo:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    data_hora_entrada: {
        allowNull: false,
        type: Sequelize.DATE()
        
    },
    data_hora_inicio_intervalo: {
        allowNull: false,
        type: Sequelize.DATE()
        
    },
    data_hora_fim_intervalo: {
        allowNull: false,
        type: Sequelize.DATE()
        
    },
    data_hora_saida: {
        allowNull: false,
        type: Sequelize.DATE()
        
    },
    observacao: {
        allowNull: true,
        type: Sequelize.STRING(100),
        validate: {
            len: [5,100]
        }
    }
});

    Usuario.hasMany(Ponto, {
        foreignKey:{
            name: 'idusuario',
            allowNull: false
        }
    })

    module.exports = Ponto;