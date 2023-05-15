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

    const [CategoryData, setCategoryData] = useState([
        [
            {
             "name": "Hotel",
             "id": "1",
             "icon":"<HotelIcon />"
            },
            {
             "name": "Restaurant",
             "id": "2"
            },
            {
             "name": "Museum",
           "id":"3"
           }
           ]
    ])
    

    const values: CategoryProviderProps = {
        CategoryData, setCategoryData
    }
    return (
        <DataContext.Provider value={values} >
            {children}
        </DataContext.Provider >
    );
};