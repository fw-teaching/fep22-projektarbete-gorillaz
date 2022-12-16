const cards = document.querySelectorAll('.memory-card');

function flipCard(ev) {
    console.log(ev.target);
    this.classList.toggle('flip');
}

cards.forEach(card => card.addEventListener('click', flipCard));