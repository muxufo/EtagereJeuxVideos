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

			}else if (ancre.match(/^#ajouter-jeux/)) {
				this.ajouterJeuxVue = new AjouterJeuxVue();
				this.ajouterJeuxVue.afficher();
			
			}else{
				var trouvailles = ancre.match(/^#jeux\/([0-9]+)/);
				var id_jeux = trouvailles[1];
				var jeux = this.etagereDAO.trouverJeuxParId(id_jeux);
				this.jeuxVue = new JeuxVue(jeux);
				this.jeuxVue.afficher();
			}
		}
}
applicationListeJeux.lancer();





