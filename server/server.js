const express = require('express')
var cors = require('cors')
const app = express()
const port = 3001

const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'sampledatabase'
})
connection.connect()
app.use(cors())
app.get('/', (req, res) => {
    connection.query('SELECT * FROM sampledatabase.persons sp where sp.personID = 101;', (err, rows, fields) => {
        if (err) throw err
    
        res.send(rows[0])
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})