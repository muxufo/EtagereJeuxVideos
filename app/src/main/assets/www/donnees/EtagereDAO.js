var EtagereDAO = function()
{
  const ETAGEREDAO_TABLE = "jeux";
  const ETAGEREDAO_INCREMENT = "jeux-increment";

	this.liste_jeux = [];

  //Fonction privées

  function listerTousLesJeuxDuLocalStorage()
  {
    var listeJeuxDuLocalStorage = [];
    if(window.localStorage[ETAGEREDAO_TABLE])
    {
      listeJeuxDuLocalStorage = JSON.parse(localStorage[ETAGEREDAO_TABLE]);
    }

    return listeJeuxDuLocalStorage;
  }

  function enregistrerTousLesJeuxDuLocalStorage(listeDeTousLesJeux, increment)
  {
		window.localStorage[ETAGEREDAO_TABLE] = JSON.stringify(listeDeTousLesJeux);
    window.localStorage[ETAGEREDAO_INCREMENT] = increment;
  }

  function testerLocalStorage()
  {
    if (window.localStorage)
    {
      try
      {
        window.localStorage.setItem('derniere-execution', JSON.stringify(Date.now()));
      }
      catch(e)
      {
        if (e.name === 'QUOTA_EXCEEDED_ERR' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')
        {
          //Localstorage plein
        }
        else
        {
          //Localstorage non supporté
        }
      }
    }
  }

  //Fonction publique

  function determinerNouvelIncrement()
  {
    var increment = 1;
    if(window.localStorage[ETAGEREDAO_INCREMENT])
    {
      increment = 0 + window.localStorage[ETAGEREDAO_INCREMENT];
      increment++;
    }
    return increment;
  }

  function anonymiserJeuxPourLocalStorage(jeux)
  {
    return JSON.parse(JSON.stringify(jeux));
  }

  this.initialiser = function()
	{
    testerLocalStorage();
	};

	this.ajouterJeux = function(jeux)
	{
    var increment = determinerNouvelIncrement();
		var listeDeTousLesJeuxDuLocalStorage = listerTousLesJeuxDuLocalStorage();

    jeux.id = increment;

    var JeuxAnonyme = anonymiserJeuxPourLocalStorage(jeux)
    listeDeTousLesJeuxDuLocalStorage.push(JeuxAnonyme);

    enregistrerTousLesJeuxDuLocalStorage(listeDeTousLesJeuxDuLocalStorage, increment);
    this.liste_jeux = listeDeTousLesJeuxDuLocalStorage;

	};

	this.listerTousLesJeux = function(finalisation)
	{
    var traitementEnAttente = function()
    {
      var listeDeTousLesJeuxDuLocalStorage = listerTousLesJeuxDuLocalStorage();
      this.liste_jeux = listeDeTousLesJeuxDuLocalStorage;
      finalisation(listeDeTousLesJeuxDuLocalStorage);
    }

    //Ce traitement est long, alors il ne faut pas faire attendre le reste des traitements
    //synchrone.
    setTimeout($.proxy(traitementEnAttente, this), 1);

	};


  //localStorage.clear();


  this.trouverJeuxParId = function(id_jeux)
  {
    for(var no_jeux in this.liste_jeux)
    {
      if(this.liste_jeux[no_jeux].id == id_jeux)
      {
        return this.liste_jeux[no_jeux];
      }
    }
  };

  this.initialiser();
}