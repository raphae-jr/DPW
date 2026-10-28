import React, { useState } from "react";
import ItemProps from "./components/ItemProps";
import TombolTambah from "./components/TombolTambah";

function AppState() {
  /// const [dataSaatIni, fungsiPengubahData] = useState(nilaiAwal);
  const [daftarCatatan, setDaftarCatatan] = useState([]);
  const [jumlahAir, setJumlahAir] = useState(0);

  function tambahAir() {
    const catatanBaru = { id: Date.now() + Math.random(), jumlah: 200, waktu: new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" }) }; // DIPERBAIKI: simpan jumlah, waktu, dan ID
    setDaftarCatatan(sebelumnya => [...sebelumnya, catatanBaru]); // DIPERBAIKI: update state berdasarkan nilai sebelumnya
    setJumlahAir(sebelumnya => sebelumnya + 200); // DIPERBAIKI: perhitungan aman saat klik berulang
  }

  function hapusCatatan(id) { // DITAMBAHKAN: hapus satu riwayat dan kurangi totalnya
    const catatan = daftarCatatan.find(item => item.id === id);
    if (!catatan) return;
    setDaftarCatatan(sebelumnya => sebelumnya.filter(item => item.id !== id));
    setJumlahAir(sebelumnya => sebelumnya - catatan.jumlah);
  }

  return (
    <div className="tracker-container">
      <header className="tracker-header">
        <h1>Pencatat Air Minum</h1>
        <p>Praktik React State dan tombol interaktif</p> {/* DITAMBAHKAN: keterangan materi */}
      </header>

      <div className="status-card"> {/* DITAMBAHKAN: gunakan tampilan total yang sudah ada di CSS */}
        <div className="amount">{jumlahAir} ml</div>
        <div className="target">Total air minum hari ini</div>
      </div>

      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <TombolTambah padaKlik={tambahAir} />
      </div>

      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Total Air: {jumlahAir} ml
      </h2>

      <div className="history-section">
        <h2>Riwayat Minum</h2>
        {daftarCatatan.length === 0 && <p className="empty-state">Belum ada riwayat minum.</p>} {/* DITAMBAHKAN: pesan saat kosong */}
        <ul className="history-list">
          {daftarCatatan.map((catatan) => (
            <ItemProps key={catatan.id} jumlah={catatan.jumlah} waktu={catatan.waktu} padaHapus={() => hapusCatatan(catatan.id)} /> {/* DIPERBAIKI: riwayat interaktif */}
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AppState;
