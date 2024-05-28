$(() => {

  const $main = $('#main-content');

  window.views_manager = {};

  window.views_manager.show = function(item) {
    $home.detach();
    $menuItems.detach();
    $cartPage.detach();
    $orderSuccesful.detach();


    switch (item) {
    case 'home':
      $home.appendTo($main);
      break;
    case 'menu':
      $menuItems.appendTo($main);
      break;

    case 'cart':
      window.cart.displayCart();
      $cartPage.appendTo($main);
      break;

    case 'menuItems':
      $menuItems.appendTo($main);
      break;

    case 'error': {
      const $error = $(`<p>${arguments[1]}</p>`);
      $error.appendTo('body');
      setTimeout(() => {
        $error.remove();
        views_manager.show('cart');
      }, 2000);
      break;
    }

    case 'orderSuccesful': {
      $orderSuccesful.appendTo($main);
      break;
    }

    }
  };

});
