import {
  View,
  Text,
  FlatList,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {categoriesData} from '../../data/categoriesData';
import {Category} from '../../models/Category';
import {ActivityIndicator} from 'react-native-paper';
import {saveUserCategories} from '../../utils/storage/usersSavedCategoriesHelper';
import {FirstLoginContext} from '../../context/FirstLoginContext';
import {SafeAreaView} from 'react-native-safe-area-context';

const CategoryListScren = ({navigation}: any) => {
  const [categories, setcategories] = useState<Category[]>([]);

  const {firstLogin, setFirstLogin} = useContext(FirstLoginContext);
  const [loading, setloading] = useState(true);
  const [categoriesData, setCategoriesData] = useState<any[]>([]);

  //category varsa çıkar yoksa ekle
  const categoryOperation = (item: Category) => {
    let categoryControl = categories.find(q => q.id == item.id);
    if (categoryControl) {
      let filteredCategories = categories.filter(q => q.id != item.id);
      setcategories(filteredCategories);
    } else {
      setcategories([...categories, item]);
    }
  };
  useEffect(() => {
    setCategoriesData([
      {name: 'Restaurant', icon: '🍽️', id: 1},
      {name: 'Sight', icon: '🏛️', id: 2},
      {name: 'Shop', icon: '🛍️', id: 3},
      {name: 'Museum', icon: '🖼️️️', id: 4},
      {name: 'Hotel', icon: '🛏️', id: 5},
      {name: 'Club', icon: '🪩', id: 6},
      {name: 'Park', icon: '🛝', id: 7},
      {name: 'Hospital', icon: '🏨', id: 8},
    ]);
    setTimeout(() => {
      setloading(false);
    }, 800);
  }, []);

  const renderItem = ({item}: any) => {
    let cstmstyle = {};

    let categoryControl = categories.find(q => q.id == item.id);

    if (categoryControl)
      cstmstyle = {
        borderColor: '#F6F6F6',
      };

    return (
      <>
        <Pressable style={styles.box} onPress={() => categoryOperation(item)}>
          <View style={[styles.style1, cstmstyle]}>
            <Text style={styles.icon}>{item.icon}</Text>
            <Text style={styles.text}>{item.name}</Text>
          </View>
        </Pressable>
      </>
    );
  };
  const next = () => {
    if (categories.length > 0) {
      console.log('====================================');
      console.log(categories);
      console.log('====================================');
      saveUserCategories(categories).then(res => {
        setFirstLogin(false);
      });
    } else {
      setFirstLogin(false);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator style={styles.loading} animating={loading} />
      {!loading && (
        <FlatList
          contentContainerStyle={styles.mainCategories}
          data={categoriesData}
          renderItem={renderItem}
          numColumns={2}
          ListHeaderComponent={() => (
            <>
              <View style={styles.textWrapper}>
                <Text style={styles.title}>Choose your interest</Text>
                <Text style={styles.desc}>
                  Select at least 2 options that we can suggest you on the home
                  page.
                </Text>
              </View>
            </>
          )}
          ListFooterComponent={() => (
            <>
              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <TouchableOpacity style={styles.btn} onPress={next}>
                  <Text style={styles.btnText}>Next</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        />
      )}
    </SafeAreaView>
  );
};

export default CategoryListScren;

const styles = StyleSheet.create({
  title: {
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 24,
    color: '#fff',
    marginBottom: 30,
    textAlign: 'center',
  },
  desc: {
    color: 'gray',
    fontWeight: '600',
    fontSize: 15,
    textAlign: 'center',
  },
  textWrapper: {
    marginBottom: 28,
  },
  container: {
    backgroundColor: '#1c1c1c',
    flex: 1,
  },
  box: {
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 20,
    //     marginLeft: 20,
  },
  icon: {
    fontSize: 36,
    fontWeight: '400',
    marginBottom: 8,
  },
  text: {
    fontSize: 15,
    fontWeight: '400',
    color: '#fff',
  },
  btn: {
    backgroundColor: '#018CF1',
    borderRadius: 8,
    height: 48,
    width: 343,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 16,
  },
  style1: {
    borderStyle: 'solid',
    borderColor: '#494949',
    borderWidth: 1,
    borderRadius: 8,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 164,
    height: 125,
    marginHorizontal: 8,
    marginBottom: 16,
  },
  loading: {
    color: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{translateY: 450}],
  },
  mainCategories: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
