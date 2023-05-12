import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ItemType({type,image,selected}:any) {
  return (
    <View style={styles.container}>
        <View style={[styles.imgBg, selected && 
            {backgroundColor:"#59B7C9"}]}>
        <Image source = {image} style={[styles.image, selected && {tintColor:'#FFF'}]} resizeMode='contain'/>
        </View>
      <Text style={[styles.text, ]}>{type}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginRight:10,
        alignItems:'center',
        marginVertical:20
    },
    image:{
        width:40,
        height:40,
        tintColor:'#222',
        
    },
    imgBg:{
        backgroundColor:'#F1F2F6',
        padding:20,
        borderRadius:20
    },

    text:{
        fontFamily:'CeraPro-Medium',
        marginTop:10
    }

})