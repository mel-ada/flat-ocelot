var bodyParser = require('body-parser');

var data = [{ item: 'get milk' }, { item: 'walk dog' }, { item: 'play piano' }];

var urlencodedParser = bodyParser.urlencoded({ extended: false });
module.exports = function (app) {

  app.get('/todo', function (req, res) {
    res.render('todo', { todos: data });
  });

  app.post('/todo', urlencodedParser, function (req, res) {
    data.push(req.body);
    res.json(data);
  });

  app.post('/todo/:item', function (request, response) {
    data = data.filter(function (todo) {
      console.log(todo);
      return todo.item.replace(/ /g, '-') !== req.params.item;
    });

    res.json(data);
  });

  app.delete('/todo/:item', function (req, res) {
    data = data.filter(function (todo) {
      console.log(todo);
      return todo.item.replace(/ /g, '-') !== req.params.item;
    });

    res.json(data);
  });

  /*app.update('/todo/:item', function(req, res) {

    //var itemPos = ...
    //var data[itemPos] =
  })*/

};
