module.exports = function (sequelize, DataTypes) {
	const user = sequelize.define(
		// Nombre del Modelo
		'Users',
		// Columnas de tabla
		{
			UserName: DataTypes.STRING,
			genre_id: DataTypes.INTEGER,
			rating: DataTypes.DECIMAL,
			release_date: DataTypes.DATE
		},
		// Configuraciones adicionales
		{
			timestamps: false
		}
	);

	return user;
}