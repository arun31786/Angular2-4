var obj = ['arun', 'kumar'];

var newObj = obj;

obj.push = '33';

console.log(newObj);

var immutableObj = [...obj];
obj.push = '33';
console.log(immutableObj);
