/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import SearchBar from './src/components/SearchBar';
import { Type } from './src/models/Type.model';
import ItemType from './src/screens/home/ItemType';
import { Restaurant, RestaurantData } from './src/models/Restaurant.model';
import RestaurantItem from './src/screens/home/RestaurantItem';

const types: Type[] = [
  {
    type: 'Dinner',
    image: require('./src/assets/images/MU.png'),
  },
  {
    type: 'Lunch',
    image: require('./src/assets/images/MU.png'),
  },
  {
    type: 'Breakfast',
    image: require('./src/assets/images/MU.png'),
  },
  {
    type: 'Dessert',
    image: require('./src/assets/images/MU.png'),
  }
]

const listRestaurants: Restaurant[] = [
  {
    data: {
      background: require('./src/assets/images/MU.png'),
      distance: 10,
      name: 'Beefy',
      type: 'Lunch',
      country: 'Vietnam',
      currency: '$',
      rating: 97
    }
  },
]



function App(): JSX.Element {

  const renderRestaurant = (item: RestaurantData) => {
    return < RestaurantItem data={item} />
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.wrap}>
          <View style={styles.header}>
            <View style={styles.headerTitle}>
              <Text style={styles.heading}>What do you have a taste for ?</Text>
              <Text style={styles.description}>Viet`s Restaurants available</Text>
            </View>

            <View style={styles.headerCart}>
              <View style={styles.buttonCart}>
                <Image style={styles.imageLogo} source={require('./src/assets/images/MU.png')}></Image>
                <Text style={styles.numCart}>2</Text>
              </View>
            </View>
          </View>

          <SearchBar />

          <View style={styles.listItemType}>
            {types.map((item, index) => {
              return <ItemType selected={index == 1} {...item} />
            })}
          </View>

          <View style={styles.listRestaurant}>
            <Text style={styles.listRestaurantText}>Lunch Restaurants Near You</Text>
            <View>
              {listRestaurants.map(renderRestaurant)}
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  listRestaurantText: {
    fontFamily: 'CeraPro-Medium',
    fontSize: 18,
  },

  container: {
    flex: 1,
    padding: 10,
  },
  wrap: {
    flex: 1,
    padding: 14
  },
  heading: {
    fontSize: 25,
    fontFamily: 'CeraPro-Bold',
    color: 'black',
    lineHeight: 30,
  },
  description: {
    marginTop: 10,
    fontFamily: 'CeraPro-Medium',
    color: 'gray'
  },
  buttonCart: {
    backgroundColor: '#F7CB6B',
    padding: 12,
    flexDirection: 'row',
    borderRadius: 15,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    shadowColor: '#F7CB6B'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },

  headerTitle: {
    // flex:1,
    padding: 10,
    width: '68%'
  },

  imageLogo: {
    height: 20,
    width: 20
  },

  numCart: {
    fontFamily: 'CeraPro-Medium',
    color: '#FFF',
    paddingLeft: 10
  },

  headerCart: {
    paddingTop: 10,
  },
  listItemType: {
    flexDirection: 'row',
  }
});

export default App;
