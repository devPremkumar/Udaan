import React from 'react'
import { DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'
const DrawerContent = (props) => {
    return (
        <DrawerContentScrollView {...props} scrollEnabled={false} contentContainerStyle={{ flex: 1 }}>
            <View>
                <View style={{ margin: 30 }}>
                    <Image source={require('./Assets/Udaan_icon.png')} style={[styles.avatar, { height: 80, width: 80 }]} resizeMode="center" />
                    <Text style={{ fontSize: 20, color: 'white', fontWeight: '800' }}>Udaan</Text>
                    <Text style={{ fontSize: 14, color: 'white' }}>Version 0.0.1</Text>
                </View>
                <View>
                    <DrawerItem
                        label="Home"
                        labelStyle={styles.drawerLabel}
                        onPress={() => props.navigation.navigate('Home')}
                        icon={() => <Icon type='antdesign' name="home" color="white" size={22} />}
                    />
                    <DrawerItem
                        label="Feedback"
                        labelStyle={{ color: 'white', marginLeft: -16 }}
                        onPress={() => props.navigation.navigate('Feedback')}
                        icon={() => <Icon type='antdesign' name="message1" color="white" size={22} />}
                    />
                </View>
            </View>
        </DrawerContentScrollView>
    );
};
export default DrawerContent

const styles = StyleSheet.create({
    drawerStyles: { flex: 1, width: '50%', backgroundColor: 'transparent' },
    drawerItem: { alignItems: 'flex-start' },
    drawerLabel: { color: 'white', marginLeft: -16 },
    avatar: { marginBottom: 16 },
})