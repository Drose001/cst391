import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import ProductForm from './components/ProductForm'
import ProductDetail from './components/ProductDetail'

function App() {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Navigate to="/products" replace />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/new" element={<ProductForm />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/products/edit/:id" element={<ProductForm />} />
        </Routes>
      </div>
    </>
  )
}

export default App