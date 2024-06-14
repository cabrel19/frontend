import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useTranslation } from 'react-i18next';

export default function SettingsScreen() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{t('settings.select_language')}</Text>
      <Picker
        selectedValue={language}
        style={styles.picker}
        onValueChange={(itemValue) => changeLanguage(itemValue)}
      >
        <Picker.Item label="English" value="en" />
        <Picker.Item label="Français" value="fr" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  picker: {
    height: 50,
    width: 200,
  },
});