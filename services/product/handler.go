package product

import (
	"fmt"

	"github.com/gofiber/fiber/v2"
	"github.com/khaym03/limpex/types"
)

type Handler struct {
	store types.ProductStore
}

func NewHandler(store types.ProductStore) *Handler {
	return &Handler{
		store: store,
	}
}

func (h *Handler) CreateProduct(c *fiber.Ctx) error {
	body := c.Body()

	fmt.Println(body)

	return nil
}

func (h *Handler) Hi(c *fiber.Ctx) error {

	c.Status(200).JSON("hi")

	return nil
}
