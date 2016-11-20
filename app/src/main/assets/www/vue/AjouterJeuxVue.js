var AjouterJeuxVue = function () {
	this.afficher = function (actionAjouterJeux) {
		$("body").html(AjouterJeuxVue.html);

		$("#formulaire-ajouter").on("submit",$.proxy(this.ajouterJeux,this));

		this.actionAjouterJeux = actionAjouterJeux;
	}
		this.ajouterJeux  = function(){
    		var nom = $("#jeux-nom").val();
    		var editeur = $("#jeux-editeur").val();
    		var type = $("#jeux-type").val();

    		var jeux = new Jeux(id = null,nom,editeur,type);

    		this.actionAjouterJeux(jeux);

    		window.location.hash = "";
    		//e.preventDefault();
    	}
}

AjouterJeuxVue.html = $("#page-ajouter-jeux").html();