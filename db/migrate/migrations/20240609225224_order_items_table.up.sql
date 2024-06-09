CREATE TABLE
    IF NOT EXISTS order_items (
        order_item_id INTEGER PRIMARY KEY AUTOINCREMENT,
        order_id INTEGER,
        product_id INTEGER,
        quantity REAL NOT NULL,
        price REAL NOT NULL,
        FOREIGN KEY (order_id) REFERENCES orders (order_id) ON DELETE CASCADE ON UPDATE NO ACTION,
        FOREIGN KEY (product_id) REFERENCES products (product_id) ON DELETE CASCADE ON UPDATE NO ACTION
    );