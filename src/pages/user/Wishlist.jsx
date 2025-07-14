import React, { useState } from 'react';

const GreenMartWishlist = () => {
  const [cartCount, setCartCount] = useState(0);
  const [searchValue, setSearchValue] = useState('');
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: 'Tomat Merah',
      price: 1000,
      originalPrice: null,
      image: 'https://static.vecteezy.com/system/resources/previews/035/214/085/large_2x/ai-generated-a-watercolored-bright-serene-image-of-a-traditional-bahay-kubo-ai-generated-free-photo.jpg',
      availability: 'Tersedia'
    },
    {
      id: 2,
      name: 'Pakcoy',
      price: 5000,
      originalPrice: 4200,
      image: 'https://www.kampustani.com/wp-content/uploads/2020/11/Cara-Menanam-Sawi-Pakcoy-di-Polybag-Secara-Organik.jpg',
      availability: 'Tersedia'
    },
    {
      id: 3,
      name: 'Paprika Hijau',
      price: 11000,
      originalPrice: null,
      image: 'https://media.istockphoto.com/id/509294037/id/foto/paprika-lada-terisolasi-pada-latar-belakang-putih.jpg?s=612x612&w=0&k=20&c=KZcJqr6IUPau45DVM1IkEJnaiwUyCWhuROlh12BlKTQ=',
      availability: 'Stok Habis'
    }
  ]);

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      alert(`Mencari: ${searchValue}`);
    }
  };

  const handleAddToCart = (productId) => {
    setCartCount(cartCount + 1);
    alert(`Produk ditambahkan ke keranjang!`);
  };

  const handleRemoveFromWishlist = (productId) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== productId));
  };

  const handleProductClick = (productId) => {
    window.location.href = `/detail?id=${productId}`;
  };

  const goBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = '/';
    }
  };

  const styles = {
    body: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif',
      backgroundColor: '#FFFFFF',
      lineHeight: 1.6,
      margin: 0,
      padding: 0
    },
    header: {
      background: 'white',
      borderBottom: '1px solid #E5E7EB',
      padding: '1rem 0',
      position: 'sticky',
      top: 0,
      zIndex: 100
    },
    headerContainer: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '0 2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '2rem'
    },
    logo: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#15803D'
    },
    logoMart: {
      color: '#4ADE80',
      fontWeight: 300
    },
    searchContainer: {
      flex: 1,
      maxWidth: '400px',
      position: 'relative'
    },
    searchInput: {
      width: '100%',
      padding: '0.75rem 1rem 0.75rem 2.5rem',
      border: '1px solid #D1D5DB',
      borderRadius: '0.5rem',
      fontSize: '0.875rem',
      outline: 'none',
      boxSizing: 'border-box'
    },
    searchIcon: {
      position: 'absolute',
      left: '0.75rem',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#6B7280'
    },
    headerActions: {
      display: 'flex',
      alignItems: 'center',
      gap: '2rem'
    },
    headerIcon: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      color: '#374151',
      cursor: 'pointer',
      fontSize: '0.875rem',
      fontWeight: 500
    },
    cartBadge: {
      background: '#EF4444',
      color: 'white',
      fontSize: '0.75rem',
      borderRadius: '50%',
      width: '1.25rem',
      height: '1.25rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      top: '-0.25rem',
      right: '-0.25rem'
    },
    wishlistIcon: {
      fontSize: '1.25rem',
      color: '#EF4444'
    },
    cartContainer: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      gap: '0.25rem'
    },
    storeIcon: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    },
    userIcon: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    },
    container: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '2rem'
    },
    breadcrumb: {
      marginBottom: '2rem',
      cursor: 'pointer',
      color: '#6B7280',
      fontSize: '1.5rem',
      display: 'flex',
      alignItems: 'center'
    },
    pageTitle: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#1F2937',
      textAlign: 'center',
      marginBottom: '2rem'
    },
    wishlistTable: {
      width: '100%',
      borderCollapse: 'collapse',
      backgroundColor: 'white',
      borderRadius: '1rem',
      overflow: 'hidden',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
    },
    tableHeader: {
      backgroundColor: '#F9FAFB',
      borderBottom: '1px solid #E5E7EB'
    },
    tableHeaderCell: {
      padding: '1rem',
      textAlign: 'left',
      fontWeight: 600,
      color: '#6B7280',
      fontSize: '0.875rem',
      textTransform: 'uppercase'
    },
    tableRow: {
      borderBottom: '1px solid #F3F4F6',
      transition: 'background-color 0.2s'
    },
    tableCell: {
      padding: '1rem',
      verticalAlign: 'middle'
    },
    productInfo: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    },
    productImage: {
      width: '4rem',
      height: '4rem',
      borderRadius: '0.5rem',
      objectFit: 'cover',
      cursor: 'pointer'
    },
    productName: {
      fontWeight: 600,
      color: '#1F2937',
      cursor: 'pointer'
    },
    priceContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.25rem'
    },
    currentPrice: {
      fontWeight: 600,
      color: '#1F2937'
    },
    originalPrice: {
      fontSize: '0.875rem',
      color: '#9CA3AF',
      textDecoration: 'line-through'
    },
    availabilityBadge: {
      padding: '0.25rem 0.75rem',
      borderRadius: '1rem',
      fontSize: '0.75rem',
      fontWeight: 500
    },
    availableStatus: {
      backgroundColor: '#DCFCE7',
      color: '#15803D'
    },
    unavailableStatus: {
      backgroundColor: '#FEE2E2',
      color: '#DC2626'
    },
    actionButtons: {
      display: 'flex',
      gap: '0.5rem',
      alignItems: 'center'
    },
    addToCartBtn: {
      backgroundColor: '#22C55E',
      color: 'white',
      padding: '0.5rem 1rem',
      border: 'none',
      borderRadius: '0.5rem',
      fontSize: '0.875rem',
      fontWeight: 500,
      cursor: 'pointer',
      transition: 'background-color 0.2s'
    },
    addToCartBtnDisabled: {
      backgroundColor: '#9CA3AF',
      cursor: 'not-allowed'
    },
    removeBtn: {
      width: '2rem',
      height: '2rem',
      border: '1px solid #E5E7EB',
      backgroundColor: 'white',
      borderRadius: '0.25rem',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1rem',
      color: '#6B7280',
      transition: 'all 0.2s'
    },
    emptyWishlist: {
      textAlign: 'center',
      padding: '4rem 2rem',
      color: '#6B7280'
    },
    emptyIcon: {
      fontSize: '4rem',
      marginBottom: '1rem',
      opacity: 0.5
    },
    emptyText: {
      fontSize: '1.125rem',
      fontWeight: 500,
      marginBottom: '0.5rem'
    },
    emptySubtext: {
      fontSize: '0.875rem',
      marginBottom: '2rem'
    },
    browseBtn: {
      backgroundColor: '#22C55E',
      color: 'white',
      padding: '0.75rem 1.5rem',
      border: 'none',
      borderRadius: '0.5rem',
      fontSize: '0.875rem',
      fontWeight: 500,
      cursor: 'pointer',
      transition: 'background-color 0.2s'
    }
  };

  return (
    <div style={styles.body}>
      {/* Header - Same as Homepage */}
      <header style={styles.header}>
        <div style={styles.headerContainer}>
          <div style={styles.logo}>
            Green<span style={styles.logoMart}>MART</span>
          </div>
          
          <div style={styles.searchContainer}>
            <span style={styles.searchIcon}>🔍</span>
            <input 
              type="text" 
              style={styles.searchInput} 
              placeholder="Cari produk..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyPress={handleSearch}
              onFocus={(e) => {
                e.target.style.borderColor = '#22C55E';
                e.target.style.boxShadow = '0 0 0 3px rgba(34, 197, 94, 0.1)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#D1D5DB';
                e.target.style.boxShadow = 'none';
              }}
            />
          </div>
          
          <div style={styles.headerActions}>
            <div style={{...styles.headerIcon, ...styles.wishlistIcon}}>
              ❤️
            </div>
            <div style={styles.cartContainer}>
              <div style={styles.headerIcon}>
                🛒
              </div>
              <span style={styles.cartBadge}>{cartCount}</span>
            </div>
            <div style={{...styles.headerIcon, ...styles.storeIcon}}>
              🏪 <span>Toko</span>
            </div>
            <div style={{...styles.headerIcon, ...styles.userIcon}}>
              👤 <span>User</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div style={styles.container}>
        {/* Breadcrumb */}
        <div 
          style={styles.breadcrumb} 
          onClick={goBack}
          onMouseEnter={(e) => e.currentTarget.style.color = '#22C55E'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#6B7280'}
        >
          ← 
        </div>

        <h1 style={styles.pageTitle}>Wishlist</h1>

        {wishlistItems.length === 0 ? (
          /* Empty Wishlist */
          <div style={styles.emptyWishlist}>
            <div style={styles.emptyIcon}>♡</div>
            <div style={styles.emptyText}>Tidak Ada Produk</div>
            <div style={styles.emptySubtext}>Tambahkan produk yang Anda suka!</div>
            <button 
              style={styles.browseBtn}
              onClick={() => window.location.href = '/'}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#16A34A'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#22C55E'}
            >
              Jelajahi Produk
            </button>
          </div>
        ) : (
          /* Wishlist Table */
          <table style={styles.wishlistTable}>
            <thead style={styles.tableHeader}>
              <tr>
                <th style={{...styles.tableHeaderCell, textAlign: 'left'}}>PRODUK</th>
                <th style={{...styles.tableHeaderCell, textAlign: 'center'}}>HARGA</th>
                <th style={{...styles.tableHeaderCell, textAlign: 'center'}}>STOK</th>
                <th style={{...styles.tableHeaderCell, textAlign: 'center'}}>AKSI</th>
              </tr>
            </thead>
            <tbody>
              {wishlistItems.map((item) => (
                <tr 
                  key={item.id} 
                  style={styles.tableRow}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F9FAFB'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
                >
                  <td style={styles.tableCell}>
                    <div style={styles.productInfo}>
                      <img 
                        src={item.image} 
                        alt={item.name}
                        style={styles.productImage}
                        onClick={() => handleProductClick(item.id)}
                      />
                      <span 
                        style={styles.productName}
                        onClick={() => handleProductClick(item.id)}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#22C55E'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#1F2937'}
                      >
                        {item.name}
                      </span>
                    </div>
                  </td>
                  <td style={{...styles.tableCell, textAlign: 'center'}}>
                    <div style={styles.priceContainer}>
                      <span style={styles.currentPrice}>Rp.{item.price.toLocaleString()}</span>
                      {item.originalPrice && (
                        <span style={styles.originalPrice}>Rp.{item.originalPrice.toLocaleString()}</span>
                      )}
                    </div>
                  </td>
                  <td style={{...styles.tableCell, textAlign: 'center'}}>
                    <span style={{
                      ...styles.availabilityBadge,
                      ...(item.availability === 'Tersedia' ? styles.availableStatus : styles.unavailableStatus)
                    }}>
                      {item.availability}
                    </span>
                  </td>
                  <td style={{...styles.tableCell, textAlign: 'center'}}>
                    <div style={styles.actionButtons}>
                      <button 
                        style={{
                          ...styles.addToCartBtn,
                          ...(item.availability !== 'Tersedia' ? styles.addToCartBtnDisabled : {})
                        }}
                        onClick={() => handleAddToCart(item.id)}
                        disabled={item.availability !== 'Tersedia'}
                        onMouseEnter={(e) => {
                          if (item.availability === 'Tersedia') {
                            e.currentTarget.style.backgroundColor = '#16A34A';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (item.availability === 'Tersedia') {
                            e.currentTarget.style.backgroundColor = '#22C55E';
                          }
                        }}
                      >
                        {item.availability === 'Tersedia' ? 'Add to Cart' : 'Add to Cart'}
                      </button>
                      <button 
                        style={styles.removeBtn}
                        onClick={() => handleRemoveFromWishlist(item.id)}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = '#EF4444';
                          e.currentTarget.style.color = '#EF4444';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = '#E5E7EB';
                          e.currentTarget.style.color = '#6B7280';
                        }}
                      >
                        ×
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default GreenMartWishlist;