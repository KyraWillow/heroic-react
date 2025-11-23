export default function Header({ cartCount }) {
  return (
    <header
      style={{
        backgroundColor: 'rgba(255,255,255,0.1)',
        backdropFilter: 'blur(10px)',
        padding: '20px 0',
        borderBottom: '1px solid rgba(255,255,255,0.2)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h1 style={{ fontSize: 32 }}>🛍️ ShopHub</h1>
        <div
          style={{
            backgroundColor: 'rgba(255,255,255,0.2)',
            padding: '10px 20px',
            borderRadius: 25,
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <span style={{ fontSize: 24 }}>🛒</span>
          <span style={{ fontSize: 18, fontWeight: 'bold' }}>
            {cartCount}
          </span>
        </div>
      </div>
    </header>
  );
}
