"use client";
import { redirect } from 'next/navigation';
import React, { useState } from 'react';

const GreenMartHomepage = () => {
  const [cartCount, setCartCount] = useState(0);
  const [searchValue, setSearchValue] = useState('');

  const handleAddToCart = (e, productName) => {
    e.stopPropagation();
    setCartCount(cartCount + 1);
    
    // Add animation effect
    const button = e.currentTarget;
    button.style.transform = 'scale(0.9)';
    setTimeout(() => {
      button.style.transform = 'scale(1)';
    }, 150);
  };

  const handleProductClick = (productName) => {
    redirect("ProductDetail")
  };

  const handleCategoryClick = (categoryName) => {
    alert(`Navigasi ke halaman kategori: ${categoryName}`);
  };

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      alert(`Mencari: ${searchValue}`);
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
    locationBar: {
      textAlign: 'right',
      padding: '0.5rem'
    },
    locationDropdown: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      color: '#6B7280',
      fontSize: '0.875rem',
      cursor: 'pointer'
    },
    hero: {
      background: '#e9ecef',
      padding: '4rem 0',
      borderRadius: '0 0 2rem 2rem',
      margin: '0 1rem'
    },
    heroContainer: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '0 2rem',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      alignItems: 'center',
      gap: '4rem'
    },
    heroContent: {},
    welcome: {
      color: '#22C55E',
      fontSize: '0.875rem',
      fontWeight: 600,
      marginBottom: '0.5rem'
    },
    organic: {
      color: '#6B7280',
      fontSize: '0.875rem',
      marginBottom: '1.5rem'
    },
    heroTitle: {
      fontSize: '3rem',
      fontWeight: 'bold',
      color: '#1F2937',
      marginBottom: '1.5rem',
      margin: '0 0 1.5rem 0',
      lineHeight: 1.2
    },
    shopNowBtn: {
      background: 'linear-gradient(135deg, #22C55E 0%, #16A34A 100%)',
      color: 'white',
      padding: '1rem 2rem',
      border: 'none',
      borderRadius: '0.75rem',
      fontWeight: 600,
      fontSize: '1rem',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(34, 197, 94, 0.3)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem'
    },
    heroImage: {
      textAlign: 'center'
    },
    heroEmoji: {
      fontSize: '15rem',
      opacity: 0.8
    },
    features: {
      padding: '2rem 0',
      background: 'white'
    },
    featuresContainer: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '0 2rem',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '2rem'
    },
    featureItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem'
    },
    featureIcon: {
      width: '2.5rem',
      height: '2.5rem',
      background: '#DCFCE7',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.25rem'
    },
    featureText: {},
    featureTitle: {
      fontSize: '0.875rem',
      fontWeight: 600,
      color: '#1F2937',
      marginBottom: '0.25rem',
      margin: '0 0 0.25rem 0'
    },
    featureDesc: {
      fontSize: '0.75rem',
      color: '#6B7280',
      margin: 0
    },
    categories: {
      padding: '3rem 0',
      background: '#FAFAFA'
    },
    categoriesContainer: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '0 2rem'
    },
    sectionHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '2rem'
    },
    sectionTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#1F2937',
      margin: 0
    },
    viewAll: {
      color: '#22C55E',
      fontSize: '0.875rem',
      textDecoration: 'none',
      fontWeight: 500,
      cursor: 'pointer'
    },
    categoriesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(6, 1fr)',
      gap: '1.5rem'
    },
    categoryCard: {
      background: 'white',
      border: '2px solid #E5E7EB',
      borderRadius: '1rem',
      padding: '2rem 1rem',
      textAlign: 'center',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
    },
    categoryIcon: {
      width: '4rem',
      height: '4rem',
      margin: '0 auto 1.5rem',
      background: 'linear-gradient(135deg, #DCFCE7 0%, #BBF7D0 100%)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '2rem'
    },
    categoryName: {
      fontSize: '1rem',
      fontWeight: 600,
      color: '#1F2937',
      marginBottom: '0.5rem',
      margin: '0 0 0.5rem 0'
    },
    categoryCount: {
      fontSize: '0.875rem',
      color: '#6B7280',
      margin: 0
    },
    products: {
      padding: '3rem 0',
      background: 'white'
    },
    productsContainer: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '0 2rem'
    },
    productsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '1.5rem',
      marginBottom: '2rem'
    },
    productCard: {
      background: 'white',
      border: '1px solid #E5E7EB',
      borderRadius: '0.5rem',
      overflow: 'hidden',
      cursor: 'pointer',
      transition: 'all 0.2s',
      position: 'relative'
    },
    productBadge: {
      position: 'absolute',
      top: '0.5rem',
      left: '0.5rem',
      background: '#EF4444',
      color: 'white',
      fontSize: '0.75rem',
      padding: '0.25rem 0.5rem',
      borderRadius: '0.25rem',
      fontWeight: 500
    },
    productImage: {
      width: '100%',
      height: '200px',
      background: '#F3F4F6',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      borderRadius: '0.5rem 0.5rem 0 0'
    },
    productInfo: {
      padding: '1rem'
    },
    productName: {
      fontSize: '0.875rem',
      fontWeight: 500,
      color: '#1F2937',
      marginBottom: '0.5rem',
      margin: '0 0 0.5rem 0'
    },
    productPrice: {
      fontSize: '1rem',
      fontWeight: 'bold',
      color: '#1F2937',
      marginBottom: '0.5rem',
      margin: '0 0 0.5rem 0'
    },
    productOldPrice: {
      fontSize: '0.75rem',
      color: '#6B7280',
      textDecoration: 'line-through',
      marginLeft: '0.5rem'
    },
    productRating: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.25rem'
    },
    stars: {
      color: '#FCD34D',
      fontSize: '0.75rem'
    },
    ratingText: {
      fontSize: '0.75rem',
      color: '#6B7280'
    },
    addBtn: {
      position: 'absolute',
      bottom: '1rem',
      right: '1rem',
      width: '2rem',
      height: '2rem',
      background: '#22C55E',
      color: 'white',
      border: 'none',
      borderRadius: '50%',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1rem',
      transition: 'background-color 0.2s'
    },
    seeMoreContainer: {
      textAlign: 'center'
    },
    seeMoreBtn: {
      background: '#22C55E',
      color: 'white',
      padding: '0.75rem 2rem',
      border: 'none',
      borderRadius: '0.5rem',
      fontWeight: 600,
      cursor: 'pointer',
      transition: 'background-color 0.2s'
    }
  };

  const categories = [
    { icon: '🥬', name: 'Sayuran Hijau', count: '165 Produk' },
    { icon: '🍅', name: 'Sayuran Buah', count: '165 Produk' },
    { icon: '🍆', name: 'Sayuran Umbi', count: '165 Produk' },
    { icon: '🥕', name: 'Sayuran Kacang', count: '165 Produk' },
    { icon: '🥦', name: 'Sayuran Bunga', count: '165 Produk' },
    { icon: '🌽', name: 'Sayuran Biji', count: '165 Produk' }
  ];

  const products = [
    { 
      id: 1, 
      image: 'https://www.shutterstock.com/image-photo/lettuce-leaf-isolated-on-white-600nw-1715395198.jpg',
      name: 'Selada Hijau', 
      price: 'Rp.3.000', 
      oldPrice: 'Rp.2.200', 
      rating: '★★★★☆', 
      ratingText: '', 
      badge: 'Diskon 26%' 
    },
    { 
      id: 2, 
      image: 'https://thumbs.dreamstime.com/b/potatoes-bunch-fresh-isolated-white-background-53261271.jpg',
      name: 'Kentang', 
      price: 'Rp.3.000', 
      rating: '★★★★☆', 
      ratingText: '' 
    },
    { 
      id: 3, 
      image: 'https://www.kampustani.com/wp-content/uploads/2020/11/Cara-Menanam-Sawi-Pakcoy-di-Polybag-Secara-Organik.jpg',
      name: 'Pakcoy', 
      price: 'Rp.5.000', 
      rating: '★★★★☆', 
      ratingText: '' 
    },
    { 
      id: 4, 
      image: 'https://alchetron.com/cdn/chili-pepper-82547b30-e1de-47d0-8b57-186c34a44fb-resize-750.jpg',
      name: 'Cabai Besar', 
      price: 'Rp.1.000', 
      rating: '★★★★☆', 
      ratingText: '' 
    },
    { 
      id: 5, 
      image: 'https://static.vecteezy.com/system/resources/previews/035/214/085/large_2x/ai-generated-a-watercolored-bright-serene-image-of-a-traditional-bahay-kubo-ai-generated-free-photo.jpg',
      name: 'Tomat Merah', 
      price: 'Rp.1.000', 
      rating: '★★★★☆', 
      ratingText: '' 
    },
    { 
      id: 6, 
      image: 'https://thumbs.dreamstime.com/b/bloemkool-54330893.jpg',
      name: 'Kembang Kol', 
      price: 'Rp.2.000', 
      rating: '★★★★☆', 
      ratingText: '' 
    },
    { 
      id: 7, 
      image: 'https://www.cnagrochem.com/images/9_1723618477761.webp',
      name: 'Jagung Manis', 
      price: 'Rp.8.000', 
      rating: '★★★★☆', 
      ratingText: '' 
    },
    { 
      id: 8, 
      image: 'https://tse1.mm.bing.net/th/id/OIP.vG3ObmhV2gM87G6UHOFakQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3',
      name: 'Timun Segar', 
      price: 'Rp.2.500', 
      rating: '★★★★☆', 
      ratingText: '' 
    }
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
        
        <div style={styles.locationBar}>
          <div style={styles.locationDropdown}>
            📍 Dikirim ke Yogyakarta ▼
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContainer}>
          <div style={styles.heroContent}>
            <div style={styles.welcome}>SELAMAT DATANG DI GREENMART</div>
            <div style={styles.organic}>100% ORGANIK</div>
            <h1 style={styles.heroTitle}>Sayuran Segar</h1>
            <button 
              style={styles.shopNowBtn}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#16A34A'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#22C55E'}
            >
              Belanja Sekarang →
            </button>
          </div>
          <div style={styles.heroImage}>
            <img 
              src="/Image/vegetables-homepage.jpg"
              alt="Fresh Vegetables Basket"
              style={{
                width: '100%',
                maxWidth: '600px',
                height: 'auto'
              }}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={styles.features}>
        <div style={styles.featuresContainer}>
          <div style={styles.featureItem}>
            <div style={styles.featureIcon}>🚚</div>
            <div style={styles.featureText}>
              <h3 style={styles.featureTitle}>Gratis Ongkir</h3>
              <p style={styles.featureDesc}>Gratis untuk pesanan di atas Rp 60.000</p>
            </div>
          </div>
          <div style={styles.featureItem}>
            <div style={styles.featureIcon}>💬</div>
            <div style={styles.featureText}>
              <h3 style={styles.featureTitle}>Layanan Pelanggan 24/7</h3>
              <p style={styles.featureDesc}>Akses langsung ke dukungan</p>
            </div>
          </div>
          <div style={styles.featureItem}>
            <div style={styles.featureIcon}>🔒</div>
            <div style={styles.featureText}>
              <h3 style={styles.featureTitle}>100% Pembayaran Aman</h3>
              <p style={styles.featureDesc}>Kami menjamin keamanan uang Anda</p>
            </div>
          </div>
          <div style={styles.featureItem}>
            <div style={styles.featureIcon}>💰</div>
            <div style={styles.featureText}>
              <h3 style={styles.featureTitle}>Garansi Uang Kembali</h3>
              <p style={styles.featureDesc}>Garansi uang kembali 30 hari</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section style={styles.categories}>
        <div style={styles.categoriesContainer}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Belanja Berdasarkan Kategori Teratas</h2>
            <span style={styles.viewAll}>Lihat Semua →</span>
          </div>
          <div style={styles.categoriesGrid}>
            {categories.map((category, index) => (
              <div 
                key={index}
                style={styles.categoryCard}
                onClick={() => handleCategoryClick(category.name)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#22C55E';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#E5E7EB';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={styles.categoryIcon}>{category.icon}</div>
                <div style={styles.categoryName}>{category.name}</div>
                <div style={styles.categoryCount}>{category.count}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section style={styles.products}>
        <div style={styles.productsContainer}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Produk Unggulan</h2>
          </div>
          <div style={styles.productsGrid}>
            {products.map((product) => (
              <div 
                key={product.id}
                style={styles.productCard}
                onClick={() => handleProductClick(product.name)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {product.badge && (
                  <div style={styles.productBadge}>{product.badge}</div>
                )}
                <div style={styles.productImage}>
                  <img 
                    src={product.image} 
                    alt={product.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>
                <div style={styles.productInfo}>
                  <div style={styles.productName}>{product.name}</div>
                  <div style={styles.productPrice}>
                    {product.price}
                    {product.oldPrice && (
                      <span style={styles.productOldPrice}>{product.oldPrice}</span>
                    )}
                  </div>
                  <div style={styles.productRating}>
                    <span style={styles.stars}>{product.rating}</span>
                    {product.ratingText && (
                      <span style={styles.ratingText}>{product.ratingText}</span>
                    )}
                  </div>
                </div>
                <button 
                  style={{
                    ...styles.addBtn,
                    background: '#22C55E',
                    borderRadius: '0.5rem',
                    width: '2.5rem',
                    height: '2.5rem'
                  }}
                  onClick={(e) => handleAddToCart(e, product.name)}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#16A34A'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#22C55E'}
                >
                  🛒
                </button>
              </div>
            ))}
          </div>
          
          <div style={styles.seeMoreContainer}>
            <button 
              style={styles.seeMoreBtn}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#16A34A'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#22C55E'}
            >
              Lihat Lebih Banyak
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GreenMartHomepage;