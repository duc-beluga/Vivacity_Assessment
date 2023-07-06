import { Pool } from 'pg';

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "awesome_applicant",
    password: "192",
    port: 5432,
});

export default pool;
