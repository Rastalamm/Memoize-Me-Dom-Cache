(function(){
  window.DomElementBank = domElementBank();

  function domElementBank(){
    var elementListCache = {};
    var err = null;

    function searchDom (selector){
      //validate input is a string

      if(typeof selector !== 'string'){
        err = new TypeError('Your input needs to be a string');
        return err;
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