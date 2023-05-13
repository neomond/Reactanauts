import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { BaseNetwork } from '../network/api';

const AddCategory = () => {

    const [name, setname] = useState('');
    const [description, setdescription] = useState('')


    const addNewCategory = () => {

        let baseNetwork = new BaseNetwork();
        let requestData = {
            name: name,
            description: description
        }


        baseNetwork.add('categories', requestData)
            .then(res => {
                console.log('SUCCESS!!');
            })

    }

    return (
        <View>
            <View>
                <TextInput style={styles.input} onChangeText={setname} />
            </View>
            <View>
                <TextInput style={styles.input} onChangeText={setdescription} />
            </View>
            <View>
                <Button onPress={addNewCategory} title='Add'></Button>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

export default AddCategory