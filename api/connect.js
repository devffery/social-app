import postgres from "postgres";

export const db = postgres({
  host: 'localhost', // PostgreSQL server address
  port: 5432,        // PostgreSQL server port
  database: 'social', // PostgreSQL database name
  username: 'devffery', // PostgreSQL username
  password: 'password'  // PostgreSQL password
});

async function testConnection() {
  try {
    const result = await db`SELECT 1 AS connected`;
    console.log('Connected to PostgreSQL:', result);
  } catch (error) {
    console.error('Connection error:', error);
  }
}

testConnection();
