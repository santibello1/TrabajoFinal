module.exports = function (sequelize, DataTypes) {
	const user = sequelize.define(
		// Nombre del Modelo
		'Usuarios',
		// Columnas de tabla
		{
			nombre_de_usuario: DataTypes.VARCHAR,
			email: DataTypes.VARCHAR,
			password: DataTypes.VARCHAR,
			fecha_de_nacimiento: DataTypes.DATE
		},
		// Configuraciones adicionales
		{
			timestamps: false
		}
	);

	user.associate = function(models){
		user.hasMany(models.Resenias, {
			as: 'resenias',
			foreignkey: 'id_usuario' /*chequear esto*/
		});
	}

	return user;
}