import react from 'react';
import {} from 'react-native';
import {MapView} from 'react-native-maps';
import { Marker } from 'react-native-maps';


const InteractiveMap = () =>{

    const regionInfos ={
        latitude:4.6125522,
        longitude: 13.1535811,
        latitudeDelta: 0.5,
        longitudeDelta: 0.5,
    }

    const coordonner = {
        latitude:4.051310654478072,
        longitude:9.767548444365518,
        //4.051310654478072, 9.767548444365518
    }

return(
    <MapView region={regionInfos}
        zoomEnabled={false}
        style = {{flex:1}}
    >
      <Marker coordinate={coordonner} title='vous vous trouvez actuellement ici'/>  
    </MapView>
)

}

export default InteractiveMap;