import { createContext, useState } from "react";

interface DataProviderProps {
    contextData: any
    setContextData(item: any): void;
}

export const DataContext = createContext<DataProviderProps>({
    contextData: [],
    setContextData: () => { }
});



export const DataProvider = ({ children }: any) => {

    const [contextData, setContextData] = useState([
        {
         "id": "1",
         "name": "Baku Marriott Hotel Boulevard",
         "categoryId": "1",
         "rate": "4.5",
         "lat": "40.371572",
         "long": "49.837411",
         "imageUrl": "https://example.com/baku-marriott-hotel-image.jpg"
        },
        {
         "id": "2",
         "name": "Fairmont Baku, Flame Towers",
         "categoryId": "1",
         "rate": "4.7",
         "lat": "40.366316",
         "long": "49.840805",
         "imageUrl": "https://example.com/fairmont-baku-image.jpg"
        },
        {
         "id": "3",
         "name": "Hilton Baku",
         "categoryId": "1",
         "rate": "4.4",
         "lat": "40.372045",
         "long": "49.837677",
         "imageUrl": "https://example.com/hilton-baku-image.jpg"
        },
        {
         "id": "4",
         "name": "Four Seasons Hotel Baku",
         "categoryId": "1",
         "rate": "4.6",
         "lat": "40.366759",
         "long": "49.842233",
         "imageUrl": "https://example.com/four-seasons-baku-image.jpg"
        },
        {
         "id": "5",
         "name": "JW Marriott Absheron Baku",
         "categoryId": "1",
         "rate": "4.3",
         "lat": "40.370033",
         "long": "49.841015",
         "imageUrl": "https://example.com/jw-marriott-baku-image.jpg"
        },
        {
         "id": "6",
         "name": "Nizami Restaurant",
         "categoryId": "2",
         "rate": "4.2",
         "lat": "40.365262",
         "long": "49.834723",
         "imageUrl": "https://example.com/nizami-restaurant-image.jpg"
        },
        {
         "id": "7",
         "name": "Firuze Restaurant",
         "categoryId": "2",
         "rate": "4.6",
         "lat": "40.373144",
         "long": "49.837021",
         "imageUrl": "https://example.com/firuze-restaurant-image.jpg"
        },
        {
         "id": "8",
         "name": "Mangal Steakhouse",
         "categoryId": "2",
         "rate": "4.5",
         "lat": "40.371518",
         "long": "49.835846",
         "imageUrl": "https://example.com/mangal-steakhouse-image.jpg"
        },
        {
         "id": "9",
         "name": "Sumakh Restaurant",
         "categoryId": "2",
         "rate": "4.3",
         "lat": "40.369855",
         "long": "49.842165",
         "imageUrl": "https://example.com/sumakh-restaurant-image.jpg"
        },
        {
         "id": "10",
         "name": "Shirvanshah Museum Restaurant",
         "categoryId": "2",
         "rate": "4.7",
         "lat": "40.364159",
         "long": "49.852235",
         "imageUrl": "https://example.com/sumakh-restaurant-image.jpg"
        },
        {
         "id": "11",
         "name": "National Museum of History of Azerbaijan",
         "categoryId": "3",
         "rate": "4.7",
         "lat": "40.364166",
         "long": "49.851830",
         "imageUrl": "https://example.com/national-museum-azerbaijan-image.jpg"
        },
        {
         "id": "12",
         "name": "Heydar Aliyev Center",
         "categoryId": "3",
         "rate": "4.6",
         "lat": "40.381277",
         "long": "49.829972",
         "imageUrl": "https://example.com/heydar-aliyev-center-image.jpg"
        },
        {
         "id": "13",
         "name": "Carpet Museum",
         "categoryId": "3",
         "rate": "4.4",
         "lat": "40.368775",
         "long": "49.837244",
         "imageUrl": "https://example.com/carpet-museum-image.jpg"
        },
        {
         "id": "14",
         "name": "Museum of Modern Art",
         "categoryId": "3",
         "rate": "4.5",
         "lat": "40.364812",
         "long": "49.833597",
         "imageUrl": "https://example.com/museum-modern-art-image.jpg"
        },
        {
         "id": "15",
         "name": "Palace of the Shirvanshahs",
         "categoryId": "3",
         "rate": "4.8",
         "lat": "40.368858",
         "long": "49.846125",
         "imageUrl": "https://example.com/palace-shirvanshahs-image.jpg"
       }
       ]);

    const values: DataProviderProps = {
        contextData, setContextData
    }
    return (
        <DataContext.Provider value={values} >
            {children}
        </DataContext.Provider >
    );
};