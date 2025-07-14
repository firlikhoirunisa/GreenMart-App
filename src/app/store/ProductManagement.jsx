import React, { useState } from 'react';

const GreenMartProductManagement = () => {
  const [searchValue, setSearchValue] = useState('');
  const [activeMenu, setActiveMenu] = useState('products');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedProducts, setSelectedProducts] = useState([]);

  // Sample product data with image URLs
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Tomat Merah',
      category: 'Sayuran Buah',
      price: 1000,
      stock: 25,
      sold: 145,
      status: 'active',
      imageUrl: 'https://static.vecteezy.com/system/resources/previews/035/214/085/large_2x/ai-generated-a-watercolored-bright-serene-image-of-a-traditional-bahay-kubo-ai-generated-free-photo.jpg',
      dateAdded: '2024-03-15'
    },
    {
      id: 2,
      name: 'Selada Hijau',
      category: 'Sayuran Hijau',
      price: 2200,
      stock: 15,
      sold: 89,
      status: 'active',
      imageUrl: 'https://www.shutterstock.com/image-photo/lettuce-leaf-isolated-on-white-600nw-1715395198.jpg',
      dateAdded: '2024-03-10'
    },
    {
      id: 3,
      name: 'Cabai Besar',
      category: 'Sayuran Buah',
      price: 1000,
      stock: 5,
      sold: 234,
      status: 'low_stock',
      imageUrl: 'https://alchetron.com/cdn/chili-pepper-82547b30-e1de-47d0-8b57-186c34a44fb-resize-750.jpg',
      dateAdded: '2024-03-08'
    },
    {
      id: 4,
      name: 'Kentang',
      category: 'Sayuran Umbi',
      price: 3000,
      stock: 0,
      sold: 67,
      status: 'out_of_stock',
      imageUrl: 'https://thumbs.dreamstime.com/b/potatoes-bunch-fresh-isolated-white-background-53261271.jpg',
      dateAdded: '2024-03-05'
    },
    {
      id: 5,
      name: 'Pakcoy',
      category: 'Sayuran Hijau',
      price: 5000,
      stock: 30,
      sold: 56,
      status: 'active',
      imageUrl: 'https://www.kampustani.com/wp-content/uploads/2020/11/Cara-Menanam-Sawi-Pakcoy-di-Polybag-Secara-Organik.jpg',
      dateAdded: '2024-03-01'
    }
  ]);

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      alert('Mencari produk: ' + searchValue);
    }
  };

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    if (menu === 'dashboard') {
      alert('Kembali ke Dashboard');
    } else {
      alert('Navigasi ke ' + menu);
    }
  };

  const handleAddProduct = () => {
    alert('Membuka form tambah produk baru');
  };

  const handleEditProduct = (productId) => {
    const product = products.find(p => p.id === productId);
    const newImageUrl = prompt('Masukkan URL gambar baru:', product.imageUrl || '');
    
    if (newImageUrl !== null) {
      setProducts(products.map(p => 
        p.id === productId 
          ? { ...p, imageUrl: newImageUrl }
          : p
      ));
    }
  };

  const handleDeleteProduct = (productId) => {
    if (window.confirm('Yakin ingin menghapus produk ini?')) {
      setProducts(products.filter(p => p.id !== productId));
      alert('Produk berhasil dihapus');
    }
  };

  const handleSelectProduct = (productId) => {
    if (selectedProducts.includes(productId)) {
      setSelectedProducts(selectedProducts.filter(id => id !== productId));
    } else {
      setSelectedProducts([...selectedProducts, productId]);
    }
  };

  const handleSelectAll = () => {
    if (selectedProducts.length === filteredProducts.length) {
      setSelectedProducts([]);
    } else {
      setSelectedProducts(filteredProducts.map(p => p.id));
    }
  };

  const handleImageError = (e) => {
    e.target.style.display = 'none';
    e.target.nextSibling.style.display = 'flex';
  };

  const handleImageLoad = (e) => {
    e.target.style.display = 'block';
    e.target.nextSibling.style.display = 'none';
  };

  // Filter products based on status
  const filteredProducts = products.filter(product => {
    if (filterStatus === 'all') return true;
    return product.status === filterStatus;
  });

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
    addProductBtn: {
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
    filterControls: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      marginBottom: '2rem'
    },
    filterSelect: {
      padding: '0.5rem 1rem',
      border: '1px solid #D1D5DB',
      borderRadius: '0.5rem',
      fontSize: '0.875rem',
      cursor: 'pointer'
    },
    productTable: {
      backgroundColor: 'white',
      borderRadius: '1rem',
      overflow: 'hidden',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      border: '1px solid #E5E7EB'
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
      textTransform: 'uppercase'
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
    productInfo: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    },
    productImage: {
      width: '3rem',
      height: '3rem',
      borderRadius: '0.5rem',
      objectFit: 'cover',
      border: '1px solid #E5E7EB'
    },
    productImageFallback: {
      width: '3rem',
      height: '3rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F9FAFB',
      borderRadius: '0.5rem',
      fontSize: '1.5rem',
      color: '#6B7280',
      border: '1px solid #E5E7EB'
    },
    productDetails: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.25rem'
    },
    productName: {
      fontWeight: 600,
      color: '#1F2937',
      fontSize: '0.875rem'
    },
    productCategory: {
      color: '#6B7280',
      fontSize: '0.75rem'
    },
    priceCell: {
      fontWeight: 600,
      color: '#1F2937'
    },
    stockCell: {
      fontWeight: 500
    },
    statusBadge: {
      padding: '0.25rem 0.75rem',
      borderRadius: '1rem',
      fontSize: '0.75rem',
      fontWeight: 500
    },
    statusActive: {
      backgroundColor: '#DCFCE7',
      color: '#15803D'
    },
    statusLowStock: {
      backgroundColor: '#FEF3C7',
      color: '#F59E0B'
    },
    statusOutOfStock: {
      backgroundColor: '#FEE2E2',
      color: '#DC2626'
    },
    actionButtons: {
      display: 'flex',
      gap: '0.5rem'
    },
    actionBtn: {
      padding: '0.25rem 0.5rem',
      border: '1px solid #D1D5DB',
      backgroundColor: 'white',
      borderRadius: '0.25rem',
      cursor: 'pointer',
      fontSize: '0.75rem',
      transition: 'all 0.2s'
    },
    editBtn: {
      color: '#3B82F6',
      borderColor: '#3B82F6'
    },
    deleteBtn: {
      color: '#EF4444',
      borderColor: '#EF4444'
    },
    checkbox: {
      width: '1rem',
      height: '1rem',
      cursor: 'pointer'
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
            <h1 style={styles.pageTitle}>Manajemen Produk</h1>
            <button 
              style={styles.addProductBtn}
              onClick={handleAddProduct}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#16A34A'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#22C55E'}
            >
              + Tambah Produk
            </button>
          </div>

          {/* Filter Controls */}
          <div style={styles.filterControls}>
            <select 
              style={styles.filterSelect}
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="all">Semua Status</option>
              <option value="active">Aktif</option>
              <option value="low_stock">Stok Menipis</option>
              <option value="out_of_stock">Stok Habis</option>
            </select>
          </div>

          {/* Product Table */}
          <div style={styles.productTable}>
            <table style={styles.table}>
              {/* Table Header */}
              <thead style={styles.tableHeader}>
                <tr style={styles.tableHeaderRow}>
                  <th style={styles.tableHeaderCell}>
                    <input 
                      type="checkbox" 
                      style={styles.checkbox}
                      checked={selectedProducts.length === filteredProducts.length && filteredProducts.length > 0}
                      onChange={handleSelectAll}
                    />
                  </th>
                  <th style={styles.tableHeaderCell}>Produk</th>
                  <th style={styles.tableHeaderCell}>Harga</th>
                  <th style={styles.tableHeaderCell}>Stok</th>
                  <th style={styles.tableHeaderCell}>Terjual</th>
                  <th style={styles.tableHeaderCell}>Status</th>
                  <th style={styles.tableHeaderCell}>Aksi</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody style={styles.tableBody}>
                {filteredProducts.map((product) => (
                  <tr 
                    key={product.id} 
                    style={styles.tableRow}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F9FAFB'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
                  >
                    <td style={styles.tableCell}>
                      <input 
                        type="checkbox" 
                        style={styles.checkbox}
                        checked={selectedProducts.includes(product.id)}
                        onChange={() => handleSelectProduct(product.id)}
                      />
                    </td>
                    <td style={styles.tableCell}>
                      <div style={styles.productInfo}>
                        <div style={{position: 'relative'}}>
                          <img 
                            src={product.imageUrl}
                            alt={product.name}
                            style={styles.productImage}
                            onError={handleImageError}
                            onLoad={handleImageLoad}
                          />
                          <div 
                            style={{
                              ...styles.productImageFallback,
                              display: 'none'
                            }}
                          >
                            📦
                          </div>
                        </div>
                        <div style={styles.productDetails}>
                          <div style={styles.productName}>{product.name}</div>
                          <div style={styles.productCategory}>{product.category}</div>
                        </div>
                      </div>
                    </td>
                    <td style={{...styles.tableCell, ...styles.priceCell}}>
                      Rp.{product.price.toLocaleString()}
                    </td>
                    <td style={{...styles.tableCell, ...styles.stockCell}}>
                      <span style={{
                        color: product.stock === 0 ? '#EF4444' : 
                               product.stock <= 10 ? '#F59E0B' : '#22C55E'
                      }}>
                        {product.stock}
                      </span>
                    </td>
                    <td style={styles.tableCell}>{product.sold}</td>
                    <td style={styles.tableCell}>
                      <span style={{
                        ...styles.statusBadge,
                        ...(product.status === 'active' ? styles.statusActive :
                            product.status === 'low_stock' ? styles.statusLowStock :
                            styles.statusOutOfStock)
                      }}>
                        {product.status === 'active' ? 'Aktif' :
                         product.status === 'low_stock' ? 'Stok Menipis' :
                         'Stok Habis'}
                      </span>
                    </td>
                    <td style={styles.tableCell}>
                      <div style={styles.actionButtons}>
                        <button 
                          style={{...styles.actionBtn, ...styles.editBtn}}
                          onClick={() => handleEditProduct(product.id)}
                          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#EFF6FF'}
                          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
                        >
                          Edit
                        </button>
                        <button 
                          style={{...styles.actionBtn, ...styles.deleteBtn}}
                          onClick={() => handleDeleteProduct(product.id)}
                          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#FEF2F2'}
                          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
                        >
                          Hapus
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default GreenMartProductManagement;