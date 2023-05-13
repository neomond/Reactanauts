import { View, Text, FlatList } from 'react-native'
import React, { useContext } from 'react'
import { FavoritesContext } from '../../context/FavoritesContext'
import { Button } from 'react-native-paper';

const FavoritesMain = () => {

  let { favorites, setFavorites } = useContext(FavoritesContext);


  const removeFav = (id: number) => {

    let filteredFavorites = favorites.filter(q => q.id != id);
    setFavorites([...filteredFavorites])
  }
  const renderItem = ({ item }: any) => {
    return <>
      <Text style={{ fontSize: 20 }}>{item.name}</Text>
      <Button onPress={() => removeFav(item.id)}>Remove</Button>
    </>
  }

  return (<>
  <Text style={{fontSize:30}}>Length: {favorites.length}</Text>
    <Button onPress={() => setFavorites([])}>Empty</Button>
    <FlatList
      data={favorites}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />

  </>
  )
}

export default FavoritesMain