/**
 * RecetaController
 *
 * @description :: Server-side logic for managing recetas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	encontrar : function(req,res){
		var params = req.allParams();
		var ingredientes = params.ingredientes.split(",");
		Receta.find().populate("ingredientes").then(function(resultados){
			
			var filtrados = resultados.filter(function(receta){
				//Aqui es lo bueno
				console.log(receta.id);
				return true;
			});
			res.json(filtrados);
		});

	},
	encontrars : function(req,res){
		var ingrediente = req.allParams().ingrediente;
		Ingrediente.findOne(ingrediente).populate("recetas").then(function(ingrediente){
			res.json(ingrediente.recetas);
		})
	}
};

