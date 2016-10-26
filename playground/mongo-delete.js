//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');


  MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
    if (err){
      return ('Unable to connect to MongoDB server');
    }
    console.log('Connect to MongoDb server');

  db.collection('Todos').deleteMany({text: 'Eat lunch'}).then ((result) => {
    console.log(result);
  });

  db.collection('Todos').deleteOne({text: 'Eat lunch'}).then ((result) => {
    console.log(result);
  });

  db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    console.log(result);
  }, (err) => {
    console.log(err)
  });

  db.collection('Users').deleteMany({name: 'Edo'}).then ( (result) => {
    console.log(result);
  }, (err) => {
    console.log(err);
  });

  db.collection('Users').findOneAndDelete({_id:new ObjectID('5810b3bc1e8f482960c98866')}).then( (result) => {
    console.log(JSON.stringify(result,undefined,2));
  }, (err) => {
    console.log(err);
  });


});
