package types

// import "github.com/gofiber/fiber/v2"

type Product struct {
	Id    uint32  `json:"id"`
	Name  string  `json:"name"`
	Price float64 `json:"price"`
	Color string  `json:"color"`
}

type ProductPayload struct {
	Name  string  `json:"name"`
	Price float64 `json:"price"`
	Color string  `json:"color"`
}

type ProductStore interface {
	CreateProduct(ProductPayload) error
	ListProducts() (*[]Product, error)
	DeleteProductById(uint32) error
	UpdateProduct(p *Product) error
}
