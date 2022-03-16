import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextProps {
  pin: string;
  savePin: (value: string) => void;
  logged: boolean;
  setIsLogged: (value: boolean) => void;
}

const AuthContext = createContext({} as AuthContextProps);

function AuthProvider({ children }: AuthProviderProps) {
  const [pin, setPin] = useState("");
  const [logged, setIsLogged] = useState(false);

  const savePin = async (value: string) => {
    setPin(value);

    await AsyncStorage.setItem("@auth_key", value);
  };

  const retrievePIN = async () => {
    try {
      const value = await AsyncStorage.getItem("@auth_key");

      if (value !== null) {
        setPin(value);
      }
    } catch (e) {
      console.log("error");
    }
  };

  useEffect(() => {
    retrievePIN();
  }, []);

  return (
    <AuthContext.Provider value={{ pin, savePin, logged, setIsLogged }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
