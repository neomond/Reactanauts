import { View, Text, FlatList, Pressable } from 'react-native'
import React, { useContext, useState } from 'react'
import { categoriesData } from '../../data/categoriesData'
import { Category } from '../../models/Category';
import { Image } from 'react-native';
import { Button } from 'react-native-paper';
import { saveUserCategories } from '../../utils/storage/usersSavedCategoriesHelper';
import { FirstLoginContext } from '../../context/FirstLoginContext';
import { SafeAreaView } from 'react-native-safe-area-context';;

const CategoryListScren = ({ navigation }: any) => {

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
                            height: 100

                        }}
                        source={{
                            uri: "https://evrimagaci.org/public/content_media/ee1b702dbed730ed8f7142c19aa33ab6.jpg",
                        }}
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
              <> {categoriesData.map(item => (
                    <RenderItem key={item.id} item={item} />))
                }
                </> 
            </View>


        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
      backgroundColor: "#7CA1B4",
      flex: 1,
      flexDirection:'row',
      flexWrap: "wrap",
    },
    square: {
      backgroundColor: "#7cb48f",
      width: 100,
      height: 100,
      margin: 4,
    },
  });
export default CategoryListScren