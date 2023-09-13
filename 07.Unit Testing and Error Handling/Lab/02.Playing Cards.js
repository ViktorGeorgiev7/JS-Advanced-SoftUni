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
        case 'H':
            suit = '\u2665';
        case 'D':
            suit = '\u2666';
        case 'C':
            suit = '\u2663';
    }
    let card = {face,suit};
    card.ToString = function (){
        return this.face + this.suit;
    }
    return card.ToString();
}
console.log(getCard('10', 'C'))