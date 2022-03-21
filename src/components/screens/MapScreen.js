import React, {useRef, useEffect, useCallback} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {connect} from 'react-redux';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import mapStyles from '../../constants/mapStyles';
import colors from '../../constants/colors';

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
  }, []);

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
    <View>
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
            image={require('../../assets/img/marker.png')}>
            <Callout
              tooltip
              onPress={() => navigation.navigate('Details', item)}>
              <View style={style.Bubble}>
                <Text style={style.text}>More Details</Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
    </View>
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
    borderWidth: 1,
    padding: 5,
  },
  text: {
    margin: 5,
    fontWeight: 'bold',
  },
});
