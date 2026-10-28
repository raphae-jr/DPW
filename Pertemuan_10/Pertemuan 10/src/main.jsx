import React from "react";
import ReactDOM from "react-dom/client";
import AppProps from "./AppProps.jsx";
import AppState from "./AppState.jsx"; // DIPERBAIKI: aktifkan komponen State
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <main className="page-layout"> {/* DITAMBAHKAN: tampilkan kedua materi dalam satu halaman */}
      <AppState />
      <AppProps />
    </main>
  </React.StrictMode>
);
