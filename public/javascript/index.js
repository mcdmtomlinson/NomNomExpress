$(()=> {
  // views_manager.show('home');
  // views_manager.show('menuItems');



  //Calling getAllMenuItems function, defined in network.js.
  // Initiates an AJAX request to the server at the URL /api/menItems?params
  // Returning Promise using json object as param
  getAllMenuItems().then(function( json ) {
    console.log(json);
    json['test'] = "test value";
    menuItems.addItems(json); // supposed to be json.properties
  /// Call global function show from views_manager object, with listings as parameter
  // This will append $propertyListings to #main
    views_manager.show('menuItems');
  });
});
