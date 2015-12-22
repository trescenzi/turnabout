var mainboard = $('textarea#id_mainboard');
var mainTab = $('label[for="id_mainboard"]');
var CARD_REGEX = /(\d?).*/;

function getMainboardText() {
  return _.map(mainboard.val().split('\n'), _.trim);
}

function getCardCount(cardList) {
  return _.reduce(cardList, function(sum, card) {
    if (card.length === 0 ) {
      return sum;
    }

    var cardCount = CARD_REGEX.exec(card)[1];
    return sum + (cardCount === '' ? 1 : parseInt(cardCount));
  }, 0);
}

function updateMainTab(cardCount) {
  mainTab.text('Main: ' + cardCount);
}

updateMainTab(getCardCount(getMainboardText()));

mainboard.keyup(function() {
  updateMainTab(getCardCount(getMainboardText()));
});
