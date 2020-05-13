
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

////////**************************  *Show Modal    ************************************* */

(function(){
const cardCount = document.getElementById('count-card');
const achatModal = document.getElementById('achatModal');


cardCount.addEventListener('click',function(event) 

{achatModal.classList.toggle("visible");})

})();

////////***************   Syncho Modal et Panier d'achat    ***************************** */

const allGateaux = [];

function Gateau(kod,n,px,p,q){
    this.kod = kod;
    this.nom = n;
    this.prix = px;
    this.photo = p;
    this.qte = q;
    allGateaux.push(this);
}

Gateau(); 

let cupcake1 = new Gateau('cup1','cupcake', 4.50, 'img/cupcake-1.jpeg',1);
let cupcake2 = new Gateau('cup2','cupcake', 4.50, 'img/cupcake-2.jpeg',1);
let cupcake3 = new Gateau('cup3','cupcake', 4.50, 'img/cupcake-3.jpeg',1);
let sweets1 = new Gateau('sweet1','sweet', 3 , 'img/sweets-1.jpeg',1);
let sweets2 = new Gateau('sweet2','sweet', 3 , 'img/sweets-2.jpeg',1);
let doghnut1 = new Gateau('doghnut1','doghnut', 5, 'img/doughnut-1.jpeg',1);
let doghnut2 = new Gateau('doghnut2','doghnut', 5, 'img/doughnut-2.jpeg',1);
let cake1 = new Gateau('cake1','cake', 4, 'img/cake-one.jpg',1);
let cake2 = new Gateau('cake2','cake', 4, 'img/cake-2.jpg',1);
let cake3 = new Gateau('cake3','cake', 4, 'img/cake-3.jpg',1);


////////************************** * Ajout des Item d'achat à la volée dans le Caddie  ************************************* */

let verifArray = [];
let CaddiArray = [];

const setUpListeners = () => { 

    let boutAdd = document.querySelectorAll('.addto');

        boutAdd.forEach(boutadd =>{ boutadd.addEventListener('click',function(event){ 

        let boutkod = boutadd.dataset.gat;
        verifArray.includes(boutkod) ?   alert('Votre Gata est déja dans le panier !') : verifCad(boutkod,allGateaux);
    
        })
    })
}

const verifCad = (boutkod,allGateaux) => { 

  allGateaux.forEach(gata=>{

    let gatax = {

        kod: gata.kod,
        name: gata.nom,
        price: gata.prix,
        image: gata.photo,
        quantity: gata.qte,  
    }

    if(gatax.kod === boutkod){

      verifArray.push(gatax.kod);
      CaddiArray.push(gatax);
      showGataCaddi(gatax);
    }  
  })
}

setUpListeners();

const showGataCaddi = (gatax) => {

    let divWrap = document.getElementById('modalTotal');

    divWrap.insertAdjacentHTML("afterbegin", 
    `<div class ="modalItem " data-id ="${gatax.kod}"> 
        <div class="modalTitre"><img src = "${gatax.image}" name ="achatPhot" id="achatPhot">
            <h4 id="achatNom">${gatax.name}</h4><span><i data-id ="${gatax.kod}" class="poub fa fa-trash fa-"></i></span>
        </div>
        <div class="plumin">
         <p class= "text-muted">quantité</P><p class="qte text-muted">${gatax.quantity}</span></P>
             <a  class ="btnMin" data-id ="${gatax.kod}">-</a><a class ="btnplu" data-id ="${gatax.kod}">+</a>
        </div>`)

        let btnPlus = divWrap.querySelectorAll('.btnplu');
        let btnMins = divWrap.querySelectorAll('.btnMin');
        let trashx = divWrap.querySelectorAll('.poub');

        trashx.forEach(trash=> {trash.addEventListener('click',function(event){ removeGata(gatax);
            }) 
        })

        btnPlus.forEach(btplu =>{ btplu.addEventListener('click', function(event){ qtePlu(gatax);
            })
        })
        btnMins.forEach(btmin =>{ btmin.addEventListener('click', function(event){ qteMin(gatax);
            })
        })
        calculTot();

}

const qtePlu = (gatax) => {

    let btplu = event.target;
    let qteDom = btplu.parentElement.children[1];

    if(gatax.kod === btplu.dataset.id ){ 
        
     qteDom.innerHTML = ++gatax.quantity; 
    }

    calculTot();
}

const qteMin = (gatax) => {

    let btmi = event.target;
    let qteDom = btmi.parentElement.children[1];

    if(gatax.kod === btmi.dataset.id){

       if(qteDom.innerText >= 2){

        qteDom.innerHTML = --gatax.quantity;
       }
    }
    calculTot();
}

const calculTot = () => {

    let nbItem = document.getElementById('nbItem');
    let totalAch = document.getElementById('totalAch');
    let totalSum = document.getElementById('totalSum');
    let resultQte = 0;
    let sumPrix = 0;

    CaddiArray.forEach(gata=>{
      
        resultQte = resultQte + gata.quantity;
        nbItem.innerHTML = resultQte;
        
        sumPrix = sumPrix + gata.quantity * gata.price;
        totalAch.innerHTML = sumPrix + "  euros";
        totalSum.innerHTML = sumPrix + "  euros";
    })
}

const removeGata = (gatax) => {

    let trash = event.target;

    if(trash.dataset.id === gatax.kod){

     trash.parentElement.parentElement.parentElement.remove();
     verifArray.pop(gatax.kod);
     gatax.quantity = 0;
    }
    calculTot();
}

(function clearAll(){

let clear = document.getElementById('clear');
clear.addEventListener('click', function(event){

event.preventDefault();
window.location.reload();

})
})();

(function caddiAnimat(){

    let boutAdd = document.querySelectorAll('.addto');
    let cadIcon = document.querySelector('.fa-shopping-cart');
 
    boutAdd.forEach(boutadd=>{ boutadd.addEventListener('click', function (event){

        cadIcon.classList.add('animate__animated', 'animate__shakeY');

        setTimeout(() => {

            cadIcon.classList.remove('animate__animated', 'animate__shakeY');
            
        }, 1000);
      }) 
    })
})();


(function animYum(anim){
    window.addEventListener('load', (event)=>{

    let animHome = document.querySelector('.animHome');

     animHome.classList.add("animate__heartBeat");

        setTimeout(() => {

        animHome.classList.remove('animate__heartBeat');
        
        }, 800);
   
    let  animtitre = document.querySelectorAll('.animtitre');
         animtitre.forEach(animt=>{ animt.addEventListener('mouseenter', (event)=>{

        animHome.classList.add("animate__heartBeat");
        
        setTimeout(() => {
        animHome.classList.remove('animate__heartBeat');
                
         }, 800);
        })
        })
    })
})();








    

  
     
        
    


    

      
    
    
    

  
    
  


               
        

  

    

    



