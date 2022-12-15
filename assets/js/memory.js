let cards=document.querySelectorAll(".cardBack");
    
function flipCard(ev){
    console.log(ev.target);//
    //To-Do: Byta src till cardFront

    //To-Do: lägg till flip klass, för att hålla reda på vilka kort som flippats.
    this.classList.toggle('flip');

}
for (i=0; i<cards.length; i++){
cards[i].addEventListener("click", flipCard);
}
