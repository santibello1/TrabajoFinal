module.exports = function (sequelize, DataTypes) {
	const user = sequelize.define(
		// Nombre del Modelo
		'Usuarios',
		// Columnas de tabla
		{
			id:{
				primaryKey: true,
				autoIncrement: true,
				type: DataTypes.INTEGER
			},
			nombre_de_usuario: DataTypes.STRING,
			email: DataTypes.STRING,
			password: DataTypes.STRING,
			fecha_de_nacimiento: DataTypes.DATE
		},
		// Configuraciones adicionales
		{
			tableName: 'usuarios',
			timestamps: false
		}
	);

	user.associate = function(models){
		user.hasMany(models.Resenias, {
			as: 'resenias',
			foreignKey: 'id_usuario' 
		});
	}

	return user;
}