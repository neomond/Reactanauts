import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { FavoritesContext } from '../../context/FavoritesContext';
import ImagePickerSample from '../../samples/ImagePickerSample';

const ProfileMain = () => {

  let {favorites, setFavorites} = useContext(FavoritesContext);


  return (<>
    <View>
      <Text>{favorites.length}</Text>
      <ImagePickerSample/>
    </View>
  </>)
}

export default ProfileMain