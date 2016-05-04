document.addEventListener('DOMContentLoaded', function() {

  var bs = document.getElementById('standard');
  bs.addEventListener('click', function() {
    chrome.tabs.executeScript(null, {file: "scripts/standard.js"});
  }, false);

  var bs = document.getElementById('standard10');
  bs.addEventListener('click', function() {
    chrome.tabs.executeScript(null, {file: "scripts/standard10.js"});
  }, false);

  var bm = document.getElementById('modern');
  bm.addEventListener('click', function() {
    chrome.tabs.executeScript(null, {file: "scripts/modern.js"});
  }, false);

  var btl = document.getElementById('tiny_leaders');
  btl.addEventListener('click', function() {
    chrome.tabs.executeScript(null, {file: "scripts/tiny_leaders.js"});
  }, false);

  var bh = document.getElementById('highlander');
  bh.addEventListener('click', function() {
    chrome.tabs.executeScript(null, {file: "scripts/highlander.js"});
  }, false);

  var bd = document.getElementById('draft');
  bd.addEventListener('click', function() {
    chrome.tabs.executeScript(null, {file: "scripts/draft.js"});
  }, false);


}, false);