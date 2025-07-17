"use client";
import React, { useState } from 'react';

const GreenMartSellerSettings = () => {
  const [searchValue, setSearchValue] = useState('');
  const [activeMenu, setActiveMenu] = useState('settings');

  const [storeSettings, setStoreSettings] = useState({
    storeName: 'Toko Sayur Segar',
    storeDescription: 'Menyediakan sayuran segar berkualitas tinggi dari petani lokal',
    ownerName: 'Pak Soleh',
    phone: '08125729087',
    email: 'paksoleh@gmail.com',
    address: 'Jln.Canan-Wedi, Klaten, Jateng 53456',
    
    // Payment Settings
    acceptCOD: true,
    acceptQRIS: true,
    
    // Notification Settings
    emailNotifications: true,
    orderAlerts: true,
    stockAlerts: true
  });

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      alert('Mencari: ' + searchValue);
    }
  };

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    if (menu === 'dashboard') {
      alert('Kembali ke Dashboard');
    } else if (menu === 'products') {
      alert('Ke Manajemen Produk');
    } else if (menu === 'orders') {
      alert('Ke Daftar Pesanan');
    } else {
      alert('Navigasi ke ' + menu);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setStoreSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSaveSettings = () => {
    alert('Pengaturan toko berhasil disimpan!');
  };

  const styles = {
    body: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif',
      backgroundColor: '#F9FAFB',
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
    logoutBtn: {
      backgroundColor: '#EF4444',
      color: 'white',
      padding: '0.5rem 1rem',
      border: 'none',
      borderRadius: '0.5rem',
      fontSize: '0.875rem',
      cursor: 'pointer',
      transition: 'background-color 0.2s'
    },
    dashboardLayout: {
      display: 'flex',
      minHeight: 'calc(100vh - 80px)'
    },
    sidebar: {
      width: '12rem',
      backgroundColor: 'white',
      borderRight: '1px solid #E5E7EB',
      padding: '1.5rem 0'
    },
    sidebarTitle: {
      fontSize: '1rem',
      fontWeight: 'bold',
      color: '#1F2937',
      padding: '0 1.5rem',
      marginBottom: '1.5rem'
    },
    sidebarMenu: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    menuItem: {
      margin: '0.25rem 0'
    },
    menuLink: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      padding: '0.75rem 1.5rem',
      color: '#6B7280',
      fontSize: '0.875rem',
      cursor: 'pointer',
      transition: 'all 0.2s'
    },
    menuLinkActive: {
      backgroundColor: '#F0FDF4',
      color: '#22C55E',
      borderRight: '3px solid #22C55E'
    },
    menuIcon: {
      fontSize: '1rem'
    },
    mainContent: {
      flex: 1,
      padding: '2rem'
    },
    pageHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '2rem'
    },
    pageTitle: {
      fontSize: '1.75rem',
      fontWeight: 'bold',
      color: '#1F2937',
      margin: 0
    },
    saveBtn: {
      backgroundColor: '#22C55E',
      color: 'white',
      padding: '0.75rem 1.5rem',
      border: 'none',
      borderRadius: '0.5rem',
      fontSize: '0.875rem',
      fontWeight: 500,
      cursor: 'pointer',
      transition: 'background-color 0.2s'
    },
    settingsGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '2rem'
    },
    settingCard: {
      backgroundColor: 'white',
      borderRadius: '1rem',
      padding: '2rem',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      border: '1px solid #E5E7EB'
    },
    cardTitle: {
      fontSize: '1.25rem',
      fontWeight: 600,
      color: '#1F2937',
      marginBottom: '1.5rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    },
    cardIcon: {
      fontSize: '1.5rem'
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
    textarea: {
      width: '100%',
      padding: '0.75rem',
      border: '1px solid #D1D5DB',
      borderRadius: '0.5rem',
      fontSize: '0.875rem',
      outline: 'none',
      boxSizing: 'border-box',
      minHeight: '80px',
      resize: 'vertical',
      fontFamily: 'inherit'
    },
    toggleSection: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    },
    toggleItem: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '1rem',
      backgroundColor: '#F9FAFB',
      borderRadius: '0.5rem',
      border: '1px solid #E5E7EB'
    },
    toggleInfo: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.25rem'
    },
    toggleTitle: {
      fontSize: '0.875rem',
      fontWeight: 500,
      color: '#1F2937'
    },
    toggleDesc: {
      fontSize: '0.75rem',
      color: '#6B7280'
    },
    toggle: {
      position: 'relative',
      width: '3rem',
      height: '1.5rem',
      backgroundColor: '#E5E7EB',
      borderRadius: '0.75rem',
      cursor: 'pointer',
      transition: 'background-color 0.3s'
    },
    toggleActive: {
      backgroundColor: '#22C55E'
    },
    toggleSlider: {
      position: 'absolute',
      top: '0.125rem',
      left: '0.125rem',
      width: '1.25rem',
      height: '1.25rem',
      backgroundColor: 'white',
      borderRadius: '50%',
      transition: 'transform 0.3s',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
    },
    toggleSliderActive: {
      transform: 'translateX(1.5rem)'
    }
  };

  const menuItems = [
    { id: 'dashboard', icon: '🏠', label: 'Dashboard' },
    { id: 'products', icon: '📦', label: 'Produk' },
    { id: 'orders', icon: '📋', label: 'Pesanan' },
    { id: 'settings', icon: '⚙️', label: 'Pengaturan' }
  ];

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
              placeholder="Cari pengaturan..."
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
            <button 
              style={styles.logoutBtn}
              onClick={() => {
                if (window.confirm('Yakin ingin keluar dari dashboard?')) {
                  alert('Logout berhasil. Kembali ke halaman login...');
                }
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#DC2626'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#EF4444'}
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Dashboard Layout */}
      <div style={styles.dashboardLayout}>
        {/* Sidebar */}
        <aside style={styles.sidebar}>
          <h2 style={styles.sidebarTitle}>Menu Toko</h2>
          
          <nav>
            <ul style={styles.sidebarMenu}>
              {menuItems.map((item) => (
                <li key={item.id} style={styles.menuItem}>
                  <div
                    style={{
                      ...styles.menuLink,
                      ...(activeMenu === item.id ? styles.menuLinkActive : {})
                    }}
                    onClick={() => handleMenuClick(item.id)}
                    onMouseEnter={(e) => {
                      if (activeMenu !== item.id) {
                        e.currentTarget.style.backgroundColor = '#F9FAFB';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (activeMenu !== item.id) {
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }
                    }}
                  >
                    <span style={styles.menuIcon}>{item.icon}</span>
                    <span>{item.label}</span>
                  </div>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main style={styles.mainContent}>
          {/* Page Header */}
          <div style={styles.pageHeader}>
            <h1 style={styles.pageTitle}>Pengaturan Toko</h1>
            <button 
              style={styles.saveBtn}
              onClick={handleSaveSettings}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#16A34A'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#22C55E'}
            >
              Simpan Pengaturan
            </button>
          </div>

          {/* Settings Grid */}
          <div style={styles.settingsGrid}>
            {/* Store Information */}
            <div style={styles.settingCard}>
              <h2 style={styles.cardTitle}>
                <span style={styles.cardIcon}>🏪</span>
                Informasi Toko
              </h2>
              
              <div style={styles.formRow}>
                <div>
                  <label style={styles.label}>Nama Toko</label>
                  <input
                    type="text"
                    name="storeName"
                    value={storeSettings.storeName}
                    onChange={handleInputChange}
                    style={styles.input}
                    onFocus={(e) => e.target.style.borderColor = '#22C55E'}
                    onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
                  />
                </div>
                <div>
                  <label style={styles.label}>Nama Pemilik</label>
                  <input
                    type="text"
                    name="ownerName"
                    value={storeSettings.ownerName}
                    onChange={handleInputChange}
                    style={styles.input}
                    onFocus={(e) => e.target.style.borderColor = '#22C55E'}
                    onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
                  />
                </div>
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Deskripsi Toko</label>
                <textarea
                  name="storeDescription"
                  value={storeSettings.storeDescription}
                  onChange={handleInputChange}
                  style={styles.textarea}
                  onFocus={(e) => e.target.style.borderColor = '#22C55E'}
                  onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
                />
              </div>

              <div style={styles.formRow}>
                <div>
                  <label style={styles.label}>Nomor Telepon</label>
                  <input
                    type="tel"
                    name="phone"
                    value={storeSettings.phone}
                    onChange={handleInputChange}
                    style={styles.input}
                    onFocus={(e) => e.target.style.borderColor = '#22C55E'}
                    onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
                  />
                </div>
                <div>
                  <label style={styles.label}>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={storeSettings.email}
                    onChange={handleInputChange}
                    style={styles.input}
                    onFocus={(e) => e.target.style.borderColor = '#22C55E'}
                    onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
                  />
                </div>
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Alamat Toko</label>
                <textarea
                  name="address"
                  value={storeSettings.address}
                  onChange={handleInputChange}
                  style={styles.textarea}
                  onFocus={(e) => e.target.style.borderColor = '#22C55E'}
                  onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
                />
              </div>
            </div>

            {/* Payment Methods */}
            <div style={styles.settingCard}>
              <h2 style={styles.cardTitle}>
                <span style={styles.cardIcon}>💳</span>
                Metode Pembayaran
              </h2>
              
              <div style={styles.toggleSection}>
                <div style={styles.toggleItem}>
                  <div style={styles.toggleInfo}>
                    <div style={styles.toggleTitle}>Cash on Delivery (COD)</div>
                    <div style={styles.toggleDesc}>Pembayaran tunai saat barang diterima</div>
                  </div>
                  <div 
                    style={{
                      ...styles.toggle,
                      ...(storeSettings.acceptCOD ? styles.toggleActive : {})
                    }}
                    onClick={() => setStoreSettings(prev => ({...prev, acceptCOD: !prev.acceptCOD}))}
                  >
                    <div style={{
                      ...styles.toggleSlider,
                      ...(storeSettings.acceptCOD ? styles.toggleSliderActive : {})
                    }}></div>
                  </div>
                </div>

                <div style={styles.toggleItem}>
                  <div style={styles.toggleInfo}>
                    <div style={styles.toggleTitle}>QRIS</div>
                    <div style={styles.toggleDesc}>Pembayaran digital menggunakan QR Code</div>
                  </div>
                  <div 
                    style={{
                      ...styles.toggle,
                      ...(storeSettings.acceptQRIS ? styles.toggleActive : {})
                    }}
                    onClick={() => setStoreSettings(prev => ({...prev, acceptQRIS: !prev.acceptQRIS}))}
                  >
                    <div style={{
                      ...styles.toggleSlider,
                      ...(storeSettings.acceptQRIS ? styles.toggleSliderActive : {})
                    }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Notifications */}
            <div style={styles.settingCard}>
              <h2 style={styles.cardTitle}>
                <span style={styles.cardIcon}>🔔</span>
                Notifikasi
              </h2>
              
              <div style={styles.toggleSection}>
                <div style={styles.toggleItem}>
                  <div style={styles.toggleInfo}>
                    <div style={styles.toggleTitle}>Email Notifikasi</div>
                    <div style={styles.toggleDesc}>Terima notifikasi melalui email</div>
                  </div>
                  <div 
                    style={{
                      ...styles.toggle,
                      ...(storeSettings.emailNotifications ? styles.toggleActive : {})
                    }}
                    onClick={() => setStoreSettings(prev => ({...prev, emailNotifications: !prev.emailNotifications}))}
                  >
                    <div style={{
                      ...styles.toggleSlider,
                      ...(storeSettings.emailNotifications ? styles.toggleSliderActive : {})
                    }}></div>
                  </div>
                </div>

                <div style={styles.toggleItem}>
                  <div style={styles.toggleInfo}>
                    <div style={styles.toggleTitle}>Alert Pesanan Baru</div>
                    <div style={styles.toggleDesc}>Notifikasi saat ada pesanan masuk</div>
                  </div>
                  <div 
                    style={{
                      ...styles.toggle,
                      ...(storeSettings.orderAlerts ? styles.toggleActive : {})
                    }}
                    onClick={() => setStoreSettings(prev => ({...prev, orderAlerts: !prev.orderAlerts}))}
                  >
                    <div style={{
                      ...styles.toggleSlider,
                      ...(storeSettings.orderAlerts ? styles.toggleSliderActive : {})
                    }}></div>
                  </div>
                </div>

                <div style={styles.toggleItem}>
                  <div style={styles.toggleInfo}>
                    <div style={styles.toggleTitle}>Alert Stok Menipis</div>
                    <div style={styles.toggleDesc}>Notifikasi saat stok produk menipis</div>
                  </div>
                  <div 
                    style={{
                      ...styles.toggle,
                      ...(storeSettings.stockAlerts ? styles.toggleActive : {})
                    }}
                    onClick={() => setStoreSettings(prev => ({...prev, stockAlerts: !prev.stockAlerts}))}
                  >
                    <div style={{
                      ...styles.toggleSlider,
                      ...(storeSettings.stockAlerts ? styles.toggleSliderActive : {})
                    }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default GreenMartSellerSettings;