package product

import (
	"database/sql"

	"github.com/khaym03/limpex/types"
)

type Store struct {
	db *sql.DB
}

func NewStore(db *sql.DB) *Store {
	return &Store{db: db}
}

func (s *Store) CreateProduct(pp types.ProductPayload) error {
	_, err := s.db.Exec("INSERT INTO products (name, price, color) VALUES (?, ? ,?)", pp.Name, pp.Price, pp.Color)
	if err != nil {
		return err
	}
	return nil
}
