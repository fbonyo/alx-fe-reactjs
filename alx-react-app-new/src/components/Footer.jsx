function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer style={{
      backgroundColor: '#333',
      color: 'white',
      textAlign: 'center',
      padding: '20px',
      marginTop: '20px',
      borderTop: '3px solid navy'
    }}>
      <p style={{ margin: '0', fontSize: '14px' }}>
        © {currentYear} My Travel Blog. All rights reserved.
      </p>
      <p style={{ margin: '10px 0 0 0', fontSize: '12px', color: '#ccc' }}>
        Created with React
      </p>
    </footer>
  );
}

export default Footer;