import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native'
import { Text, Image, FlatList, View, TouchableOpacity, TextInput } from 'react-native';
import styles from './CountrySelectionStyle'
import axios from 'axios'
import searchIcon from './Assets/Images/SearchIcon/searchIcon.png'

const CountrySelection = () => {
  const navigation = useNavigation()
  const [country, setCountry] = useState([]);

  const onChangeSearchText = (text) => {
    if (text.length > 0) {
      const filtered = country.filter(data => data.country.toLowerCase().indexOf(text.toLowerCase()) > -1);
      setCountry(filtered)
    }
    else getCountry()
  }
  const URL = 'https://disease.sh/v3/covid-19/countries?sort=todayCases'

  const getCountry = () => {
    axios.get(URL)
      .then((response) => {
        const allCountry = response.data
        setCountry(allCountry)
      })
      .catch(error => console.log('error', error))
  }
  useEffect(() => {
    getCountry();
  }, []);
  const sortArray = country.sort((a, b) => a.country < b.country ? -1 : (a.country > b.country ? 1 : 0))
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchView}>
          <Image source={searchIcon} style={styles.searchIcon} />
          <TextInput
            style={{ flex: 1, alignItems: 'stretch', width: '40%', justifyContent: 'center' }}
            placeholder='Search'
            placeholderTextColor="#2d2926"
            enablesReturnKeyAutomatically
            clearButtonMode="while-editing"
            onChangeText={text => onChangeSearchText(text)}
          />
        </View>
      </View>
      <FlatList
        data={sortArray}
        keyExtractor={(item, i) => item + i}
        renderItem={({ item }) => {
          return (
            <View style={styles.itemContainer}>
              <TouchableOpacity style={styles.itemTextContainer} onPress={() => navigation.navigate('Detail', { country: item.country })}>
                <Image source={{ uri: item.countryInfo.flag }} style={styles.flag} />
                <Text numberOfLines={1} style={styles.itemText}>{item.country}</Text>
              </TouchableOpacity>
            </View>
          )
        }}
      />
    </View>
  );
};

export default CountrySelection;
