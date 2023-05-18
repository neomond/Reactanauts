import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import '../../locales/i18n'
import { useTranslation } from "react-i18next";
const SettingsMain = ({navigation}:any) => {
  
  const [currentLanguage, setcurrentLanguage] = useState('az')

  const { t, i18n } = useTranslation();

 const changeLang = (lang: string) => {

    i18n.changeLanguage(lang).then(() => {
        // this.props.close(); 
        i18n.options.lng = lang;
        setcurrentLanguage(lang)
    });

  } 
  return (
    <View>
      <Text style={{marginLeft: 130, fontSize:24, fontWeight:'700',color:'black'}}>{t("settings")}</Text>
    <TouchableOpacity onPress={() => {navigation.navigate('LanguageSelect')}} style={{marginTop:20,marginLeft:20}}><Text  style={{fontSize:20,color:'green'}}>{t("changelang")}</Text></TouchableOpacity>
    </View>
  )
}

export default SettingsMain

const styles = StyleSheet.create({})