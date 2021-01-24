import React, { useEffect } from "react";
import { View, Image } from 'react-native';
import Trail from "./drawer";

const Splash = ({
    navigation,
}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('CountrySelection')
        }, 4000);

    }, [])

    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Image source={require('./Assets/splashpage.png')} resizeMode='contain' style={{
                height: '100%'
            }} />

        </View>

    )
};

export default Splash
