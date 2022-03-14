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
  toggleFavorite: (id: number) => Promise<number[]>;
}

const FavContext = createContext({} as FavContextProps);

function FavProvider({ children }: FavProviderProps) {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = async (id: number) => {
    try {
      if (!favorites.includes(id)) {
        const newFavorites = favorites;
        newFavorites.push(id);

        setFavorites(newFavorites);

        const jsonValue = JSON.stringify(newFavorites);

        await AsyncStorage.setItem("@user_key", jsonValue);

        return newFavorites;
      } else {
        const newFavorites = favorites.filter((favorite) => favorite !== id);

        setFavorites(newFavorites);

        const jsonValue = JSON.stringify(newFavorites);

        await AsyncStorage.setItem("@user_key", jsonValue);

        return newFavorites;
      }
    } catch (e) {
      console.log("error");

      return [];
    }
  };

  const retrieveFavorites = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@storage_Key");

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
