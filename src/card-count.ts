/// <reference path="../typings/tsd.d.ts" />
const CARD_REGEX = /(\d*).*/;
class Board {
  private tab: JQuery;
  private textArea: JQuery;
  private cards: number;
  private tabName: string;
  
  constructor(id: string, tabName: string) {
    this.tab = $(`label[for="id_${id}"]`);
    this.textArea = $(`textarea#id_${id}`);
    this.cards = this.getCardCount();
    this.tabName = tabName;

    this.textArea.keyup(() => {
      this.updateTab();
    });
  }
  
  getBoardText(): string[] {
    return _.map(this.textArea.val().split('\n'), _.trim);
  }

  getCardCount(): number {
    return _.reduce(this.getBoardText(), function(sum, card) {
      if (card.length === 0 ) {
        return sum;
      }

      var cardCount = CARD_REGEX.exec(card)[1];
      return sum + (cardCount === '' ? 1 : parseInt(cardCount));
    }, 0);
  }

  updateTab(): void {
    this.tab.text(this.tabName + ': ' + this.getCardCount());
  }
}
