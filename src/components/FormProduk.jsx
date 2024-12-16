import { useState } from "react";
import styles from "../assets/css/FormProduk.module.css";

// eslint-disable-next-line react/prop-types
function FormProduk({ onAddProduk }) {
  const [formData, setFormData] = useState({
    nama: "",
    tahun: "",
    harga: "",
    gambar: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.nama && formData.tahun && formData.harga) {
      onAddProduk(formData);
      setFormData({
        nama: "",
        tahun: "",
        harga: "",
        gambar: "",
      });
    } else {
      alert("Semua field harus diisi!");
    }
  };

  return (
    <div className={styles.produkContainer}>
      <h1 className={styles.title}>Form Tambah Produk</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="nama">Nama Produk:</label>
          <input
            type="text"
            id="nama"
            name="nama"
            value={formData.nama}
            placeholder="Masukkan nama produk"
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="tahun">Tahun Produksi:</label>
          <input
            type="number"
            id="tahun"
            name="tahun"
            value={formData.tahun}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="harga">Harga:</label>
          <input
            type="number"
            id="harga"
            name="harga"
            value={formData.harga}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="gambar">Gambar:</label>
          <input
            type="text"
            id="gambar"
            name="gambar"
            value={formData.gambar}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Tambah Produk
        </button>
      </form>
    </div>
  );
}

export default FormProduk;
