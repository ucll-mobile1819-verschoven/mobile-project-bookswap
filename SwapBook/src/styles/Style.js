import {StyleSheet} from 'react-native';

import {customMapStyle} from './DarkMap';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    centered: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    mapContainer: {
        width: '100%',
        height: 150,
        marginTop: 20
    },
    map: {
        width: '100%',
        height: '100%',
    },
    lightTheme: {
    },
    darkTheme: {
        customMapStyle: customMapStyle,
    },
    headerStyle: {
        backgroundColor: '#164050',
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
      },
      
});
