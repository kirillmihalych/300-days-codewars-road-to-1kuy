let cards = [
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'jack',
  'queen',
  'king',
  'ace',
]

let colors = ['hearts', 'spades', 'diamonds', 'clubs']

let buildDeck = cards
  .map((card) => colors.map((color) => `${card} of ${color}`))
  .reduce((acc, init) => acc.concat(...init), [])
