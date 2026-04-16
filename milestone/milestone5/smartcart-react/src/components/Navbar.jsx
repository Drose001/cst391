import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/products">
          SmartCart Grocery Planner
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto">
            <Link className="nav-link" to="/products">
              Product List
            </Link>
            <Link className="navbar-brand fw-bold" to="/products">
                 🛒 SmartCart 💖
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar