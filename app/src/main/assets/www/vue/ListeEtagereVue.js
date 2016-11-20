// Constructeur
var ListeJeuxVue = function(liste_jeux){
	this.afficher = function(){
		$("body").html(ListeJeuxVue.html);
		var html_liste_jeux = $("#liste-jeux");
		var htmlEnConstruction ="";


		for (var no_jeux in liste_jeux) {

		htmlEnConstruction += ListeJeuxVue.html_item

		.replace("{ID}",liste_jeux[no_jeux].id)
		.replace("{NOM}",liste_jeux[no_jeux].nom);

		}
        html_liste_jeux.html(htmlEnConstruction);
	}
} 

ListeJeuxVue.html = $("#page-liste-jeux").html();
ListeJeuxVue.html_item = $("#item-liste-jeux").html();