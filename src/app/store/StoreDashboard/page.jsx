"use client";
import React, { useState } from 'react';

const GreenMartSellerDashboard = () => {
  const [searchValue, setSearchValue] = useState('');
  const [activeMenu, setActiveMenu] = useState('dashboard');

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      alert('Mencari: ' + searchValue);
    }
  };

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    if (menu === 'products') {
      alert('Navigasi ke Manajemen Produk');
    } else if (menu === 'orders') {
      alert('Navigasi ke Manajemen Pesanan');
    } else if (menu === 'settings') {
      alert('Navigasi ke Pengaturan');
    } else {
      alert('Navigasi ke ' + menu);
    }
  };

  const handleLogout = () => {
    if (window.confirm('Yakin ingin keluar dari dashboard?')) {
      alert('Logout berhasil. Kembali ke halaman login...');
    }
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
    headerIcon: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      color: '#374151',
      cursor: 'pointer',
      fontSize: '0.875rem',
      fontWeight: 500
    },
    storeIcon: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      color: '#22C55E'
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
      marginBottom: '2rem'
    },
    pageTitle: {
      fontSize: '1.75rem',
      fontWeight: 'bold',
      color: '#1F2937',
      margin: 0,
      marginBottom: '0.5rem'
    },
    pageSubtitle: {
      color: '#6B7280',
      fontSize: '0.875rem'
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '1.5rem',
      marginBottom: '2rem'
    },
    statCard: {
      backgroundColor: 'white',
      padding: '1.5rem',
      borderRadius: '1rem',
      border: '1px solid #E5E7EB',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
    },
    statIcon: {
      fontSize: '2rem',
      marginBottom: '1rem',
      display: 'block'
    },
    statValue: {
      fontSize: '1.75rem',
      fontWeight: 'bold',
      color: '#1F2937',
      marginBottom: '0.25rem'
    },
    statLabel: {
      color: '#6B7280',
      fontSize: '0.875rem',
      marginBottom: '0.5rem'
    },
    statChange: {
      fontSize: '0.75rem',
      fontWeight: 500
    },
    statChangePositive: {
      color: '#22C55E'
    },
    contentGrid: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr',
      gap: '2rem',
      marginBottom: '2rem'
    },
    card: {
      backgroundColor: 'white',
      borderRadius: '1rem',
      border: '1px solid #E5E7EB',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
    },
    cardHeader: {
      padding: '1.5rem',
      borderBottom: '1px solid #F3F4F6',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    viewAllLink: {
      color: '#22C55E',
      fontSize: '0.875rem',
      textDecoration: 'none',
      fontWeight: 500,
      cursor: 'pointer'
    },
    cardTitle: {
      fontSize: '1.125rem',
      fontWeight: 600,
      color: '#1F2937',
      margin: 0
    },
    cardBody: {
      padding: '1.5rem'
    },
    orderItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0.75rem 0',
      borderBottom: '1px solid #F3F4F6'
    },
    orderInfo: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.25rem'
    },
    orderId: {
      fontWeight: 600,
      color: '#1F2937',
      fontSize: '0.875rem'
    },
    orderCustomer: {
      color: '#6B7280',
      fontSize: '0.75rem'
    },
    orderRight: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: '0.25rem'
    },
    orderTotal: {
      fontWeight: 600,
      color: '#1F2937',
      fontSize: '0.875rem'
    },
    statusBadge: {
      padding: '0.25rem 0.5rem',
      borderRadius: '0.5rem',
      fontSize: '0.75rem',
      fontWeight: 500
    },
    statusPending: {
      backgroundColor: '#FEF3C7',
      color: '#F59E0B'
    },
    statusProcessing: {
      backgroundColor: '#DBEAFE',
      color: '#3B82F6'
    },
    statusShipped: {
      backgroundColor: '#D1FAE5',
      color: '#10B981'
    },
    statusCompleted: {
      backgroundColor: '#E5E7EB',
      color: '#6B7280'
    },
    productItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0.75rem 0',
      borderBottom: '1px solid #F3F4F6'
    },
    productName: {
      fontWeight: 500,
      color: '#1F2937',
      fontSize: '0.875rem'
    },
    productStats: {
      color: '#6B7280',
      fontSize: '0.75rem'
    },
    productRevenue: {
      fontWeight: 600,
      color: '#22C55E',
      fontSize: '0.875rem'
    },
    alertSection: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '2rem'
    },
    alertCard: {
      backgroundColor: 'white',
      borderRadius: '1rem',
      border: '1px solid #E5E7EB',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
    },
    alertItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0.75rem 0',
      borderBottom: '1px solid #F3F4F6'
    },
    alertName: {
      fontWeight: 500,
      color: '#1F2937',
      fontSize: '0.875rem'
    },
    stockBadge: {
      padding: '0.25rem 0.5rem',
      borderRadius: '0.5rem',
      fontSize: '0.75rem',
      fontWeight: 500
    },
    stockLow: {
      backgroundColor: '#FEF3C7',
      color: '#F59E0B'
    },
    stockOut: {
      backgroundColor: '#FEE2E2',
      color: '#DC2626'
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
              placeholder="Cari di dashboard..."
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
              onClick={handleLogout}
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
            <h1 style={styles.pageTitle}>Dashboard Toko</h1>
          </div>

          {/* Statistics Cards */}
          <div style={styles.statsGrid}>
            <div style={styles.statCard}>
              <span style={{...styles.statIcon, color: '#F59E0B'}}>💰</span>
              <div style={styles.statValue}>Rp.245.000</div>
              <div style={styles.statLabel}>Penjualan Hari Ini</div>
            </div>

            <div style={styles.statCard}>
              <span style={{...styles.statIcon, color: '#6B7280'}}>📋</span>
              <div style={styles.statValue}>8</div>
              <div style={styles.statLabel}>Pesanan Baru</div>
            </div>

            <div style={styles.statCard}>
              <span style={{...styles.statIcon, color: '#D97706'}}>📦</span>
              <div style={styles.statValue}>24</div>
              <div style={styles.statLabel}>Total Produk</div>
            </div>
          </div>

          {/* Recent Orders */}
          <div style={styles.card}>
            <div style={styles.cardHeader}>
              <h3 style={styles.cardTitle}>Pesanan Terbaru</h3>
              <a 
                href="#" 
                style={styles.viewAllLink}
                onClick={(e) => {
                  e.preventDefault();
                  alert('Navigasi ke halaman pesanan');
                }}
              >
                Lihat Semua
              </a>
            </div>
            <div style={styles.cardBody}>
              <div style={styles.orderItem}>
                <div style={styles.orderInfo}>
                  <div style={styles.orderId}>#3933</div>
                  <div style={styles.orderCustomer}>Ayu Dian</div>
                </div>
                <div style={styles.orderRight}>
                  <div style={styles.orderTotal}>Rp.25.000</div>
                  <span style={{...styles.statusBadge, ...styles.statusPending}}>
                    Pending
                  </span>
                </div>
              </div>

              <div style={styles.orderItem}>
                <div style={styles.orderInfo}>
                  <div style={styles.orderId}>#3932</div>
                  <div style={styles.orderCustomer}>Budi Santoso</div>
                </div>
                <div style={styles.orderRight}>
                  <div style={styles.orderTotal}>Rp.18.000</div>
                  <span style={{...styles.statusBadge, ...styles.statusProcessing}}>
                    Proses
                  </span>
                </div>
              </div>

              <div style={styles.orderItem}>
                <div style={styles.orderInfo}>
                  <div style={styles.orderId}>#3931</div>
                  <div style={styles.orderCustomer}>Sari Dewi</div>
                </div>
                <div style={styles.orderRight}>
                  <div style={styles.orderTotal}>Rp.42.000</div>
                  <span style={{...styles.statusBadge, ...styles.statusShipped}}>
                    Dikirim
                  </span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default GreenMartSellerDashboard;