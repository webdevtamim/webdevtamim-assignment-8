const getStoredCardDonate = () =>{
    const storedCardDonate = localStorage.getItem('card-donation');
    if(storedCardDonate){
        return JSON.parse(storedCardDonate);
    }
    return [];
}


const saveCardDonate = id =>{
    const storedCardsDonate = getStoredCardDonate();
    const exists = storedCardsDonate.find(cardId => cardId === id);
    if(!exists){
        storedCardsDonate.push(id);
        localStorage.setItem('card-donation', JSON.stringify(storedCardsDonate))
    }
}

export { getStoredCardDonate, saveCardDonate }