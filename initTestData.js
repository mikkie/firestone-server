db.users.drop();
db.createCollection('users');
db.users.insert({
   username: "aqua",
   password: "123456"
});
