document.addEventListener('DOMContentLoaded', () => {
console.log('DOM loaded');

const addCardForm = document.querySelector('#add-card-form');
const deleteCards = document.querySelector('#delete');

    addCardForm.addEventListener('submit', (event) => {
        event.preventDefault();
        createNewCard(event.target);
    });

    deleteCards.addEventListener('click', handleDeleteAllClick)

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

    const moveOne = document.createElement('div');
    newCard.append(moveOne);

    const moveOneCost = document.createElement('div');
    moveOneCost.textContent = `${form['move-one-cost'].value}+${form['move-one-cost-basic'].value}`
    moveOne.appendChild(moveOneCost);

    const moveOneName = document.createElement('h4');
    moveOneName.textContent = form['move-one'].value;
    moveOne.appendChild(moveOneName);

    const moveOneDesc = document.createElement('p');
    moveOneDesc.textContent = form['move-one-desc'].value;
    moveOne.appendChild(moveOneDesc);

    const moveOneDamage = document.createElement('p');
    moveOneDamage.textContent = form['move-one-damage'].value;
    moveOne.appendChild(moveOneDamage);
}

const handleDeleteAllClick = function(event) {
    const pokemonCards = document.querySelector('#pokemon-card-list');
    pokemonCards.innerHTML ='';
}