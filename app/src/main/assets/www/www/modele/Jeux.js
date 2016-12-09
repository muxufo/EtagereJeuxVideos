var Jeux = function(id,nom,editeur,type){
	this.construire = function(){
		this.id = id
		this.nom = nom;
		this.editeur = editeur;
		this.type = type;
	}

	this.construire();
}