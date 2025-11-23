import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ProductCard from './components/ProductCard';
import Loading from './components/Loading';
import ErrorDisplay from './components/ErrorDisplay';
import Pagination from './components/Pagination';

// ==================== MAIN APP ====================

export default function App() {
  // State management
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);
  const [totalProducts, setTotalProducts] = React.useState(0);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedCategory, setSelectedCategory] =
    React.useState('all');
  const [categories, setCategories] = React.useState([]);
  const [cart, setCart] = React.useState([]);

  const ITEMS_PER_PAGE = 12;

  // Fetch categories on mount
  React.useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          'https://dummyjson.com/products/categories',
        );
        const data = await response.json();
        // DummyJSON returns array of objects with slug and name
        const categoryNames = data.map((cat) =>
          typeof cat === 'string' ? cat : cat.slug,
        );
        setCategories(['all', ...categoryNames]);
      } catch (err) {
        console.error('Failed to fetch categories:', err);
      }
    };

    fetchCategories();
  }, []);

  // Fetch products based on current filters and page
  const fetchProducts = React.useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const skip = (currentPage - 1) * ITEMS_PER_PAGE;
      let url;

      // Build URL based on filters (server-side filtering)
      if (searchQuery) {
        // Search endpoint
        url = `https://dummyjson.com/products/search?q=${encodeURIComponent(
          searchQuery,
        )}&limit=${ITEMS_PER_PAGE}&skip=${skip}`;
      } else if (selectedCategory !== 'all') {
        // Category endpoint
        url = `https://dummyjson.com/products/category/${selectedCategory}?limit=${ITEMS_PER_PAGE}&skip=${skip}`;
      } else {
        // All products endpoint
        url = `https://dummyjson.com/products?limit=${ITEMS_PER_PAGE}&skip=${skip}`;
      }

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }

      const data = await response.json();
      setProducts(data.products);
      setTotalProducts(data.total);
      setTotalPages(Math.ceil(data.total / ITEMS_PER_PAGE));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [currentPage, searchQuery, selectedCategory]);

  // Fetch products when dependencies change
  React.useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // Cart functionality
  const toggleCart = (productId) => {
    setCart((prev) => {
      if (prev.includes(productId)) {
        return prev.filter((id) => id !== productId);
      } else {
        return [...prev, productId];
      }
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  // Search handler - triggers server-side search
  const handleSearch = () => {
    setSearchQuery(searchTerm);
    setSelectedCategory('all'); // Reset category when searching
    setCurrentPage(1); // Reset to first page
  };

  // Category change handler
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSearchQuery(''); // Clear search when changing category
    setSearchTerm(''); // Clear search input
    setCurrentPage(1); // Reset to first page
  };

  // Page change handler
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading) return <Loading />;
  if (error)
    return <ErrorDisplay error={error} onRetry={fetchProducts} />;

  return (
    <div style={{ minHeight: '100vh' }}>
      <Header cartCount={cart.length} />

      <main
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '40px 20px',
        }}
      >
        {/* Search and Filters */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 20,
            marginBottom: 40,
          }}
        >
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            onSearch={handleSearch}
          />

          <div
            style={{
              display: 'flex',
              gap: 15,
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <select
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
              style={{
                padding: '10px 20px',
                fontSize: 14,
                borderRadius: 8,
                border: '2px solid rgba(255,255,255,0.3)',
                backgroundColor: 'rgba(255,255,255,0.1)',
                color: 'white',
                backdropFilter: 'blur(10px)',
                cursor: 'pointer',
                outline: 'none',
              }}
            >
              {categories.map((cat) => (
                <option
                  key={cat}
                  value={cat}
                  style={{ color: 'black' }}
                >
                  {cat === 'all' ? '📁 All Categories' : `📦 ${cat}`}
                </option>
              ))}
            </select>

            {cart.length > 0 && (
              <button
                onClick={clearCart}
                style={{
                  padding: '10px 20px',
                  fontSize: 14,
                  borderRadius: 8,
                  border: 'none',
                  backgroundColor: '#ff6b6b',
                  color: 'white',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => (e.target.style.opacity = 0.8)}
                onMouseLeave={(e) => (e.target.style.opacity = 1)}
              >
                🗑️ Clear Cart
              </button>
            )}
          </div>
        </div>

        {/* Product count and cart info */}
        <p
          style={{
            textAlign: 'center',
            fontSize: 18,
            marginBottom: 30,
            opacity: 0.9,
          }}
        >
          Showing <strong>{products.length}</strong> of{' '}
          <strong>{totalProducts}</strong> products
          {cart.length > 0 && ` | 🛒 ${cart.length} items in cart`}
        </p>

        {/* Products Grid */}
        {products.length > 0 ? (
          <>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns:
                  'repeat(auto-fill, minmax(300px, 1fr))',
                gap: 30,
              }}
            >
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  isInCart={cart.includes(product.id)}
                  onToggleCart={toggleCart}
                />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </>
        ) : (
          <div
            style={{
              textAlign: 'center',
              padding: '80px 20px',
              backgroundColor: 'rgba(255,255,255,0.1)',
              borderRadius: 16,
              backdropFilter: 'blur(10px)',
            }}
          >
            <div style={{ fontSize: 80, marginBottom: 20 }}>🔍</div>
            <p style={{ fontSize: 28, marginBottom: 10 }}>
              No products found
            </p>
            <p style={{ opacity: 0.7, fontSize: 16 }}>
              Try adjusting your search or filters
            </p>
          </div>
        )}
      </main>

      <footer
        style={{
          backgroundColor: 'rgba(0,0,0,0.2)',
          textAlign: 'center',
          padding: '30px 20px',
          marginTop: 60,
        }}
      >
        <p style={{ fontSize: 16, opacity: 0.8 }}>
          🎉 Server-Side Filtering & Pagination with DummyJSON API
        </p>
        <p style={{ fontSize: 14, opacity: 0.6, marginTop: 10 }}>
          Built with React • Powered by DummyJSON API
        </p>
      </footer>
    </div>
  );
}
