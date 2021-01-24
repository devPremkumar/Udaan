import React, { useState, useEffect } from 'react'
import { Text, View, Image, ImageBackground, StyleSheet } from 'react-native'
import bgImage from './Assets/detailBackground.png'
import axios from 'axios'


const Detail = (props) => {
    const [cases, setcases] = useState('');
    const { country } = props.route.params
    const URL = `https://disease.sh/v3/covid-19/countries/${country}`
    const getCountry = () => {
        axios.get(URL)
            .then((response) => {
                const allCountry = response.data
                setcases(allCountry)
            })
            .catch(error => console.log('error', error))
    }
    useEffect(() => {
        getCountry();
    }, []);
    const population = cases && cases.population
    const tests = cases && cases.tests
    const Cases = cases && cases.cases
    const active = cases && cases.active
    const deaths = cases && cases.deaths
    const recovered = cases && cases.recovered
    return (
        <ImageBackground source={bgImage} style={styles.container}>
            <Text numberOfLines={1} adjustsFontSizeToFit style={{ fontWeight: 'bold', fontSize: 35, color: 'white' }}> {country} </Text>
            <View style={{ paddingTop: '30%', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.23, shadowRadius: 2.62, elevation: 4, margin: 20, width: '40%', height: 200, backgroundColor: 'white' }}>
                        <View style={{ padding: 5, flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15, color: '#34495E', margin: 10 }}> TOTAL POPULATION </Text>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 0.6 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 28, color: '#34495E' }}>{population}</Text>
                        </View>
                    </View>
                    <View style={{ shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.23, shadowRadius: 2.62, elevation: 4, margin: 20, width: '40%', height: 200, backgroundColor: 'white' }}>
                        <View style={{ padding: 5, flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15, color: '#B03A2E', margin: 10 }}> TOTAL TESTS </Text>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 0.6 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 28, color: '#B03A2E' }}>{tests}</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.23, shadowRadius: 2.62, elevation: 4, margin: 20, width: '40%', height: 200, backgroundColor: 'white' }}>
                        <View style={{ padding: 5, flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'red', margin: 10 }}>  CONFIRMED </Text>
                            <Image source={require('./Assets/Confirmed.png')} style={{ width: 20, height: 35, resizeMode: 'stretch' }} />
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 0.6 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 28, color: 'red' }}>{Cases}</Text>
                        </View>
                    </View>
                    <View style={{ shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.23, shadowRadius: 2.62, elevation: 4, margin: 20, width: '40%', height: 200, backgroundColor: 'white' }}>
                        <View style={{ padding: 5, flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'blue', margin: 10 }}> ACTIVE </Text>
                            <Image source={require('./Assets/Active.png')} style={{ width: 100, height: 35 }} />
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 0.6 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 28, color: 'blue' }}>{active}</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.23, shadowRadius: 2.62, elevation: 4, margin: 20, width: '40%', height: 200, backgroundColor: 'white' }}>
                        <View style={{ padding: 5, flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'green', margin: 10 }}> RECOVERED </Text>
                            <Image source={require('./Assets/Recovered.png')} style={{ width: 20, height: 35, resizeMode: 'stretch' }} />
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 0.6 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 28, color: 'green' }}>{recovered}</Text>
                        </View>
                    </View>
                    <View style={{ shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.23, shadowRadius: 2.62, elevation: 4, margin: 20, width: '40%', height: 200, backgroundColor: 'white' }}>
                        <View style={{ padding: 5, flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'black', margin: 10 }}> DEATH </Text>
                            <Image source={require('./Assets/Death.png')} style={{ width: 100, height: 35 }} />
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 0.6 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 28, color: 'black' }}>{deaths}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    }
})


export default Detail

