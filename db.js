var mysql = require('mysql2');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "App"
});




function retornaDadosDoBanco(query) {

    let dados = [];

    con.connect(err => {


        if (err) throw err;

        con.query(query, (err, results, fields) => {
            if (err) throw err;

            dados = results;
            console.log(dados)

        })
    });


    return dados;

}


let dados = retornaDadosDoBanco('select * from usuario');

console.log()


