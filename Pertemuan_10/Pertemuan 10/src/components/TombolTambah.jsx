import React from "react";
function TombolTambah({padaKlik}){
    return(
        <button  className="btn-quick" onClick={padaKlik}>
            +200 ml
        </button>
    );
}

export default TombolTambah