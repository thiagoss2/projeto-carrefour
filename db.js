

const arredondamento = Math.round(12.5);





async function connect() {
    if (global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const mysql = require("mysql2/promise");// retorna um objeto para acessar o banco de dados
    const connection =
              await mysql.createConnection("mysql://root:luiztools@localhost:3306/crud"); 

              // a variavel connection não recebera o retorno do metodo createConnection enquando a promessa não
            // for resolvida 

            // implementação const [variavel] await connection.query("SELECT * FROM users");                

      connection.

    console.log("Conectou no MySQL!");

    global.connection = connection;
    return connection;

}


async function selectCustomers(){
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM clientes;');
    return rows;
}

module.exports = {selectCustomers}