import ItemProps from "./components/ItemProps.jsx";

function AppProps() {
  return (
    <div>
      <h1>Daftar Minum Hari Ini</h1>

      {/* DI SINI PROPS DIKIRIM */}
      <ItemProps jumlah={200} waktu="08.00" />
      <ItemProps jumlah={300} waktu="10.30" />
      <ItemProps jumlah={500} waktu="13.00" />
    </div>
  );
}

export default AppProps;