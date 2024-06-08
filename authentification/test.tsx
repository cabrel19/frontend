import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';

const App = () => {
  const [selectedElement, setSelectedElement] = useState(null);

  const handlePress = (element) => {
    setSelectedElement(element);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={[styles.element, selectedElement === 1 && styles.selectedElement]} 
        onPress={() => handlePress(1)}
      >
        <Text>Élément 1</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={[styles.element, selectedElement === 2 && styles.selectedElement]} 
        onPress={() => handlePress(2)}
      >
        <Text>Élément 2</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.element, selectedElement === 3 && styles.selectedElement]} 
        onPress={() => handlePress(3)}
      >
        <Text>Élément 3</Text>
      </TouchableOpacity>

      <Button 
        title="Action"
        onPress={() => alert('Bouton activé!')}
        disabled={selectedElement === null}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  element: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderWidth: 1,
    borderColor: 'black'
  },
  selectedElement: {
    borderColor: 'green',
    borderWidth: 2
  }
});

export default App;