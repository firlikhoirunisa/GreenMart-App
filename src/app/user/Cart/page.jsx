"use client";
import { redirect } from 'next/navigation';
import React, { useState } from 'react';

const GreenMartCart = () => {
  const [cartCount, setCartCount] = useState(2);
  const [searchValue, setSearchValue] = useState('');
  const [couponCode, setCouponCode] = useState('');
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Tomat Merah',
      price: 1000,
      quantity: 5,
      image: 'https://static.vecteezy.com/system/resources/previews/035/214/085/large_2x/ai-generated-a-watercolored-bright-serene-image-of-a-traditional-bahay-kubo-ai-generated-free-photo.jpg'
    },
    {
      id: 2,
      name: 'Selada Hijau',
      price: 2200,
      quantity: 5,
      image: 'https://www.shutterstock.com/image-photo/lettuce-leaf-isolated-on-white-600nw-1715395198.jpg'
    }
  ]);

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      alert(`Mencari: ${searchValue}`);
    }
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCartItems(cartItems.map(item => 
      item.id === productId 
        ? { ...item, quantity: newQuantity }
        : item
    ));
  };

  const removeFromCart = (productId) => {
    const newItems = cartItems.filter(item => item.id !== productId);
    setCartItems(newItems);
    setCartCount(newItems.length);
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleApplyCoupon = () => {
    if (couponCode.trim()) {
      alert(`Kode voucher "${couponCode}" diterapkan!`);
    }
  };

  const handleProceedToCheckout = () => {
    redirect("Checkout")
  };

  const handleReturnToShop = () => {
    window.location.href = '/';
  };

  const handleUpdateCart = () => {
    alert('Keranjang diperbarui!');
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
      color: '#6B7280'
    },
    cartContainer: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      gap: '0.25rem'
    },
    activeCartIcon: {
      color: '#22C55E'
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
    cartContent: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr',
      gap: '2rem'
    },
    cartTable: {
      backgroundColor: 'white',
      borderRadius: '1rem',
      overflow: 'hidden',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
      border: '1px solid #E5E7EB'
    },
    tableHeader: {
      backgroundColor: '#F9FAFB',
      borderBottom: '1px solid #E5E7EB',
      padding: '1rem'
    },
    tableHeaderRow: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr 1fr auto',
      gap: '1rem',
      alignItems: 'center'
    },
    tableHeaderCell: {
      fontWeight: 600,
      color: '#6B7280',
      fontSize: '0.875rem',
      textTransform: 'uppercase'
    },
    tableBody: {
      padding: '0'
    },
    tableRow: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr 1fr auto',
      gap: '1rem',
      alignItems: 'center',
      padding: '1.5rem 1rem',
      borderBottom: '1px solid #F3F4F6'
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
      objectFit: 'cover'
    },
    productName: {
      fontWeight: 600,
      color: '#1F2937'
    },
    priceCell: {
      fontWeight: 600,
      color: '#1F2937',
      textAlign: 'center'
    },
    quantityControl: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      justifyContent: 'center'
    },
    quantityBtn: {
      width: '2rem',
      height: '2rem',
      border: '1px solid #D1D5DB',
      backgroundColor: 'white',
      borderRadius: '0.25rem',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1rem',
      color: '#6B7280'
    },
    quantityDisplay: {
      minWidth: '2rem',
      textAlign: 'center',
      fontWeight: 600
    },
    subtotalCell: {
      fontWeight: 600,
      color: '#1F2937',
      textAlign: 'center'
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
      color: '#6B7280'
    },
    cartActions: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '1.5rem',
      backgroundColor: '#F9FAFB',
      gap: '1rem'
    },
    actionBtn: {
      padding: '0.75rem 1.5rem',
      border: '1px solid #D1D5DB',
      backgroundColor: 'white',
      borderRadius: '0.5rem',
      fontSize: '0.875rem',
      fontWeight: 500,
      cursor: 'pointer',
      color: '#374151'
    },
    cartSummary: {
      backgroundColor: 'white',
      borderRadius: '1rem',
      padding: '1.5rem',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
      border: '1px solid #E5E7EB',
      height: 'fit-content'
    },
    summaryTitle: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      color: '#1F2937',
      marginBottom: '1rem'
    },
    summaryRow: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '0.75rem'
    },
    summaryLabel: {
      color: '#6B7280',
      fontSize: '0.875rem'
    },
    summaryValue: {
      fontWeight: 600,
      color: '#1F2937'
    },
    totalRow: {
      display: 'flex',
      justifyContent: 'space-between',
      paddingTop: '0.75rem',
      borderTop: '1px solid #E5E7EB',
      marginBottom: '1.5rem'
    },
    totalLabel: {
      fontWeight: 600,
      color: '#1F2937'
    },
    totalValue: {
      fontWeight: 'bold',
      color: '#1F2937',
      fontSize: '1.125rem'
    },
    checkoutBtn: {
      width: '100%',
      backgroundColor: '#22C55E',
      color: 'white',
      padding: '0.75rem',
      border: 'none',
      borderRadius: '0.5rem',
      fontSize: '1rem',
      fontWeight: 600,
      cursor: 'pointer',
      marginBottom: '1rem'
    },
    couponSection: {
      marginTop: '2rem',
      padding: '1.5rem',
      backgroundColor: '#F9FAFB',
      borderRadius: '0.5rem'
    },
    couponTitle: {
      fontWeight: 600,
      color: '#1F2937',
      marginBottom: '1rem'
    },
    couponInput: {
      display: 'flex',
      gap: '0.5rem'
    },
    couponField: {
      flex: 1,
      padding: '0.75rem',
      border: '1px solid #D1D5DB',
      borderRadius: '0.5rem',
      fontSize: '0.875rem',
      outline: 'none'
    },
    couponBtn: {
      backgroundColor: '#374151',
      color: 'white',
      padding: '0.75rem 1.5rem',
      border: 'none',
      borderRadius: '0.5rem',
      fontSize: '0.875rem',
      fontWeight: 500,
      cursor: 'pointer'
    }
  };

  if (cartItems.length === 0) {
    return (
      <div style={styles.body}>
        {/* Header */}
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
              />
            </div>
            
            <div style={styles.headerActions}>
              <div style={{...styles.headerIcon, ...styles.wishlistIcon}}>
                ♡
              </div>
              <div style={styles.cartContainer}>
                <div style={{...styles.headerIcon, ...styles.activeCartIcon}}>
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

        <div style={styles.container}>
          <div style={styles.breadcrumb} onClick={goBack}>←</div>
          <h1 style={styles.pageTitle}>Shopping Cart</h1>
          <div style={{textAlign: 'center', padding: '4rem', color: '#6B7280'}}>
            <div style={{fontSize: '4rem', marginBottom: '1rem'}}>🛒</div>
            <div style={{fontSize: '1.125rem', fontWeight: 500}}>Keranjang Anda Kosong</div>
            <button 
              style={styles.checkoutBtn}
              onClick={handleReturnToShop}
            >
              Kembali Berbelanja
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.body}>
      {/* Header */}
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
              ♡
            </div>
            <div style={styles.cartContainer}>
              <div style={{...styles.headerIcon, ...styles.activeCartIcon}}>
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

        <h1 style={styles.pageTitle}>Shopping Cart</h1>

        <div style={styles.cartContent}>
          {/* Cart Table */}
          <div style={styles.cartTable}>
            {/* Table Header */}
            <div style={styles.tableHeader}>
              <div style={styles.tableHeaderRow}>
                <div style={styles.tableHeaderCell}>PRODUK</div>
                <div style={{...styles.tableHeaderCell, textAlign: 'center'}}>HARGA</div>
                <div style={{...styles.tableHeaderCell, textAlign: 'center'}}>JUMLAH</div>
                <div style={{...styles.tableHeaderCell, textAlign: 'center'}}>SUBTOTAL</div>
                <div></div>
              </div>
            </div>

            {/* Table Body */}
            <div style={styles.tableBody}>
              {cartItems.map((item) => (
                <div key={item.id} style={styles.tableRow}>
                  <div style={styles.productInfo}>
                    <img 
                      src={item.image} 
                      alt={item.name}
                      style={styles.productImage}
                    />
                    <span style={styles.productName}>{item.name}</span>
                  </div>
                  <div style={styles.priceCell}>Rp.{item.price.toLocaleString()}</div>
                  <div style={styles.quantityControl}>
                    <button 
                      style={styles.quantityBtn}
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = '#22C55E';
                        e.currentTarget.style.color = '#22C55E';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = '#D1D5DB';
                        e.currentTarget.style.color = '#6B7280';
                      }}
                    >
                      −
                    </button>
                    <span style={styles.quantityDisplay}>{item.quantity}</span>
                    <button 
                      style={styles.quantityBtn}
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = '#22C55E';
                        e.currentTarget.style.color = '#22C55E';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = '#D1D5DB';
                        e.currentTarget.style.color = '#6B7280';
                      }}
                    >
                      +
                    </button>
                  </div>
                  <div style={styles.subtotalCell}>Rp.{(item.price * item.quantity).toLocaleString()}</div>
                  <button 
                    style={styles.removeBtn}
                    onClick={() => removeFromCart(item.id)}
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
              ))}
            </div>

            {/* Cart Actions */}
            <div style={styles.cartActions}>
              <button 
                style={styles.actionBtn}
                onClick={handleReturnToShop}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F3F4F6'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
              >
                Return to shop
              </button>
              <button 
                style={styles.actionBtn}
                onClick={handleUpdateCart}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F3F4F6'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
              >
                Update Cart
              </button>
            </div>
          </div>

          {/* Cart Summary */}
          <div style={styles.cartSummary}>
            <h2 style={styles.summaryTitle}>Cart Total</h2>
            
            <div style={styles.summaryRow}>
              <span style={styles.summaryLabel}>Subtotal:</span>
              <span style={styles.summaryValue}>Rp.{calculateSubtotal().toLocaleString()}</span>
            </div>
            
            <div style={styles.summaryRow}>
              <span style={styles.summaryLabel}>Pengiriman:</span>
              <span style={styles.summaryValue}>Gratis</span>
            </div>
            
            <div style={styles.totalRow}>
              <span style={styles.totalLabel}>Total:</span>
              <span style={styles.totalValue}>Rp.{calculateSubtotal().toLocaleString()}</span>
            </div>
            
            <button 
              style={styles.checkoutBtn}
              onClick={handleProceedToCheckout}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#16A34A'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#22C55E'}
            >
              Proceed to checkout
            </button>
          </div>
        </div>

        {/* Coupon Section */}
        <div style={styles.couponSection}>
          <div style={styles.couponTitle}>Kode Voucher:</div>
          <div style={styles.couponInput}>
            <input 
              type="text" 
              style={styles.couponField}
              placeholder="Enter code"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
            />
            <button 
              style={styles.couponBtn}
              onClick={handleApplyCoupon}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1F2937'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#374151'}
            >
              Apply Coupon
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreenMartCart;