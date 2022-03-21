import React, {useEffect} from 'react';
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {connect} from 'react-redux';
import ListCard from '../elements/listCard';
import {getRestaurants} from '../../actions/restaurantsAction';
import colors from '../../constants/colors';

const RestaurantScreen = ({navigation, restaurants, getRestaurants}) => {
  useEffect(() => {
    getRestaurants();
  }, []);

  return (
    <SafeAreaView style={style.container}>
      <StatusBar
        animated={true}
        backgroundColor={colors.white}
        barStyle={'dark-content'}
      />
      <View style={style.header}>
        <Text style={style.headerTitle}>Restaurants</Text>
      </View>
      {restaurants.length ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 100}}
          data={restaurants}
          renderItem={({item}) => (
            <ListCard item={item} navigation={navigation} />
          )}
        />
      ) : (
        <View style={style.activityIndicatorView}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      )}
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
    flex: 1,
    paddingBottom: 120,
  },
  activityIndicatorView: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: 'Nunito-Bold',
  },
});
