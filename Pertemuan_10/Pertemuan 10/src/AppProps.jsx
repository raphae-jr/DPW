import ItemProps from "./components/ItemProps.jsx";

function AppProps() {
  return (
    <div className="tracker-container"> {/* DITAMBAHKAN: gunakan desain yang sama */}
      <header className="tracker-header">
        <h1>Daftar Minum Hari Ini</h1>
        <p>Praktik React Props (contoh data tetap)</p> {/* DITAMBAHKAN: bedakan contoh Props dan State */}
      </header>
      {/* DI SINI PROPS DIKIRIM */}
      <ul className="history-list"> {/* DIPERBAIKI: ItemProps menghasilkan li sehingga perlu ul */}
        <ItemProps jumlah={200} waktu="08.00" />
        <ItemProps jumlah={300} waktu="10.30" />
        <ItemProps jumlah={500} waktu="13.00" />
      </ul>
    </div>
  );
}

export default AppProps;
