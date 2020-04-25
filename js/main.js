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