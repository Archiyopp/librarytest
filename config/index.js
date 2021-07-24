let connectionString =
  'mongodb+srv://archimen:jatontos123@cluster0.sqnur.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
connectionString = process.env.MONGODB_URI || connectionString;
module.exports = connectionString;
