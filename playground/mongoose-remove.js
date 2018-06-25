var {ObjectID} = require('mongodb');

var {mongoose} = require('./../server/db/mongoose');
var {Todo} = require('./../server/models/todo');


Todo.remove({}).then((result) => {
	console.log(result);
});

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

// Todo.findOneAndRemove(_id: '5b30f6f321b2958342932319').then((todo) => {
// 	console.log(todo);
// });

Todo.findByIdAndRemove('5b3178210934cc1400167b6c').then((todo) => {
	console.log(todo);
});