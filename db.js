// db.js
const { Sequelize } = require('sequelize');
require('dotenv').config();

// Conexión a la base de datos usando Sequelize
const sequelize = new Sequelize(
  process.env.DB_NAME,      // Nombre de la base de datos
  process.env.DB_USER,      // Usuario
  process.env.DB_PASSWORD,  // Contraseña
  {
    host: process.env.DB_HOST, // Dirección del servidor (por defecto 'localhost')
    dialect: 'mysql',           // Dialecto (en este caso MySQL)
  }
);

// Verificar la conexión
sequelize.authenticate()
  .then(() => console.log('Conexión exitosa a la base de datos'))
  .catch((err) => console.error('Error de conexión:', err));

// Exportar la instancia de sequelize para usarla en otros archivos
module.exports = sequelize;
