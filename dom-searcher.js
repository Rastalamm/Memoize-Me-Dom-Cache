function domElementBank(){

  var elementListObj = {};

  return {
    searchDom : searchDom
  }

  function searchDom (elementName){
    if ( elementName in elementListObj ){
      return elementListObj[elementName];
    }
    else{
      elementListObj[elementName] = document.querySelector(elementName);
      return elementListObj;
    }
  }

}