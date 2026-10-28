import React, { useState } from "react";
import ItemProps from "./components/ItemProps";
import TombolTambah from "./components/TombolTambah";

function AppState() {
  /// const [dataSaatIni, fungsiPengubahData] = useState(nilaiAwal);
  const [daftarCatatan, setDaftarCatatan] = useState([]);
  const [jumlahAir, setJumlahAir] = useState(0);

  function tambahAir() {
    setDaftarCatatan([...daftarCatatan, 200]);
    setJumlahAir(jumlahAir + 200);
  }

  return (
    <div className="tracker-container">
      <header className="tracker-header">
        <h1>Pencatat Air Minum </h1>
      </header>

      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <TombolTambah padaKlik={tambahAir} />
      </div>

      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Total Air: {jumlahAir} ml
      </h2>

      <div className="history-section">
        <h2>Riwayat Minum</h2>
        <ul className="history-list">
          {daftarCatatan.map((jumlah, index) => (
            <ItemProps key={index} jumlah={jumlah} waktu="Baru saja" />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AppState;