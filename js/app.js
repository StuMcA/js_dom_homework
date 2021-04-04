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


    // Moves are not dry at all. Needs reworked into a loop.
    const moveOneCost = document.createElement('div');
    let join;
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

    if (form['move-two'].value !== "") {
        newCard.append(document.createElement('hr'))

        const moveTwo = document.createElement('div');
        newCard.append(moveTwo);
    
        const moveTwoCost = document.createElement('div');
        let join;
        if (form['move-two-cost'].value === '0') {
            join = '';
            form['move-two-cost'].value = '';
            if (form['move-two-cost-basic'].value === '0') {form['move-two-cost-basic'].value = ''};
        } else if (form['move-two-cost-basic'].value === '0'){
            join = '';
            form['move-two-cost-basic'].value = '';
        }  else if (form['move-two-cost'].value === '' || form['move-two-cost-basic'].value === '') {
            join = "";
        } else {
            join = "+";
        }
        moveTwoCost.textContent = `${form['move-two-cost'].value}${join}${form['move-two-cost-basic'].value}`
        moveTwo.appendChild(moveTwoCost);
    
        const moveTwoName = document.createElement('h4');
        moveTwoName.textContent = form['move-two'].value;
        moveTwo.appendChild(moveTwoName);
    
        const moveTwoDesc = document.createElement('p');
        moveTwoDesc.textContent = form['move-two-desc'].value;
        moveTwoDesc.classList.add('description');
        moveTwo.appendChild(moveTwoDesc);
    
        const moveTwoDamage = document.createElement('p');
        moveTwoDamage.textContent = form['move-two-damage'].value;
        moveTwoDamage.classList.add('damage');
        moveTwo.appendChild(moveTwoDamage);
    }

    if (form['move-three'].value !== "") {
        newCard.append(document.createElement('hr'))

        const moveThree = document.createElement('div');
        newCard.append(moveThree);
    
        const moveThreeCost = document.createElement('div');
        let join;
        if (form['move-three-cost'].value === '0') {
            join = '';
            form['move-three-cost'].value = '';
            if (form['move-three-cost-basic'].value === '0') {form['move-three-cost-basic'].value = ''};
        } else if (form['move-three-cost-basic'].value === '0'){
            join = '';
            form['move-three-cost-basic'].value = '';
        }  else if (form['move-three-cost'].value === '' || form['move-three-cost-basic'].value === '') {
            join = "";
        } else {
            join = "+";
        }
        moveThreeCost.textContent = `${form['move-three-cost'].value}${join}${form['move-three-cost-basic'].value}`
        moveThree.appendChild(moveThreeCost);
    
        const moveThreeName = document.createElement('h4');
        moveThreeName.textContent = form['move-three'].value;
        moveThree.appendChild(moveThreeName);
    
        const moveThreeDesc = document.createElement('p');
        moveThreeDesc.textContent = form['move-three-desc'].value;
        moveThreeDesc.classList.add('description');
        moveThree.appendChild(moveThreeDesc);
    
        const moveThreeDamage = document.createElement('p');
        moveThreeDamage.textContent = form['move-three-damage'].value;
        moveThreeDamage.classList.add('damage');
        moveThree.appendChild(moveThreeDamage);
    }
    
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