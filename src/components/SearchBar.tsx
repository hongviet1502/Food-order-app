import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <Text style= {styles.text}>Search for a restaurent</Text>
      <Image
        style={styles.icon}
        source={require('../assets/images/MU.png')}
      ></Image>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#F1F2F6',
        flexDirection: 'row',
        padding:15,
        borderRadius:10,
    },
    
    text: {
        color:'#4E4F50',
        fontFamily: 'CeraPro-Medium',
        flex:1
    },

    icon: {
        height: 20,
        width: 20,
        tintColor: '#4E4F50'
      },
})