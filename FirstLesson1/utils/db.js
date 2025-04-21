const { MongoClient } = require('mongodb');

const constr = "mongodb://localhost:27017/gamedev";
let conn;
const dbconnect = (cb) => {
    MongoClient.connect(constr)
    .then((client) => {
        conn = client.db();
        cb()
    })
    .catch((err) => {
        console.log(err);
        cb(err);
    });
}
const getDb = () => {
    if (conn) {
        return conn;
    } else {
        throw "No connection to database";
    }
}
module.exports = {
    dbconnect,
    getDb
}