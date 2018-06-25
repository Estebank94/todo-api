// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if(err){
		return console.log('Unable to connect to MongoDB srver')
	}
	console.log('Connected to MongoDB server');

	const db = client.db('TodoApp');

// deleteMany
	// db.collection('Todos').deleteMany({text: 'Walk the dog'}).then((result) => {
	// 	console.log(result);
	// });
// deleteOne
	// db.collection('Todos').deleteMany({text: 'Eat Launch'}).then((result) => {
	// 	console.log(result);
	// });

// findOneAndDelete
	db.collection('Todos').findOneAndDelete(new ObjectID('5b2fe1ec959fee1dcd4817b4')).then((result) => {
		console.log(result);
	});

	// db.collection('Users').find({name: 'Pepe'}).toArray().then((docs) => {
	// 	console.log('Users');
	// 	console.log(JSON.stringify(docs, undefined, 2));
	// }, (err) => {
	// 	console.log('Unable to fetch users', err);
	// });

	// client.close();
});