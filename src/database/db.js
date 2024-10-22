import postgres from "postgres";

const db = postgres('postgres://postgres:46422278As@localhost:5432/agendai_db', {
    host:'localhost',
    port:5433,
    database:'agendai_database',
    username:'postgres',
    password:'46422278As'
});

export default db;