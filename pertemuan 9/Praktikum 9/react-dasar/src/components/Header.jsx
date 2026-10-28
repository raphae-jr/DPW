import FotoProfile from "./FotopProfil.jsx";
import DeskripsiDiri from "./Deskripsi.jsx";

function Header() {
    return (
        <header className="header-kontainer">
            <FotoProfile />
            <DeskripsiDiri />
        </header>
    );
}

export default Header;