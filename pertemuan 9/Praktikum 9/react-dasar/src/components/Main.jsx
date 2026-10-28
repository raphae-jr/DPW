import JudulBagian from "./JudulBagian.jsx";
import DaftarKemampuan from "./DaftarKemampuan.jsx";
import Kemampuan from "../data.js";

function KontenUtama(){
    return (
        <main className="konten-utama">
            <JudulBagian teks="Daftar skill bahasa gwe" />
            <DaftarKemampuan daftarData={Kemampuan} />
        </main>
    )
}
export default KontenUtama;

