"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Header } from "../../../components/layout/Header";

const GreenMartAddProduct = () => {
  const [searchValue, setSearchValue] = useState("");
  const [activeMenu, setActiveMenu] = useState("products");
  const router = useRouter();

  const [productData, setProductData] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
    description: "",
    imageUrl: "",
    weight: "",
    unit: "kg",
    origin: "",
    status: "active",
  });

  const [errors, setErrors] = useState({});

  const categories = [
    "Sayuran Hijau",
    "Sayuran Buah",
    "Sayuran Umbi",
    "Sayuran Batang",
    "Bumbu Dapur",
    "Buah-buahan",
  ];

  const units = [
    { value: "kg", label: "Kilogram (kg)" },
    { value: "gram", label: "Gram (g)" },
    { value: "pcs", label: "Pieces (pcs)" },
    { value: "ikat", label: "Ikat" },
    { value: "pack", label: "Pack" },
  ];

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      alert("Mencari: " + searchValue);
    }
  };

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);

    // Navigate to different pages based on menu selection
    switch (menu) {
      case "dashboard":
        router.push("/store/StoreDashboard");
        break;
      case "products":
        router.push("/store/ProductManagement");
        break;
      case "orders":
        router.push("/store/OrderList");
        break;
      case "settings":
        router.push("/store/StoreSettings");
        break;
      default:
        router.push("/store/StoreDashboard");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!productData.name.trim()) {
      newErrors.name = "Nama produk harus diisi";
    }

    if (!productData.category) {
      newErrors.category = "Kategori harus dipilih";
    }

    if (!productData.price || productData.price <= 0) {
      newErrors.price = "Harga harus diisi dan lebih dari 0";
    }

    if (!productData.stock || productData.stock < 0) {
      newErrors.stock = "Stok harus diisi dan tidak boleh negatif";
    }

    if (!productData.description.trim()) {
      newErrors.description = "Deskripsi produk harus diisi";
    }

    if (!productData.imageUrl.trim()) {
      newErrors.imageUrl = "URL gambar harus diisi";
    } else if (!isValidUrl(productData.imageUrl)) {
      newErrors.imageUrl = "URL gambar tidak valid";
    }

    if (!productData.weight || productData.weight <= 0) {
      newErrors.weight = "Berat/jumlah harus diisi dan lebih dari 0";
    }

    if (!productData.origin.trim()) {
      newErrors.origin = "Asal produk harus diisi";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isValidUrl = (string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };

  const handleSaveProduct = () => {
    if (validateForm()) {
      // Generate ID for new product
      const newProduct = {
        ...productData,
        id: Date.now(),
        price: parseInt(productData.price),
        stock: parseInt(productData.stock),
        weight: parseFloat(productData.weight),
        sold: 0,
        dateAdded: new Date().toISOString().split("T")[0],
      };

      console.log("New Product:", newProduct);
      alert("Produk berhasil ditambahkan!");

      // Reset form
      setProductData({
        name: "",
        category: "",
        price: "",
        stock: "",
        description: "",
        imageUrl: "",
        weight: "",
        unit: "kg",
        origin: "",
        status: "active",
      });

      // Redirect to products page after successful save
      setTimeout(() => {
        router.push("/store/ProductManagement");
      }, 1000);
    }
  };

  const handleCancel = () => {
    if (
      window.confirm(
        "Yakin ingin membatalkan? Data yang sudah diisi akan hilang."
      )
    ) {
      // Redirect back to products page
      router.push("/store/ProductManagement");
    }
  };

  const styles = {
    body: {
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif',
      backgroundColor: "#F9FAFB",
      lineHeight: 1.6,
      margin: 0,
      padding: 0,
    },
    header: {
      background: "white",
      borderBottom: "1px solid #E5E7EB",
      padding: "1rem 0",
      position: "sticky",
      top: 0,
      zIndex: 100,
    },
    headerContainer: {
      maxWidth: "1400px",
      margin: "0 auto",
      padding: "0 2rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "2rem",
    },
    logo: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      color: "#15803D",
      cursor: "pointer",
    },
    logoMart: {
      color: "#4ADE80",
      fontWeight: 300,
    },
    searchContainer: {
      flex: 1,
      maxWidth: "400px",
      position: "relative",
    },
    searchInput: {
      width: "100%",
      padding: "0.75rem 1rem 0.75rem 2.5rem",
      border: "1px solid #D1D5DB",
      borderRadius: "0.5rem",
      fontSize: "0.875rem",
      outline: "none",
      boxSizing: "border-box",
    },
    searchIcon: {
      position: "absolute",
      left: "0.75rem",
      top: "50%",
      transform: "translateY(-50%)",
      color: "#6B7280",
    },
    headerActions: {
      display: "flex",
      alignItems: "center",
      gap: "2rem",
    },
    logoutBtn: {
      backgroundColor: "#EF4444",
      color: "white",
      padding: "0.5rem 1rem",
      border: "none",
      borderRadius: "0.5rem",
      fontSize: "0.875rem",
      cursor: "pointer",
      transition: "background-color 0.2s",
    },
    dashboardLayout: {
      display: "flex",
      minHeight: "calc(100vh - 80px)",
    },
    sidebar: {
      width: "12rem",
      backgroundColor: "white",
      borderRight: "1px solid #E5E7EB",
      padding: "1.5rem 0",
    },
    sidebarTitle: {
      fontSize: "1rem",
      fontWeight: "bold",
      color: "#1F2937",
      padding: "0 1.5rem",
      marginBottom: "1.5rem",
    },
    sidebarMenu: {
      listStyle: "none",
      padding: 0,
      margin: 0,
    },
    menuItem: {
      margin: "0.25rem 0",
    },
    menuLink: {
      display: "flex",
      alignItems: "center",
      gap: "0.75rem",
      padding: "0.75rem 1.5rem",
      color: "#6B7280",
      fontSize: "0.875rem",
      cursor: "pointer",
      transition: "all 0.2s",
    },
    menuLinkActive: {
      backgroundColor: "#F0FDF4",
      color: "#22C55E",
      borderRight: "3px solid #22C55E",
    },
    menuIcon: {
      fontSize: "1rem",
    },
    mainContent: {
      flex: 1,
      padding: "2rem",
      maxWidth: "800px",
      margin: "0 auto",
    },
    pageHeader: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "2rem",
    },
    pageTitle: {
      fontSize: "1.75rem",
      fontWeight: "bold",
      color: "#1F2937",
      margin: 0,
    },
    actionButtons: {
      display: "flex",
      gap: "1rem",
    },
    cancelBtn: {
      backgroundColor: "white",
      color: "#6B7280",
      padding: "0.75rem 1.5rem",
      border: "1px solid #D1D5DB",
      borderRadius: "0.5rem",
      fontSize: "0.875rem",
      fontWeight: 500,
      cursor: "pointer",
      transition: "all 0.2s",
    },
    saveBtn: {
      backgroundColor: "#22C55E",
      color: "white",
      padding: "0.75rem 1.5rem",
      border: "none",
      borderRadius: "0.5rem",
      fontSize: "0.875rem",
      fontWeight: 500,
      cursor: "pointer",
      transition: "background-color 0.2s",
    },
    formCard: {
      backgroundColor: "white",
      borderRadius: "1rem",
      padding: "2rem",
      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
      border: "1px solid #E5E7EB",
    },
    formSection: {
      marginBottom: "2rem",
    },
    sectionTitle: {
      fontSize: "1.125rem",
      fontWeight: 600,
      color: "#1F2937",
      marginBottom: "1rem",
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
    },
    sectionIcon: {
      fontSize: "1.25rem",
    },
    formRow: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "1rem",
      marginBottom: "1rem",
    },
    formGroup: {
      marginBottom: "1rem",
    },
    label: {
      display: "block",
      fontSize: "0.875rem",
      fontWeight: 500,
      color: "#374151",
      marginBottom: "0.5rem",
    },
    required: {
      color: "#EF4444",
    },
    input: {
      width: "100%",
      padding: "0.75rem",
      border: "1px solid #D1D5DB",
      borderRadius: "0.5rem",
      fontSize: "0.875rem",
      outline: "none",
      boxSizing: "border-box",
      transition: "border-color 0.2s",
    },
    inputError: {
      borderColor: "#EF4444",
    },
    select: {
      width: "100%",
      padding: "0.75rem",
      border: "1px solid #D1D5DB",
      borderRadius: "0.5rem",
      fontSize: "0.875rem",
      outline: "none",
      boxSizing: "border-box",
      cursor: "pointer",
      backgroundColor: "white",
    },
    textarea: {
      width: "100%",
      padding: "0.75rem",
      border: "1px solid #D1D5DB",
      borderRadius: "0.5rem",
      fontSize: "0.875rem",
      outline: "none",
      boxSizing: "border-box",
      minHeight: "100px",
      resize: "vertical",
      fontFamily: "inherit",
    },
    errorMsg: {
      color: "#EF4444",
      fontSize: "0.75rem",
      marginTop: "0.25rem",
    },
    imagePreview: {
      marginTop: "1rem",
      textAlign: "center",
    },
    previewImg: {
      maxWidth: "200px",
      maxHeight: "200px",
      borderRadius: "0.5rem",
      border: "1px solid #E5E7EB",
    },
    previewPlaceholder: {
      width: "200px",
      height: "150px",
      backgroundColor: "#F3F4F6",
      borderRadius: "0.5rem",
      border: "2px dashed #D1D5DB",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto",
      color: "#6B7280",
      fontSize: "0.875rem",
    },
    weightUnit: {
      display: "flex",
      gap: "0.5rem",
    },
    weightInput: {
      flex: 2,
    },
    unitSelect: {
      flex: 1,
    },
  };

  const menuItems = [
    { id: "dashboard", icon: "🏠", label: "Dashboard" },
    { id: "products", icon: "📦", label: "Produk" },
    { id: "orders", icon: "📋", label: "Pesanan" },
    { id: "settings", icon: "⚙️", label: "Pengaturan" },
  ];

  return (
    <div style={styles.body}>
      <Header />
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
                      ...(activeMenu === item.id ? styles.menuLinkActive : {}),
                    }}
                    onClick={() => handleMenuClick(item.id)}
                    onMouseEnter={(e) => {
                      if (activeMenu !== item.id) {
                        e.currentTarget.style.backgroundColor = "#F9FAFB";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (activeMenu !== item.id) {
                        e.currentTarget.style.backgroundColor = "transparent";
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
            <h1 style={styles.pageTitle}>Tambah Produk Baru</h1>
            <div style={styles.actionButtons}>
              <button
                style={styles.cancelBtn}
                onClick={handleCancel}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#F3F4F6";
                  e.target.style.borderColor = "#9CA3AF";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "white";
                  e.target.style.borderColor = "#D1D5DB";
                }}
              >
                Batal
              </button>
              <button
                style={styles.saveBtn}
                onClick={handleSaveProduct}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#16A34A")
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "#22C55E")
                }
              >
                Simpan Produk
              </button>
            </div>
          </div>

          {/* Form */}
          <div style={styles.formCard}>
            {/* Basic Information */}
            <div style={styles.formSection}>
              <h2 style={styles.sectionTitle}>
                <span style={styles.sectionIcon}>📝</span>
                Informasi Dasar
              </h2>

              <div style={styles.formGroup}>
                <label style={styles.label}>
                  Nama Produk <span style={styles.required}>*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={productData.name}
                  onChange={handleInputChange}
                  placeholder="Contoh: Tomat Merah Segar"
                  style={{
                    ...styles.input,
                    ...(errors.name ? styles.inputError : {}),
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#22C55E")}
                  onBlur={(e) =>
                    (e.target.style.borderColor = errors.name
                      ? "#EF4444"
                      : "#D1D5DB")
                  }
                />
                {errors.name && (
                  <div style={styles.errorMsg}>{errors.name}</div>
                )}
              </div>

              <div style={styles.formRow}>
                <div>
                  <label style={styles.label}>
                    Kategori <span style={styles.required}>*</span>
                  </label>
                  <select
                    name="category"
                    value={productData.category}
                    onChange={handleInputChange}
                    style={{
                      ...styles.select,
                      ...(errors.category ? styles.inputError : {}),
                    }}
                  >
                    <option value="">Pilih Kategori</option>
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                  {errors.category && (
                    <div style={styles.errorMsg}>{errors.category}</div>
                  )}
                </div>

                <div>
                  <label style={styles.label}>
                    Asal Produk <span style={styles.required}>*</span>
                  </label>
                  <input
                    type="text"
                    name="origin"
                    value={productData.origin}
                    onChange={handleInputChange}
                    placeholder="Contoh: Boyolali, Jawa Tengah"
                    style={{
                      ...styles.input,
                      ...(errors.origin ? styles.inputError : {}),
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#22C55E")}
                    onBlur={(e) =>
                      (e.target.style.borderColor = errors.origin
                        ? "#EF4444"
                        : "#D1D5DB")
                    }
                  />
                  {errors.origin && (
                    <div style={styles.errorMsg}>{errors.origin}</div>
                  )}
                </div>
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>
                  Deskripsi Produk <span style={styles.required}>*</span>
                </label>
                <textarea
                  name="description"
                  value={productData.description}
                  onChange={handleInputChange}
                  placeholder="Jelaskan kualitas, keunggulan, dan informasi penting lainnya tentang produk..."
                  style={{
                    ...styles.textarea,
                    ...(errors.description ? styles.inputError : {}),
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#22C55E")}
                  onBlur={(e) =>
                    (e.target.style.borderColor = errors.description
                      ? "#EF4444"
                      : "#D1D5DB")
                  }
                />
                {errors.description && (
                  <div style={styles.errorMsg}>{errors.description}</div>
                )}
              </div>
            </div>

            {/* Pricing & Stock */}
            <div style={styles.formSection}>
              <h2 style={styles.sectionTitle}>
                <span style={styles.sectionIcon}>💰</span>
                Harga & Stok
              </h2>

              <div style={styles.formRow}>
                <div>
                  <label style={styles.label}>
                    Harga (Rp) <span style={styles.required}>*</span>
                  </label>
                  <input
                    type="number"
                    name="price"
                    value={productData.price}
                    onChange={handleInputChange}
                    placeholder="0"
                    min="0"
                    style={{
                      ...styles.input,
                      ...(errors.price ? styles.inputError : {}),
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#22C55E")}
                    onBlur={(e) =>
                      (e.target.style.borderColor = errors.price
                        ? "#EF4444"
                        : "#D1D5DB")
                    }
                  />
                  {errors.price && (
                    <div style={styles.errorMsg}>{errors.price}</div>
                  )}
                </div>

                <div>
                  <label style={styles.label}>
                    Stok Tersedia <span style={styles.required}>*</span>
                  </label>
                  <input
                    type="number"
                    name="stock"
                    value={productData.stock}
                    onChange={handleInputChange}
                    placeholder="0"
                    min="0"
                    style={{
                      ...styles.input,
                      ...(errors.stock ? styles.inputError : {}),
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#22C55E")}
                    onBlur={(e) =>
                      (e.target.style.borderColor = errors.stock
                        ? "#EF4444"
                        : "#D1D5DB")
                    }
                  />
                  {errors.stock && (
                    <div style={styles.errorMsg}>{errors.stock}</div>
                  )}
                </div>
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>
                  Berat/Jumlah per Unit <span style={styles.required}>*</span>
                </label>
                <div style={styles.weightUnit}>
                  <input
                    type="number"
                    name="weight"
                    value={productData.weight}
                    onChange={handleInputChange}
                    placeholder="0"
                    min="0"
                    step="0.1"
                    style={{
                      ...styles.input,
                      ...styles.weightInput,
                      ...(errors.weight ? styles.inputError : {}),
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#22C55E")}
                    onBlur={(e) =>
                      (e.target.style.borderColor = errors.weight
                        ? "#EF4444"
                        : "#D1D5DB")
                    }
                  />
                  <select
                    name="unit"
                    value={productData.unit}
                    onChange={handleInputChange}
                    style={{ ...styles.select, ...styles.unitSelect }}
                  >
                    {units.map((unit) => (
                      <option key={unit.value} value={unit.value}>
                        {unit.label}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.weight && (
                  <div style={styles.errorMsg}>{errors.weight}</div>
                )}
              </div>
            </div>

            {/* Image */}
            <div style={styles.formSection}>
              <h2 style={styles.sectionTitle}>
                <span style={styles.sectionIcon}>📷</span>
                Gambar Produk
              </h2>

              <div style={styles.formGroup}>
                <label style={styles.label}>
                  URL Gambar <span style={styles.required}>*</span>
                </label>
                <input
                  type="url"
                  name="imageUrl"
                  value={productData.imageUrl}
                  onChange={handleInputChange}
                  placeholder="https://example.com/gambar-produk.jpg"
                  style={{
                    ...styles.input,
                    ...(errors.imageUrl ? styles.inputError : {}),
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#22C55E")}
                  onBlur={(e) =>
                    (e.target.style.borderColor = errors.imageUrl
                      ? "#EF4444"
                      : "#D1D5DB")
                  }
                />
                {errors.imageUrl && (
                  <div style={styles.errorMsg}>{errors.imageUrl}</div>
                )}
              </div>

              <div style={styles.imagePreview}>
                {productData.imageUrl && isValidUrl(productData.imageUrl) ? (
                  <img
                    src={productData.imageUrl}
                    alt="Preview"
                    style={styles.previewImg}
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                ) : (
                  <div style={styles.previewPlaceholder}>
                    📷 Preview gambar akan muncul di sini
                  </div>
                )}
              </div>
            </div>

            {/* Status */}
            <div style={styles.formSection}>
              <h2 style={styles.sectionTitle}>
                <span style={styles.sectionIcon}>⚙️</span>
                Status Produk
              </h2>

              <div style={styles.formGroup}>
                <label style={styles.label}>Status</label>
                <select
                  name="status"
                  value={productData.status}
                  onChange={handleInputChange}
                  style={styles.select}
                >
                  <option value="active">Aktif</option>
                  <option value="inactive">Tidak Aktif</option>
                </select>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default GreenMartAddProduct;
