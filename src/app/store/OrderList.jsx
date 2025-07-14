import React, { useState } from 'react';

const GreenMartOrderManagement = () => {
  const [searchValue, setSearchValue] = useState('');
  const [activeMenu, setActiveMenu] = useState('orders');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedOrders, setSelectedOrders] = useState([]);

  // Sample order data
  const [orders, setOrders] = useState([
    {
      id: '#3933',
      customer: 'Ayu Dian',
      customerPhone: '0812-3456-7890',
      items: [
        { name: 'Tomat Merah', qty: 5, price: 1000 },
        { name: 'Selada Hijau', qty: 2, price: 2200 }
      ],
      total: 9400,
      status: 'pending',
      paymentMethod: 'COD',
      orderDate: '2025-07-14 10:30',
      address: 'Jl. Hidup Makmur No 45, Sleman, Yogyakarta'
    },
    {
      id: '#3932',
      customer: 'Budi Santoso',
      customerPhone: '0856-9876-5432',
      items: [
        { name: 'Cabai Rawit', qty: 10, price: 500 },
        { name: 'Kentang', qty: 3, price: 3000 }
      ],
      total: 14000,
      status: 'processing',
      paymentMethod: 'QRIS',
      orderDate: '2025-07-13 09:15',
      address: 'Jl. Merdeka No 12, Bantul, Yogyakarta'
    },
    {
      id: '#3931',
      customer: 'Sari Dewi',
      customerPhone: '0878-2468-1357',
      items: [
        { name: 'Pakcoy', qty: 4, price: 5000 }
      ],
      total: 20000,
      status: 'shipped',
      paymentMethod: 'COD',
      orderDate: '2025-07-12 16:45',
      address: 'Jl. Sudirman No 88, Yogyakarta'
    },
    {
      id: '#3930',
      customer: 'Rahman Ahmad',
      customerPhone: '0895-1357-2468',
      items: [
        { name: 'Tomat Merah', qty: 3, price: 1000 },
        { name: 'Selada Hijau', qty: 1, price: 2200 }
      ],
      total: 5200,
      status: 'completed',
      paymentMethod: 'QRIS',
      orderDate: '2025-07-11 14:20',
      address: 'Jl. Pahlawan No 56, Sleman, Yogyakarta'
    },
    {
      id: '#3929',
      customer: 'Lina Sari',
      customerPhone: '0813-9876-1234',
      items: [
        { name: 'Cabai Rawit', qty: 5, price: 500 }
      ],
      total: 2500,
      status: 'cancelled',
      paymentMethod: 'COD',
      orderDate: '2025-07-10 11:10',
      address: 'Jl. Gatot Subroto No 23, Bantul, Yogyakarta'
    }
  ]);

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      alert('Mencari pesanan: ' + searchValue);
    }
  };

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    if (menu === 'dashboard') {
      alert('Kembali ke Dashboard');
    } else if (menu === 'products') {
      alert('Ke Manajemen Produk');
    } else {
      alert('Navigasi ke ' + menu);
    }
  };

  const handleStatusUpdate = (orderId, newStatus) => {
    setOrders(orders.map(order => 
      order.id === orderId 
        ? { ...order, status: newStatus }
        : order
    ));
    alert('Status pesanan ' + orderId + ' diubah ke ' + newStatus);
  };

  const handleViewDetail = (orderId) => {
    alert('Lihat detail pesanan ' + orderId);
  };

  const handlePrintLabel = (orderId) => {
    alert('Print label pengiriman untuk ' + orderId);
  };

  const handleBulkAction = (action) => {
    if (selectedOrders.length === 0) {
      alert('Pilih pesanan terlebih dahulu');
      return;
    }
    alert(action + ' untuk ' + selectedOrders.length + ' pesanan');
  };

  const handleSelectOrder = (orderId) => {
    if (selectedOrders.includes(orderId)) {
      setSelectedOrders(selectedOrders.filter(id => id !== orderId));
    } else {
      setSelectedOrders([...selectedOrders, orderId]);
    }
  };

  const handleSelectAll = () => {
    if (selectedOrders.length === filteredOrders.length) {
      setSelectedOrders([]);
    } else {
      setSelectedOrders(filteredOrders.map(o => o.id));
    }
  };

  // Filter orders based on status
  const filteredOrders = orders.filter(order => {
    if (filterStatus === 'all') return true;
    return order.status === filterStatus;
  });

  // Get status counts
  const statusCounts = {
    pending: orders.filter(o => o.status === 'pending').length,
    processing: orders.filter(o => o.status === 'processing').length,
    shipped: orders.filter(o => o.status === 'shipped').length,
    completed: orders.filter(o => o.status === 'completed').length,
    cancelled: orders.filter(o => o.status === 'cancelled').length
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
    statsCards: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gap: '1rem',
      marginBottom: '2rem'
    },
    statCard: {
      backgroundColor: 'white',
      padding: '1rem',
      borderRadius: '0.5rem',
      border: '1px solid #E5E7EB',
      textAlign: 'center'
    },
    statNumber: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '0.25rem'
    },
    statLabel: {
      fontSize: '0.75rem',
      color: '#6B7280',
      textTransform: 'uppercase'
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
    bulkActions: {
      display: 'flex',
      gap: '0.5rem'
    },
    bulkBtn: {
      padding: '0.5rem 1rem',
      border: '1px solid #D1D5DB',
      backgroundColor: 'white',
      borderRadius: '0.5rem',
      fontSize: '0.75rem',
      cursor: 'pointer',
      transition: 'all 0.2s'
    },
    orderTable: {
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
      verticalAlign: 'top'
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
    customerName: {
      color: '#1F2937',
      fontSize: '0.875rem'
    },
    customerPhone: {
      color: '#6B7280',
      fontSize: '0.75rem'
    },
    orderDate: {
      color: '#6B7280',
      fontSize: '0.75rem'
    },
    itemsList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.25rem'
    },
    itemRow: {
      fontSize: '0.75rem',
      color: '#374151'
    },
    totalAmount: {
      fontWeight: 600,
      color: '#1F2937',
      fontSize: '0.875rem'
    },
    paymentMethod: {
      fontSize: '0.75rem',
      color: '#6B7280'
    },
    statusBadge: {
      padding: '0.25rem 0.75rem',
      borderRadius: '1rem',
      fontSize: '0.75rem',
      fontWeight: 500,
      textAlign: 'center',
      minWidth: '80px'
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
    statusCancelled: {
      backgroundColor: '#FEE2E2',
      color: '#DC2626'
    },
    actionButtons: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem'
    },
    actionBtn: {
      padding: '0.25rem 0.75rem',
      border: '1px solid #D1D5DB',
      backgroundColor: 'white',
      borderRadius: '0.25rem',
      cursor: 'pointer',
      fontSize: '0.75rem',
      transition: 'all 0.2s',
      textAlign: 'center'
    },
    statusSelect: {
      padding: '0.25rem 0.5rem',
      border: '1px solid #D1D5DB',
      borderRadius: '0.25rem',
      fontSize: '0.75rem',
      cursor: 'pointer',
      marginBottom: '0.5rem'
    },
    detailBtn: {
      color: '#3B82F6',
      borderColor: '#3B82F6'
    },
    printBtn: {
      color: '#059669',
      borderColor: '#059669'
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
              placeholder="Cari pesanan..."
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
            <h1 style={styles.pageTitle}>Daftar Pesanan</h1>
          </div>

          {/* Status Stats Cards */}
          <div style={styles.statsCards}>
            <div style={styles.statCard}>
              <div style={{...styles.statNumber, color: '#F59E0B'}}>{statusCounts.pending}</div>
              <div style={styles.statLabel}>Pending</div>
            </div>
            <div style={styles.statCard}>
              <div style={{...styles.statNumber, color: '#3B82F6'}}>{statusCounts.processing}</div>
              <div style={styles.statLabel}>Diproses</div>
            </div>
            <div style={styles.statCard}>
              <div style={{...styles.statNumber, color: '#10B981'}}>{statusCounts.shipped}</div>
              <div style={styles.statLabel}>Dikirim</div>
            </div>
            <div style={styles.statCard}>
              <div style={{...styles.statNumber, color: '#6B7280'}}>{statusCounts.completed}</div>
              <div style={styles.statLabel}>Selesai</div>
            </div>
            <div style={styles.statCard}>
              <div style={{...styles.statNumber, color: '#DC2626'}}>{statusCounts.cancelled}</div>
              <div style={styles.statLabel}>Dibatalkan</div>
            </div>
          </div>

          {/* Filter Controls */}
          <div style={styles.filterControls}>
            <select 
              style={styles.filterSelect}
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="all">Semua Status</option>
              <option value="pending">Pending</option>
              <option value="processing">Diproses</option>
              <option value="shipped">Dikirim</option>
              <option value="completed">Selesai</option>
              <option value="cancelled">Dibatalkan</option>
            </select>

            {selectedOrders.length > 0 && (
              <div style={styles.bulkActions}>
                <button 
                  style={styles.bulkBtn}
                  onClick={() => handleBulkAction('Update Status')}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F3F4F6'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
                >
                  Update Status
                </button>
                <button 
                  style={styles.bulkBtn}
                  onClick={() => handleBulkAction('Print Labels')}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F3F4F6'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
                >
                  Print Labels
                </button>
              </div>
            )}
          </div>

          {/* Orders Table */}
          <div style={styles.orderTable}>
            <table style={styles.table}>
              {/* Table Header */}
              <thead style={styles.tableHeader}>
                <tr style={styles.tableHeaderRow}>
                  <th style={styles.tableHeaderCell}>
                    <input 
                      type="checkbox" 
                      style={styles.checkbox}
                      checked={selectedOrders.length === filteredOrders.length && filteredOrders.length > 0}
                      onChange={handleSelectAll}
                    />
                  </th>
                  <th style={styles.tableHeaderCell}>Pesanan</th>
                  <th style={styles.tableHeaderCell}>Produk</th>
                  <th style={styles.tableHeaderCell}>Total</th>
                  <th style={styles.tableHeaderCell}>Status</th>
                  <th style={styles.tableHeaderCell}>Aksi</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody style={styles.tableBody}>
                {filteredOrders.map((order) => (
                  <tr 
                    key={order.id} 
                    style={styles.tableRow}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F9FAFB'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
                  >
                    <td style={styles.tableCell}>
                      <input 
                        type="checkbox" 
                        style={styles.checkbox}
                        checked={selectedOrders.includes(order.id)}
                        onChange={() => handleSelectOrder(order.id)}
                      />
                    </td>
                    <td style={styles.tableCell}>
                      <div style={styles.orderInfo}>
                        <div style={styles.orderId}>{order.id}</div>
                        <div style={styles.customerName}>{order.customer}</div>
                        <div style={styles.customerPhone}>{order.customerPhone}</div>
                        <div style={styles.orderDate}>{order.orderDate}</div>
                      </div>
                    </td>
                    <td style={styles.tableCell}>
                      <div style={styles.itemsList}>
                        {order.items.map((item, index) => (
                          <div key={index} style={styles.itemRow}>
                            {item.name} x{item.qty}
                          </div>
                        ))}
                      </div>
                    </td>
                    <td style={styles.tableCell}>
                      <div style={styles.totalAmount}>Rp.{order.total.toLocaleString()}</div>
                      <div style={styles.paymentMethod}>{order.paymentMethod}</div>
                    </td>
                    <td style={styles.tableCell}>
                      <span style={{
                        ...styles.statusBadge,
                        ...(order.status === 'pending' ? styles.statusPending :
                            order.status === 'processing' ? styles.statusProcessing :
                            order.status === 'shipped' ? styles.statusShipped :
                            order.status === 'completed' ? styles.statusCompleted :
                            styles.statusCancelled)
                      }}>
                        {order.status === 'pending' ? 'Pending' :
                         order.status === 'processing' ? 'Diproses' :
                         order.status === 'shipped' ? 'Dikirim' :
                         order.status === 'completed' ? 'Selesai' :
                         'Dibatalkan'}
                      </span>
                    </td>
                    <td style={styles.tableCell}>
                      <div style={styles.actionButtons}>
                        {order.status === 'pending' && (
                          <select 
                            style={styles.statusSelect}
                            onChange={(e) => handleStatusUpdate(order.id, e.target.value)}
                            defaultValue=""
                          >
                            <option value="" disabled>Update Status</option>
                            <option value="processing">Proses</option>
                            <option value="cancelled">Batalkan</option>
                          </select>
                        )}
                        {order.status === 'processing' && (
                          <select 
                            style={styles.statusSelect}
                            onChange={(e) => handleStatusUpdate(order.id, e.target.value)}
                            defaultValue=""
                          >
                            <option value="" disabled>Update Status</option>
                            <option value="shipped">Kirim</option>
                            <option value="cancelled">Batalkan</option>
                          </select>
                        )}
                        {order.status === 'shipped' && (
                          <select 
                            style={styles.statusSelect}
                            onChange={(e) => handleStatusUpdate(order.id, e.target.value)}
                            defaultValue=""
                          >
                            <option value="" disabled>Update Status</option>
                            <option value="completed">Selesai</option>
                          </select>
                        )}
                        <button 
                          style={{...styles.actionBtn, ...styles.detailBtn}}
                          onClick={() => handleViewDetail(order.id)}
                          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#EFF6FF'}
                          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
                        >
                          Detail
                        </button>
                        {(order.status === 'processing' || order.status === 'shipped') && (
                          <button 
                            style={{...styles.actionBtn, ...styles.printBtn}}
                            onClick={() => handlePrintLabel(order.id)}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F0FDF4'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
                          >
                            Print Label
                          </button>
                        )}
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

export default GreenMartOrderManagement;