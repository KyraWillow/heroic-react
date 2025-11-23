export default function ProductCard({ product, isInCart, onToggleCart }) {
  return (
    <div
      style={{
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: 16,
        padding: 20,
        backdropFilter: 'blur(10px)',
        border: isInCart
          ? '2px solid #6bcf7f'
          : '1px solid rgba(255,255,255,0.2)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
        transition: 'all 0.3s',
        cursor: 'pointer',
        position: 'relative',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {isInCart && (
        <div
          style={{
            position: 'absolute',
            top: 10,
            right: 10,
            backgroundColor: '#6bcf7f',
            color: 'white',
            padding: '6px 12px',
            borderRadius: 20,
            fontSize: 12,
            fontWeight: 'bold',
            zIndex: 2,
          }}
        >
          ✓ In Cart
        </div>
      )}

      <div
        style={{
          width: '100%',
          height: 220,
          overflow: 'hidden',
          borderRadius: 12,
          marginBottom: 15,
        }}
      >
        <img
          src={product.thumbnail}
          alt={product.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>

      <span
        style={{
          display: 'inline-block',
          padding: '4px 10px',
          backgroundColor: '#667eea',
          borderRadius: 6,
          fontSize: 11,
          fontWeight: 'bold',
          marginBottom: 10,
          alignSelf: 'flex-start',
          textTransform: 'uppercase',
        }}
      >
        {product.category}
      </span>

      <h3
        style={{
          margin: '0 0 10px',
          fontSize: 18,
          fontWeight: 600,
          lineHeight: 1.4,
        }}
      >
        {product.title}
      </h3>

      <p
        style={{
          color: 'rgba(255,255,255,0.7)',
          fontSize: 13,
          margin: '0 0 15px',
          lineHeight: 1.6,
          flex: 1,
        }}
      >
        {product.description.substring(0, 90)}...
      </p>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 15,
        }}
      >
        <div style={{ fontSize: 28, fontWeight: 'bold' }}>
          ${product.price}
        </div>
        <div
          style={{
            color: '#ffd700',
            fontSize: 16,
            fontWeight: 'bold',
          }}
        >
          ⭐ {product.rating.toFixed(1)}
        </div>
      </div>

      <button
        onClick={() => onToggleCart(product.id)}
        style={{
          width: '100%',
          padding: 12,
          fontSize: 14,
          fontWeight: 'bold',
          backgroundColor: isInCart ? '#ff6b6b' : '#6bcf7f',
          color: 'white',
          border: 'none',
          borderRadius: 8,
          cursor: 'pointer',
          transition: 'all 0.2s',
          textTransform: 'uppercase',
        }}
      >
        {isInCart ? '🗑️ Remove from Cart' : '🛒 Add to Cart'}
      </button>
    </div>
  );
}
