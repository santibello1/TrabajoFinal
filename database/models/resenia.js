module.exports = function (sequelize, DataTypes) {
	const resenia = sequelize.define(
		// Nombre del Modelo
		'Resenias',
		// Columnas de tabla
		{
			id:{
				primaryKey: true,
				autoIncrement: true,
				type: DataTypes.INTEGER
			},
			id_pelicula: DataTypes.INTEGER,
			id_usuario: DataTypes.INTEGER,
			texto_resenia: DataTypes.STRING,
			puntaje_pelicula: DataTypes.DECIMAL,
            fecha_creacion: DataTypes.DATE,
            fecha_actualizacion: DataTypes.DATE
		},
		// Configuraciones adicionales
		{
<<<<<<< HEAD
			tableName: 'resenias',
			timestamps: false
=======
			timestamps: false,
			tableName: 'resenias'
>>>>>>> master
		}
	);

	resenia.associate = function(models){
		resenia.belongsTo(models.Usuarios, {
			as: 'usuario',
			foreignkey: 'id_usuario' 
		});
	}

	return resenia;
}