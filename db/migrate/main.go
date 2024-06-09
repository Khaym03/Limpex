package main

import (
	"log"
	"os"

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
		"file://db/migrate/migrations",
		"sqlite3",
		driver,
	)

	if err != nil {
		log.Fatal(err)
	}

	v, d, _ := m.Version()
	log.Printf("Version: %d, dirty: %v", v, d)

	cmd := os.Args[len(os.Args)-1]
	if cmd == "up" {
		if err := m.Up(); err != nil && err != migrate.ErrNoChange {
			log.Fatal(err)
		}
	}
	if cmd == "down" {
		if err := m.Down(); err != nil && err != migrate.ErrNoChange {
			log.Fatal(err)
		}
	}
}
