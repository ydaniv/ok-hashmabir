define([
  // Application.
  "app"
],

function(app) {

  // Defining the application router, you can attach sub routers here.
  var Router = Backbone.Router.extend({
    routes: {
      "": "index"
    },

    index: function() {
var k33g = new Gh3.User("yaninelbi")
  , userInfos = $("#user");

  k33g.fetch(function (err, resUser){

    if(err) {
      throw "outch ..."
    }
    
    console.log(k33g, resUser);

    _.each(_.keys(resUser), function (prop) {
      userInfos.append(
        $('<li>').append(prop+" : "+resUser[prop])
      );
    });

  });
    }
  });

  return Router;

});
