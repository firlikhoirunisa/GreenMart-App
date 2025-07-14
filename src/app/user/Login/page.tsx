"use client";
import React, { useState, useEffect } from 'react';

const GreenMartLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [loginError, setLoginError] = useState('');
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
    
    // Clear error when user types
    if (loginError) {
      setLoginError('');
    }
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password) {
      setLoginError('Email dan password harus diisi!');
      return;
    }
    
    if (formData.password.length < 6) {
      setLoginError('Password minimal 6 karakter!');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // Check if user exists in localStorage (simulation)
      if (typeof window !== 'undefined' && window.localStorage) {
        const storedUser = localStorage.getItem('greenmart-user');
        if (storedUser) {
          const userData = JSON.parse(storedUser);
          if (userData.email === formData.email) {
            // Login successful
            setShowModal(true);
            localStorage.setItem('greenmart-login', JSON.stringify({
              email: formData.email,
              loggedIn: true,
              loginTime: new Date().toISOString()
            }));
          } else {
            setLoginError('Email atau password salah!');
          }
        } else {
          setLoginError('Akun tidak ditemukan. Silakan daftar terlebih dahulu!');
        }
      } else {
        // Fallback for demo - always success
        setShowModal(true);
      }
      
      setIsLoading(false);
    }, 1500);
  };

  const closeModal = () => {
    setShowModal(false);
    setFormData({
      email: '',
      password: ''
    });
    setLoginError('');
  };

  const showRegister = () => {
    alert('Halaman register akan dibuka!');
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
      maxWidth: '200rem',
      width: '100%',
      height: '35rem',
      borderRadius: '1rem',
      position: 'relative' as const,
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'end',
      justifyContent: 'center',
      backgroundImage: 'url("/Image/vegetables-basket.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
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
      textAlign: 'center' as const,
      marginTop: '1rem'
    },
    forgotPasswordLink: {
      color: '#22C55E',
      textDecoration: 'none',
      fontSize: '0.875rem',
      cursor: 'pointer'
    },
    registerLink: {
      textAlign: 'center' as const,
      marginTop: '1.5rem',
      fontSize: '0.875rem',
      color: '#6B7280'
    },
    registerLinkA: {
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
      marginTop: '0.25rem',
      textAlign: 'center' as const
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
              {/* Clean image without overlay */}
            </div>
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

            {/* Login Card */}
            <div style={{
              ...styles.formCard,
              ...(isMobile ? { padding: '1.5rem' } : {})
            }}>
              <div style={styles.formHeader}>
                <h2 style={styles.formTitle}>Masuk</h2>
                <p style={styles.formSubtitle}>
                  Silahkan masukkan Email dan Password Anda
                </p>
              </div>

              {/* Error Message */}
              {loginError && (
                <div style={styles.errorText}>{loginError}</div>
              )}

              <div>
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

                {/* Forgot Password Link */}
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
                  {isLoading ? 'Memproses...' : 'Masuk'}
                </button>
              </div>

              {/* Register Link */}
              <div style={styles.registerLink}>
                Belum Punya Akun?{' '}
                <span
                  onClick={showRegister}
                  style={styles.registerLinkA}
                  onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
                  onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
                >
                  Daftar
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
            <h3 style={styles.modalTitle}>Berhasil Masuk!</h3>
            <p style={styles.modalText}>
              Selamat datang kembali di GreenMART!
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

export default GreenMartLogin;