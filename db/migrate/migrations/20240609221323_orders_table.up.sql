CREATE TABLE
    IF NOT EXISTS orders (
        id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
        client_id INTEGER,
        total REAL NOT NULL,
        status TEXT NOT NULL,
        payment_method TEXT NOT NULL,
        createdAt TEXT NOT NULL,
        FOREIGN KEY (client_id) REFERENCES clients (id) ON DELETE CASCADE ON UPDATE NO ACTION
    );