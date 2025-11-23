export default function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15,
        marginTop: 40,
      }}
    >
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        style={{
          padding: '12px 24px',
          fontSize: 16,
          backgroundColor:
            currentPage === 1 ? 'rgba(255,255,255,0.1)' : '#667eea',
          color: 'white',
          border: 'none',
          borderRadius: 8,
          cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
          fontWeight: 'bold',
          opacity: currentPage === 1 ? 0.5 : 1,
          transition: 'all 0.2s',
        }}
        onMouseEnter={(e) => {
          if (currentPage !== 1) e.target.style.opacity = 0.8;
        }}
        onMouseLeave={(e) => {
          if (currentPage !== 1) e.target.style.opacity = 1;
        }}
      >
        ← Previous
      </button>
      <span style={{ fontSize: 18, fontWeight: 'bold' }}>
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        style={{
          padding: '12px 24px',
          fontSize: 16,
          backgroundColor:
            currentPage === totalPages
              ? 'rgba(255,255,255,0.1)'
              : '#667eea',
          color: 'white',
          border: 'none',
          borderRadius: 8,
          cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
          fontWeight: 'bold',
          opacity: currentPage === totalPages ? 0.5 : 1,
          transition: 'all 0.2s',
        }}
        onMouseEnter={(e) => {
          if (currentPage !== totalPages) e.target.style.opacity = 0.8;
        }}
        onMouseLeave={(e) => {
          if (currentPage !== totalPages) e.target.style.opacity = 1;
        }}
      >
        Next →
      </button>
    </div>
  );
}
