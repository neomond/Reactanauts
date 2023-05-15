import { createContext, useState } from "react";

interface CategoryProviderProps {
    CategoryData: any
    setCategoryData(item: any): void;
}

export const DataContext = createContext<CategoryProviderProps>({
    CategoryData: [],
    setCategoryData: () => { }
});



export const CategoryProvider = ({ children }: any) => {

    const [CategoryData, setCategoryData] = useState(
        [
            { "name": "Restaurant", "icon": "🍽️", "id": "1" }, { "name": "Sight", "icon": "🏛️", "id": "2" }, { "name": "Shop", "icon": "🛍️", "id": "3" }, { "name": "Museum", "icon": "🖼️️️", "id": "4" }, { "name": "Hotel", "icon": "🛏️", "id": "5" }, { "name": "Club", "icon": "🪩", "id": "6" }, { "name": "Park", "icon": "🛝", "id": "7" }, { "name": "Hospital", "icon": "🏨", "id": "8" }]

    )


    const values: CategoryProviderProps = {
        CategoryData, setCategoryData
    }
    return (
        <DataContext.Provider value={values} >
            {children}
        </DataContext.Provider >
    );
};