import React from "react";
function ItemProps({jumlah,waktu,padaHapus}){ // DITAMBAHKAN: prop opsional untuk tombol hapus
    return(
        <li className="history-item">
            <div>
                <span className="volume">+{jumlah} ml</span>{" "}
                <span className="time">({waktu})</span>
            </div>
            {padaHapus && <button type="button" className="btn-delete" onClick={padaHapus}>Hapus</button>} {/* DITAMBAHKAN: tombol hapus hanya untuk riwayat State */}
        </li>
    );
}

export default ItemProps; // DITAMBAHKAN: agar dapat di-import di AppProps.jsx
