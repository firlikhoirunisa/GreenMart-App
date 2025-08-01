"use client";
import React, { useState } from 'react';
import {Header} from '../../../components/layout/Header';

const GreenMartOrderHistory = () => {
  const [cartCount, setCartCount] = useState(2);
  const [searchValue, setSearchValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Sample order history data
  const orderHistory = [
    { id: '#4152', date: '14 Juli, 2025', total: 'Rp 16.000', products: '(10 Produk)', status: 'Proses', statusColor: '#6B7280' },
    { id: '#5045', date: '27 Mei, 2025', total: 'Rp 10.000', products: '(1 Produk)', status: 'Dalam Perjalanan', statusColor: '#F59E0B' },
    { id: '#5028', date: '20 Mei, 2025', total: 'Rp 50.000', products: '(4 Produk)', status: 'Selesai', statusColor: '#22C55E' },
    { id: '#4600', date: '19 Mei, 2025', total: 'Rp 20.000', products: '(1 Produk)', status: 'Selesai', statusColor: '#22C55E' },
    { id: '#4152', date: '18 April, 2025', total: 'Rp 500.000', products: '(13 Produk)', status: 'Selesai', statusColor: '#22C55E' },
    { id: '#8811', date: '10 April, 2025', total: 'Rp 200.000', products: '(7 Produk)', status: 'Selesai', statusColor: '#22C55E' },
    { id: '#3536', date: '5 Maret, 2025', total: 'Rp 30.000', products: '(2 Produk)', status: 'Selesai', statusColor: '#22C55E' },
    { id: '#1374', date: '27 Februari, 2025', total: 'Rp 60.000', products: '(2 Produk)', status: 'Selesai', statusColor: '#22C55E' },
    { id: '#7791', date: '25 Februari, 2025', total: 'Rp 25.500', products: '(2 Produk)', status: 'Selesai', statusColor: '#22C55E' },
    { id: '#4846', date: '24 Januari, 2025', total: 'Rp 23.000', products: '(1 Produk)', status: 'Selesai', statusColor: '#22C55E' },
    { id: '#5948', date: '20 Januari, 2025', total: 'Rp 11.000', products: '(1 Produk)', status: 'Selesai', statusColor: '#22C55E' },
    { id: '#1577', date: '12 Januari, 2025', total: 'Rp 9.000', products: '(1 Produk)', status: 'Selesai', statusColor: '#22C55E' }
  ];

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      alert(`Mencari: ${searchValue}`);
    }
  };

  const handleViewDetail = (orderId) => {
    window.location.href = `/order-detail?id=${orderId}`;
  };

  const goBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = '/user/Homepage';
    }
  };

  const goHome = () => {
    window.location.href = '/user/Homepage';
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
    navigationContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '2rem'
    },
    breadcrumb: {
      cursor: 'pointer',
      color: '#6B7280',
      fontSize: '1.5rem',
      display: 'flex',
      alignItems: 'center'
    },
    homeButton: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      color: '#22C55E',
      cursor: 'pointer',
      fontSize: '0.875rem',
      fontWeight: 500,
      padding: '0.5rem 1rem',
      backgroundColor: 'white',
      borderRadius: '0.5rem',
      border: '1px solid #22C55E',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.2s ease',
      textDecoration: 'none'
    },
    historySection: {
      backgroundColor: 'white',
      borderRadius: '1rem',
      overflow: 'hidden',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      border: '1px solid #E5E7EB'
    },
    sectionHeader: {
      padding: '1.5rem',
      borderBottom: '1px solid #F3F4F6'
    },
    sectionTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#1F2937',
      margin: 0
    },
    tableContainer: {
      overflow: 'hidden'
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse'
    },
    tableHeader: {
      backgroundColor: '#F9FAFB'
    },
    tableHeaderRow: {
      borderBottom: '1px solid #E5E7EB'
    },
    tableHeaderCell: {
      padding: '1rem',
      textAlign: 'left',
      fontSize: '0.75rem',
      fontWeight: 600,
      color: '#6B7280',
      textTransform: 'uppercase',
      letterSpacing: '0.05em'
    },
    tableBody: {},
    tableRow: {
      borderBottom: '1px solid #F3F4F6',
      transition: 'background-color 0.2s'
    },
    tableCell: {
      padding: '1rem',
      verticalAlign: 'middle'
    },
    orderId: {
      fontWeight: 600,
      color: '#1F2937',
      fontSize: '0.875rem'
    },
    orderDate: {
      color: '#6B7280',
      fontSize: '0.875rem'
    },
    orderTotal: {
      fontWeight: 600,
      color: '#1F2937',
      fontSize: '0.875rem'
    },
    productCount: {
      color: '#6B7280',
      fontSize: '0.75rem',
      marginLeft: '0.25rem'
    },
    statusBadge: {
      padding: '0.25rem 0.75rem',
      borderRadius: '1rem',
      fontSize: '0.75rem',
      fontWeight: 500,
      textAlign: 'center'
    },
    detailLink: {
      color: '#22C55E',
      textDecoration: 'none',
      fontSize: '0.875rem',
      fontWeight: 500,
      cursor: 'pointer'
    },
    pagination: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '1.5rem',
      borderTop: '1px solid #F3F4F6'
    },
    paginationBtn: {
      width: '2.5rem',
      height: '2.5rem',
      border: '1px solid #E5E7EB',
      backgroundColor: 'white',
      borderRadius: '0.375rem',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '0.875rem',
      color: '#6B7280',
      transition: 'all 0.2s'
    },
    paginationBtnActive: {
      backgroundColor: '#22C55E',
      borderColor: '#22C55E',
      color: 'white'
    },
    paginationArrow: {
      width: '2.5rem',
      height: '2.5rem',
      border: '1px solid #E5E7EB',
      backgroundColor: 'white',
      borderRadius: '0.375rem',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '0.875rem',
      color: '#6B7280',
      transition: 'all 0.2s'
    }
  };

  return (
    <div style={styles.body}>
      <Header />
      {/* Main Content */}
      <div style={styles.container}>
        {/* Navigation Container */}
        <div style={styles.navigationContainer}>
          {/* Breadcrumb */}
          <div 
            style={styles.breadcrumb} 
            onClick={goBack}
            onMouseEnter={(e) => e.currentTarget.style.color = '#22C55E'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#6B7280'}
          >
            ← 
          </div>

          {/* Home Button */}
          <div 
            onClick={goHome}
            style={styles.homeButton}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#22C55E';
              e.currentTarget.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'white';
              e.currentTarget.style.color = '#22C55E';
            }}
          >
            <span>Kembali ke Beranda</span>
          </div>
        </div>

        {/* Order History Section */}
        <div style={styles.historySection}>
          {/* Section Header */}
          <div style={styles.sectionHeader}>
            <h1 style={styles.sectionTitle}>Riwayat Pesanan</h1>
          </div>

          {/* Table */}
          <div style={styles.tableContainer}>
            <table style={styles.table}>
              {/* Table Header */}
              <thead style={styles.tableHeader}>
                <tr style={styles.tableHeaderRow}>
                  <th style={{...styles.tableHeaderCell, textAlign: 'left'}}>ID PESANAN</th>
                  <th style={{...styles.tableHeaderCell, textAlign: 'left'}}>TANGGAL</th>
                  <th style={{...styles.tableHeaderCell, textAlign: 'left'}}>TOTAL</th>
                  <th style={{...styles.tableHeaderCell, textAlign: 'center'}}>STATUS</th>
                  <th style={{...styles.tableHeaderCell, textAlign: 'center'}}></th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody style={styles.tableBody}>
                {orderHistory.map((order, index) => (
                  <tr 
                    key={order.id} 
                    style={styles.tableRow}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F9FAFB'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
                  >
                    <td style={styles.tableCell}>
                      <div style={styles.orderId}>{order.id}</div>
                    </td>
                    <td style={styles.tableCell}>
                      <div style={styles.orderDate}>{order.date}</div>
                    </td>
                    <td style={styles.tableCell}>
                      <div style={styles.orderTotal}>
                        {order.total}
                        <span style={styles.productCount}>{order.products}</span>
                      </div>
                    </td>
                    <td style={{...styles.tableCell, textAlign: 'center'}}>
                      <span style={{
                        ...styles.statusBadge,
                        backgroundColor: order.statusColor === '#22C55E' ? '#DCFCE7' : 
                                       order.statusColor === '#F59E0B' ? '#FEF3C7' : '#F3F4F6',
                        color: order.statusColor
                      }}>
                        {order.status}
                      </span>
                    </td>
                    <td style={{...styles.tableCell, textAlign: 'center'}}>
                      <span 
                        style={styles.detailLink}
                        onClick={() => handleViewDetail(order.id)}
                        onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
                        onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
                      >
                        Lihat Detail
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div style={styles.pagination}>
            <button 
              style={styles.paginationArrow}
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#22C55E';
                e.currentTarget.style.color = '#22C55E';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#E5E7EB';
                e.currentTarget.style.color = '#6B7280';
              }}
            >
              ‹
            </button>
            
            {[1, 2, 3].map((page) => (
              <button 
                key={page}
                style={{
                  ...styles.paginationBtn,
                  ...(currentPage === page ? styles.paginationBtnActive : {})
                }}
                onClick={() => setCurrentPage(page)}
                onMouseEnter={(e) => {
                  if (currentPage !== page) {
                    e.currentTarget.style.borderColor = '#22C55E';
                    e.currentTarget.style.color = '#22C55E';
                  }
                }}
                onMouseLeave={(e) => {
                  if (currentPage !== page) {
                    e.currentTarget.style.borderColor = '#E5E7EB';
                    e.currentTarget.style.color = '#6B7280';
                  }
                }}
              >
                {page}
              </button>
            ))}
            
            <button 
              style={styles.paginationArrow}
              onClick={() => setCurrentPage(Math.min(3, currentPage + 1))}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#22C55E';
                e.currentTarget.style.color = '#22C55E';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#E5E7EB';
                e.currentTarget.style.color = '#6B7280';
              }}
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreenMartOrderHistory;