import React from "react";
function ItemProps({jumlah,waktu}){
    return(
        <li className="history-item">
            <div>
                <span className="volume">+{jumlah} ml</span>
                <span className="time">({waktu})</span>
            </div>
        </li>
    );
}

export default ItemProps; // DITAMBAHKAN: agar dapat di-import di AppProps.jsx
