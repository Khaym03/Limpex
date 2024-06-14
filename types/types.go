package types

// import "github.com/gofiber/fiber/v2"

type Product struct {
	ProductId uint32
	Name      string
	Price     float64
	Color     string
}

type ProductPayload struct {
	Name  string
	Price float64
	Color string
}

type ProductStore interface {
	CreateProduct(ProductPayload) error
}
