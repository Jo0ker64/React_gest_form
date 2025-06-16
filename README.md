Exemple de code pour appeler L'api COTE FRONT
import axios from "axios";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [motDePasse, setMotDePasse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/login", {
        email,
        motDePasse,
      });
      console.log("Connexion réussie :", response.data);
    } catch (error) {
      console.error(" Erreur de connexion :", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Ton formulaire ici */}
    </form>
  );
}

COTE BACK SUR L'API AJOUTER CECI DANS LE FICHIER CONFIG
@Configuration
public class CorsConfig {
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return registry -> registry.addMapping("/**")
            .allowedOrigins("http://localhost:5173")
            .allowedMethods("*")
            .allowedHeaders("*");
    }
}



npm install
npm run dev