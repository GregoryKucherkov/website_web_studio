const allCards = Array.from(document.querySelectorAll('.types-preview .types-item'));
const buttonsAll = document.querySelector('.buttons');

const allCardsContainer = document.querySelector('.types-preview');



const onFilterButton = (event) => {
    if (event.target.nodeName !== 'BUTTON') {
        return;
    }
    const selectedButton = event.target.textContent.trim();
    console.log(selectedButton);

    // Filter cards 
    let filteredCards;
    if (selectedButton !== 'All') {
        filteredCards = allCards.filter(card => {
            const titleElement = card.querySelector('.types-prdct');
            return titleElement.textContent.includes(selectedButton);
        });
    } else {
        filteredCards = allCards;
    }

    // Clear current cards in container
    // while (allCardsContainer.firstChild) {
    //     allCardsContainer.removeChild(allCardsContainer.firstChild);
    // }
    allCardsContainer.innerHTML = "";

    // Append filtered cards to the container
    filteredCards.forEach(card => {
        allCardsContainer.appendChild(card);
    });
};

if (allCardsContainer) {
    buttonsAll.addEventListener("click", onFilterButton);
}
