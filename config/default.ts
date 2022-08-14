const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

module.exports = {
  port: 3000,
  dbUri: `mongodb://${dbUser}:${dbPassword}@ac-t4oigi9-shard-00-00.soz6jaf.mongodb.net:27017,ac-t4oigi9-shard-00-01.soz6jaf.mongodb.net:27017,ac-t4oigi9-shard-00-02.soz6jaf.mongodb.net:27017/?ssl=true&replicaSet=atlas-zqdbmq-shard-0&authSource=admin&retryWrites=true&w=majority`,
  env: "development"
};
