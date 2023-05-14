import { View, Text, FlatList, Pressable, StyleSheet} from 'react-native'
import React, { useContext, useState } from 'react'
import { categoriesData } from '../../data/categoriesData'
import { Category } from '../../models/Category';
import { Image } from 'react-native';
import { Button } from 'react-native-paper';
import { saveUserCategories } from '../../utils/storage/usersSavedCategoriesHelper';
import { FirstLoginContext } from '../../context/FirstLoginContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DataContext } from '../../context/DataContext';


const CategoryListScren = ({ navigation }: any) => {

//for testing purposes: testing data context 
//    { // const {contextData, setContextData} = useContext(DataContext)

//     // console.log('===============contexttest=====================');
//     // console.log(contextData);
//     // console.log('====================================');}
    const [categories, setcategories] = useState<Category[]>([]);

    const { firstLogin, setFirstLogin } = useContext(FirstLoginContext);


    //category varsa çıkar yoksa ekle
    const categoryOperation = (item: Category) => {
        let categoryControl = categories.find(q => q.id == item.id);

        //eğer category varsa state üzerindne çıkar
        if (categoryControl) {
            let filteredCategories = categories.filter(q => q.id != item.id);
            setcategories(filteredCategories);
        }
        else {
            setcategories([...categories, item])
        }
    }

    const RenderItem = ({ item }: any) => {
        let style = {};

        let categoryControl = categories.find(q => q.id == item.id);

        if (categoryControl)
            style = { borderStyle: 'solid', borderColor: 'tomato', borderWidth: 3 }

        return (<>
            <Pressable onPress={() => categoryOperation(item)}>
                <View style={style}>
                    <Text style={{ fontSize: 20 }}>{item.name}</Text>
                    <Image
                        style={{
                            width: 100,
                            height: 100,
                            backgroundColor:"red"

                        }}
                       source={require("../../assets/images/onboarding/cat1.jpg")}
                    />
                </View>

            </Pressable>
        </>)
    }


    const next = () => {
        if (categories.length > 0) {
            saveUserCategories(categories)
                .then(res => {
                    setFirstLogin(false)
                })
        }
        else {
            setFirstLogin(false)
        }

    }
    return (
        <SafeAreaView>
            <Button onPress={next}>Next</Button>
            {/* <FlatList
                data={categoriesData}
                renderItem={renderItem}
            /> */}
            <View style={styles.container}>
                <>
                {categoriesData.map(item => (
                    <RenderItem key={item.id} item={item} />))
                }
                </>
            </View>
<Pressable style={{marginTop:150,marginLeft: 40,backgroundColor:"red"}} onPress={() => navigation.navigate("GeoLocation")}><Text>Go to Geolocation</Text></Pressable>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#7CA1B4",
        flex: 1,
        flexDirection: 'row',
        flexWrap: "wrap",
    },
    square: {
        backgroundColor: "#7cb48f",
        width: 100,
        height: 100,
        margin: 4,
    }
});
export default CategoryListScren