'use strict';

// The Package is past automatically as first parameter
module.exports = function(LunchVote, app, auth, database) {

  app.get('/lunchVote/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/lunchVote/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/lunchVote/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/lunchVote/example/render', function(req, res, next) {
    LunchVote.render('index', {
      package: 'lunch-vote'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
<<<<<<< HEAD

  app.get('/lunchVote/list', function(req, res, next) {
    var list = ['a', 'b', 'c'];
    console.log(list);
    res.send(list);
  });
=======
>>>>>>> origin/master
};
