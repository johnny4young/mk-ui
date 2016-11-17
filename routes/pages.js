
require('rootpath')()

var docBuilder = require('src/node/doc-builder');

module.exports = function ( express, app ) {

  //
  // home
  // ---------------------------------
  app.get('/', function (req, res) {

      docBuilder.parse('js/core.js', function (data) {
          data.title = 'Core';
          res.render('index', data);
      });
  });

  app.get('/loader', function (req, res) {

      docBuilder.parse('js/loader.js', function (data) {
          data.title = 'Loader';
          res.render('loader', data);
      });
  });

  app.get('/selectmenu', function (req, res) {

    docBuilder.parse('js/selectmenu.js', function (data) {
        data.title = 'Selectmenu';
        res.render('selectmenu', data);
    });
  });

  app.get('/autocomplete', function (req, res) {

    docBuilder.parse('js/autocomplete.js', function (data) {
        data.title = 'Autocomplete';
        res.render('autocomplete', data);
    });
  });

  app.get('/tooltip', function (req, res) {

    docBuilder.parse('js/tooltip.js', function (data) {
        data.title = 'Tooltip';
        res.render('tooltip', data);
    });
  });

  app.get('/dialog', function (req, res) {

      docBuilder.parse('js/dialog.js', function (data) {
          data.title = 'Dialog';
          res.render('dialog', data);
      });
  });

  // testing ajax functionality

  app.get('/ajax', function (req, res) {
      res.write(JSON.stringify({
          "status": 200,
          "message": "successful GET"
      }));
      res.end();
  });

  app.post('/ajax', function (req, res) {
     res.write(JSON.stringify({
         "status": 200,
         "message": "successful POST"
     }));
     res.end();
  });

};
