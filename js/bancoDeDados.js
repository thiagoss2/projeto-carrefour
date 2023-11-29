

let connection = null;


let newConnection =
   criaConexao(connection);

let dados = realizaBusca('select id , nome , cpf , imagem   from usuario'
   , newConnection);



console.log(dados)


function criaConexao(connection) {

   // get the client
   const mysql = require('mysql2');

   // create the connection to database
   connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      database: 'teste',
      password: 'root'
   });

   return connection;
}

function realizaBusca(busca, connection) {
   // simple query
  let resultados =  connection.query(
      busca,
      function (err, results, fields) {
        console.log(results)
          // results contains rows returned by server
         //console.log(fields); // fields contains extra meta data about results, if available
      }
   );
       console.log(resultados);
  
      
}npm install -g nodemon

