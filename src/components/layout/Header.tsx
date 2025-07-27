"use client"
import React, { useState } from 'react';
import { redirect } from 'next/navigation';

interface HeaderProps {
  setCartCount?: (query: string) => void;
}

export const Header = ({ setCartCount } : HeaderProps ) => {

  const [cartCount] = useState(2);
  const [searchValue, setSearchValue] = useState('');
  
  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      alert(`Mencari: ${searchValue}`);
    }
  };

  const goWishlist = () => {
    redirect("Wishlist")
  };

  const goCart = () => {
    redirect("Cart")
  };

  const goStore = () => {
    redirect("/store/StoreLogin")
  };

  const goUser = () => {
    redirect("Profile")
  };

  const styles = {
    body: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif',
      backgroundColor: '#F9FAFB',
      lineHeight: 1.6,
      margin: 0,
      padding: 0
    } as React.CSSProperties,
    header: {
      background: 'white',
      borderBottom: '1px solid #E5E7EB',
      padding: '1rem 0',
      position: 'sticky' as 'sticky',
      top: 0,
      zIndex: 100
    } as React.CSSProperties,
    headerContainer: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '0 2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '2rem'
    } as React.CSSProperties,
    logo: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#15803D'
    } as React.CSSProperties,
    logoMart: {
      color: '#4ADE80',
      fontWeight: 300
    } as React.CSSProperties,
    searchContainer: {
      flex: 1,
      maxWidth: '400px',
      position: 'relative'
    } as React.CSSProperties,
    searchInput: {
      width: '100%',
      padding: '0.75rem 1rem 0.75rem 2.5rem',
      border: '1px solid #D1D5DB',
      borderRadius: '0.5rem',
      fontSize: '0.875rem',
      outline: 'none',
      boxSizing: 'border-box'
    } as React.CSSProperties,
    searchIcon: {
      position: 'absolute' as 'absolute',
      left: '0.75rem',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#6B7280'
    } as React.CSSProperties,
    headerActions: {
      display: 'flex',
      alignItems: 'center',
      gap: '2rem'
    } as React.CSSProperties,
    headerIcon: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      color: '#374151',
      fontSize: '0.875rem',
      fontWeight: 500
    } as React.CSSProperties,
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
      position: 'absolute' as 'absolute',
      top: '-0.25rem',
      right: '-0.25rem'
    } as React.CSSProperties,
    wishlistIcon: {
      fontSize: '1.25rem',
      color: '#6B7280'
    } as React.CSSProperties,
    cartContainer: {
      position: 'relative' as 'relative',
      display: 'flex',
      alignItems: 'center',
      gap: '0.25rem'
    } as React.CSSProperties,
    storeIcon: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    } as React.CSSProperties,
    userIcon: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    } as React.CSSProperties,
    container: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '2rem'
    } as React.CSSProperties,
    breadcrumb: {
      marginBottom: '2rem',
      cursor: 'pointer',
      color: '#6B7280',
      fontSize: '1.5rem',
      display: 'flex',
      alignItems: 'center'
    } as React.CSSProperties,
    orderHeader: {
      backgroundColor: 'white',
      borderRadius: '1rem',
      padding: '1.5rem',
      marginBottom: '1.5rem',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
    } as React.CSSProperties,
    orderTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#1F2937',
      marginBottom: '0.5rem'
    } as React.CSSProperties,
    orderMeta: {
      color: '#6B7280',
      fontSize: '0.875rem'
    } as React.CSSProperties,
    orderContent: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr',
      gap: '1.5rem'
    } as React.CSSProperties,
    mainContent: {
      backgroundColor: 'white',
      borderRadius: '1rem',
      overflow: 'hidden',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
    } as React.CSSProperties,
    addressSection: {
      padding: '1.5rem',
      borderBottom: '1px solid #F3F4F6'
    } as React.CSSProperties,
    addressGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '2rem'
    } as React.CSSProperties,
    addressBlock: {
      marginBottom: '1rem'
    } as React.CSSProperties,
    addressTitle: {
      fontSize: '0.875rem',
      fontWeight: 600,
      color: '#6B7280',
      textTransform: 'uppercase' as 'uppercase',
      marginBottom: '0.75rem'
    } as React.CSSProperties,
    addressContent: {
      color: '#1F2937'
    } as React.CSSProperties,
    storeName: {
      fontWeight: 600,
      marginBottom: '0.25rem'
    } as React.CSSProperties,
    customerName: {
      fontWeight: 600,
      marginBottom: '0.25rem'
    } as React.CSSProperties,
    contactInfo: {
      fontSize: '0.875rem',
      color: '#6B7280',
      marginTop: '0.5rem'
    } as React.CSSProperties,
    statusProgress: {
      padding: '1.5rem',
      borderBottom: '1px solid #F3F4F6'
    } as React.CSSProperties,
    progressBar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '1rem'
    } as React.CSSProperties,
    progressStep: {
      display: 'flex',
      flexDirection: 'column' as 'column',
      alignItems: 'center',
      position: 'relative' as 'relative'
    } as React.CSSProperties,
    stepCircle: {
      width: '2.5rem',
      height: '2.5rem',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 600,
      fontSize: '0.875rem',
      marginBottom: '0.5rem'
    } as React.CSSProperties,
    stepCircleActive: {
      backgroundColor: '#22C55E',
      color: 'white'
    } as React.CSSProperties,
    stepCircleInactive: {
      backgroundColor: '#E5E7EB',
      color: '#9CA3AF'
    } as React.CSSProperties,
    stepLabel: {
      fontSize: '0.75rem',
      color: '#6B7280',
      textAlign: 'center' as 'center'
    } as React.CSSProperties,
    progressLine: {
      position: 'absolute' as 'absolute',
      top: '1.25rem',
      left: '50%',
      right: '-50%',
      height: '2px',
      backgroundColor: '#22C55E',
      zIndex: -1
    } as React.CSSProperties,
    orderItemsSection: {
      padding: '1.5rem'
    } as React.CSSProperties,
    itemsTable: {
      width: '100%'
    } as React.CSSProperties,
    tableHeader: {
      borderBottom: '1px solid #F3F4F6',
      marginBottom: '1rem'
    } as React.CSSProperties,
    tableHeaderRow: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr 1fr',
      gap: '1rem',
      paddingBottom: '1rem'
    } as React.CSSProperties,
    tableHeaderCell: {
      fontSize: '0.75rem',
      fontWeight: 600,
      color: '#6B7280',
      textTransform: 'uppercase' as 'uppercase'
    } as React.CSSProperties,
    tableRow: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr 1fr',
      gap: '1rem',
      alignItems: 'center',
      paddingBottom: '1rem',
      marginBottom: '1rem',
      borderBottom: '1px solid #F9FAFB'
    } as React.CSSProperties,
    productInfo: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    } as React.CSSProperties,
    productImage: {
      width: '3rem',
      height: '3rem',
      borderRadius: '0.5rem',
      objectFit: 'cover' as 'cover'
    } as React.CSSProperties,
    productName: {
      fontWeight: 500,
      color: '#1F2937'
    } as React.CSSProperties,
    tableCell: {
      color: '#1F2937',
      fontWeight: 500
    } as React.CSSProperties,
    sidebar: {
      backgroundColor: 'white',
      borderRadius: '1rem',
      padding: '1.5rem',
      // height: 'fit-content', // <-- INI YANG ERROR
      height: 'auto', // Ganti dengan 'auto' atau hapus jika tidak perlu
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
    } as React.CSSProperties,
    sidebarTitle: {
      fontSize: '1.125rem',
      fontWeight: 600,
      color: '#1F2937',
      marginBottom: '1rem'
    } as React.CSSProperties,
    summaryGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1rem',
      marginBottom: '1.5rem'
    } as React.CSSProperties,
    summaryItem: {
      textAlign: 'center' as 'center',
      padding: '0.75rem',
      backgroundColor: '#F9FAFB',
      borderRadius: '0.5rem'
    } as React.CSSProperties,
    summaryLabel: {
      fontSize: '0.75rem',
      color: '#6B7280',
      textTransform: 'uppercase' as 'uppercase',
      marginBottom: '0.25rem'
    } as React.CSSProperties,
    summaryValue: {
      fontSize: '0.875rem',
      fontWeight: 600,
      color: '#1F2937'
    } as React.CSSProperties,
    pricingSection: {
      borderTop: '1px solid #F3F4F6',
      paddingTop: '1rem'
    } as React.CSSProperties,
    pricingRow: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '0.5rem'
    } as React.CSSProperties,
    pricingLabel: {
      color: '#6B7280',
      fontSize: '0.875rem'
    } as React.CSSProperties,
    pricingValue: {
      fontWeight: 500,
      color: '#1F2937'
    } as React.CSSProperties,
    totalRow: {
      display: 'flex',
      justifyContent: 'space-between',
      paddingTop: '0.75rem',
      borderTop: '1px solid #F3F4F6',
      marginTop: '0.75rem'
    } as React.CSSProperties,
    totalLabel: {
      fontWeight: 600,
      color: '#1F2937'
    } as React.CSSProperties,
    totalValue: {
      fontWeight: 'bold',
      color: '#1F2937',
      fontSize: '1.125rem'
    } as React.CSSProperties
  };

  return (
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
                e.currentTarget.style.borderColor = '#22C55E';
                e.currentTarget.style.boxShadow = '0 0 0 3px rgba(34, 197, 94, 0.1)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = '#D1D5DB';
                e.currentTarget.style.boxShadow = 'none';
              }}
            />
          </div>
          
          <div style={styles.headerActions}>
            <div onClick={goWishlist} style={{...styles.headerIcon, ...styles.wishlistIcon}}>
              ♡
            </div>
            <div style={styles.cartContainer}>
              <div onClick={goCart} style={styles.headerIcon}>
                🛒
              </div>
              <span style={styles.cartBadge}>{cartCount}</span>
            </div>
            <div onClick={goStore} style={{...styles.headerIcon, ...styles.storeIcon}}>
              🏪 <span>Toko</span>
            </div>
            <div onClick={goUser} style={{...styles.headerIcon, ...styles.userIcon}}>
              👤 <span>User</span>
            </div>
          </div>
        </div>
      </header>
  );
};