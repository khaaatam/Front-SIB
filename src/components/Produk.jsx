// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import styles from "../assets/css/Produk.module.css";
import produkData from "../utils/produkData";
import FormProduk from "./FormProduk";

function Produk() {
  // let produkList = [...produkData];
  const [produkList, setProdukList] = useState([...produkData]);
  // const produkContainerRef = useRef(null);
  useEffect(() => {
    console.log("Komponen produk telah dimuat");
  }, []);
  useEffect(() => {
    console.log("Daftar produk tertambah", produkList);
  }, [produkList]);
  const addProduk = (newProduk) => {
    const produkId = {
      id: produkList.length + 1,
      ...newProduk,
    };
    setProdukList((prevList) => [...prevList, produkId]);
    alert("Produk berhasil ditambahkan!");
  };
  // const handleClick = () => {
  //   const newProduk = {
  //     id: produkList.length + 1,
  //     nama: "Printer Epson",
  //     tahun: 2023,
  //     harga: "Rp 3.000.000",
  //     gambar: "https://picsum.photos/200/300",
  //   };
  //   setProdukList((prevList) => [...prevList, newProduk]);
  //   alert("Produk berhasil ditambahkan!");
  // };
  return (
    <div className={styles.produkContainer}>
      <h1 className={styles.title}>Daftar Produk</h1>
      <div className={styles.cardContainer}>
        {produkList.map((item) => (
          <div className={styles.card} key={item.id}>
            <img src={item.gambar} alt={item.nama} />
            <h3 className={styles.cardTitle}>{item.nama}</h3>
            <p>Tahun {item.tahun}</p>
            <p>Harga {item.harga}</p>
          </div>
        ))}
      </div>
      {/* <button className={styles.addButton} onClick={handleClick}>
        Tambahkan Produk
      </button> */}
      <FormProduk onAddProduk={addProduk} />
    </div>
  );
}

export default Produk;
