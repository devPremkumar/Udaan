import React from 'react'
import { StyleSheet, View } from 'react-native'
import Animated from 'react-native-reanimated'
import { Icon, Button } from 'react-native-elements'
import { createStackNavigator } from '@react-navigation/stack'
import Feedback from './Feedback'
import CountrySelection from './CountrySelection'
import Detail from './Detail'
import Splash from './Splash'

const Screens = ({ navigation, style }) => {
    const Stack = createStackNavigator();
    return (
        <Animated.View style={StyleSheet.flatten([styles.stack, style])}>
            <Stack.Navigator 
                screenOptions={{
                    headerTransparent: true,
                    headerTitle: null,
                    headerLeft: () => (
                        <View style={{paddingTop:22}}>
                            <Button buttonStyle={{backgroundColor:'transparent'}} transparent onPress={() => navigation.openDrawer()}
                                icon={
                                    <Icon type='feather'
                                        name="menu"
                                        size={28}
                                        color="black"
                                        backgroundColor='transparent'
                                    />
                                }
                            />
                        </View>
                    ),
                }}>
                {/* <Stack.Screen name="Splash">{props => <Splash {...props} />}</Stack.Screen> */}
                <Stack.Screen name="Home">{props => <CountrySelection {...props} />}</Stack.Screen>
                <Stack.Screen name="Feedback">{props => <Feedback {...props} />}</Stack.Screen>
                <Stack.Screen name="Detail">{props => <Detail {...props} />}</Stack.Screen>
            </Stack.Navigator>
        </Animated.View>
    );
};
export default Screens
const styles = StyleSheet.create({
    stack: {
        flex: 1,
        shadowColor: '#FFF',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 5
    },
})
