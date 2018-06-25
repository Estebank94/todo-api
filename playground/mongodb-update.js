// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if(err){
		return console.log('Unable to connect to MongoDB srver')
	}
	console.log('Connected to MongoDB server');

	const db = client.db('TodoApp');


// findOneAndUpdate
	db.collection('Todos').findOneAndUpdate({
		_id: new ObjectID('5b2fe6298f908e92e3904b80')
	}, {
		$set: {
			completed: true
		} 
	}, {
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	});



	// client.close();
});