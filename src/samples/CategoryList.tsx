import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { BaseNetwork } from '../network/api';

const CategoryList = () => {

    const [categories, setcategories] = useState<any[]>([]);


    useEffect(() => {
        let baseNetwork = new BaseNetwork();

        baseNetwork.getAll('categoriessss')
            .then(data => {
                setcategories(data);
            })
            .catch(err => {
                console.log('Error ', err);
            })

    }, [])


    return (
        <View>
            <FlatList
                data={categories}
                renderItem={({ item }: any) => <Text>{item.name}</Text>}
            />
        </View>
    )
}

export default CategoryList