var {ObjectID} = require('mongodb');

var {mongoose} = require('./../server/db/mongoose');
var {Todo} = require('./../server/models/todo');


var id = '5b305f306468740169d72ca1';
if(!ObjectID.isValid(id)){
	console.log('ID not valid');
}

// Todo.find({
// 	_id: id //con mongoose no hace falta que lo convierta a objectId
// }).then((todos) => {
// 	console.log('Todos',todos);
// });

// Todo.findOne({
// 	_id: id //con mongoose no hace falta que lo convierta a objectId
// }).then((todo) => {
// 	console.log('Todo',todo);
// });

Todo.findById(id).then((todo) => {
	if(!todo){
		return console.log('ID not found');
	}

	console.log('Todo',todo);
}).catch((e) => console.log(e));