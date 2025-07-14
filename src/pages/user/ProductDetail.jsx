import React, { useState } from 'react';

const GreenMartDetail = ({ productId = 1 }) => {
  const [cartCount, setCartCount] = useState(0);
  const [searchValue, setSearchValue] = useState('');
  const [quantity, setQuantity] = useState(5);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Product data - in real app, this would be fetched based on productId
  const products = [
    {
      id: 1,
      name: 'Selada Hijau',
      price: 2200,
      originalPrice: 3000,
      discount: '26% Off',
      rating: '★★★★★',
      reviewCount: '4 Review',
      availability: 'Tersedia',
      store: 'Pak Saleh',
      category: 'Sayuran Hijau',
      description: 'Selada Hijau Segar dan Bergizi untuk Hidangan Sehat Anda. Nikmati selada hijau berkualitas tinggi yang dipetik langsung dari kebun lokal untuk menjamin kesegarannya. Kaya akan vitamin A, C, dan serat, selada hijau sangat cocok untuk salad, isian sandwich, atau pelengkap makanan Anda. Daunnya yang renyah dan rasanya yang segar memberikan kenikmatan tersendiri dalam setiap gigitan. Pesan sekarang untuk mendapatkan bahan berkualitas terbaik untuk menu sehat keluarga Anda!',
      images: [
        'https://www.shutterstock.com/image-photo/lettuce-leaf-isolated-on-white-600nw-1715395198.jpg',
        'https://static.vecteezy.com/system/resources/previews/035/214/085/large_2x/ai-generated-a-watercolored-bright-serene-image-of-a-traditional-bahay-kubo-ai-generated-free-photo.jpg',
        'https://thumbs.dreamstime.com/b/bloemkool-54330893.jpg',
        'https://www.cnagrochem.com/images/9_1723618477761.webp'
      ]
    }
  ];

  const product = products.find(p => p.id === productId) || products[0];

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      alert(`Mencari: ${searchValue}`);
    }
  };

  const handleAddToCart = () => {
    setCartCount(cartCount + quantity);
    setShowModal(true);
    
    // Store in localStorage
    const cartData = {
      product: product.name,
      price: product.price,
      quantity: quantity,
      image: product.images[0]
    };
    localStorage.setItem('greenmart-cart-item', JSON.stringify(cartData));
  };

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const goBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      alert('Kembali ke halaman utama');
    }
  };

  const increaseQuantity = () => {
    if (quantity < 50) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(currentImageIndex === 0 ? product.images.length - 1 : currentImageIndex - 1);
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
      fontSize: '1.5rem'
    },
    productDetail: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '4rem',
      marginBottom: '2rem'
    },
    imageGallery: {
      display: 'flex',
      gap: '1rem'
    },
    thumbnailList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem'
    },
    thumbnail: {
      width: '5rem',
      height: '5rem',
      border: '2px solid #E5E7EB',
      borderRadius: '0.5rem',
      cursor: 'pointer',
      transition: 'border-color 0.2s',
      overflow: 'hidden'
    },
    thumbnailActive: {
      borderColor: '#22C55E'
    },
    thumbnailImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    mainImageContainer: {
      flex: 1,
      position: 'relative'
    },
    mainImage: {
      width: '100%',
      height: '500px',
      border: '1px solid #E5E7EB',
      borderRadius: '0.5rem',
      background: '#FAFAFA',
      overflow: 'hidden'
    },
    mainImageImg: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    navigationArrows: {
      position: 'absolute',
      right: '1rem',
      top: '50%',
      transform: 'translateY(-50%)',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem'
    },
    navArrow: {
      width: '2.5rem',
      height: '2.5rem',
      border: '1px solid #E5E7EB',
      borderRadius: '0.25rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      fontSize: '1rem',
      color: '#6B7280',
      background: 'white'
    },
    productInfo: {
      padding: '1rem 0'
    },
    productTitle: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#1F2937',
      marginBottom: '0.5rem',
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      margin: '0 0 0.5rem 0'
    },
    availabilityBadge: {
      background: '#DCFCE7',
      color: '#15803D',
      padding: '0.25rem 0.75rem',
      borderRadius: '1rem',
      fontSize: '0.75rem',
      fontWeight: 500
    },
    rating: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      marginBottom: '1rem'
    },
    stars: {
      color: '#FCD34D',
      fontSize: '1rem'
    },
    reviewCount: {
      color: '#6B7280',
      fontSize: '0.875rem'
    },
    priceSection: {
      marginBottom: '1.5rem'
    },
    originalPrice: {
      color: '#9CA3AF',
      textDecoration: 'line-through',
      fontSize: '1rem',
      marginRight: '0.5rem'
    },
    currentPrice: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#1F2937',
      marginRight: '0.5rem'
    },
    discount: {
      color: '#EF4444',
      fontSize: '0.875rem',
      fontWeight: 500
    },
    storeInfo: {
      background: '#F9FAFB',
      padding: '1rem',
      borderRadius: '0.5rem',
      marginBottom: '1.5rem'
    },
    storeName: {
      fontWeight: 600,
      color: '#1F2937'
    },
    storeBadge: {
      background: '#DCFCE7',
      color: '#15803D',
      padding: '0.125rem 0.5rem',
      borderRadius: '0.25rem',
      fontSize: '0.75rem',
      fontWeight: 500,
      marginLeft: '0.5rem'
    },
    description: {
      color: '#4B5563',
      fontSize: '0.875rem',
      lineHeight: 1.6,
      marginBottom: '2rem'
    },
    purchaseSection: {
      marginBottom: '1.5rem'
    },
    quantitySelector: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      marginBottom: '1.5rem'
    },
    quantityControl: {
      display: 'flex',
      alignItems: 'center',
      border: '1px solid #D1D5DB',
      borderRadius: '0.5rem',
      overflow: 'hidden'
    },
    quantityBtn: {
      width: '2.5rem',
      height: '2.5rem',
      border: 'none',
      background: 'white',
      color: '#6B7280',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.125rem'
    },
    quantityInput: {
      width: '3rem',
      height: '2.5rem',
      border: 'none',
      textAlign: 'center',
      fontWeight: 600,
      outline: 'none'
    },
    purchaseButtons: {
      display: 'flex',
      gap: '1rem'
    },
    addToCartBtn: {
      flex: 1,
      background: '#22C55E',
      color: 'white',
      padding: '0.75rem 1.5rem',
      border: 'none',
      borderRadius: '0.5rem',
      fontWeight: 600,
      cursor: 'pointer',
      transition: 'background-color 0.2s',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem'
    },
    wishlistBtn: {
      width: '3rem',
      height: '3rem',
      border: '1px solid #D1D5DB',
      background: 'white',
      borderRadius: '0.5rem',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.25rem',
      color: '#6B7280',
      transition: 'all 0.2s'
    },
    wishlistBtnActive: {
      background: '#FEF2F2',
      borderColor: '#EF4444',
      color: '#EF4444'
    },
    categoryInfo: {
      marginBottom: '1rem'
    },
    categoryLabel: {
      color: '#6B7280',
      fontSize: '0.875rem',
      marginBottom: '0.25rem'
    },
    categoryValue: {
      color: '#1F2937',
      fontWeight: 500
    },
    backLink: {
      color: '#22C55E',
      textDecoration: 'none',
      fontSize: '0.875rem',
      fontWeight: 500,
      cursor: 'pointer'
    },
    modal: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000
    },
    modalContent: {
      background: 'white',
      borderRadius: '1rem',
      padding: '2rem',
      maxWidth: '20rem',
      margin: '1rem',
      textAlign: 'center'
    },
    modalEmoji: {
      fontSize: '2.5rem',
      marginBottom: '1rem'
    },
    modalTitle: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      color: '#166534',
      marginBottom: '0.5rem'
    },
    modalText: {
      color: '#6B7280',
      marginBottom: '1rem'
    },
    modalBtn: {
      backgroundColor: '#22C55E',
      color: 'white',
      padding: '0.5rem 1.5rem',
      border: 'none',
      borderRadius: '0.5rem',
      cursor: 'pointer',
      transition: 'background-color 0.15s ease'
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
        <div style={styles.breadcrumb} onClick={goBack}>
          ← 
        </div>

        {/* Product Detail */}
        <div style={styles.productDetail}>
          {/* Image Gallery */}
          <div style={styles.imageGallery}>
            <div style={styles.thumbnailList}>
              {product.images.map((image, index) => (
                <div 
                  key={index}
                  style={{
                    ...styles.thumbnail,
                    ...(index === currentImageIndex ? styles.thumbnailActive : {})
                  }}
                  onClick={() => setCurrentImageIndex(index)}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = '#22C55E'}
                  onMouseLeave={(e) => {
                    if (index !== currentImageIndex) {
                      e.currentTarget.style.borderColor = '#E5E7EB';
                    }
                  }}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} ${index + 1}`}
                    style={styles.thumbnailImage}
                  />
                </div>
              ))}
            </div>
            
            <div style={styles.mainImageContainer}>
              <div style={styles.mainImage}>
                <img 
                  src={product.images[currentImageIndex]} 
                  alt={product.name}
                  style={styles.mainImageImg}
                />
              </div>
              
              <div style={styles.navigationArrows}>
                <div 
                  style={styles.navArrow} 
                  onClick={prevImage}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#22C55E';
                    e.currentTarget.style.color = '#22C55E';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#E5E7EB';
                    e.currentTarget.style.color = '#6B7280';
                  }}
                >
                  ↑
                </div>
                <div 
                  style={styles.navArrow} 
                  onClick={nextImage}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#22C55E';
                    e.currentTarget.style.color = '#22C55E';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#E5E7EB';
                    e.currentTarget.style.color = '#6B7280';
                  }}
                >
                  ↓
                </div>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div style={styles.productInfo}>
            <h1 style={styles.productTitle}>
              {product.name}
              <span style={styles.availabilityBadge}>{product.availability}</span>
            </h1>
            
            <div style={styles.rating}>
              <span style={styles.stars}>{product.rating}</span>
              <span style={styles.reviewCount}>{product.reviewCount}</span>
            </div>
            
            <div style={styles.priceSection}>
              <span style={styles.originalPrice}>Rp.{product.originalPrice.toLocaleString()}</span>
              <span style={styles.currentPrice}>Rp.{product.price.toLocaleString()}</span>
              <span style={styles.discount}>{product.discount}</span>
            </div>
            
            <div style={styles.storeInfo}>
              <div style={styles.storeName}>
                Toko: <span style={styles.storeBadge}>{product.store}</span>
              </div>
            </div>
            
            <div style={styles.description}>
              {product.description}
            </div>
            
            <div style={styles.purchaseSection}>
              <div style={styles.quantitySelector}>
                <div style={styles.quantityControl}>
                  <button 
                    style={styles.quantityBtn} 
                    onClick={decreaseQuantity}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#F3F4F6';
                      e.currentTarget.style.color = '#22C55E';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'white';
                      e.currentTarget.style.color = '#6B7280';
                    }}
                  >
                    -
                  </button>
                  <input 
                    type="number" 
                    style={styles.quantityInput} 
                    value={quantity} 
                    onChange={(e) => setQuantity(Math.max(1, Math.min(50, parseInt(e.target.value) || 1)))}
                    min="1" 
                    max="50"
                  />
                  <button 
                    style={styles.quantityBtn} 
                    onClick={increaseQuantity}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#F3F4F6';
                      e.currentTarget.style.color = '#22C55E';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'white';
                      e.currentTarget.style.color = '#6B7280';
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
              
              <div style={styles.purchaseButtons}>
                <button 
                  style={styles.addToCartBtn} 
                  onClick={handleAddToCart}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#16A34A'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#22C55E'}
                >
                  🛒 Add to Cart
                </button>
                <button 
                  style={{
                    ...styles.wishlistBtn,
                    ...(isWishlisted ? styles.wishlistBtnActive : {})
                  }}
                  onClick={toggleWishlist}
                  onMouseEnter={(e) => {
                    if (!isWishlisted) {
                      e.currentTarget.style.borderColor = '#EF4444';
                      e.currentTarget.style.color = '#EF4444';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isWishlisted) {
                      e.currentTarget.style.borderColor = '#D1D5DB';
                      e.currentTarget.style.color = '#6B7280';
                    }
                  }}
                >
                  {isWishlisted ? '❤️' : '♡'}
                </button>
              </div>
            </div>
            
            <div style={styles.categoryInfo}>
              <div style={styles.categoryLabel}>Kategori:</div>
              <div style={styles.categoryValue}>{product.category}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <div style={styles.modalEmoji}>🛒</div>
            <h3 style={styles.modalTitle}>Berhasil Ditambahkan!</h3>
            <p style={styles.modalText}>Produk telah ditambahkan ke keranjang Anda.</p>
            <button 
              onClick={closeModal} 
              style={styles.modalBtn}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#16A34A'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#22C55E'}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GreenMartDetail;