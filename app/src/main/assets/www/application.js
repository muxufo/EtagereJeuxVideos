var applicationListeJeux = {
	lancer:function(){
		this.etagereDAO = new EtagereDAO();
		this.liste_jeux = this.etagereDAO.listerTousLesJeux();

		$(window).on('hashchange', $.proxy(this.naviguer, this));

		this.naviguer();
	},
	naviguer:function(){

		var ancre = window.location.hash;
		if (!ancre){
			this.listeJeuxVue = new ListeJeuxVue(this.liste_jeux);
			this.listeJeuxVue.afficher();

//            this.etagereDAO.listerTousLesJeux($.proxy(this.afficherTousLesJeux,this));

			}else if (ancre.match(/^#ajouter-jeux/)) {
				this.ajouterJeuxVue = new AjouterJeuxVue();
				this.ajouterJeuxVue.afficher($.proxy(this.sauvegarderNouveauJeux,this));
			
			}else{
				var trouvailles = ancre.match(/^#jeux\/([0-9]+)/);
				var id_jeux = trouvailles[1];
				var jeux = this.etagereDAO.trouverJeuxParId(id_jeux);
				this.jeuxVue = new EtagereVue(jeux);
				this.jeuxVue.afficher();
			}
		},
         sauvegarderNouveauJeux:function(jeux){

         	this.etagereDAO.ajouterJeux(jeux);
         }
//         ,
//
//          	afficherTousLesJeux:function(liste_jeux){
//          		this.listeJeuxVue = new ListeEtagereVue(liste_jeux);
//          		this.listeJeuxVue.afficher();
//          	}
}
applicationListeJeux.lancer();





