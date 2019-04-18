import React from 'react'
import { Button} from 'react-native'

const fetchLocation = props => {
    return (
        <Button title="Get Your Location" onPress={props.onGetLocation}/>
    );
}

export default fetchLocation