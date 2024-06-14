package api

import (
	"database/sql"

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

	api := app.Group("api")
	v1 := api.Group("v1")

	productStore := product.NewStore(s.db)
	productHanler := product.NewHandler(productStore)

	v1.Post("/product", productHanler.CreateProduct)
	v1.Get("/products", productHanler.ListProducts)
	v1.Delete("/product/:id", productHanler.DeleteProduct)
	v1.Put("/product", productHanler.UpdateProduct)

	app.Use(cors.New(), compress.New(compress.Config{
		Level: compress.LevelBestSpeed,
	}))

	app.Listen(s.addr)

}
