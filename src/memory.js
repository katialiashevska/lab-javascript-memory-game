class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards() {
    // ... write your code here
    if (!this.cards) {
        return undefined
    } else {
        this.cards.sort(() => Math.random() - 0.5)
        return this.cards
    }    
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked++
    if (card1 === card2) {
        this.pairsGuessed++
        return true
    } else {
        return false
    }
  }

  checkIfFinished() {
    // ... write your code here
    return this.pairsGuessed === this.cards.length / 2
  }
}
