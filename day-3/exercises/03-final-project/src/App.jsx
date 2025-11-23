import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ProductCard from './components/ProductCard';
import Loading from './components/Loading';
import ErrorDisplay from './components/ErrorDisplay';
import Pagination from './components/Pagination';

// ==================== MAIN APP ====================

export default function App() {
  // TODO: Create state for products, loading, error, cart, pagination

  const ITEMS_PER_PAGE = 12;

  // TODO: EXERCISE 1 - Fetch categories on mount
  // API: https://dummyjson.com/products/categories
  // Hint: Use useEffect with empty dependency array
  // Hint: Add 'all' to the beginning of categories array

  // TODO: EXERCISE 2 - Fetch products based on filters
  // Create a fetchProducts function that:
  // 1. Builds URL based on selectedCategory and searchTerm
  // 2. If searchTerm exists, use: https://dummyjson.com/products/search?q={searchTerm}&limit={limit}&skip={skip}
  // 3. If selectedCategory !== 'all', use: https://dummyjson.com/products/category/{category}?limit={limit}&skip={skip}
  // 4. Otherwise use: https://dummyjson.com/products?limit={limit}&skip={skip}
  // 5. Calculate skip = (currentPage - 1) * ITEMS_PER_PAGE
  // 6. Update totalPages = Math.ceil(data.total / ITEMS_PER_PAGE)
  // Hint: Use React.useCallback to memoize the function
  // Hint: Include dependencies: [currentPage, searchTerm, selectedCategory]

  // TODO: EXERCISE 3 - Call fetchProducts when dependencies change
  // Hint: Use useEffect with [fetchProducts] dependency

  // TODO: EXERCISE 4 - Implement cart toggle function
  // Hint: Check if productId is in cart, add or remove accordingly

  // TODO: EXERCISE 5 - Implement search handler
  // Hint: When search is triggered, reset currentPage to 1

  // TODO: EXERCISE 6 - Implement category change handler
  // Hint: When category changes, reset currentPage to 1

  // TODO: EXERCISE 7 - Implement page change handler
  // Hint: Update currentPage state

  return (
    <div style={{ minHeight: '100vh' }}>
      <Header cartCount={0} />

      <main
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '40px 20px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 20,
            marginBottom: 40,
          }}
        >
          {/* TODO: Add SearchBar component */}
          {/* Hint: Pass searchTerm, onSearchChange, and onSearch props */}

          {/* TODO: Add category dropdown */}
          {/* Hint: Map over categories and create options */}
          {/* Hint: Use onChange to call category change handler */}
        </div>

        {/* TODO: Show loading state */}
        {/* TODO: Show error state */}
        {/* TODO: Show products grid */}

        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fill, minmax(300px, 1fr))',
            gap: 30,
          }}
        >
          {/* TODO: Map over products and render ProductCard */}
          {/* Hint: Pass product, isInCart, and onToggleCart props */}
        </div>

        {/* TODO: Add Pagination component */}
        {/* Hint: Pass currentPage, totalPages, and onPageChange props */}
      </main>
    </div>
  );
}
