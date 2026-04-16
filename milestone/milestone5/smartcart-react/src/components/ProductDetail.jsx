import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getProductById } from '../services/productService'

function ProductDetail() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    const loadProduct = async () => {
      try {
        setLoading(true)
        setErrorMessage('')
        const response = await getProductById(id)
        setProduct(response.data)
      } catch (error) {
        console.error('Error loading product:', error)
        setErrorMessage('Failed to load product.')
      } finally {
        setLoading(false)
      }
    }

    loadProduct()
  }, [id])

  // 🎯 Optional dynamic image based on category
  const getImage = (category) => {
  if (!category) return 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80'

  switch (category.toLowerCase()) {
    case 'dairy':
      return 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1200&q=80'

    case 'produce':
      return 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=1200&q=80'

    case 'bakery':
      return 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=1200&q=80'

    case 'snacks':
      return 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1200&q=80'

    case 'beverages':
      return 'https://images.unsplash.com/photo-1665359045452-bfa257a2a6bf?auto=format&fit=crop&w=1200&q=80'

    case 'frozen':
      return 'https://images.unsplash.com/photo-1651383140368-9b3ee59c2981?auto=format&fit=crop&w=1200&q=80'

    case 'meat':
      return 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=1200&q=80'

    case 'household':
      return 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80'

    default:
      return 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80'
  }
}

  if (loading) {
    return <div className="alert alert-info">Loading product...</div>
  }

  if (errorMessage) {
    return <div className="alert alert-danger">{errorMessage}</div>
  }

  if (!product) {
    return <div className="alert alert-warning">Product not found.</div>
  }

  return (
    <div className="card shadow-lg border-0">
      <div className="card-body p-4">

        {/* 🖼️ IMAGE */}
        <img
          src={getImage(product.category)}
          alt="Product"
          className="img-fluid rounded-4 mb-4 shadow-sm"
          style={{ maxHeight: '250px', width: '100%', objectFit: 'cover' }}
        />

        {/* 🐄 TITLE */}
        <h2 className="card-title mb-3">🐄 {product.name}</h2>

        {/* 📋 DETAILS */}
        <p><strong>ID:</strong> {product.id}</p>
        <p><strong>Category:</strong> {product.category}</p>
        <p><strong>Quantity:</strong> {product.quantity}</p>
        <p><strong>Price:</strong> ${Number(product.price).toFixed(2)}</p>
        <p><strong>Store:</strong> {product.store_name}</p>

        <p>
          <strong>Status:</strong>{' '}
          <span className={`badge ${product.purchased ? 'bg-success' : 'bg-secondary'}`}>
            {product.purchased ? 'Purchased' : 'Pending'}
          </span>
        </p>

        {/* 🔘 BUTTONS */}
        <div className="mt-4">
          <Link to="/products" className="btn btn-secondary me-2">
            ← Back
          </Link>
          <Link to={`/products/edit/${product.id}`} className="btn btn-outline-warning">
            ✏️ Edit
          </Link>
        </div>

      </div>
    </div>
  )
}

export default ProductDetail