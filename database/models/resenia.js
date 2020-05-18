module.exports = function (sequelize, DataTypes) {
	const resenia = sequelize.define(
		// Nombre del Modelo
		'Resenias',
		// Columnas de tabla
		{
			id_pelicula: DataTypes.INTEGER,
			id_usuario: DataTypes.INTEGER,
			texto_resenia: DataTypes.STRING,
            fecha_creacion: DataTypes.DATE,
            fecha_actualizacion: DataTypes.DATE
		},
		// Configuraciones adicionales
		{
			timestamps: false
		}
	);

	resenia.associate = function(models){
		resenia.belongsTo(models.Usuarios, {
			as: 'usuario',
			foreignkey: 'id_usuario' /*chequear esto*/
		});
	}

	return resenia;
}