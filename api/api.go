package api

import (
	"database/sql"
	"fmt"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/compress"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/khaym03/limpex/services/product"
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

	// api := app.Group("api")
	// v1 := api.Group("v1")

	productStore := product.NewStore(s.db)
	productHanler := product.NewHandler(productStore)

	app.Post("/product", productHanler.CreateProduct)
	app.Get("/", productHanler.Hi)

	app.Use(cors.New(), compress.New(compress.Config{
		Level: compress.LevelBestSpeed,
	}))

	fmt.Println("Starting Fiber server...")
	app.Listen(s.addr)
	fmt.Println("xxxx Fiber server...")
}
