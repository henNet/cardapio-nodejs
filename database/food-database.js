import pg from "pg";
import env from "dotenv";
const { Pool } = pg;

/* carrega o dotenv, para que a variável 
   com a string de conexão vá parar na memória do programa. */
env.config();

// const connectionString = 'postgresql://postgres:123@localhost:5432/foods'

/* ==> Conexão com a Base de Dados: */
// const pool = new Pool({
//   connectionString: process.env.CONNECTION_STRING,
// });

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
})

pool.on("connect", () => {
  console.log("Base de Dados conectado com sucesso!");
});

export default pool;
