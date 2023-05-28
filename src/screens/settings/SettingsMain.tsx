import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useState} from 'react';
import '../../locales/i18n';
import {useTranslation} from 'react-i18next';
import {Switch, Provider as PaperProvider} from 'react-native-paper';
import {ThemeContext} from '../../context/ThemeContext';

const SettingsMain = ({navigation}: any) => {
  const {isDarkMode, toggleTheme, theme} = useContext(ThemeContext);

  const [currentLanguage, setcurrentLanguage] = useState('az');
  const {t, i18n} = useTranslation();

  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang).then(() => {
      // this.props.close();
      i18n.options.lng = lang;
      setcurrentLanguage(lang);
    });
  };

  const onToggleSwitch = () => {
    toggleTheme();
  };

  return (
    <PaperProvider
      theme={{
        colors: {
          primary: 'rgba(224, 120, 62, 1)',
        },
      }}>
      <SafeAreaView
        style={[styles.main, {backgroundColor: theme.backgroundColor}]}>
        <View style={styles.toggleWrapper}>
          <TouchableOpacity onPress={toggleTheme}>
            <Switch
              style={styles.switch}
              value={isDarkMode}
              onValueChange={onToggleSwitch}
            />
          </TouchableOpacity>
          <Text style={[styles.header, {color: theme.textColor}]}>
            {t('settings')}
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('LanguageSelect');
          }}>
          <Text style={styles.langText}>{t('changelang')}</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </PaperProvider>
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
  switch: {
    transform: [{scale: 0.8}],
  },
  toggleWrapper: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    columnGap: 50,
    marginBottom: 10,
  },
});
