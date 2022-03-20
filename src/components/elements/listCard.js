import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import colors from '../../data/colors';
const ListCard = ({item, navigation}) => {
  return (
    <View style={style.listCard}>
      <Image source={{uri: item.img}} style={style.img} />
      <View style={style.textContainer}>
        <Text style={style.itemName}>{item.name}</Text>
        <Text style={style.itemCity}>{item.city}</Text>
        <Text style={style.itemRating}>{item.rating}</Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Details', item)}
          style={style.viewDetailsBtn}>
          <Text>View</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Map', item)}
          style={style.locateBtn}>
          <Text>Locate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  listCard: {
    height: 100,
    elevation: 10,
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
  },
  img: {
    height: 80,
    width: 80,
    marginRight: 10,
  },
  itemName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  itemCity: {
    fontSize: 13,
    color: colors.grey,
  },
  itemRating: {
    fontSize: 17,
    fontWeight: 'bold',
  },
});

export default ListCard;