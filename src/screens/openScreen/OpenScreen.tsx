import { useContext, useEffect, useState } from "react";
import { FavoritesProvider } from "../../context/FavoritesContext"
import StartStack from "../../navigation/stack/start"
import TabMain from "../../navigation/tab"
import { FirstLoginContext } from "../../context/FirstLoginContext";
import { getUserCategories, removeAllUserCategories } from "../../utils/storage/usersSavedCategoriesHelper";



const OpenScreen = () => {

    const [loading, setloading] = useState<boolean>(true);

    let { firstLogin, setFirstLogin } = useContext(FirstLoginContext);

    useEffect(() => {

        getUserCategories()
            .then(res => {
                if (res) {
                    // setFirstLogin(false)
                    setloading(false);
                }
                else {
                    // setFirstLogin(true);
                    setloading(false);
                }
            })

    }, [])

    if (loading) {
        return <></>
    }
    else {

        if (firstLogin){
            return(<StartStack />)}
        else{
            return(<>
            <FavoritesProvider>
                <TabMain />
            </FavoritesProvider>
        </>)}

    }
}

export default OpenScreen