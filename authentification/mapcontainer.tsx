import Geolocation from '@react-native-community/geolocation';
// Fonction pour calculer la distance entre deux points
const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
  const R = 6371; // Rayon de la Terre en kilomètres
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const tarif = 150;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // Distance en kilomètres
  const prix = distance*tarif ; //montant a payer
  return prix;

};

/*
Geolocation.getCurrentPosition(
  (position) => {
    const { latitude, longitude } = position.coords;
    const destinationLat = 1111; // Latitude de la destination
    const destinationLon = 22222; // Longitude de la destination
    const distance = calculateDistance(
      latitude,
      longitude,
      destinationLat,
      destinationLon
    );
    console.log(`Distance: ${distance.toFixed(2)} km`);
  },
  (error) => {
    console.error('Erreur lors de la récupération de la position :', error);
  }
);
*/
