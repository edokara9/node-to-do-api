//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
    if (err){
      return ('Unable to connect to MongoDB server');
    }
    console.log('Connect to MongoDb server');

    // db.collection('Todos').findOneAndUpdate({
    //   _id : new ObjectID('58110b3805f2335ffe9c7d37')
    // }, {
    //   $set: {
    //     completed: true
    //   }
    // }, {
    //   returnOriginal: false
    // }).then ((result) => {
    //   console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
      _id : new ObjectID('5810b3d9d0dc840b28735d86')
    },{
      $set: {
        name: 'Edo'
      },
      $inc:{
        age: 1
      }
    },{
      returnOriginal: false
    }).then((result) => {
      console.log(result);
    });






});

//5810b3d9d0dc840b28735d86
