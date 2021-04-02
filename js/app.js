document.addEventListener('DOMContentLoaded', () => {
console.log('DOM loaded');

const addCardForm = document.querySelector('#add-card-form');

    addCardForm.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log(event);
        createNewCard(event.target)

    });
});

const createNewCard = function(form) {
    const cardList = document.querySelector('#pokemon-card-list');
    const newCard = document.createElement('li');
    newCard.classList.add('pokemon-card');
    cardList.appendChild(newCard);

    const name = document.createElement('h2');
    name.textContent = form.name.value;
    newCard.appendChild(name);

    const health = document.createElement('p');
    health.textContent = `${form.health.value}HP`;
    newCard.appendChild(health);

    const type = document.createElement('p');
    type.textContent = form.type.value;
    newCard.appendChild(type);
}