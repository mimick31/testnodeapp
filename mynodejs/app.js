const { Client } = require('pg');

// Configurer les variables d'environnement pour PostgreSQL
const client = new Client({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Fonction pour interroger les données de la table 'users'
async function queryUsers() {
  try {
    // Connexion à la base de données
    await client.connect();
    console.log('Connected to PostgreSQL');

    // Exécuter la requête pour récupérer les utilisateurs
    const res = await client.query('SELECT * FROM users');
    console.log('Users:', res.rows);

    // Retourner les données des utilisateurs
    return res.rows;
  } catch (err) {
    console.error('Error querying PostgreSQL', err);
  } finally {
    // Fermer la connexion à la base de données
    await client.end();
  }
}

// Démarrer la requête
queryUsers().then((users) => {
  console.log('Retrieved users from the database:', users);
}).catch(err => {
  console.error('Error retrieving users:', err);
});