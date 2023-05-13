import { createContext, useEffect, useState } from "react";

interface FavoritesProviderProps {
    favorites: any[]
    setFavorites(item: any): void;
}

export const FavoritesContext = createContext<FavoritesProviderProps>({
    favorites: [],
    setFavorites: () => { }
});


export const FavoritesProvider   = ({ children } : any) => {
    
    
    
    //global state
    const [favorites, setFavorites] = useState<any[]>([])

    const values : FavoritesProviderProps = {
        favorites,
        setFavorites
    }

    return (
        <FavoritesContext.Provider value={values}>
            {children}
        </FavoritesContext.Provider>
    );
};
