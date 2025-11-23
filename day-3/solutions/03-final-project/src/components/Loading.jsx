export default function Loading() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
      }}
    >
      <div
        style={{
          border: '5px solid rgba(255,255,255,0.2)',
          borderTop: '5px solid white',
          borderRadius: '50%',
          width: 70,
          height: 70,
          animation: 'spin 1s linear infinite',
          marginBottom: 25,
        }}
      ></div>
      <p style={{ fontSize: 22, fontWeight: 500 }}>
        Loading amazing products...
      </p>
    </div>
  );
}
