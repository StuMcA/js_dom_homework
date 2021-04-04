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
    newCard.classList.add(`${form.type.value}`)
    newCard.onclick = function() {
        this.remove();
    };
    cardList.appendChild(newCard);

    const header = document.createElement('header');
    newCard.append(header);

    const name = document.createElement('h2');
    name.textContent = form.name.value;
    header.appendChild(name);

    const health = document.createElement('p');
    health.textContent = `${form.health.value}HP`;
    header.appendChild(health);

    const type = document.createElement('p');
    type.textContent = form.type.value;
    header.appendChild(type);

    const picture = document.createElement('div');
    picture.classList.add('pokemon-image');
    newCard.append(picture);

    const moveOne = document.createElement('div');
    newCard.append(moveOne);

    const moveOneCost = document.createElement('div');
    let join;
    console.log('colour', form['move-one-cost'].value);
    console.log('basic', form['move-one-cost-basic'].value);
    if (form['move-one-cost'].value === '0') {
        join = '';
        form['move-one-cost'].value = '';
        if (form['move-one-cost-basic'].value === '0') {form['move-one-cost-basic'].value = ''};
    } else if (form['move-one-cost-basic'].value === '0'){
        join = '';
        form['move-one-cost-basic'].value = '';
    }  else if (form['move-one-cost'].value === '' || form['move-one-cost-basic'].value === '') {
        join = "";
    } else {
        join = "+";
    }
    moveOneCost.textContent = `${form['move-one-cost'].value}${join}${form['move-one-cost-basic'].value}`
    moveOne.appendChild(moveOneCost);

    const moveOneName = document.createElement('h4');
    moveOneName.textContent = form['move-one'].value;
    moveOne.appendChild(moveOneName);

    const moveOneDesc = document.createElement('p');
    moveOneDesc.textContent = form['move-one-desc'].value;
    moveOneDesc.classList.add('description');
    moveOne.appendChild(moveOneDesc);

    const moveOneDamage = document.createElement('p');
    moveOneDamage.textContent = form['move-one-damage'].value;
    moveOneDamage.classList.add('damage');
    moveOne.appendChild(moveOneDamage);
}

const handleDeleteAllClick = function() {
    const pokemonCards = document.querySelector('#pokemon-card-list');
    pokemonCards.innerHTML ='';
}

// const handleDeleteOneClick = function(id) {
//     const cardToRemove = document.getElementById(id);
//     console.log(cardToRemove);
//     cardToRemove.remove();
// }