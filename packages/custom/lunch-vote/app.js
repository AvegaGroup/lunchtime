'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var LunchVote = new Module('lunch-vote');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
LunchVote.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  LunchVote.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  LunchVote.menus.add({
    title: 'lunchVote example page',
    link: 'lunchVote example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  LunchVote.aggregateAsset('css', 'lunchVote.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    LunchVote.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    LunchVote.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    LunchVote.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return LunchVote;
});
