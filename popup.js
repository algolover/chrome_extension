/*
function getCurrentTabUrl(callback) {
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
    var tab = tabs[0];
    var url = tab.url;
    console.assert(typeof url == 'string', 'tab.url should be a string');

    callback(url);
  });
*/

var targ,newTarg;
chrome.tabs.query({ active: true, lastFocusedWindow: true }, function (tabs) {
    // Do something
    targ=tabs[0].url;
    var toBeOmitted="youtube";
    var toBeAddded="nsfwyoutube";
    newTarg=targ.replace(toBeOmitted,toBeAddded);	
    return newTarg;
});


    


  chrome.tabs.query({ active: true, lastFocusedWindow: true }, function (tabs) {
      chrome.tabs.update({url:newTarg});
});




/*
chrome.tabs.getCurrent(function (tab) {
  //Your code below...
  chrome.browserAction.onClicked.addListener(function(tab) {
    var targ = encodeURIComponent(tab.url);
    var toBeOmitted="youtube";
    var toBeAddded="nsfwyoutube";
    var newTarg=targ.replace(toBeOmitted,toBeAddded)


  var tabUrl = encodeURIComponent(tab.url);
  var tabTitle = encodeURIComponent(tab.title);
  chrome.tabs.update(tab.id, {url:newTarg});
});
*/
