import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="bg-gray-900 text-white p-4 shadow-md flex justify-between items-center">
            <h1 className="text-2xl font-bold">🎓 Gestion Formation</h1>
            <nav className="space-x-4">
                <Link to="/" className="hover:text-green-400">Accueil</Link>
                <Link to="/login" className="hover:text-green-400">Connexion</Link>
            </nav>
        </header>
    );
}

export default Header;
