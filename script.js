//Je sélectionne et stocke le bouton
const btn = document.querySelector('.btn');
console.log(btn);
//Je sélectionne et stocke la DIV .container-notifications
const ctn = document.querySelector('.container-notifications');
console.log(ctn);

//Je détecte le clic sur le bouton
btn.addEventListener('click', function(){
    console.log('Bouton cliqué');
    //Je créer un élément
    const notification = document.createElement('div');
    console.log(notification);
    //Je donne un style à la DIV
    notification.classList.add('toast');
    //J'insère du contenu texte
    notification.innerText = "Votre fichier est bien enregistré !";
    console.log(notification);
    //J'accroche notification à l'élément ctn
    ctn.appendChild(notification);
    //A la fin du chrono, je retire la notification du DOM
    setTimeout(function(){
        notification.remove();
    }, 2000);
});





