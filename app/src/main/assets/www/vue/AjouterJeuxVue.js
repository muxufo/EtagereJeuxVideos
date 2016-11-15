var AjouterJeuxVue = function () {
	this.afficher = function () {
		$("body").html(AjouterJeuxVue.html);
	}
}

AjouterJeuxVue.html = $("#page-ajouter-jeux").html();