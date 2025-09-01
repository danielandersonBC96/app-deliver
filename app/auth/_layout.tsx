import { useState } from "react";

export default function useAuthStore() {
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // <- novo estado

  const fetchAuthenticatedUser = async () => {
    setIsLoading(true);

    // Simula carregamento e autenticação
    await new Promise((res) => setTimeout(res, 1000));

    // Aqui você definiria se o usuário está autenticado
    // Por exemplo, checando token no AsyncStorage
    setIsAuthenticated(true); // ou false se não autenticado

    setIsLoading(false);
  };

  return { isLoading, isAuthenticated, fetchAuthenticatedUser };
}
