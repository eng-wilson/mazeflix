import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface FavProviderProps {
  children: ReactNode;
}

interface FavContextProps {
  favorites: number[];
  toggleFavorite: (id: number) => void;
}

const FavContext = createContext({} as FavContextProps);

function FavProvider({ children }: FavProviderProps) {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    try {
      if (!favorites.includes(id)) {
        setFavorites((favorites) => {
          const jsonValue = JSON.stringify(favorites);

          AsyncStorage.setItem("@user_key", jsonValue);

          return [...favorites, id];
        });
      } else {
        setFavorites((favorites) => {
          const jsonValue = JSON.stringify(favorites);

          AsyncStorage.setItem("@user_key", jsonValue);

          return favorites.filter((favorite) => favorite !== id);
        });
      }
    } catch (e) {
      console.log("error");

      return [];
    }
  };

  const retrieveFavorites = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@user_key");

      if (jsonValue !== null) {
        setFavorites(JSON.parse(jsonValue));
      }
    } catch (e) {
      console.log("error");
    }
  };

  useEffect(() => {
    retrieveFavorites();
  }, []);

  return (
    <FavContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavContext.Provider>
  );
}

function useFav() {
  const context = useContext(FavContext);

  return context;
}

export { FavProvider, useFav };
