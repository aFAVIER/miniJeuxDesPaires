
  //////////////////////////////////////////
 //-----------------LISTES---------------//
//////////////////////////////////////////
var liste=['ane', 'chien', 'chat', 'lama', 'lionne', 'ours', 'lapins'];
  //////////////////////////////////////////
 //------DECLARATION DES VARIABLES-------//
//////////////////////////////////////////
var tab = new Array;
var tabOpacity = new Array;
  //////////////////////////////////////////
 //-------CARTES ETAT BASIQUE------------//
//////////////////////////////////////////
$('img').css('display', 'none');
$('#start').on("click", function start_btn(){
	$('img').css('display', 'block');
	$('img').css('opacity', '0');
	$('#message').text("");
	$('.card_game').css('background-color', '#FF6111');	
})
   //////////////////////////////////////////
  //----------------RESTART---------------//
 //////////////////////////////////////////
$('#restart').on('click', function(){
	location.reload(true);
	$('img').css('opacity', '0');
	$('img').css('display', 'none');
})
  //////////////////////////////////////////
 //-----------------INIT-----------------//
//////////////////////////////////////////
function initDebutClic(){
	for (var y = 0; y < liste.length; y++) {
		$('.'+liste[y]).css('opacity', '0')	//boucle pour caché les élément de la liste
	}
	$('#message').text("");				//reinit du message a 0
		if (tab.length >= 2) { 			//limitation de la taille du tab à 2 entrées
			tab=new Array;
		}
}
  //////////////////////////////////////////
 //------------------OPACITY-------------//
//////////////////////////////////////////
function opacityImg(){
	for (var l = 0; l < tabOpacity.length; l++) {
		for (var j = 0; j < tabOpacity[l].length; j++) {
			$('.'+tabOpacity[l][j]).css('opacity', '1');
		}
	}
}
opacityImg();
   //////////////////////////////////////////
  //----------------AU CLIC---------------//
 //////////////////////////////////////////
$('img').each(function click(){
	$(this).click(function(){
	//init avec appel de la fonction
		initDebutClic();
		$(this).fadeTo('2000', '1');
	//ajoute le le lien de l'image dans le tableau (pour la comparaison)
		tab.push($(this).attr('class'));
	//pour voir ce qu'il se passe
																		console.log(tab);
	//comparaison des 2 cartes
		if (tab[0]===tab[1] && tab.length>=2) {
			$("#message").text("Paire Réussis !!!");
			$('.'+tab[0]).attr('onclick','').unbind('click');
			tabOpacity.push(tab);
																		console.log(liste);
			liste.splice( $.inArray(tab[0], liste), 1 );//je cherche dans le tableau et supprime la correspondance
																		console.log(liste);
			opacityImg();
		}
		if(tab[0]!=tab[1] && tab.length>=2){
			$("#message").text("NOPE !!!");	
			for (var i = 0; i < tab.length; i++) {
				$('.'+tab[i]).css('opacity', '0');
			}
			opacityImg();	
		}
	});
})




  //////////////////////////////////////////
 //----fonctionnement---LISTES-----------//
//////////////////////////////////////////
// a chaque fois que je fais une paire
//j'enlève l'enlève du tableau
//et je fais opacity 0 au tableau
//

