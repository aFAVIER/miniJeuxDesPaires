// global class : card_game
//id : car# ==> # num de chaque carte
// class img_all //// id : img#

  //////////////////////////////////////////
 //------DECLARATION DES VARIABLES-------//
//////////////////////////////////////////
var image1 = 0;
var image2 = 500;
//ou avec un tableau et on compare 2 index
var tab = new Array;

  //////////////////////////////////////////
 //-------CARTES ETAT BASIQUE------------//
//////////////////////////////////////////
$('.img_all').css('opacity', '0');
$('.card_game').css('background-color', '#FF6111')	

$('.img_all').on('mouseup', function init(){
	$('.img_all').css('opacity', '0');
	$('.card_game').css('background-color', '#FF6111')
});


   //////////////////////////////////////////
  //----------------AU CLIC---------------//
 //////////////////////////////////////////
$('.img_all').each(function click(){
	$(this).mousedown(function(){
		$('#message').text("");//reinit du message a 0
		$(this).css('opacity', '1');//montre l'image
		if (tab.length >= 2) { //limitation de la taille du tab à 2 entrées
			tab=new Array;
		}
	//ajoute le le lien de l'image dans le tableau (pour la comparaison)
		tab.push($(this).attr('class')); //Je pense que c'est dégueux, MAIS c'est moi qui l'ai fait!!!!
		console.log(tab);
	//comparaison des 2 cartes
		if (tab[0]===tab[1] && tab.length>=2) {
			//$('tab[0]').css('display', 'none');
			
			//console.log(this);
			//console.log('for_if_ok');
			$("#message").text("Paire Réussis !!!");

		}
		if(tab[0]!=tab[1] && tab.length>=2){
			console.log('else_if');
			$("#message").text("NOPE !!!");
		}
	});
})

   //////////////////////////////////////////
  //-------------FONCTION PAIRE-----------//
 //////////////////////////////////////////
// si image 1 = image2
// alors opacité des 2 images = 1
// image 1 = 0 et image2 = 500 (réinit des var du début)
// message de réussite

//je compare avec la longueur du tableau pour être sur qu'il y a quelques chose dedans!!!!!!!
//function paire(){
	/*if (tab[0]!==tab[1] ) { //!!!!!!!!!!probleme pour rentrer dans la condition!!!!!!!!!!
		
		//$('image1').unbind("click");
		//$('image2').unbind("click");
		//alert('paire');
		console.log(yo);
	}*/

		

	
//}
//paire();
  //////////////////////////////////////////
 //-------------TEST MESSAGE-------------//
//////////////////////////////////////////
/*
$('#img1').on('click', function(){
	$("#message").text("Paire Réussis !!!").delay(5000).fadeOut('slow', 0.6, function() {
    // c'est le callback, l'animation est terminée
    $(this).fadeIn().empty();
	})
})
*/