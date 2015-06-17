function domElementBank(elementName){

  var elementListObj = {};

  return {
    searchDom : searchDom
  }

  function searchDom (){

    if ( elementName in elementListObj ){
      return elementListObj[elementName];
    }
    else{
      elementListObj[elementName] = document.querySelector(elementName);
      return elementListObj;
    }
  }

}