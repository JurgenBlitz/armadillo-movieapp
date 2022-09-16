var sqlite3 = require('sqlite3').verbose()
var md5 = require('md5')

const DBSOURCE = "db.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the SQLite database.')
        db.run(`CREATE TABLE user (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            firstname text,
            surname text,
            password text,
            email text UNIQUE, 
            CONSTRAINT email_unique UNIQUE (email)
            )`,
        (err) => {
            if (err) {
                // Table already created
            }else{
                // Table just created, creating an initial user
                var insert = 'INSERT INTO user (firstname, surname, email, password) VALUES (?,?,?,?)'
                db.run(insert, ["jurgen","blitz","jurgen@example.com",md5("Ab123456")])
            }
        });
    }
});


module.exports = db;