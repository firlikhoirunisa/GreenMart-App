"use client";
import {Header} from '../../../components/layout/Header';

const GreenMartOrderDetail = () => {

  // Sample order data
  const orderData = {
    orderNumber: '#4152',
    date: 'Juli 14, 2025',
    totalProducts: '2 Produk',
    status: 'Dikirim',
    paymentMethod: 'Cash on Delivery',
    billingAddress: {
      storeName: 'Toko Sayur Segar',
      address: 'Jln.Canan-Wedi, Klaten, Jateng 53456'
    },
    shippingAddress: {
      name: 'Ayu Dian',
      address: 'Jl. Pandhawa, Tegal Rejo, Sariharjo, Sleman, D.I Yogyakarta 55234'
    },
    contact: {
      storeEmail: 'pak.soleh@gmail.com',
      storePhone: '08125729087',
      customerEmail: 'ayudian@gmail.com',
      customerPhone: '081234567890'
    },
    items: [
      {
        id: 1,
        name: 'Tomat Merah',
        price: 1000,
        quantity: 5,
        subtotal: 5000,
        image: 'https://static.vecteezy.com/system/resources/previews/035/214/085/large_2x/ai-generated-a-watercolored-bright-serene-image-of-a-traditional-bahay-kubo-ai-generated-free-photo.jpg'
      },
      {
        id: 2,
        name: 'Selada Hijau',
        price: 2200,
        quantity: 5,
        subtotal: 11000,
        image: 'https://www.shutterstock.com/image-photo/lettuce-leaf-isolated-on-white-600nw-1715395198.jpg'
      }
    ],
    pricing: {
      subtotal: 16000,
      discount: 0,
      shipping: 0,
      total: 16000
    }
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
    breadcrumb: {
      marginBottom: '2rem',
      cursor: 'pointer',
      color: '#6B7280',
      fontSize: '1.5rem',
      display: 'flex',
      alignItems: 'center'
    },
    orderHeader: {
      backgroundColor: 'white',
      borderRadius: '1rem',
      padding: '1.5rem',
      marginBottom: '1.5rem',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
    },
    orderTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#1F2937',
      marginBottom: '0.5rem'
    },
    orderMeta: {
      color: '#6B7280',
      fontSize: '0.875rem'
    },
    orderContent: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr',
      gap: '1.5rem'
    },
    mainContent: {
      backgroundColor: 'white',
      borderRadius: '1rem',
      overflow: 'hidden',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
    },
    addressSection: {
      padding: '1.5rem',
      borderBottom: '1px solid #F3F4F6'
    },
    addressGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '2rem'
    },
    addressBlock: {
      marginBottom: '1rem'
    },
    addressTitle: {
      fontSize: '0.875rem',
      fontWeight: 600,
      color: '#6B7280',
      textTransform: 'uppercase',
      marginBottom: '0.75rem'
    },
    addressContent: {
      color: '#1F2937'
    },
    storeName: {
      fontWeight: 600,
      marginBottom: '0.25rem'
    },
    customerName: {
      fontWeight: 600,
      marginBottom: '0.25rem'
    },
    contactInfo: {
      fontSize: '0.875rem',
      color: '#6B7280',
      marginTop: '0.5rem'
    },
    statusProgress: {
      padding: '1.5rem',
      borderBottom: '1px solid #F3F4F6'
    },
    progressBar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '1rem'
    },
    progressStep: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative'
    },
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
    },
    stepCircleActive: {
      backgroundColor: '#22C55E',
      color: 'white'
    },
    stepCircleInactive: {
      backgroundColor: '#E5E7EB',
      color: '#9CA3AF'
    },
    stepLabel: {
      fontSize: '0.75rem',
      color: '#6B7280',
      textAlign: 'center'
    },
    progressLine: {
      position: 'absolute',
      top: '1.25rem',
      left: '50%',
      right: '-50%',
      height: '2px',
      backgroundColor: '#22C55E',
      zIndex: -1
    },
    orderItemsSection: {
      padding: '1.5rem'
    },
    itemsTable: {
      width: '100%'
    },
    tableHeader: {
      borderBottom: '1px solid #F3F4F6',
      marginBottom: '1rem'
    },
    tableHeaderRow: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr 1fr',
      gap: '1rem',
      paddingBottom: '1rem'
    },
    tableHeaderCell: {
      fontSize: '0.75rem',
      fontWeight: 600,
      color: '#6B7280',
      textTransform: 'uppercase'
    },
    tableRow: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr 1fr',
      gap: '1rem',
      alignItems: 'center',
      paddingBottom: '1rem',
      marginBottom: '1rem',
      borderBottom: '1px solid #F9FAFB'
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
      objectFit: 'cover'
    },
    productName: {
      fontWeight: 500,
      color: '#1F2937'
    },
    tableCell: {
      color: '#1F2937',
      fontWeight: 500
    },
    sidebar: {
      backgroundColor: 'white',
      borderRadius: '1rem',
      padding: '1.5rem',
      height: 'fit-content',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
    },
    sidebarTitle: {
      fontSize: '1.125rem',
      fontWeight: 600,
      color: '#1F2937',
      marginBottom: '1rem'
    },
    summaryGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1rem',
      marginBottom: '1.5rem'
    },
    summaryItem: {
      textAlign: 'center',
      padding: '0.75rem',
      backgroundColor: '#F9FAFB',
      borderRadius: '0.5rem'
    },
    summaryLabel: {
      fontSize: '0.75rem',
      color: '#6B7280',
      textTransform: 'uppercase',
      marginBottom: '0.25rem'
    },
    summaryValue: {
      fontSize: '0.875rem',
      fontWeight: 600,
      color: '#1F2937'
    },
    pricingSection: {
      borderTop: '1px solid #F3F4F6',
      paddingTop: '1rem'
    },
    pricingRow: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '0.5rem'
    },
    pricingLabel: {
      color: '#6B7280',
      fontSize: '0.875rem'
    },
    pricingValue: {
      fontWeight: 500,
      color: '#1F2937'
    },
    totalRow: {
      display: 'flex',
      justifyContent: 'space-between',
      paddingTop: '0.75rem',
      borderTop: '1px solid #F3F4F6',
      marginTop: '0.75rem'
    },
    totalLabel: {
      fontWeight: 600,
      color: '#1F2937'
    },
    totalValue: {
      fontWeight: 'bold',
      color: '#1F2937',
      fontSize: '1.125rem'
    }
  };

  return (
    <div style={styles.body}>
      {/* Header */}
      <Header/>

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

        {/* Order Header */}
        <div style={styles.orderHeader}>
          <h1 style={styles.orderTitle}>Detail Pesanan - {orderData.orderNumber}</h1>
          <div style={styles.orderMeta}>
            {orderData.date} • {orderData.totalProducts}
          </div>
        </div>

        <div style={styles.orderContent}>
          {/* Main Content */}
          <div style={styles.mainContent}>
            {/* Address Section */}
            <div style={styles.addressSection}>
              <div style={styles.addressGrid}>
                <div style={styles.addressBlock}>
                  <div style={styles.addressTitle}>Alamat Pengirim</div>
                  <div style={styles.addressContent}>
                    <div style={styles.storeName}>{orderData.billingAddress.storeName}</div>
                    <div>{orderData.billingAddress.address}</div>
                    <div style={styles.contactInfo}>
                      <div>EMAIL: {orderData.contact.storeEmail}</div>
                      <div>TELP: {orderData.contact.storePhone}</div>
                    </div>
                  </div>
                </div>
                <div style={styles.addressBlock}>
                  <div style={styles.addressTitle}>Alamat Penerima</div>
                  <div style={styles.addressContent}>
                    <div style={styles.customerName}>{orderData.shippingAddress.name}</div>
                    <div>{orderData.shippingAddress.address}</div>
                    <div style={styles.contactInfo}>
                      <div>EMAIL: {orderData.contact.customerEmail}</div>
                      <div>TELP: {orderData.contact.customerPhone}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Status Progress */}
            <div style={styles.statusProgress}>
              <div style={styles.progressBar}>
                <div style={styles.progressStep}>
                  <div style={{...styles.stepCircle, ...styles.stepCircleActive}}>
                    01
                  </div>
                  <div style={styles.stepLabel}>Pesanan diterima</div>
                </div>
                <div style={{...styles.progressLine, width: '100%'}}></div>
                <div style={styles.progressStep}>
                  <div style={{...styles.stepCircle, ...styles.stepCircleActive}}>
                    02
                  </div>
                  <div style={styles.stepLabel}>Dikemas</div>
                </div>
                <div style={{...styles.progressLine, width: '100%'}}></div>
                <div style={styles.progressStep}>
                  <div style={{...styles.stepCircle, ...styles.stepCircleActive}}>
                    03
                  </div>
                  <div style={styles.stepLabel}>Dalam pengiriman</div>
                </div>
                <div style={{...styles.progressLine, width: '100%', backgroundColor: '#E5E7EB'}}></div>
                <div style={styles.progressStep}>
                  <div style={{...styles.stepCircle, ...styles.stepCircleInactive}}>
                    04
                  </div>
                  <div style={styles.stepLabel}>Terkrim</div>
                </div>
              </div>
            </div>

            {/* Order Items */}
            <div style={styles.orderItemsSection}>
              <div style={styles.itemsTable}>
                <div style={styles.tableHeader}>
                  <div style={styles.tableHeaderRow}>
                    <div style={styles.tableHeaderCell}>PRODUK</div>
                    <div style={styles.tableHeaderCell}>HARGA</div>
                    <div style={styles.tableHeaderCell}>JUMLAH</div>
                    <div style={styles.tableHeaderCell}>SUBTOTAL</div>
                  </div>
                </div>
                {orderData.items.map((item) => (
                  <div key={item.id} style={styles.tableRow}>
                    <div style={styles.productInfo}>
                      <img 
                        src={item.image} 
                        alt={item.name}
                        style={styles.productImage}
                      />
                      <span style={styles.productName}>{item.name}</span>
                    </div>
                    <div style={styles.tableCell}>Rp.{item.price.toLocaleString()}</div>
                    <div style={styles.tableCell}>x{item.quantity}</div>
                    <div style={styles.tableCell}>Rp.{item.subtotal.toLocaleString()}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div style={styles.sidebar}>
            <h2 style={styles.sidebarTitle}>ID PESANAN</h2>
            <div style={styles.summaryGrid}>
              <div style={styles.summaryItem}>
                <div style={styles.summaryLabel}>ID PESANAN</div>
                <div style={styles.summaryValue}>{orderData.orderNumber}</div>
              </div>
              <div style={styles.summaryItem}>
                <div style={styles.summaryLabel}>METODE PEMBAYARAN</div>
                <div style={styles.summaryValue}>{orderData.paymentMethod}</div>
              </div>
            </div>

            <div style={styles.pricingSection}>
              <div style={styles.pricingRow}>
                <span style={styles.pricingLabel}>Subtotal:</span>
                <span style={styles.pricingValue}>Rp.{orderData.pricing.subtotal.toLocaleString()}</span>
              </div>
              
              <div style={styles.pricingRow}>
                <span style={styles.pricingLabel}>Diskon:</span>
                <span style={styles.pricingValue}>-</span>
              </div>
              
              <div style={styles.pricingRow}>
                <span style={styles.pricingLabel}>Pengiriman:</span>
                <span style={styles.pricingValue}>Gratis</span>
              </div>
              
              <div style={styles.totalRow}>
                <span style={styles.totalLabel}>Total:</span>
                <span style={styles.totalValue}>Rp.{orderData.pricing.total.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreenMartOrderDetail;