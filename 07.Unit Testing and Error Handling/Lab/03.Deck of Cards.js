function printDeckOfCards(cards) {
    function getCard(face,suit){
        let faces = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
        if (!Number.isNaN(Number(face))) {
            face = Number(face);
        }
        if (!faces.includes(face)) {
            throw new Error('Invalid card face!');
        }
        switch (suit) {
            case 'S':
                suit = '\u2660';
                break;
            case 'H':
                suit = '\u2665';
                break;
            case 'D':
                suit = '\u2666';
                break;
            case 'C':
                suit = '\u2663';
                break;
        }
        let card = {face,suit};
        card.ToString = function (){
            return this.face + this.suit;
        }
        return card.ToString();
    }
    let data = ['AS', '10D', 'KH', '2C'];
    let returnCards = [];
    for (const el of data) {
        if (el.length == 3) {
            returnCards.push(getCard(el[0]+el[1],el[2]));
        }
        else{
            returnCards.push(getCard(el[0],el[1]));}
    }
    return returnCards.join(' ')
  }
  console.log(printDeckOfCards());
  