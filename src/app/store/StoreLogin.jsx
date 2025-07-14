import React, { useState, useEffect } from 'react';

const SellerLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    storeName: '',
    phone: '',
    agreeTerms: false
  });
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [windowWidth, setWindowWidth] = useState(1200);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
      
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    if (loginError) {
      setLoginError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password) {
      setLoginError('Email dan password harus diisi!');
      return;
    }
    
    if (!isLogin && (!formData.name || !formData.storeName || !formData.phone)) {
      setLoginError('Semua field harus diisi!');
      return;
    }
    
    if (!isLogin && !formData.agreeTerms) {
      setLoginError('Anda harus menyetujui syarat & ketentuan!');
      return;
    }
    
    if (formData.password.length < 6) {
      setLoginError('Password minimal 6 karakter!');
      return;
    }
    
    setIsLoading(true);
    
    setTimeout(() => {
      if (isLogin) {
        // Simulasi login
        if (typeof window !== 'undefined' && window.localStorage) {
          const storedSeller = localStorage.getItem('greenmart-seller');
          if (storedSeller) {
            const sellerData = JSON.parse(storedSeller);
            if (sellerData.email === formData.email) {
              setShowModal(true);
              localStorage.setItem('greenmart-seller-login', JSON.stringify({
                email: formData.email,
                loggedIn: true,
                loginTime: new Date().toISOString()
              }));
            } else {
              setLoginError('Email atau password salah!');
            }
          } else {
            setLoginError('Akun penjual tidak ditemukan. Silakan daftar terlebih dahulu!');
          }
        } else {
          setShowModal(true);
        }
      } else {
        // Simulasi registrasi
        if (typeof window !== 'undefined' && window.localStorage) {
          localStorage.setItem('greenmart-seller', JSON.stringify({
            email: formData.email,
            name: formData.name,
            storeName: formData.storeName,
            phone: formData.phone,
            registeredAt: new Date().toISOString()
          }));
        }
        setShowModal(true);
      }
      
      setIsLoading(false);
    }, 1500);
  };

  const closeModal = () => {
    setShowModal(false);
    setFormData({
      email: '',
      password: '',
      name: '',
      storeName: '',
      phone: '',
      agreeTerms: false
    });
    setLoginError('');
  };

  const forgotPassword = () => {
    alert('Fitur lupa password akan segera hadir!');
  };

  const styles = {
    body: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif',
      backgroundColor: '#F9FAFB',
      minHeight: '100vh',
      margin: 0,
      padding: 0,
      boxSizing: 'border-box'
    },
    container: {
      display: 'flex',
      minHeight: '100vh'
    },
    leftSide: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '3rem'
    },
    titleAbove: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#166534',
      marginBottom: '2rem',
      textAlign: 'center',
      lineHeight: '1.2'
    },
    heroImage: {
      maxWidth: '200rem',
      width: '100%',
      height: '35rem',
      borderRadius: '1rem',
      position: 'relative',
      overflow: 'hidden',
      backgroundImage: 'url("/Image/vegetables-basket.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    },
    descriptionBelow: {
      fontSize: '1.125rem',
      color: '#6B7280',
      marginTop: '2rem',
      textAlign: 'center',
      lineHeight: '1.6',
      maxWidth: '28rem'
    },
    rightSide: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem'
    },
    formContainer: {
      width: '100%',
      maxWidth: '28rem'
    },
    logo: {
      textAlign: 'center',
      marginBottom: '2rem'
    },
    logoH1: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      margin: 0
    },
    logoGreen: {
      color: '#15803D'
    },
    logoMart: {
      color: '#4ADE80',
      fontWeight: 300
    },
    formCard: {
      background: 'white',
      borderRadius: '1rem',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      padding: '2rem'
    },
    formHeader: {
      textAlign: 'center',
      marginBottom: '1.5rem'
    },
    formTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#166534',
      marginBottom: '0.5rem',
      margin: 0
    },
    formSubtitle: {
      color: '#6B7280',
      fontSize: '0.875rem',
      margin: 0
    },
    formGroup: {
      marginBottom: '1rem'
    },
    formInput: {
      width: '100%',
      padding: '0.75rem 1rem',
      border: '2px solid #E5E7EB',
      borderRadius: '0.75rem',
      fontSize: '1rem',
      transition: 'border-color 0.15s ease',
      outline: 'none',
      boxSizing: 'border-box'
    },
    formInputError: {
      borderColor: '#EF4444'
    },
    submitBtn: {
      width: '100%',
      backgroundColor: '#22C55E',
      color: 'white',
      padding: '0.75rem',
      border: 'none',
      borderRadius: '0.75rem',
      fontSize: '1rem',
      fontWeight: 600,
      cursor: 'pointer',
      transition: 'background-color 0.15s ease',
      marginTop: '1.5rem'
    },
    submitBtnDisabled: {
      opacity: 0.5,
      cursor: 'not-allowed'
    },
    forgotPassword: {
      textAlign: 'center',
      marginTop: '1rem'
    },
    forgotPasswordLink: {
      color: '#22C55E',
      textDecoration: 'none',
      fontSize: '0.875rem',
      cursor: 'pointer'
    },
    switchLink: {
      textAlign: 'center',
      marginTop: '1.5rem',
      fontSize: '0.875rem',
      color: '#6B7280'
    },
    switchLinkA: {
      color: '#22C55E',
      textDecoration: 'none',
      fontWeight: 500,
      cursor: 'pointer'
    },
    checkboxContainer: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '0.75rem',
      marginBottom: '1rem'
    },
    checkbox: {
      marginTop: '0.25rem',
      width: '1rem',
      height: '1rem',
      accentColor: '#22C55E'
    },
    checkboxLabel: {
      fontSize: '0.875rem',
      color: '#6B7280',
      lineHeight: '1.25rem'
    },
    checkboxLink: {
      color: '#22C55E',
      textDecoration: 'none'
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
      marginBottom: '0.5rem',
      margin: '0 0 0.5rem 0'
    },
    modalText: {
      color: '#6B7280',
      marginBottom: '1rem',
      margin: '0 0 1rem 0'
    },
    modalBtn: {
      backgroundColor: '#22C55E',
      color: 'white',
      padding: '0.5rem 1.5rem',
      border: 'none',
      borderRadius: '0.5rem',
      cursor: 'pointer',
      transition: 'background-color 0.15s ease'
    },
    errorText: {
      color: '#EF4444',
      fontSize: '0.875rem',
      marginTop: '0.25rem',
      textAlign: 'center'
    }
  };

  const isDesktop = windowWidth >= 1024;
  const isMobile = windowWidth <= 640;

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        {/* Left Side - Hero Image */}
        {isDesktop && (
          <div style={styles.leftSide}>
            <h2 style={styles.titleAbove}>
              Kelola Toko Online Anda
            </h2>
            <div style={styles.heroImage}>
              {/* Clean vegetable image */}
            </div>
            <p style={styles.descriptionBelow}>
              Platform terpadu untuk mengelola produk, pesanan, dan mengembangkan bisnis sayuran online Anda dengan mudah dan efisien.
            </p>
          </div>
        )}

        {/* Right Side - Login Form */}
        <div style={{
          ...styles.rightSide,
          ...(isMobile ? { padding: '1rem' } : {})
        }}>
          <div style={styles.formContainer}>
            {/* Logo */}
            <div style={styles.logo}>
              <h1 style={{
                ...styles.logoH1,
                ...(isMobile ? { fontSize: '2rem' } : {})
              }}>
                <span style={styles.logoGreen}>Green</span>
                <span style={styles.logoMart}>MART</span>
              </h1>
            </div>

            {/* Login/Register Card */}
            <div style={{
              ...styles.formCard,
              ...(isMobile ? { padding: '1.5rem' } : {})
            }}>
              <div style={styles.formHeader}>
                <h2 style={styles.formTitle}>
                  {isLogin ? 'Masuk Penjual' : 'Daftar Penjual'}
                </h2>
                <p style={styles.formSubtitle}>
                  {isLogin 
                    ? 'Silahkan masukkan Email dan Password Anda'
                    : 'Bergabunglah sebagai penjual di GreenMART'
                  }
                </p>
              </div>

              {/* Error Message */}
              {loginError && (
                <div style={styles.errorText}>{loginError}</div>
              )}

              <div>
                {/* Registration Fields */}
                {!isLogin && (
                  <>
                    <div style={styles.formGroup}>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        style={{
                          ...styles.formInput,
                          ...(loginError ? styles.formInputError : {})
                        }}
                        placeholder="Nama Lengkap"
                        required
                        onFocus={(e) => e.target.style.borderColor = '#22C55E'}
                        onBlur={(e) => e.target.style.borderColor = loginError ? '#EF4444' : '#E5E7EB'}
                      />
                    </div>

                    <div style={styles.formGroup}>
                      <input
                        type="text"
                        name="storeName"
                        value={formData.storeName}
                        onChange={handleInputChange}
                        style={{
                          ...styles.formInput,
                          ...(loginError ? styles.formInputError : {})
                        }}
                        placeholder="Nama Toko"
                        required
                        onFocus={(e) => e.target.style.borderColor = '#22C55E'}
                        onBlur={(e) => e.target.style.borderColor = loginError ? '#EF4444' : '#E5E7EB'}
                      />
                    </div>

                    <div style={styles.formGroup}>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        style={{
                          ...styles.formInput,
                          ...(loginError ? styles.formInputError : {})
                        }}
                        placeholder="Nomor Telepon"
                        required
                        onFocus={(e) => e.target.style.borderColor = '#22C55E'}
                        onBlur={(e) => e.target.style.borderColor = loginError ? '#EF4444' : '#E5E7EB'}
                      />
                    </div>
                  </>
                )}

                {/* Email Input */}
                <div style={styles.formGroup}>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    style={{
                      ...styles.formInput,
                      ...(loginError ? styles.formInputError : {})
                    }}
                    placeholder="Masukkan Email"
                    required
                    onFocus={(e) => e.target.style.borderColor = '#22C55E'}
                    onBlur={(e) => e.target.style.borderColor = loginError ? '#EF4444' : '#E5E7EB'}
                  />
                </div>

                {/* Password Input */}
                <div style={styles.formGroup}>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    style={{
                      ...styles.formInput,
                      ...(loginError ? styles.formInputError : {})
                    }}
                    placeholder="Masukkan Password"
                    required
                    onFocus={(e) => e.target.style.borderColor = '#22C55E'}
                    onBlur={(e) => e.target.style.borderColor = loginError ? '#EF4444' : '#E5E7EB'}
                  />
                </div>

                {/* Terms Agreement for Registration */}
                {!isLogin && (
                  <div style={styles.checkboxContainer}>
                    <input
                      type="checkbox"
                      name="agreeTerms"
                      checked={formData.agreeTerms}
                      onChange={handleInputChange}
                      style={styles.checkbox}
                      required
                    />
                    <label style={styles.checkboxLabel}>
                      Saya menyetujui{' '}
                      <a href="#" style={styles.checkboxLink}>
                        Syarat & Ketentuan
                      </a>{' '}
                      dan{' '}
                      <a href="#" style={styles.checkboxLink}>
                        Kebijakan Privasi
                      </a>
                    </label>
                  </div>
                )}

                {/* Forgot Password Link (only for login) */}
                {isLogin && (
                  <div style={styles.forgotPassword}>
                    <span
                      onClick={forgotPassword}
                      style={styles.forgotPasswordLink}
                      onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
                      onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
                    >
                      Lupa Password?
                    </span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={isLoading}
                  style={{
                    ...styles.submitBtn,
                    ...(isLoading ? styles.submitBtnDisabled : {})
                  }}
                  onMouseEnter={(e) => {
                    if (!isLoading) e.currentTarget.style.backgroundColor = '#16A34A';
                  }}
                  onMouseLeave={(e) => {
                    if (!isLoading) e.currentTarget.style.backgroundColor = '#22C55E';
                  }}
                >
                  {isLoading ? 'Memproses...' : (isLogin ? 'Masuk' : 'Daftar')}
                </button>
              </div>

              {/* Switch Mode Link */}
              <div style={styles.switchLink}>
                {isLogin ? 'Belum Punya Akun?' : 'Sudah punya akun?'}{' '}
                <span
                  onClick={() => setIsLogin(!isLogin)}
                  style={styles.switchLinkA}
                  onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
                  onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
                >
                  {isLogin ? 'Daftar' : 'Masuk'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <div style={styles.modalEmoji}>🎉</div>
            <h3 style={styles.modalTitle}>
              {isLogin ? 'Berhasil Masuk!' : 'Registrasi Berhasil!'}
            </h3>
            <p style={styles.modalText}>
              {isLogin 
                ? 'Selamat datang kembali di GreenMART Seller!'
                : 'Selamat bergabung sebagai penjual GreenMART!'
              }
            </p>
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

export default SellerLogin;