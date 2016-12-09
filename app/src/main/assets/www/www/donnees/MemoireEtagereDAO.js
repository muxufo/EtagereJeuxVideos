var EtagereDAO = function () {
	this.liste_jeux = [
	{"id":1,"nom":"Skyrim","editeur":"Bedestah","type":"RPG Open world"},
	{"id":2,"nom":"Diablo III","editeur":"Blizzard","type":"Hack'n slash, RPG"}
	];

	this.listerTousLesJeux = function () {
		return this.liste_jeux;
	};

	this.trouverJeuxParId = function (Id) {
		for (var no_jeux in this.liste_jeux) {
			if (this.liste_jeux[no_jeux].id == Id) {
				return this.liste_jeux[no_jeux];
			}
		}
	}

		this.ajouterJeux = function(jeux){
    			this.liste_jeux[this.liste_jeux.lenght] =
    				{"id":this.liste_jeux.lenght+1,
    				"nom":jeux.nom,
    				"editeur":jeux.editeur,
    				"type":jeux.type};
    	}
}