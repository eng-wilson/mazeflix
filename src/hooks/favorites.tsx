import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ShowProps } from "../interfaces/shows.b";

interface FavProviderProps {
  children: ReactNode;
}

interface FavContextProps {
  favorites: ShowProps[];
  toggleFavorite: (show: ShowProps) => void;
}

const FavContext = createContext({} as FavContextProps);

function FavProvider({ children }: FavProviderProps) {
  const [favorites, setFavorites] = useState<ShowProps[]>([]);

  const toggleFavorite = (show: ShowProps) => {
    try {
      if (!favorites.find((favorite) => favorite.id === show.id)) {
        setFavorites((favorites) => {
          const jsonValue = JSON.stringify(favorites);

          AsyncStorage.setItem("@user_key", jsonValue);

          return [...favorites, show];
        });
      } else {
        setFavorites((favorites) => {
          const jsonValue = JSON.stringify(favorites);

          AsyncStorage.setItem("@user_key", jsonValue);

          return favorites.filter((favorite) => favorite.id !== show.id);
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
