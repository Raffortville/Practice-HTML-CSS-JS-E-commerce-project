
////////***************Search Bar & Select items by bouton********************** */
const navSlide = () => {

    const burger = document.getElementById('burger');
    const navLinks = document.getElementById('nav-links');

    burger.addEventListener('click',function(){

        navLinks.classList.toggle("open");
    });

}
navSlide();

const ShowPat = () => {

    const bouts = document.querySelectorAll('.bouto a');
    const patiss = document.querySelectorAll('.patis');

    bouts.forEach(bout => {

        bout.addEventListener('click', function(event){

            patiss.forEach(pati => {

               const name = bout.dataset.item;

                if(pati.className.includes(name)){

                    pati.style.display = "block";

                } else if(name === "all"){
                    pati.style.display = "block";
                    
                } else {
                    pati.style.display = "none";
                } 
            });
        });
    });
}
ShowPat();

const keyShow = () =>{

    const input = document.getElementById('input');

    input.addEventListener('keyup',function(event){

        const inputText = input.value;
        const patiss = document.querySelectorAll('.patis');

        patiss.forEach(pati => {

            if(pati.className.includes(inputText)){

                pati.style.display = "block";
            }else {
                pati.style.display = "none";
           }
        });  
    })
}

keyShow();

////////**************************  *Modal    ************************************* */
const cardCount = document.getElementById('count-card');
const achatModal = document.getElementById('achatModal');

cardCount.addEventListener('click',function(event){

    achatModal.classList.toggle("visible");
});

////////***************   Syncho Modal et Panier d'achat    ***************************** */
const allGateaux = [];

function Gateau(n,px,p){

    this.nom = n;
    this.prix = px;
    this.photo = p;
    allGateaux.push(this);
}

Gateau(); 

let cupcake1 = new Gateau('1cupcake', 4.50, 'img/cupcake-1.jpeg');
let cupcake2 = new Gateau('2cupcake', 4.50, 'img/cupcake-2.jpeg');
let cupcake3 = new Gateau('3cupcake', 4.50, 'img/cupcake-3.jpeg');
let sweets1 = new Gateau('1sweets', 3 , 'img/sweets-1.jpeg');
let sweets2 = new Gateau('2sweets', 3 , 'img/sweets-2.jpeg');
let doghnut1 = new Gateau('1doghnut', 5, 'img/doughnut-1.jpeg');
let doghnut2 = new Gateau('2doghnut', 5, 'img/doughnut-2.jpeg');
let cake1 = new Gateau('1cake', 4, 'img/cake-1.jpeg');
let cake2 = new Gateau('2cake', 4, 'img/cake-2.jpeg');
let cake3 = new Gateau('3cake', 4, 'img/cake-3.jpeg');


const caddies = document.querySelectorAll('.caddie');
  
    caddies.forEach(caddie => {

        caddie.addEventListener('click', function(event){

            const divWrap = document.querySelector('.modalItem');
            divWrap.insertAdjacentHTML("afterend", '<div class ="modalItem"><img src="img/cake-1.jpeg" name ="achatPhot" id="achatPhot"><div class="modalTitre"><h4 id="achatNom"></h4><p id="achatPrix"class="text-center"></p></div><span><i class="fa fa-trash fa-"></i></span></div>');

             caddieName = caddie.dataset.gat;

                 allGateaux.forEach(gato => {

                   let gatoNom = gato.nom; 
                   
                   if(caddieName == gatoNom) {
                    document.getElementById('achatNom').innerHTML = gatoNom;
                    document.getElementById('achatPhot').src =gato.photo;
                    document.getElementById('achatPrix').innerHTML = gato.prix + " Euros";
                   }            
                 });

            });

        });
////////************************** * Ajout des Item d'achat à la volée dans le modal  ************************************* */









