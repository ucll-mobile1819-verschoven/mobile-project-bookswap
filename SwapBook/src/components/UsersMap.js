import React from 'react';
import {View, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';

import {styles} from '../styles/Style';
import { darkMap } from '../styles/DarkMap';


const usersMap = props => {
    let userLocationMarker = null;
    if(props.userLocation) {
        userLocationMarker= <MapView.Marker coordinate={props.userLocation}/>;
    }

    const sellerLocationMarker = props.sellerLocation.map(sellerLocation => (
        <MapView.Marker coordinate={sellerLocation} key={sellerLocation.Id}/>
    ));

    return (
        <View styles={styles.mapContainer}>
            {/*Voor dark map*/}
            {/*customMapStyle={darkMap} */}
            <MapView region={props.userLocation} style={styles.map}> 
               {userLocationMarker}
               {sellerLocationMarker}
            </MapView>
        </View>
    );
};

export default usersMap;

