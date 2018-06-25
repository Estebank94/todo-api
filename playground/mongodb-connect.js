// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if(err){
		return console.log('Unable to connect to MongoDB srver')
	}
	console.log('Connected to MongoDB server');

	const db = client.db('TodoApp');

	// db.collection('Todos').insertOne({
	// 	text: 'Something to do',
	// 	completed: false
	// }, (err, result) => {
	// 	if(err) {
	// 		return console.log('Unable to insert todo', err);
	// 	}

	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// });


	db.collection('Users').insertOne({
		name: 'Pepe',
		age: 28,
		location: 'Buenos Aires'
	}, (err, result) => {
		if(err) {
			return console.log('Error', err);
		}
		console.log(JSON.stringify(result.ops, undefined, 2));
	});


	// db.createCollection("Productoo", function(err, result) {
 //        if (err) throw err;
 //        console.log("Collection is created!");
 //        // close the connection to db when you are done with it
 //        // db.close();
 //    });

	// client.close();
});