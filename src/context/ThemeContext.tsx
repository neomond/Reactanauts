import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useState, useEffect, ReactNode} from 'react';

interface Theme {
  backgroundColor: string;
  textColor: string;
}

interface ThemeContextProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
  theme: Theme;
}

export const ThemeContext = createContext<ThemeContextProps>({
  isDarkMode: false,
  toggleTheme: () => {},
  theme: {backgroundColor: '', textColor: ''},
});

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const getThemePreference = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem('theme');
        if (savedTheme) {
          setIsDarkMode(savedTheme === 'dark');
        }
      } catch (error) {
        console.log(error);
      }
    };

    getThemePreference();
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  useEffect(() => {
    const saveThemePreference = async () => {
      try {
        await AsyncStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
      } catch (error) {
        // Handle error
      }
    };

    saveThemePreference();
  }, [isDarkMode]);

  const lightTheme: Theme = {
    backgroundColor: '#fff',
    textColor: '#1c1c1c',
  };

  const darkTheme: Theme = {
    backgroundColor: '#1c1c1c',
    textColor: '#fff',
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{isDarkMode, toggleTheme, theme}}>
      {children}
    </ThemeContext.Provider>
  );
};
