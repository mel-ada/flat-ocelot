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

  app.put('/todo/:index', urlencodedParser, function (req, res) {
    var updatedTodo = req.body
    var index = parseInt(req.params.index);

    data[index] = updatedTodo

    res.json(data);
  });

  app.delete('/todo/:item', function (req, res) {
    data = data.filter(function (todo) {
      console.log(todo);
      return todo.item.replace(/ /g, '-') !== req.params.item;
    });

    res.json(data);
  });

};
