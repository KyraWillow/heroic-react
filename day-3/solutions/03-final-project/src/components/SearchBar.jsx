export default function SearchBar({ searchTerm, onSearchChange, onSearch }) {
  return (
    <div style={{ display: 'flex', gap: 10, width: '100%', maxWidth: 500 }}>
      <input
        type="text"
        placeholder="🔍 Search products..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') onSearch();
        }}
        style={{
          flex: 1,
          padding: '15px 25px',
          fontSize: 16,
          borderRadius: 50,
          border: '2px solid rgba(255,255,255,0.3)',
          backgroundColor: 'rgba(255,255,255,0.1)',
          color: 'white',
          backdropFilter: 'blur(10px)',
          outline: 'none',
          transition: 'all 0.3s',
        }}
        onFocus={(e) => {
          e.target.style.borderColor = 'rgba(255,255,255,0.6)';
          e.target.style.backgroundColor = 'rgba(255,255,255,0.15)';
        }}
        onBlur={(e) => {
          e.target.style.borderColor = 'rgba(255,255,255,0.3)';
          e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
        }}
      />
      <button
        onClick={onSearch}
        style={{
          padding: '15px 30px',
          fontSize: 16,
          borderRadius: 50,
          border: 'none',
          backgroundColor: '#6bcf7f',
          color: 'white',
          cursor: 'pointer',
          fontWeight: 'bold',
          transition: 'all 0.2s',
        }}
        onMouseEnter={(e) => (e.target.style.opacity = 0.9)}
        onMouseLeave={(e) => (e.target.style.opacity = 1)}
      >
        Search
      </button>
    </div>
  );
}
