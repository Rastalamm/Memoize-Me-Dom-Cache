function domElementBank(){

  var elementList = {};


  var storeCache = function (elementName){

    document.querySelector(elementName);

  }


  //searching the object that was created.
  var searchCache = function(elementList){






  return {
    storeCache : storeCache,
    searchCache : searchCache
  }

}