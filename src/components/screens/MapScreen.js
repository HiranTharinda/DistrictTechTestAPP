import React, {useRef, useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {getRestaurants} from '../../actions/restaurantsAction';
import mapStyles from '../../constants/mapStyles';

const MapScreen = ({restaurants, getRestaurants}) => {
  const mapViewRef = useRef();

  useEffect(() => {
    if (!restaurants.length) getRestaurants();
  }, []);

  return (
    <View>
      <MapView
        fitToSuppliedMarkers={restaurants.map(({_id}) => _id)}
        ref={mapViewRef}
        style={style.map}
        customMapStyle={mapStyles}
        provider={PROVIDER_GOOGLE}>
        {restaurants.map((marker, index) => (
          <Marker
            key={marker._id}
            identifier={marker._id}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
            title={marker.name}
            description={marker.description}
            image={require('../../assets/img/marker.png')}
          />
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

const mapDispatchToProps = dispatch => ({
  getRestaurants: () => dispatch(getRestaurants()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen);

const style = StyleSheet.create({
  map: {
    height: '100%',
  },
});
