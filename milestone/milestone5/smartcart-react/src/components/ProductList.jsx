import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllProducts, deleteProduct } from '../services/productService'

function ProductList() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')

  const loadProducts = async () => {
    try {
      setLoading(true)
      setErrorMessage('')
      const response = await getAllProducts()
      setProducts(response.data)
    } catch (error) {
      console.error('Error loading products:', error)
      setErrorMessage('Failed to load products.')
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this product?')
    if (!confirmDelete) return

    try {
      await deleteProduct(id)
      await loadProducts()
    } catch (error) {
      console.error('Error deleting product:', error)
      setErrorMessage('Failed to delete product.')
    }
  }

  useEffect(() => {
    loadProducts()
  }, [])

  return (
    <div className="card shadow-lg border-0">
      <div className="card-body p-4">
        <div className="mb-4">
          <img
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80"
            alt="Fresh groceries"
            className="img-fluid rounded-4 shadow-sm mb-3"
            style={{ maxHeight: '250px', width: '100%', objectFit: 'cover' }}
          />

          <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
            <div>
              <h2 className="mb-1">🌸 Grocery Dashboard</h2>
              <p className="text-muted mb-0">Manage your shopping list in one pretty place.</p>
              <small className="text-muted">Total Items: {products.length}</small>
            </div>

            <Link to="/products/new" className="btn btn-success px-4">
              + Add Item
            </Link>
          </div>
        </div>

        {loading && <div className="alert alert-info">Loading products...</div>}

        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

        {!loading && !errorMessage && (
          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Store</th>
                  <th>Purchased</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.length > 0 ? (
                  products.map((product) => (
                    <tr key={product.id}>
                      <td>{product.id}</td>
                      <td>{product.name}</td>
                      <td>{product.category}</td>
                      <td>{product.quantity}</td>
                      <td>${Number(product.price).toFixed(2)}</td>
                      <td>{product.store_name}</td>
                      <td>
                        <span
                          className={`badge ${
                            product.purchased ? 'bg-success' : 'bg-secondary'
                          }`}
                        >
                          {product.purchased ? 'Purchased' : 'Pending'}
                        </span>
                      </td>
                      <td>
                        <Link
                          to={`/products/${product.id}`}
                          className="btn btn-info btn-sm me-2"
                        >
                          👁 View
                        </Link>
                        <Link
                          to={`/products/edit/${product.id}`}
                          className="btn btn-outline-warning btn-sm me-2"
                        >
                          ✏️ Edit
                        </Link>
                        <button
                          onClick={() => handleDelete(product.id)}
                          className="btn btn-outline-danger btn-sm"
                        >
                          🗑 Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" className="text-center py-4">
                      No products found 😢 Add your first item!
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductList