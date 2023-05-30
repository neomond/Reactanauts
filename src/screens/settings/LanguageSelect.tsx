import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, {useContext, useState} from 'react';
import '../../locales/i18n';
import {useTranslation} from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ThemeContext} from '../../context/ThemeContext';

const LanguageSelect = ({navigation}: any) => {
  const [currentLanguage, setcurrentLanguage] = useState('az');
  const {theme} = useContext(ThemeContext);

  const {t, i18n} = useTranslation();

  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang).then(() => {
      // this.props.close();
      i18n.options.lng = lang;
      AsyncStorage.setItem('language', lang);
      setcurrentLanguage(lang);
    });
  };

  return (
    <SafeAreaView
      style={[styles.main, {backgroundColor: theme.backgroundColor}]}>
      <Text style={[styles.header, {color: theme.textColor}]}>
        {t('selectlang')}
      </Text>
      <View style={styles.langTypesWrapper}>
        <View style={styles.langItems}>
          <Text style={styles.langFlag}>🇦🇿</Text>
          <TouchableOpacity
            onPress={() => {
              changeLang('az');
              navigation.navigate('SettingsMain');
            }}>
            <Text style={[styles.langText, {color: theme.textColor}]}>
              Azərbaycanca
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.langItems}>
          <Text style={styles.langFlag}>🇬🇧</Text>
          <TouchableOpacity
            onPress={() => {
              changeLang('en');
              navigation.navigate('SettingsMain');
            }}>
            <Text style={[styles.langText, {color: theme.textColor}]}>
              English
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LanguageSelect;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#1c1c1c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 15,
  },
  langTypesWrapper: {
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  langText: {
    fontSize: 20,
    color: '#fff',
  },
  langItems: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 12,
  },
  langFlag: {
    fontSize: 22,
  },
});


