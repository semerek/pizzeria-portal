
import { settings, select, classNames } from './settings.js';
import Product from './components/Product.js';
import Cart from './components/Cart.js';
import Booking from './components/Booking.js';
import Home from './components/Home.js';

const app = { //metoda OBIEKTU

  initPages: function () {
    const thisApp = this;

    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    thisApp.navLinks = document.querySelectorAll(select.nav.links);
    thisApp.navOrder = document.querySelectorAll(select.nav.order);
    thisApp.navBooking = document.querySelectorAll(select.nav.booking);

    const idFromHash = window.location.hash.replace('#/', '');

    let pageMatchingHash = thisApp.pages [0].id;

    for (let page of thisApp.pages){
      if(page.id == idFromHash){
        pageMatchingHash = page.id;
        break;
      }
    }

    thisApp.activePage(pageMatchingHash);

    for (let link of thisApp.navLinks) {
      link.addEventListener('click', function(event){
        const clickedElement = this;
        event.preventDefault();

        /* get page id from hreff attribute*/
        const id = clickedElement.getAttribute('href').replace('#', '');
        
        /* run thisApp.activatePage with that id */
        thisApp.activePage(id);

      });
    }
  },

  activePage: function (pageId) {

    const thisApp = this;

    /*add class 'active' to matching pages, remove from non-matching  */
    for (let page of thisApp.pages) {
      page.classList.toggle(classNames.pages.active, page.id == pageId);
    }
    /* add class 'active' to matching links, remove from non-matching  */
    for (let link of thisApp.navLinks) {
      link.classList.toggle(
        classNames.nav.active,
        link.getAttribute('href') == '#' + pageId
      );  
    }
    if (pageId === 'mainpage') {
      document.querySelector('.main-nav').classList.add('hide');
    } else {
      document.querySelector('.main-nav').classList.remove('hide');
    }

    window.location.hash = '#/' + pageId;

  },

  initHomePage: function () {
    const thisApp = this;

    thisApp.homeContainer = document.querySelector(select.containerOf.home);
    thisApp.mainPage = new Home(thisApp.homeContainer); 
  },

  initMenu: function () { // instancja klasy PRODUCT
    const thisApp = this; //this pojedyncza instancja - pozwala na dodawanie właściwości i uruchamianie danej metody
    //console.log('thisApp.data', thisApp.data);

    for (let productData in thisApp.data.products) {
      new Product(thisApp.data.products[productData].id, thisApp.data.products[productData]);
    }
  },

  initData: function () { // INSTANCJA dla każdego PRODUCT
    const thisApp = this;
    thisApp.data = {};

    const url = settings.db.url + '/' + settings.db.product;

    /*thisApp.data = dataSource; //dataSource = informacje o produkcie*/

    fetch(url)
      .then(function (rawResponse) {
        return rawResponse.json();
      })
      .then(function (parsedResponse) {
        console.log('parsedResponse', parsedResponse);
        /* save parsedResponse as thisApp.data.products */
        thisApp.data.products = parsedResponse;
        /* execute initMenu method */
        thisApp.initMenu();

      });
    console.log('thisApp.data', JSON.stringify(thisApp.data));
  },

  initCart: function () {
    const thisApp = this;

    const cartElem = document.querySelector(select.containerOf.cart);
    thisApp.cart = new Cart(cartElem);

    thisApp.productList = document.querySelector(select.containerOf.menu);

    thisApp.productList.addEventListener('add-to-cart', function (event) {
      app.cart.add(event.detail.product);
    });
  },
  
  initBooking: function () {
    const thisApp = this;
    
    const bookingElem = document.querySelector(select.containerOf.booking);

    thisApp.booking = new Booking (bookingElem);

  },

  init: function () {
    const thisApp = this;
    //console.log('*** App starting ***');
    //console.log('thisApp:', thisApp);
    //console.log('classNames:', classNames);
    //console.log('settings:', settings);
    //console.log('templates:', templates);
    thisApp.data = {};
    thisApp.initCart();
    thisApp.initPages();
    thisApp.initData();
    thisApp.initMenu();
    thisApp.initBooking();
    thisApp.initHomePage();

  },

};


app.init();
