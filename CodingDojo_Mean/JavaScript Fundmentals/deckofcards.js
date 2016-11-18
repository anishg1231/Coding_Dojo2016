// The Deck should contain the 52 standard cards
// The Deck should be able to shuffle
// The Deck should be able to reset
// The Deck should be able to deal a random card
// Deal should return the card that was dealt and remove it from the deck

function Deck(){
  var cards = []

  function genCards() {
    var suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs']
    var special = ['Jack', 'Queen', 'King', 'Ace']
    for (var suit = 0; suit < suits.length; suit++) {
      console.log('lol');
      for (var card = 2; card < 11; card++) {
        cards.push(card + 'of' +suits[suit])
      }
      for (var high = 0; high < special.length; high++) {
        cards.push(special[high] + 'of' + suits[suit])
      }
    }
    console.log(cards);
  }
  genCards()
  this.shuffle = function(){
    var temp, rando
    for (var i = cards; i > 0; i--) {
      rando = Math.floor(Math.random() * i);
      temp = cards[i]
      cards[i] = cards[rando]
      cards[rando] = temp
    }
    console.log(cards)
  }
  this.reset = function(){
    cards = []
    genCards()
  }
  this.deal = function () {
    return cards.pop()
  }

}

var my_deck = new Deck()
my_deck.shuffle()
// my_deck.reset()
var my_card = my_deck.deal()
console.log(my_card);
