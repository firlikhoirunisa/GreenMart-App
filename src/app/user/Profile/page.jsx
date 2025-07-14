"use client";
import React, { useState } from 'react';

const GreenMartProfile = () => {
  const [cartCount, setCartCount] = useState(2);
  const [searchValue, setSearchValue] = useState('');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const [profileData, setProfileData] = useState({
    firstName: 'Ayu',
    lastName: 'Dian',
    email: 'ayudian11@gmail.com',
    phone: '(+62) 8125729087',
    address: 'Jalan Hidup Makmur No 45',
    province: 'yogyakarta',
    city: 'sleman',
    postalCode: '11234',
    currentPassword: '••••••••',
    newPassword: '',
    confirmPassword: ''
  });

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      alert(`Mencari: ${searchValue}`);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSaveProfile = () => {
    alert('Profil berhasil disimpan!');
  };

  const handleChangePassword = () => {
    if (profileData.newPassword !== profileData.confirmPassword) {
      alert('Password baru dan konfirmasi password tidak cocok!');
      return;
    }
    alert('Password berhasil diubah!');
  };

  const handleUploadPhoto = () => {
    alert('Fitur upload foto akan segera tersedia!');
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
      gap: '0.5rem',
      color: '#22C55E'
    },
    container: {
      maxWidth: '1200px',
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
    profileSection: {
      backgroundColor: 'white',
      borderRadius: '1rem',
      padding: '2rem',
      marginBottom: '2rem',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
    },
    sectionTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#1F2937',
      marginBottom: '1.5rem'
    },
    profileContent: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr',
      gap: '3rem',
      alignItems: 'start'
    },
    formSection: {},
    formRow: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1rem',
      marginBottom: '1.5rem'
    },
    formGroup: {
      marginBottom: '1.5rem'
    },
    label: {
      display: 'block',
      fontSize: '0.875rem',
      fontWeight: 500,
      color: '#374151',
      marginBottom: '0.5rem'
    },
    input: {
      width: '100%',
      padding: '0.75rem',
      border: '1px solid #D1D5DB',
      borderRadius: '0.5rem',
      fontSize: '0.875rem',
      outline: 'none',
      boxSizing: 'border-box',
      transition: 'border-color 0.2s',
      backgroundColor: '#FAFAFA'
    },
    select: {
      width: '100%',
      padding: '0.75rem',
      border: '1px solid #D1D5DB',
      borderRadius: '0.5rem',
      fontSize: '0.875rem',
      outline: 'none',
      boxSizing: 'border-box',
      backgroundColor: '#FAFAFA',
      cursor: 'pointer'
    },
    passwordContainer: {
      position: 'relative'
    },
    passwordInput: {
      width: '100%',
      padding: '0.75rem 2.5rem 0.75rem 0.75rem',
      border: '1px solid #D1D5DB',
      borderRadius: '0.5rem',
      fontSize: '0.875rem',
      outline: 'none',
      boxSizing: 'border-box',
      transition: 'border-color 0.2s',
      backgroundColor: '#FAFAFA'
    },
    passwordToggle: {
      position: 'absolute',
      right: '0.75rem',
      top: '50%',
      transform: 'translateY(-50%)',
      cursor: 'pointer',
      color: '#6B7280',
      fontSize: '1rem'
    },
    photoSection: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1rem'
    },
    profilePhoto: {
      width: '150px',
      height: '150px',
      borderRadius: '50%',
      backgroundColor: '#9CA3AF',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '4rem',
      color: 'white'
    },
    uploadBtn: {
      backgroundColor: 'white',
      color: '#22C55E',
      border: '2px solid #22C55E',
      padding: '0.5rem 1.5rem',
      borderRadius: '0.5rem',
      fontSize: '0.875rem',
      fontWeight: 500,
      cursor: 'pointer',
      transition: 'all 0.2s'
    },
    saveBtn: {
      backgroundColor: '#22C55E',
      color: 'white',
      padding: '0.75rem 2rem',
      border: 'none',
      borderRadius: '0.5rem',
      fontSize: '0.875rem',
      fontWeight: 600,
      cursor: 'pointer',
      transition: 'background-color 0.2s'
    },
    addressGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: '1rem',
      marginBottom: '1.5rem'
    },
    passwordSection: {
      backgroundColor: 'white',
      borderRadius: '1rem',
      padding: '2rem',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
    },
    passwordGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1rem',
      marginBottom: '1.5rem'
    }
  };

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
      </header>

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

        {/* Profile Settings Section */}
        <div style={styles.profileSection}>
          <h1 style={styles.sectionTitle}>Pengaturan Profil</h1>
          
          <div style={styles.profileContent}>
            {/* Form Section */}
            <div style={styles.formSection}>
              {/* Name Fields */}
              <div style={styles.formRow}>
                <div>
                  <label style={styles.label}>Nama Depan</label>
                  <input
                    type="text"
                    name="firstName"
                    value={profileData.firstName}
                    onChange={handleInputChange}
                    style={styles.input}
                    placeholder=""
                    onFocus={(e) => e.target.style.borderColor = '#22C55E'}
                    onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
                  />
                </div>
                <div>
                  <label style={styles.label}>Nama Belakang</label>
                  <input
                    type="text"
                    name="lastName"
                    value={profileData.lastName}
                    onChange={handleInputChange}
                    style={styles.input}
                    placeholder=""
                    onFocus={(e) => e.target.style.borderColor = '#22C55E'}
                    onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
                  />
                </div>
              </div>

              {/* Email */}
              <div style={styles.formGroup}>
                <label style={styles.label}>Email</label>
                <input
                  type="email"
                  name="email"
                  value={profileData.email}
                  onChange={handleInputChange}
                  style={styles.input}
                  placeholder=""
                  onFocus={(e) => e.target.style.borderColor = '#22C55E'}
                  onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
                />
              </div>

              {/* Phone */}
              <div style={styles.formGroup}>
                <label style={styles.label}>No. Telepon</label>
                <input
                  type="tel"
                  name="phone"
                  value={profileData.phone}
                  onChange={handleInputChange}
                  style={styles.input}
                  placeholder=""
                  onFocus={(e) => e.target.style.borderColor = '#22C55E'}
                  onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
                />
              </div>

              <button 
                style={styles.saveBtn}
                onClick={handleSaveProfile}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#16A34A'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#22C55E'}
              >
                Simpan Perubahan
              </button>
            </div>

            {/* Photo Section */}
            <div style={styles.photoSection}>
              <div style={styles.profilePhoto}>
                👤
              </div>
              <button 
                style={styles.uploadBtn}
                onClick={handleUploadPhoto}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#22C55E';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'white';
                  e.currentTarget.style.color = '#22C55E';
                }}
              >
                Ubah Foto
              </button>
            </div>
          </div>
        </div>

        {/* Billing Address Section */}
        <div style={styles.profileSection}>
          <h2 style={styles.sectionTitle}>Alamat Penagihan</h2>
          
          {/* Name Fields */}
          <div style={styles.formRow}>
            <div>
              <label style={styles.label}>Nama Depan</label>
              <input
                type="text"
                name="billingFirstName"
                style={styles.input}
                placeholder="Ayu"
                defaultValue="Ayu"
                onFocus={(e) => e.target.style.borderColor = '#22C55E'}
                onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
              />
            </div>
            <div>
              <label style={styles.label}>Nama Belakang</label>
              <input
                type="text"
                name="billingLastName"
                style={styles.input}
                placeholder="Dian"
                defaultValue="Dian"
                onFocus={(e) => e.target.style.borderColor = '#22C55E'}
                onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
              />
            </div>
          </div>

          {/* Address */}
          <div style={styles.formGroup}>
            <label style={styles.label}>Alamat</label>
            <input
              type="text"
              name="address"
              style={styles.input}
              placeholder="Jalan Hidup Makmur No 45"
              defaultValue="Jalan Hidup Makmur No 45"
              onFocus={(e) => e.target.style.borderColor = '#22C55E'}
              onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
            />
          </div>

          {/* Province, City, Postal Code */}
          <div style={styles.addressGrid}>
            <div>
              <label style={styles.label}>Provinsi</label>
              <select
                name="province"
                style={styles.select}
                defaultValue="yogyakarta"
                onFocus={(e) => e.target.style.borderColor = '#22C55E'}
                onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
              >
                <option value="">Pilih Provinsi</option>
                <option value="yogyakarta">D.I Yogyakarta</option>
                <option value="jawa-tengah">Jawa Tengah</option>
                <option value="jawa-barat">Jawa Barat</option>
                <option value="jawa-timur">Jawa Timur</option>
              </select>
            </div>
            <div>
              <label style={styles.label}>Kota/Kabupaten</label>
              <select
                name="city"
                style={styles.select}
                defaultValue="sleman"
                onFocus={(e) => e.target.style.borderColor = '#22C55E'}
                onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
              >
                <option value="">Pilih Kota</option>
                <option value="sleman">Sleman</option>
                <option value="yogyakarta">Yogyakarta</option>
                <option value="bantul">Bantul</option>
                <option value="kulon-progo">Kulon Progo</option>
              </select>
            </div>
            <div>
              <label style={styles.label}>Kode Pos</label>
              <input
                type="text"
                name="postalCode"
                style={styles.input}
                placeholder="11234"
                defaultValue="11234"
                onFocus={(e) => e.target.style.borderColor = '#22C55E'}
                onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
              />
            </div>
          </div>

          {/* Email and Phone */}
          <div style={styles.formRow}>
            <div>
              <label style={styles.label}>Email</label>
              <input
                type="email"
                name="billingEmail"
                style={styles.input}
                placeholder="ayudian11@gmail.com"
                defaultValue="ayudian11@gmail.com"
                onFocus={(e) => e.target.style.borderColor = '#22C55E'}
                onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
              />
            </div>
            <div>
              <label style={styles.label}>No. Telepon</label>
              <input
                type="tel"
                name="billingPhone"
                style={styles.input}
                placeholder="(+62) 8125729087"
                defaultValue="(+62) 8125729087"
                onFocus={(e) => e.target.style.borderColor = '#22C55E'}
                onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
              />
            </div>
          </div>

          <button 
            style={styles.saveBtn}
            onClick={handleSaveProfile}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#16A34A'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#22C55E'}
          >
            Simpan Perubahan
          </button>
        </div>

        {/* Change Password Section */}
        <div style={styles.passwordSection}>
          <h2 style={styles.sectionTitle}>Ubah Kata Sandi</h2>
          
          {/* Current Password */}
          <div style={styles.formGroup}>
            <label style={styles.label}>Kata Sandi Sekarang</label>
            <div style={styles.passwordContainer}>
              <input
                type={showCurrentPassword ? "text" : "password"}
                name="currentPassword"
                value={profileData.currentPassword}
                onChange={handleInputChange}
                style={styles.passwordInput}
                placeholder=""
                onFocus={(e) => e.target.style.borderColor = '#22C55E'}
                onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
              />
              <span 
                style={styles.passwordToggle}
                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
              >
                {showCurrentPassword ? '○' : '●'}
              </span>
            </div>
          </div>

          {/* New Password and Confirm */}
          <div style={styles.passwordGrid}>
            <div>
              <label style={styles.label}>Kata Sandi Baru</label>
              <div style={styles.passwordContainer}>
                <input
                  type={showNewPassword ? "text" : "password"}
                  name="newPassword"
                  value={profileData.newPassword}
                  onChange={handleInputChange}
                  style={styles.passwordInput}
                  placeholder=""
                  onFocus={(e) => e.target.style.borderColor = '#22C55E'}
                  onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
                />
                <span 
                  style={styles.passwordToggle}
                  onClick={() => setShowNewPassword(!showNewPassword)}
                >
                  {showNewPassword ? '○' : '●'}
                </span>
              </div>
            </div>
            <div>
              <label style={styles.label}>Konfirmasi Kata Sandi</label>
              <div style={styles.passwordContainer}>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={profileData.confirmPassword}
                  onChange={handleInputChange}
                  style={styles.passwordInput}
                  placeholder=""
                  onFocus={(e) => e.target.style.borderColor = '#22C55E'}
                  onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
                />
                <span 
                  style={styles.passwordToggle}
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? '○' : '●'}
                </span>
              </div>
            </div>
          </div>

          <button 
            style={styles.saveBtn}
            onClick={handleChangePassword}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#16A34A'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#22C55E'}
          >
            Ubah Kata Sandi
          </button>
        </div>
      </div>
    </div>
  );
};

export default GreenMartProfile;