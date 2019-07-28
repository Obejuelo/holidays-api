// ============================
//  PORT
// ============================
process.env.PORT = process.env.PORT || 5000


// ============================
//  ENVIROMENT
// ============================
process.env.NODE_ENV = process.env.NODE_ENV ||'dev'

// ============================
//  DB
// ============================
let urlDB
if(process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/holidays'
} else {
    urlDB = process.env.MLABDB
}

process.env.URLDB = urlDB