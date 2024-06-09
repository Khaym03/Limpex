package api

import (
	"database/sql"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/compress"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

type APIServer struct {
	addr string
	db   *sql.DB
}

func NewAPIServer(addr string, db *sql.DB) *APIServer {
	return &APIServer{
		addr: addr,
		db:   db,
	}
}

func (s *APIServer) Run() {
	app := fiber.New()

	api := app.Group("api")
	v1 := api.Group("v1")

	v1.Get("/p", func(c *fiber.Ctx) error { return nil })

	app.Use(cors.New(), compress.New(compress.Config{
		Level: compress.LevelBestSpeed,
	}))

	app.Listen(s.addr)
}
