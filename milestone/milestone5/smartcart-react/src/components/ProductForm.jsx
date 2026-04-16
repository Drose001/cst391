import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  createProduct,
  getProductById,
  updateProduct
} from '../services/productService'

function ProductForm() {
  const [product, setProduct] = useState({
    name: '',
    category: '',
    quantity: '',
    price: '',
    store_name: '',
    purchased: false
  })

  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate()
  const { id } = useParams()
  const isEditMode = Boolean(id)

  useEffect(() => {
    const loadProduct = async () => {
      if (!isEditMode) return

      try {
        setErrorMessage('')
        const response = await getProductById(id)
        setProduct({
          name: response.data.name ?? '',
          category: response.data.category ?? '',
          quantity: response.data.quantity ?? '',
          price: response.data.price ?? '',
          store_name: response.data.store_name ?? '',
          purchased: response.data.purchased ?? false
        })
      } catch (error) {
        console.error('Error loading product:', error)
        setErrorMessage('Failed to load product for editing.')
      }
    }

    loadProduct()
  }, [id, isEditMode])

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target

    setProduct((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const formattedProduct = {
      name: product.name,
      category: product.category,
      quantity: Number(product.quantity),
      price: Number(product.price),
      store_name: product.store_name,
      purchased: product.purchased
    }

    try {
      setErrorMessage('')

      if (isEditMode) {
        await updateProduct(id, formattedProduct)
      } else {
        await createProduct(formattedProduct)
      }

      navigate('/products')
    } catch (error) {
      console.error('Error saving product:', error)
      setErrorMessage('Failed to save product. Check the API and required fields.')
    }
  }

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h2>{isEditMode ? 'Edit Product' : 'Add Product'}</h2>

        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={product.name}
              onChange={handleChange}
              required
            />
          </div>

          <select
  name="category"
  className="form-control"
  value={product.category}
  onChange={handleChange}
  required
>
  <option value="">Select Category</option>
  <option value="Dairy">🥛 Dairy</option>
  <option value="Produce">🥦 Produce</option>
  <option value="Bakery">🥐 Bakery</option>
  <option value="Snacks">🍪 Snacks</option>
  <option value="Beverages">🥤 Beverages</option>
  <option value="Frozen">❄️ Frozen</option>
  <option value="Meat">🍖 Meat</option>
  <option value="Household">🧼 Household</option>
</select>

          <div className="mb-3">
            <label className="form-label">Quantity</label>
            <input
              type="number"
              name="quantity"
              className="form-control"
              value={product.quantity}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Price</label>
            <input
              type="number"
              step="0.01"
              name="price"
              className="form-control"
              value={product.price}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Store Name</label>
            <input
              type="text"
              name="store_name"
              className="form-control"
              value={product.store_name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-check mb-3">
            <input
              type="checkbox"
              name="purchased"
              className="form-check-input"
              checked={product.purchased}
              onChange={handleChange}
              id="purchasedCheck"
            />
            <label className="form-check-label" htmlFor="purchasedCheck">
              Purchased
            </label>
          </div>

          <button type="submit" className="btn btn-success me-2">
            {isEditMode ? 'Update Product' : 'Create Product'}
          </button>

          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => navigate('/products')}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  )
}

export default ProductForm