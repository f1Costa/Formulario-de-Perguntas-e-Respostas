const Sequelize =  require('sequelize');
//Modulo para conexão com o banco de dados
const connection = new Sequelize('guiaperguntas','root','admin',{
    host: 'localhost',
    dialect: 'mysql'
}) 

module.exports = connection;
