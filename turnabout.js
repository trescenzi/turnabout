console.log("hey bro");
console.log($('textarea#id_mainboard').text().split('\n'));
var mainboard = $('textarea#id_mainboard');
var mainTab = $('label[for="id_mainboard"]');
var CARD_REGEX = /(\d?).*/;

function getMainboardText() {
  return mainboard.val().split('\n');
}

function getCardCount(cardList) {
  return _.reduce(cardList, function(sum, card) {
    var cardCount = CARD_REGEX.exec(card)[1];
    return sum + (cardCount === '' ? 1 : parseInt(cardCount));
  }, 0);
}

function updateMainTab(cardCount) {
  mainTab.text('Main: ' + cardCount);
}

updateMainTab(getCardCount(getMainboardText()));

mainboard.keyup(function() {
  console.log('leypress');
  updateMainTab(getCardCount(getMainboardText()));
});
