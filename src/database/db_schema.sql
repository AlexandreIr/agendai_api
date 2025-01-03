CREATE TABLE users (
    id_user SERIAL PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(100),
    password VARCHAR(100)
);

CREATE TABLE admins (
    id_admin SERIAL PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(100),
    password VARCHAR(100)
);

CREATE TABLE doctors (
    id_doctor SERIAL PRIMARY KEY,
    name VARCHAR(50),
    specialty VARCHAR(50),
    icon VARCHAR(10)
);

CREATE TABLE services (
    id_service SERIAL PRIMARY KEY,
    description VARCHAR(50)
);

CREATE TABLE doctors_services (
    id_doctor_service SERIAL PRIMARY KEY,
    id_doctor INTEGER REFERENCES doctors(id_doctor),
    id_service INTEGER REFERENCES services(id_service),
    price DECIMAL(9,2)
);

CREATE TABLE appointments (
    id_appointment SERIAL PRIMARY KEY,
    id_doctor INTEGER REFERENCES doctors(id_doctor),
    id_service INTEGER REFERENCES services(id_service),
    id_user INTEGER REFERENCES users(id_user),
    booking_date DATE,
    booking_hour VARCHAR(5)
);
