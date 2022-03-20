import React, {useEffect} from 'react';
import {FlatList, Text, View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {connect} from 'react-redux';
import ListCard from '../elements/listCard';
import {getRestaurants} from '../../actions/restaurantsAction';

import colors from '../../data/colors';

const RestaurantScreen = ({navigation, restaurants, getRestaurants}) => {
  useEffect(() => {
    getRestaurants();
  }, []);

  return (
    <SafeAreaView style={style.container}>
      <View style={style.header}>
        <Text style={style.headerTitle}>Restaurants</Text>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 80}}
        data={restaurants}
        renderItem={({item}) => (
          <ListCard item={item} navigation={navigation} />
        )}
      />
    </SafeAreaView>
  );
};

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants.restaurants,
  };
};

const mapDispatchToProps = dispatch => ({
  getRestaurants: () => dispatch(getRestaurants()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantScreen);

const style = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});