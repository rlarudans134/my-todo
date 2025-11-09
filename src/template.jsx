export default function Template({ children }) {
  return (
    <div style={{
      width: '400px',
      margin: '2rem auto',
      padding: '1rem',
      backgroundColor: 'white',
      color: 'black',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)'
    }}>
      {children}
    </div>
  );
}
