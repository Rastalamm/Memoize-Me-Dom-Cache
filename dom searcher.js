function domElementBank(elementName){

  var elementListObj = {};

  var searchDom = function (elementName){

   for ( key in elementListObj ){

      if(elementListObj[key]){
        return elementListObj[key];
      }
      else{
        elementListObj.elementName = document.querySelector(elementName);
      }
    }
    return {
      searchDom : searchDom
    }
  }
}