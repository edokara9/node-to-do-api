const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
// var id = '6811aafc75089a197097a3f6';
//
// if (!ObjectID.isValid(id)){
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos',todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo',todo);
// });

// Todo.findById(id).then((todo) => {
// if (!todo){
//   return console.log('Id not found');
// }
//   console.log('Todo by Id',todo);
// }).catch((e) => console.log(e));

//5811aafc75089a197097a3f5
var userId = '5811aafc75089a197097a3f5';

User.findById(userId).then((user) => {
  if (!user){
    return console.log('userId not found');
  }
  console.log('user by Id',user);
}).catch((e) => console.log(e));
