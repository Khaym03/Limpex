package product

import (
	"log"
	"strconv"

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
	var pp types.ProductPayload
	if err := c.BodyParser(&pp); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Cannot parse JSON the product",
		})
	}

	err := h.store.CreateProduct(pp)
	if err != nil {
		log.Fatal(err)
	}

	return c.SendStatus(fiber.StatusCreated)
}

func (h *Handler) ListProducts(c *fiber.Ctx) error {
	list, err := h.store.ListProducts()
	if err != nil {
		log.Fatal(err)
	}

	if list == nil {
		return c.Status(fiber.StatusOK).JSON([]any{})
	}

	return c.Status(fiber.StatusOK).JSON(list)
}

func (h *Handler) DeleteProduct(c *fiber.Ctx) error {
	p := c.Params("id")
	// try convert it into uint32
	uintVal, err := strconv.ParseUint(p, 10, 32)
	if err != nil {
		log.Fatal(err)
	}

	id := uint32(uintVal)

	err = h.store.DeleteProductById(id)
	if err != nil {
		log.Fatal(err)
	}

	return c.SendStatus(fiber.StatusOK)
}

func (h *Handler) UpdateProduct(c *fiber.Ctx) error {
	var p types.Product
	if err := c.BodyParser(&p); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Cannot parse JSON the product",
		})
	}

	if p.Id == 0 {
		return c.SendStatus(fiber.StatusBadRequest)
	}

	err := h.store.UpdateProduct(&p)
	if err != nil {
		log.Fatal(err)
	}

	return c.SendStatus(fiber.StatusOK)
}
