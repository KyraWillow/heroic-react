export default function SearchBar({ searchTerm, onSearchChange, onSearch }) {
  return (
    <div
      style={{
        display: 'flex',
        gap: 10,
        width: '100%',
        maxWidth: 500,
      }}
    >
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
        }}
      >
        Search
      </button>
    </div>
  );
}
