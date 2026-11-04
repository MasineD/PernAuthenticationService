import { Pool} from "pg";       //This allows connecting Node.js with PostgreSQL database
import dotenv from "dotenv";    //To allow loading environment variables from a .env file, which is useful for storing sensitive information like database credentials and API keys.

dotenv.config();

const pool = new Pool({
    host: process.env.DB_HOST,       //Database host, typically 'localhost' for local development
    port: process.env.DB_PORT,       //Database port, default is 5432 for PostgreSQL
    user: process.env.DB_USER,       //Database user
    password: process.env.DB_PASSWORD, //Database password
    database: process.env.DB_NAME    //Database name
});

pool.on("connect", (err) => {      //Event listener for the 'connect' event, which is emitted when a connection to the database is established. It takes a callback function that receives an error object if the connection fails.
    if (err) {
        console.error("Error connecting to the database:", err);
    } else {        // If the connection is successful, log a success message
        console.log("Connected to the database successfully!");
    }
});
export default pool;