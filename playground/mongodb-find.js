//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if (err){
    return ('Unable to connect to MongoDB server');
  }
  console.log('Connect to MongoDb server');

  // db.collection('Todos').find(
  //   {_id: new ObjectID('5810b237137846178045475b')
  // }).toArray().then( (docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // }, (err) => {
  //   console.log('Unable to fetch todos',err);
  // });

  //
  // db.collection('Todos').find().count().then( (count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch nodes',err);
  // });

  db.collection('Users').find({
    name: 'Edo'
  }).toArray().then((docs) => {
    console.log(JSON.stringify(docs,undefined,2));
  }, (err) => {
    console.log('Unable to fetch users',err);
  });



  db.close();
});
