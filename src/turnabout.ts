/// <reference path="../typings/tsd.d.ts" />
/// <reference path="./card-count.ts" />
const path: string = window.location.pathname;
if (path.indexOf('add') !== -1 || path.indexOf('update') !== -1) {
  const mainboard = new Board('mainboard', 'Mainboard');
  const sideboard = new Board('sideboard', 'Sideboard');
  const maybeboard = new Board('maybeboard', 'Maybeboard');
  const acquireboard = new Board('acquireboard', 'Acquireboard');

  mainboard.updateTab();
  sideboard.updateTab();
  maybeboard.updateTab();
  acquireboard.updateTab();
}
