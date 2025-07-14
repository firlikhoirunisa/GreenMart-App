"use client";
import React, { useState } from 'react';

const GreenMartCheckout = () => {
  const [cartCount, setCartCount] = useState(2);
  const [searchValue, setSearchValue] = useState('');
  const [formData, setFormData] = useState({
    firstName: 'Ayu',
    lastName: 'Dian',
    address: 'Jalan Hidup Makmur No 45',
    province: 'yogyakarta',
    city: 'sleman',
    email: 'ayayudian@gmail.com',
    phone: '(+62) 8125729087',
    notes: '',
    paymentMethod: 'cod'
  });

  // Province and city mapping
  const locationData = {
    'yogyakarta': ['Kota Yogyakarta', 'Sleman', 'Bantul', 'Kulon Progo', 'Gunungkidul'],
    'jawa-tengah': ['Semarang', 'Surakarta', 'Magelang', 'Salatiga', 'Pekalongan', 'Tegal'],
    'jawa-barat': ['Bandung', 'Bekasi', 'Depok', 'Bogor', 'Cirebon', 'Sukabumi'],
    'jawa-timur': ['Surabaya', 'Malang', 'Batu', 'Blitar', 'Kediri', 'Madiun']
  };

  // Sample order data
  const orderItems = [
    {
      id: 1,
      name: 'Tomat Merah',
      quantity: 5,
      price: 1000,
      image: '🍅'
    },
    {
      id: 2,
      name: 'Selada Hijau',
      quantity: 5,
      price: 2200,
      image: '🥬'
    }
  ];

  const subtotal = orderItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = 0; // Gratis
  const total = subtotal + shipping;

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      alert(`Mencari: ${searchValue}`);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name === 'province') {
      setFormData(prev => ({
        ...prev,
        [name]: value,
        city: '' // Reset city when province changes
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.address || !formData.email || !formData.phone || !formData.province || !formData.city) {
      alert('Mohon lengkapi semua field yang wajib diisi!');
      return;
    }
    
    // Create order summary data
    const orderSummary = {
      items: orderItems,
      customerInfo: formData,
      subtotal,
      shipping,
      total,
      paymentMethod: formData.paymentMethod
    };
    
    // Store order data in sessionStorage for the next page
    sessionStorage.setItem('orderData', JSON.stringify(orderSummary));
    
    // Redirect to OrderDetail page
    window.location.href = '/OrderDetail';
  };

  const getProvinceName = (provinceCode) => {
    const provinceMap = {
      'yogyakarta': 'D.I. Yogyakarta',
      'jawa-tengah': 'Jawa Tengah',
      'jawa-barat': 'Jawa Barat',
      'jawa-timur': 'Jawa Timur'
    };
    return provinceMap[provinceCode] || provinceCode;
  };

  const goBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = '/cart';
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
    checkoutContent: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr',
      gap: '3rem'
    },
    billingSection: {
      backgroundColor: 'white'
    },
    sectionTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#1F2937',
      marginBottom: '1.5rem'
    },
    formGroup: {
      marginBottom: '1.5rem'
    },
    formRow: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1rem',
      marginBottom: '1.5rem'
    },
    label: {
      display: 'block',
      fontSize: '0.875rem',
      fontWeight: 500,
      color: '#374151',
      marginBottom: '0.5rem'
    },
    input: {
      width: '100%',
      padding: '0.75rem',
      border: '1px solid #D1D5DB',
      borderRadius: '0.5rem',
      fontSize: '0.875rem',
      outline: 'none',
      boxSizing: 'border-box',
      transition: 'border-color 0.2s'
    },
    select: {
      width: '100%',
      padding: '0.75rem',
      border: '1px solid #D1D5DB',
      borderRadius: '0.5rem',
      fontSize: '0.875rem',
      outline: 'none',
      boxSizing: 'border-box',
      backgroundColor: 'white',
      cursor: 'pointer'
    },
    textarea: {
      width: '100%',
      padding: '0.75rem',
      border: '1px solid #D1D5DB',
      borderRadius: '0.5rem',
      fontSize: '0.875rem',
      outline: 'none',
      boxSizing: 'border-box',
      minHeight: '100px',
      resize: 'vertical',
      fontFamily: 'inherit'
    },
    orderSummary: {
      backgroundColor: 'white',
      borderRadius: '1rem',
      padding: '1.5rem',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
      border: '1px solid #E5E7EB',
      height: 'fit-content'
    },
    orderItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      marginBottom: '1rem',
      paddingBottom: '1rem',
      borderBottom: '1px solid #F3F4F6'
    },
    itemImage: {
      fontSize: '2rem',
      width: '3rem',
      height: '3rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F9FAFB',
      borderRadius: '0.5rem'
    },
    itemInfo: {
      flex: 1
    },
    itemName: {
      fontWeight: 500,
      color: '#1F2937',
      marginBottom: '0.25rem'
    },
    itemPrice: {
      fontWeight: 600,
      color: '#1F2937'
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
    paymentSection: {
      marginBottom: '1.5rem'
    },
    paymentOptions: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem'
    },
    paymentOption: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      padding: '0.75rem',
      border: '1px solid #E5E7EB',
      borderRadius: '0.5rem',
      cursor: 'pointer',
      transition: 'all 0.2s'
    },
    paymentOptionActive: {
      borderColor: '#22C55E',
      backgroundColor: '#F0FDF4'
    },
    paymentRadio: {
      width: '1rem',
      height: '1rem',
      cursor: 'pointer'
    },
    paymentLabel: {
      fontSize: '0.875rem',
      fontWeight: 500,
      color: '#374151',
      cursor: 'pointer'
    },
    submitBtn: {
      width: '100%',
      backgroundColor: '#22C55E',
      color: 'white',
      padding: '0.75rem',
      border: 'none',
      borderRadius: '0.5rem',
      fontSize: '1rem',
      fontWeight: 600,
      cursor: 'pointer',
      transition: 'background-color 0.2s'
    }
  };

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

        <div style={styles.checkoutContent}>
          {/* Billing Information */}
          <div style={styles.billingSection}>
            <h2 style={styles.sectionTitle}>Billing Information</h2>
            
            <div>
              {/* Name Fields */}
              <div style={styles.formRow}>
                <div>
                  <label style={styles.label}>Nama depan *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    style={styles.input}
                    onFocus={(e) => e.target.style.borderColor = '#22C55E'}
                    onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
                  />
                </div>
                <div>
                  <label style={styles.label}>Nama belakang *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    style={styles.input}
                    onFocus={(e) => e.target.style.borderColor = '#22C55E'}
                    onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
                  />
                </div>
              </div>

              {/* Address */}
              <div style={styles.formGroup}>
                <label style={styles.label}>Alamat *</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  style={styles.input}
                  onFocus={(e) => e.target.style.borderColor = '#22C55E'}
                  onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
                />
              </div>

              {/* Province and City */}
              <div style={styles.formRow}>
                <div>
                  <label style={styles.label}>Provinsi *</label>
                  <select
                    name="province"
                    value={formData.province}
                    onChange={handleInputChange}
                    style={styles.select}
                    onFocus={(e) => e.target.style.borderColor = '#22C55E'}
                    onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
                  >
                    <option value="">Pilih Provinsi</option>
                    <option value="yogyakarta">D.I. Yogyakarta</option>
                    <option value="jawa-tengah">Jawa Tengah</option>
                    <option value="jawa-barat">Jawa Barat</option>
                    <option value="jawa-timur">Jawa Timur</option>
                  </select>
                </div>
                <div>
                  <label style={styles.label}>Kabupaten/Kota *</label>
                  <select
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    style={styles.select}
                    onFocus={(e) => e.target.style.borderColor = '#22C55E'}
                    onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
                    disabled={!formData.province}
                  >
                    <option value="">Pilih Kota</option>
                    {formData.province && locationData[formData.province] && 
                      locationData[formData.province].map((city) => (
                        <option key={city} value={city.toLowerCase().replace(/\s+/g, '-')}>{city}</option>
                      ))
                    }
                  </select>
                </div>
              </div>

              {/* Email and Phone */}
              <div style={styles.formRow}>
                <div>
                  <label style={styles.label}>Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    style={styles.input}
                    onFocus={(e) => e.target.style.borderColor = '#22C55E'}
                    onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
                  />
                </div>
                <div>
                  <label style={styles.label}>Nomor telepon *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    style={styles.input}
                    onFocus={(e) => e.target.style.borderColor = '#22C55E'}
                    onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
                  />
                </div>
              </div>

              {/* Additional Notes */}
              <h3 style={{...styles.sectionTitle, fontSize: '1.25rem', marginTop: '2rem'}}>Info Tambahan</h3>
              <div style={styles.formGroup}>
                <label style={styles.label}>Catatan Pesanan (Optional)</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  style={styles.textarea}
                  placeholder="Catatan tentang pesanan Anda, misalnya catatan khusus untuk pengiriman"
                  onFocus={(e) => e.target.style.borderColor = '#22C55E'}
                  onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
                />
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div style={styles.orderSummary}>
            <h2 style={styles.sectionTitle}>Ringkasan Pesanan</h2>
            
            {/* Order Items */}
            {orderItems.map((item) => (
              <div key={item.id} style={styles.orderItem}>
                <div style={styles.itemImage}>{item.image}</div>
                <div style={styles.itemInfo}>
                  <div style={styles.itemName}>{item.name} x{item.quantity}</div>
                </div>
                <div style={styles.itemPrice}>
                  Rp.{(item.price * item.quantity).toLocaleString()}
                </div>
              </div>
            ))}
            
            {/* Summary */}
            <div style={styles.summaryRow}>
              <span style={styles.summaryLabel}>Subtotal:</span>
              <span style={styles.summaryValue}>Rp.{subtotal.toLocaleString()}</span>
            </div>
            
            <div style={styles.summaryRow}>
              <span style={styles.summaryLabel}>Pengiriman:</span>
              <span style={styles.summaryValue}>Gratis</span>
            </div>
            
            <div style={styles.totalRow}>
              <span style={styles.totalLabel}>Total:</span>
              <span style={styles.totalValue}>Rp.{total.toLocaleString()}</span>
            </div>

            {/* Payment Method */}
            <div style={styles.paymentSection}>
              <h3 style={{...styles.sectionTitle, fontSize: '1.125rem', marginBottom: '1rem'}}>Metode Pembayaran</h3>
              <div style={styles.paymentOptions}>
                <div 
                  style={{
                    ...styles.paymentOption,
                    ...(formData.paymentMethod === 'cod' ? styles.paymentOptionActive : {})
                  }}
                  onClick={() => setFormData(prev => ({...prev, paymentMethod: 'cod'}))}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={formData.paymentMethod === 'cod'}
                    onChange={handleInputChange}
                    style={styles.paymentRadio}
                  />
                  <label style={styles.paymentLabel}>💸 Cash on Delivery</label>
                </div>
                <div 
                  style={{
                    ...styles.paymentOption,
                    ...(formData.paymentMethod === 'qris' ? styles.paymentOptionActive : {})
                  }}
                  onClick={() => setFormData(prev => ({...prev, paymentMethod: 'qris'}))}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="qris"
                    checked={formData.paymentMethod === 'qris'}
                    onChange={handleInputChange}
                    style={styles.paymentRadio}
                  />
                  <label style={styles.paymentLabel}>📱 QRIS</label>
                </div>
              </div>
            </div>
            
            <button 
              style={styles.submitBtn}
              onClick={handleSubmitOrder}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#16A34A'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#22C55E'}
            >
              Tempatkan Pesanan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreenMartCheckout;