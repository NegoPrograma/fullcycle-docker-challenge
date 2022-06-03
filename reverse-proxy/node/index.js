const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'mysql_fullcycle',
    user: 'root',
    password: 'root',
    database:'nodedb'
};
const mysql = require('mysql')

function createPeopleTable(){
    const connection = mysql.createConnection(config)
    let   sql        = `CREATE TABLE IF NOT EXISTS people(
                        id int NOT NULL AUTO_INCREMENT,
                        name varchar(255), 
                        PRIMARY KEY (id) )`;
    connection.query(sql);
    connection.end();
}
createPeopleTable();



app.get('/:name', (req,res) => {
    

    const connection = mysql.createConnection(config)
    const name       = req.params.name;
    let   sql        = `INSERT INTO people(name) values('${name}')`;
    connection.query(sql)
    sql = "SELECT * FROM people";
    
    connection.query(sql , (err, results, fields) => res.send('<h1>Full Cycle</h1>' + results.reduce((aggregator,person) => aggregator + " " + person.name,"")));
    connection.end();
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})