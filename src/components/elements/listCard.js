import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import colors from '../../constants/colors';

const ListCard = ({item, navigation}) => {
  return (
    <View style={style.listCard}>
      <View style={style.imageView}>
        <Image
          resizeMode="contain"
          source={{uri: item.img}}
          style={style.img}
        />
        <View style={style.star}>
          <AntDesign
            name={item.star ? 'star' : 'staro'}
            color={colors.primary}
            size={20}
          />
        </View>
      </View>

      <View style={style.textContainer}>
        <Text style={style.itemName}>{item.name}</Text>
        <Text style={style.itemCity}>{item.city}</Text>
        <Text style={style.itemRating}>{item.rating}</Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Details', item)}
          style={style.viewDetailsBtn}>
          <Text style={style.viewText}>View Details</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Map', {item: item, oneItem: true})
          }
          style={style.locateBtn}>
          <Text style={style.locateText}>View on Map</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  listCard: {
    height: 100,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: colors.white,
    marginVertical: 5,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    height: 100,
    merginLeft: 10,
    paddingVertical: 20,
    flex: 1,
  },
  viewDetailsBtn: {
    width: 80,
    height: 30,
    backgroundColor: colors.primary,
    borderRadius: 30,
    paddingHorizontal: 5,
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    elevation: 3,
  },
  star: {
    backgroundColor: colors.white,
    height: 28,
    width: 28,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    elevation: 5,
    position: 'absolute',
  },
  locateBtn: {
    width: 80,
    height: 30,
    backgroundColor: colors.white,
    borderColor: colors.primary,
    borderWidth: 2,
    borderRadius: 30,
    paddingHorizontal: 5,
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    elevation: 3,
  },
  img: {
    height: 80,
    width: 80,
    marginRight: 10,
  },
  imageView: {
    height: 80,
    width: 80,
    marginRight: 10,
  },
  itemName: {
    fontSize: 20,
    fontFamily: 'DancingScript-Bold',
  },
  itemCity: {
    fontSize: 13,
    color: colors.grey,
    fontFamily: 'Nunito-Bold',
  },
  itemRating: {
    fontSize: 13,
    fontFamily: 'Nunito-Bold',
  },
  locateText: {
    fontSize: 10,
    fontFamily: 'Nunito-Bold',
  },
  viewText: {
    fontSize: 10,
    color: colors.white,
    fontFamily: 'Nunito-Bold',
  },
});

export default ListCard;
