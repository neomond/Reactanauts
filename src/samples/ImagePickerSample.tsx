import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { launchImageLibrary } from 'react-native-image-picker';
import { Button } from 'react-native-paper';
import { Image } from 'react-native';

const ImagePickerSample = () => {

    const [imageUri, setimageUri] = useState<string>('')

    const openGallery = () => {

        launchImageLibrary({
            mediaType: 'photo'
        })
            .then(result => {
              
                if (!result.didCancel) {
                    
                    result.assets?.forEach(element => {
                            setimageUri(element.uri!)
                    });
                    
                    // setimageUri(result.assets?[0])
                }
                
            })
    }

    return (
        <>
            <Button onPress={openGallery}>Open Gallery</Button>
            <Image source={{uri: imageUri}} style={{width: 200, height: 200}}/>
        </>
    )
}

export default ImagePickerSample