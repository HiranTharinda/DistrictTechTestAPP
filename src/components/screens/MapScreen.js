import React, {useRef, useEffect, useCallback} from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {connect} from 'react-redux';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import mapStyles from '../../constants/mapStyles';
import colors from '../../constants/colors';
import {SafeAreaView} from 'react-native-safe-area-context';

const MapScreen = ({navigation, route, restaurants}) => {
  const mapViewRef = useRef();

  useEffect(() => {
    if (!route.params) {
      setTimeout(() => {
        mapViewRef.current.fitToSuppliedMarkers(
          restaurants.map(({_id}) => _id),
          true,
        );
      }, 100);
    }
  }, [restaurants]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      if (!route.params) {
        mapViewRef.current.fitToSuppliedMarkers(
          restaurants.map(({_id}) => _id),
          true,
        );
      } else if (route.params.item) {
        const {latitude, longitude} = route.params.item;
        const marker = [{latitude, longitude}];
        mapViewRef.current.fitToCoordinates(marker, true);
      } else {
        mapViewRef.current.fitToSuppliedMarkers(
          restaurants.map(({_id}) => _id),
          true,
        );
      }
    });
    return unsubscribe;
  }, [navigation, route]);

  useFocusEffect(
    useCallback(() => {
      return () => {
        navigation.setParams({item: null});
      };
    }, []),
  );

  return (
    <SafeAreaView>
      <StatusBar
        animated={true}
        backgroundColor={colors.white}
        barStyle={'dark-content'}
      />
      <MapView
        ref={mapViewRef}
        style={style.map}
        customMapStyle={mapStyles}
        provider={PROVIDER_GOOGLE}>
        {restaurants.map((item, index) => (
          <Marker
            key={item._id}
            identifier={item._id}
            coordinate={{
              latitude: item.latitude,
              longitude: item.longitude,
            }}
            title={item.name}
            description={item.description}
            image={require('../../../assets/img/pin2.png')}>
            <Callout
              tooltip
              style={{flex: 1, position: 'relative'}}
              onPress={() => navigation.navigate('Details', item)}>
              <View style={style.Bubble}>
                <Text style={style.text}>More Details</Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
    </SafeAreaView>
  );
};

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants.restaurants,
  };
};

export default connect(mapStateToProps, {})(MapScreen);

const style = StyleSheet.create({
  map: {
    height: '100%',
  },
  Bubble: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    backgroundColor: colors.white,
    borderRadius: 30,
    borderColor: colors.primary,
    elevation: 5,
    borderWidth: 2,
    padding: 5,
    marginBottom: 10,
  },
  text: {
    margin: 5,
    fontFamily: 'Nunito-Bold',
  },
});
