import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';

// Définir le type des données du contexte
interface AuthContextType {
  userId: string | undefined;
  role: string | undefined;
  setUser: React.Dispatch<React.SetStateAction<string | undefined>>;
  setRole: React.Dispatch<React.SetStateAction<string | undefined>>;
}

// Création du contexte avec un type initial
const DataContext = createContext<AuthContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [userId, setUserId] = useState<string | undefined>(undefined);
  const [role, setRole] = useState<string | undefined>(undefined);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/users/me', {
          credentials: 'include', // Important pour inclure le cookie HttpOnly
        });

        if (res.ok) {
          const data = await res.json();
          setUserId(data.id);
          setRole(data.role);
        } else {
          setUserId(undefined);
          setRole(undefined);
        }
      } catch (error) {
        console.error('Erreur de vérification de l\'authentification', error);
      }
    };

    checkAuth(); // Vérifie si l'utilisateur est authentifié au chargement du composant
  }, []);

  return (
    <DataContext.Provider value={{ userId, role, setUser: setUserId, setRole }}>
      {children}
    </DataContext.Provider>
  );
};

// Hook personnalisé pour accéder au contexte
export const useAuthContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useAuthContext doit être utilisé dans un DataProvider');
  }
  return context;
};
