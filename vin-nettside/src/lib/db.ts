import mysql from 'mysql2/promise';

// Opprett en databaseforbindelse med en connection pool
const pool = mysql.createPool({
  host: 'localhost', // Endre til riktig host
  user: 'your-username', // Endre til riktig brukernavn
  password: 'mittpassord123', // Endre til riktig passord
  database: 'login', // Endre til riktig database
});

// Eksporter en funksjon som returnerer poolen
export const getDb = async () => pool;