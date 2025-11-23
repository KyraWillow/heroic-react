export default function ErrorDisplay({ error, onRetry }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        textAlign: 'center',
        padding: 20,
      }}
    >
      <div style={{ fontSize: 80, marginBottom: 20 }}>😢</div>
      <h2 style={{ fontSize: 36, marginBottom: 15 }}>
        Oops! Something went wrong
      </h2>
      <p style={{ fontSize: 18, opacity: 0.8, marginBottom: 30 }}>
        Error: {error}
      </p>
      <button
        onClick={onRetry}
        style={{
          padding: '15px 30px',
          fontSize: 16,
          backgroundColor: 'white',
          color: '#667eea',
          border: 'none',
          borderRadius: 8,
          cursor: 'pointer',
          fontWeight: 'bold',
          transition: 'all 0.2s',
        }}
        onMouseEnter={(e) =>
          (e.target.style.transform = 'scale(1.05)')
        }
        onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
      >
        🔄 Try Again
      </button>
    </div>
  );
}
