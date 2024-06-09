package main

import (
	"log"

	"github.com/golang-migrate/migrate/v4"
	"github.com/golang-migrate/migrate/v4/database/sqlite3"

	_ "github.com/golang-migrate/migrate/v4/source/file"
	"github.com/khaym03/limpex/db"
)

func main() {
	db, err := db.NewSQLiteStorage()
	if err != nil {
		log.Fatal(err)
	}

	driver, err := sqlite3.WithInstance(db, &sqlite3.Config{})
	if err != nil {
		log.Fatal(err)
	}

	// Create a new migration instance
	m, err := migrate.NewWithDatabaseInstance(
		"/migrate/migrations",
		"sqlite3",
		driver,
	)

	if err != nil {
		log.Fatal(err)
	}

	// Apply migrations
	if err := m.Up(); err != nil && err != migrate.ErrNoChange {
		log.Fatal(err)
	}

	log.Println("Migraciones aplicadas exitosamente.")
}
