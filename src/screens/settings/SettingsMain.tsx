import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import '../../locales/i18n';
import {useTranslation} from 'react-i18next';

const SettingsMain = ({navigation}: any) => {
  const [currentLanguage, setcurrentLanguage] = useState('az');
  const {t, i18n} = useTranslation();

  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang).then(() => {
      // this.props.close();
      i18n.options.lng = lang;
      setcurrentLanguage(lang);
    });
  };
  return (
    <SafeAreaView style={styles.main}>
      <Text style={styles.header}>{t('settings')}</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('LanguageSelect');
        }}>
        <Text style={styles.langText}>{t('changelang')}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SettingsMain;

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
  langText: {
    fontSize: 20,
    color: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: 'rgba(224, 120, 62, 1)',
    overflow: 'hidden',
    borderRadius: 8,
  },
});
