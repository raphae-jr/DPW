import KartuKemampuan from './KartuKemampuan.jsx';

function DaftarKemampuan({ daftarData }) {
  return (
    <div className="daftar-kemampuan">
      {daftarData.map((item) => (
        <KartuKemampuan
          key={item.id}
          nama={item.nama}
          tingkat={item.tingkat}
          deskripsi={item.deskripsi}
          gambar={item.gambar}
        />
      ))}
    </div>
  );
}

export default DaftarKemampuan;