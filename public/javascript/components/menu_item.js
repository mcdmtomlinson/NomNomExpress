
$(() => {
  // global object that stores functions that you want to apply on a menu item
  window.menuItem = {};

  // Defining the function createMenuItem which adds listing info to html article
  function createMenuItem(menuItem) {
    return `
    <article class="menu-item">
        <section class="menu-item__preview-image">
          <img src="${menuItem.thumbnail_photo_url}" alt="Menu Item">
        </section>
        <section class="menu-item__details">
          <h3 class="menu-item__title">${menu-item.name}</h3>
          <ul class="menu-item__details">
            <li>${menuItem.details}</li>
          </ul>

            : ``}
          <footer class="menu-item__footer">

            <div class="property-listing__price">$${menuItem/100.0}</div>
          </footer>
        </section>
      </article>
    `
  }
  // Allowing the function to be accessed globally
  window.menuItem.createMenuItem = createMenuItem;

});
