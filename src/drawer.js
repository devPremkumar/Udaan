import React from 'react';
import { StyleSheet } from 'react-native';
import {
    createDrawerNavigator
} from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import Screens from './Screen'
import DrawerContent from './drawercontent'
const Drawer = createDrawerNavigator();
const Trail = () => {
    const [progress, setProgress] = React.useState(new Animated.Value(0));
    const scale = Animated.interpolate(progress, {
        inputRange: [0, 1],
        outputRange: [1, 0.8],
    });
    const borderRadius = Animated.interpolate(progress, {
        inputRange: [0, 1],
        outputRange: [0, 16],
    });

    const animatedStyle = { borderRadius, transform: [{ scale }] };

    return (
        <LinearGradient style={{ flex: 1 }} colors={['#2c3e50', '#FFFFFF']}>
            <Drawer.Navigator
                drawerType="slide"
                overlayColor="transparent"
                drawerStyle={styles.drawerStyles}
                contentContainerStyle={{ flex: 1 }}
                drawerContentOptions={{
                    activeBackgroundColor: 'transparent',
                    activeTintColor: 'white',
                    inactiveTintColor: 'white',
                }}
                sceneContainerStyle={{ backgroundColor: 'transparent' }}
                drawerContent={props => {
                setProgress(props.progress);
                return <DrawerContent {...props} />;
                }}
                // drawerContent={props => <DrawerContent {...props} />}
            >
                <Drawer.Screen name="Heading">
                    {props => <Screens {...props} style={animatedStyle} />}
                </Drawer.Screen>
            </Drawer.Navigator>
        </LinearGradient>
    );
};
export default Trail
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
        elevation: 5,
    },
    drawerStyles: { flex: 1, width: '35%', backgroundColor:'transparent' }

});