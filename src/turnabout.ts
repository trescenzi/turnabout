/// <reference path="../typings/tsd.d.ts" />
/// <reference path="./card-count.ts" />
const path: string = window.location.pathname;
if (path.indexOf('add') !== -1 || path.indexOf('update') !== -1) {
  const mainboard: Board = new Board('mainboard', 'Mainboard');
  const maybeboard: Board = new Board('maybeboard', 'Maybeboard');
  const acquireboard: Board = new Board('acquireboard', 'Acquireboard');

  mainboard.updateTab();
  maybeboard.updateTab();
  acquireboard.updateTab();

  if (window.location.host.indexOf('hearthstone') === -1) {
    const sideboard: Board = new Board('sideboard', 'Sideboard');
    sideboard.updateTab();
  }
}
