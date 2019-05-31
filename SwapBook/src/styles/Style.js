import {StyleSheet} from 'react-native';

//import {customMapStyle} from './DarkMap';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    centered: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    mapContainer: {
        flex: 1,
        position:"relative",
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
    // Dit mag je uitcommenten als dit wel werkt bij jou samen met DarkMap.js!!

    // darkTheme: {
    //     customMapStyle: customMapStyle,
    // },
    // headerStyle: {
    //     backgroundColor: '#164050',
    //     // headerTintColor: '#fff',
    //     headerTitleStyle: {
    //         fontWeight: 'bold',
    //     },
    // },
    buttonStyle: {
        backgroundColor: '#144D82',
        color: '#fff'
    },
    formStyle:{
        justifyContent: 'center',
        marginTop: 10,
        padding: 20,
        backgroundColor: '#ffffff',
    }, 
    formError:{
        color: 'red',
        fontSize: 18,
        marginBottom: 7,
        fontWeight: '600'
    },
    formOk:{
        color: '#0BB586',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    }, 
    border:{
        borderWidth: 2,
         borderColor:'#0BB586',
          borderRadius:5,
           margin:5,
            padding: 5,
    },
    books:{
        marginTop:5,
        paddingTop: 5,
    },
    welcome:{
        margin: 30,
        marginTop:'20%'
    },
      
});

