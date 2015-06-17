(function(){
  window.DomElementBank = domElementBank();

  function domElementBank(){
    var elementListCache = {};

    function searchDom (selector){

      if(typeof selector !== 'string'){
        throw new TypeError('Your input needs to be a string');
      }

      if ( selector in elementListCache ){
        return elementListCache[selector];
      }
      else{
        elementListCache[selector] = document.querySelector(selector);
        return elementListCache;
      }
    }

    return {
      searchDom : searchDom
    }
  }
})();