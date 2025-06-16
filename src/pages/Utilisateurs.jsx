function Utilisateurs() {
    const utilisateurs = [
        {
            id: 1,
            avatar: "https://i.pravatar.cc/40?img=1",
            nom: "Durand",
            prenom: "Alice",
            email: "alice.durand@mail.com",
            role: "ADMIN",
            statut: true,
        },
        {
            id: 2,
            avatar: "https://i.pravatar.cc/40?img=2",
            nom: "Martin",
            prenom: "Jean",
            email: "jean.martin@mail.com",
            role: "UTILISATEUR",
            statut: false,
        },
    ];

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Liste des utilisateurs</h2>
            <div className="overflow-x-auto shadow-lg rounded-lg">
                <table className="min-w-full text-left bg-white rounded-xl overflow-hidden">
                    <thead className="bg-gray-800 text-white">
                        <tr>
                            <th className="p-3">Avatar</th>
                            <th className="p-3">Nom</th>
                            <th className="p-3">Prénom</th>
                            <th className="p-3">Email</th>
                            <th className="p-3">Rôle</th>
                            <th className="p-3">Statut</th>
                            <th className="p-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {utilisateurs.map((u) => (
                            <tr key={u.id} className="border-b hover:bg-gray-100">
                                <td className="p-3">
                                    <img
                                        src={u.avatar}
                                        alt={`${u.prenom} ${u.nom}`}
                                        className="rounded-full w-10 h-10"
                                    />
                                </td>
                                <td className="p-3">{u.nom}</td>
                                <td className="p-3">{u.prenom}</td>
                                <td className="p-3">{u.email}</td>
                                <td className="p-3">
                                    <span
                                        className={`px-2 py-1 text-xs rounded-full ${u.role === "ADMIN"
                                                ? "bg-purple-600 text-white"
                                                : "bg-green-600 text-white"
                                            }`}
                                    >
                                        {u.role}
                                    </span>
                                </td>
                                <td className="p-3">
                                    <span
                                        className={`px-2 py-1 text-xs rounded-full ${u.statut ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"
                                            }`}
                                    >
                                        {u.statut ? "Actif" : "Inactif"}
                                    </span>
                                </td>
                                <td className="p-3 space-x-2">
                                    <button className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600">
                                        ✏️
                                    </button>
                                    <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">
                                        🗑
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Utilisateurs;
