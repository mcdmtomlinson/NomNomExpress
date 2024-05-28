
$(() => {
  // global object that stores functions that you want to apply on a menu item
  window.menuItem = {};

  // Defining the function createMenuItem which adds listing info to html article
  function createMenuItem(item) {
    return `
      <div class="card menu-item" style="width: 18rem;" data-item='${JSON.stringify(item)}'>
        <img src="${item["photo"]} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${item["name"]}</h5>
          <p class="card-text">${item["description"]}</p>
          <p>$${item["price"]}</p>
          <div class="add-to-cart">
           <a href="#" class="btn btn-primary add-to-cart-btn-decrease">-</a>
            <p><span class="quantity">0</span></p>
            <a href="#" class="btn btn-primary add-to-cart-btn">+</a>
          </div>
        </div>
      </div>`

  }
  // Allowing the function to be accessed globally
  window.menuItem.createMenuItem = createMenuItem;

});
