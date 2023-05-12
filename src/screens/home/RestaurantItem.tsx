import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Restaurant } from '../../models/Restaurant.model'
import { RestaurantData } from '../../models/Restaurant.model'
import { Image } from 'react-native/Libraries/Image/Image'

export default function RestaurantItem({data}: any) {
    
  return (
    <View>
      <Image source={data.background}></Image>
      <Text>RestaurantItem</Text>
    </View>
  )
}

const styles = StyleSheet.create({})