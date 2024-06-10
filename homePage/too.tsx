import React, { useState } from 'react';
import { View, Text, TextInput, FlatList } from 'react-native';

// Liste des villes (exemple)
const villesDuCameroun = [
  'Douala',
  'Yaoundé',
  'Bafoussam',
  // ... autres villes
];

export default function App() {
  const [query, setQuery] = useState('');
  const [filteredVilles, setFilteredVilles] = useState([]);

  const handleSearch = (text) => {
    const filtered = villesDuCameroun.filter((ville) =>
      ville.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredVilles(filtered);
    setQuery(text);
  };

  return (
    <View style={{ padding: 16 }}>
      <TextInput
        placeholder="Rechercher une ville"
        onChangeText={handleSearch}
        value={query}
      />
      <FlatList
        data={filteredVilles}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={(item) => item}
      />
    </View>
  );
}
