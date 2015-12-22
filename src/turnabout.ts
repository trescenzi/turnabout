/// <reference path="../typings/tsd.d.ts" />
var mainboard = $('textarea#id_mainboard');
var mainTab = $('label[for="id_mainboard"]');
var sideboard = $('textarea#id_sideboard');
var sideTab = $('label[for="id_sideboard"]');
var maybeboard = $('textarea#id_maybeboard');
var maybeTab = $('label[for="id_maybeboard"]');
var acquireboard = $('textarea#id_acquireboard');
var acquireTab = $('label[for="id_acquireboard"]');
var CARD_REGEX = /(\d?).*/;

function getBoardText(board: JQuery) {
  return _.map(board.val().split('\n'), _.trim);
}

function getCardCount(cardList: string[]) {
  return _.reduce(cardList, function(sum, card) {
    if (card.length === 0 ) {
      return sum;
    }

    var cardCount = CARD_REGEX.exec(card)[1];
    return sum + (cardCount === '' ? 1 : parseInt(cardCount));
  }, 0);
}

function updateTab(tab: JQuery, tabName: string, cardCount: number) {
  tab.text(tabName + ': ' + cardCount);
}

updateTab(mainTab, 'Mainboard', getCardCount(getBoardText(mainboard)));
updateTab(sideTab, 'Sideboard', getCardCount(getBoardText(sideboard)));
updateTab(maybeTab, 'Maybeboard', getCardCount(getBoardText(maybeboard)));
updateTab(acquireTab, 'Acquireboard', getCardCount(getBoardText(acquireboard)));

mainboard.keyup(function() {
  updateTab(maybeTab, 'Mainboard', getCardCount(getBoardText(mainboard)));
});

sideboard.keyup(function() {
  updateTab(sideTab, 'Sideboard', getCardCount(getBoardText(sideboard)));
});

maybeboard.keyup(function() {
  updateTab(maybeTab, 'Maybeboard', getCardCount(getBoardText(maybeboard)));
});

acquireboard.keyup(function() {
  updateTab(acquireTab, 'Acquireboard', getCardCount(getBoardText(acquireboard)));
});
