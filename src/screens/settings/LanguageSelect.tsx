import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import '../../locales/i18n'
import { useTranslation } from "react-i18next";
import AsyncStorage from '@react-native-async-storage/async-storage';
const LanguageSelect = ({ navigation }: any) => {




    const [currentLanguage, setcurrentLanguage] = useState('az')

    const { t, i18n } = useTranslation();

    const changeLang = (lang: string) => {

        i18n.changeLanguage(lang).then(() => {
            // this.props.close();
            i18n.options.lng = lang;
            AsyncStorage.setItem('language', lang);
            setcurrentLanguage(lang)
        });



    }

    return (
        <View>
            <Text style={{marginLeft: 125, fontSize:24, fontWeight:'700',color:'black'}}>{t("selectlang")}</Text>

            <TouchableOpacity onPress={() => {changeLang('az');navigation.navigate("SettingsMain")}}>
                <Text style={{fontSize:20,color:'green'}}>Azərbaycanca</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {changeLang('en');navigation.navigate("SettingsMain")}}>
                <Text style={{fontSize:20,color:'green'}}>English</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LanguageSelect

const styles = StyleSheet.create({})