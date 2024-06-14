package main

import (
	"context"
	"fmt"
	"log"

	"github.com/khaym03/limpex/api"
	"github.com/khaym03/limpex/db"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
	log.Println(ctx)
	db, err := db.NewSQLiteStorage()
	if err != nil {
		log.Fatal(err)
	}

	server := api.NewAPIServer(":2003", db)
	server.Run()
}

// Greet returns a greeting for the given name
func (a *App) Greet(name string) string {
	return fmt.Sprintf("Hello %s, It's show time!", name)
}
