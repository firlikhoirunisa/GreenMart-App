import React, { useState, useEffect } from 'react';

const GreenMartRegister = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [windowWidth, setWindowWidth] = useState(1200); // Default width

  useEffect(() => {
    // Set initial window width
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      
      // Add event listener for window resize
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
      
      window.addEventListener('resize', handleResize);
      
      // Cleanup
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Real-time password confirmation validation
    if (name === 'confirmPassword') {
      if (value && value !== formData.password) {
        setPasswordError('Password tidak cocok!');
      } else {
        setPasswordError('');
      }
    }
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert('Password tidak cocok!');
      return;
    }
    
    if (formData.password.length < 6) {
      alert('Password minimal 6 karakter!');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setShowModal(true);
      
      // Store user data (simulation) - only if localStorage is available
      if (typeof window !== 'undefined' && window.localStorage) {
        const userData = {
          email: formData.email,
          registered: true,
          registeredAt: new Date().toISOString()
        };
        localStorage.setItem('greenmart-user', JSON.stringify(userData));
      }
      
      setIsLoading(false);
    }, 1500);
  };

  const closeModal = () => {
    setShowModal(false);
    setFormData({
      email: '',
      password: '',
      confirmPassword: ''
    });
    setPasswordError('');
  };

  const showLogin = () => {
    alert('Halaman login akan dibuat setelah home page selesai!');
  };

  const styles = {
    body: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif',
      backgroundColor: '#F9FAFB',
      minHeight: '100vh',
      margin: 0,
      padding: 0,
      boxSizing: 'border-box' as const
    },
    container: {
      display: 'flex',
      minHeight: '100vh'
    },
    leftSide: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '3rem'
    },
    heroImage: {
      maxWidth: '290rem',
      width: '100%',
      height: '35rem',
      borderRadius: '1rem',
      position: 'relative' as const,
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'end',
      justifyContent: 'center',
      backgroundImage: 'url("/Image/vegetables-basket.jpg")', // Path relatif dari folder public
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    },
    heroOverlay: {
      background: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.4))',
      color: 'white',
      padding: '1.5rem',
      borderRadius: '0 0 1rem 1rem',
      textAlign: 'center' as const,
      width: '100%',
      position: 'absolute' as const,
      bottom: 0,
      left: 0
    },
    heroTitle: {
      fontWeight: 600,
      marginBottom: '0.5rem',
      fontSize: '1.5rem'
    },
    heroSubtitle: {
      fontSize: '0.875rem',
      opacity: 0.9
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
      textAlign: 'center' as const,
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
      textAlign: 'center' as const,
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
      boxSizing: 'border-box' as const
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
    loginLink: {
      textAlign: 'center' as const,
      marginTop: '1.5rem',
      fontSize: '0.875rem',
      color: '#6B7280'
    },
    loginLinkA: {
      color: '#22C55E',
      textDecoration: 'none',
      fontWeight: 500,
      cursor: 'pointer'
    },
    modal: {
      position: 'fixed' as const,
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
      textAlign: 'center' as const
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
      marginTop: '0.25rem'
    }
  };

  // Media query check for responsive design
  const isDesktop = windowWidth >= 1024;
  const isMobile = windowWidth <= 640;

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        {/* Left Side - Hero Image */}
        {isDesktop && (
          <div style={styles.leftSide}>
            <div style={styles.heroImage}>
              {/* Text overlay dihapus */}
            </div>
          </div>
        )}

        {/* Right Side - Registration Form */}
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

            {/* Registration Card */}
            <div style={{
              ...styles.formCard,
              ...(isMobile ? { padding: '1.5rem' } : {})
            }}>
              <div style={styles.formHeader}>
                <h2 style={styles.formTitle}>Daftar</h2>
                <p style={styles.formSubtitle}>
                  Silahkan masukkan Email dan Password Anda
                </p>
              </div>

              <div>
                {/* Email Input */}
                <div style={styles.formGroup}>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    style={styles.formInput}
                    placeholder="Masukkan Email"
                    required
                    onFocus={(e) => e.target.style.borderColor = '#22C55E'}
                    onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
                  />
                </div>

                {/* Password Input */}
                <div style={styles.formGroup}>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    style={styles.formInput}
                    placeholder="Masukkan Password"
                    required
                    onFocus={(e) => e.target.style.borderColor = '#22C55E'}
                    onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
                  />
                </div>

                {/* Confirm Password Input */}
                <div style={styles.formGroup}>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    style={{
                      ...styles.formInput,
                      borderColor: passwordError ? '#EF4444' : 
                                 formData.confirmPassword && !passwordError ? '#22C55E' : '#E5E7EB'
                    }}
                    placeholder="Konfirmasi Password"
                    required
                    onFocus={(e) => {
                      if (!passwordError) e.target.style.borderColor = '#22C55E';
                    }}
                    onBlur={(e) => {
                      if (!passwordError) e.target.style.borderColor = '#E5E7EB';
                    }}
                  />
                  {passwordError && (
                    <div style={styles.errorText}>{passwordError}</div>
                  )}
                </div>

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
                  {isLoading ? 'Memproses...' : 'Daftar'}
                </button>
              </div>

              {/* Login Link */}
              <div style={styles.loginLink}>
                Sudah Punya Akun?{' '}
                <span
                  onClick={showLogin}
                  style={styles.loginLinkA}
                  onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
                  onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
                >
                  Masuk
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
            <div style={styles.modalEmoji}>✅</div>
            <h3 style={styles.modalTitle}>Berhasil Daftar!</h3>
            <p style={styles.modalText}>
              Akun Anda telah berhasil dibuat.
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

export default GreenMartRegister;