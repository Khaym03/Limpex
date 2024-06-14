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

func (s *Store) ListProducts() (*[]types.Product, error) {
	rows, err := s.db.Query("SELECT * FROM products")
	if err != nil {
		return nil, err
	}

	var products []types.Product
	for rows.Next() {
		var p types.Product
		err := rows.Scan(
			&p.Id,
			&p.Name,
			&p.Price,
			&p.Color,
		)
		if err != nil {
			return nil, err
		}
		products = append(products, p)
	}
	defer rows.Close()

	if err := rows.Err(); err != nil {
		return nil, err
	}
	return &products, nil
}

func (s *Store) DeleteProductById(id uint32) error {
	stmt, err := s.db.Prepare("DELETE FROM products WHERE id =?")
	if err != nil {
		return err
	}

	_, err = stmt.Exec(id)
	if err != nil {
		return err
	}

	return nil
}

func (s *Store) UpdateProduct(p *types.Product) error {
	query := `UPDATE products SET name =?, price =?, color =? WHERE id =?`

	_, err := s.db.Exec(query, p.Name, p.Price, p.Color, p.Id)
	if err != nil {
		return err
	}

	return nil
}
