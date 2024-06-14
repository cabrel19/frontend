import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/AntDesign';

const Test = () => {
  const [selectedGender, setSelectedGender] = useState(null);
  const [showPicker, setShowPicker] = useState(false);

  const togglePicker = () => {
    setShowPicker(!showPicker);
  };

  const handleGenderChange = (gender) => {
    setSelectedGender(gender);
    setShowPicker(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.row} onPress={togglePicker}>
        <Text style={styles.text}>{selectedGender ? selectedGender : 'Genre'}</Text>
        <Icon name="down" size={20} color="#000" />
      </TouchableOpacity>
      {showPicker && (
        <Picker
          selectedValue={selectedGender}
          onValueChange={(itemValue) => handleGenderChange(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Masculin" value="Masculin" />
          <Picker.Item label="Féminin" value="Féminin" />
        </Picker>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  text: {
    marginRight: 10,
  },
  picker: {
    width: 150,
  },
});

export default Test;