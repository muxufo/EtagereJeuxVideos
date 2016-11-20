var JeuxVue = function(jeux){
	this.afficher = function(){

		var htmlEnConstruction = JeuxVue.html
		.replace("{NOM}", jeux.nom)
		.replace("{EDITEUR}", jeux.editeur)
		.replace("{TYPE}", jeux.type)

		$("body").html(htmlEnConstruction);

		$("#jeux-nom").html("Nom : " + jeux.nom);
		$("#jeux-editeur").html("Éditeur : "+ jeux.editeur);
		$("#jeux-type").html("Type : " + jeux.type);
	}
}
JeuxVue.html = $("#page-jeux").html();