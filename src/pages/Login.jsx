function Login() {
    return (
        <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-8 border border-gray-200">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    Connexion à votre espace
                </h2>
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Adresse mail</label>
                        <input
                            type="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            placeholder="exemple@mail.com"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Mot de passe</label>
                        <input
                            type="password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            placeholder="••••••••"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md transition"
                    >
                        Se connecter
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
