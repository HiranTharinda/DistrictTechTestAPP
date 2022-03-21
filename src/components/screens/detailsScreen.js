import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {SafeAreaView} from 'react-native-safe-area-context';
import {connect} from 'react-redux';
import colors from '../../constants/colors';
import {updateRestaurant} from '../../actions/restaurantsAction';

const windowHeight = Dimensions.get('window').height;

const DetailsScreen = ({navigation, route, updateRestaurant}) => {
  const item = route.params;
  const [star, setStar] = useState(false);

  useEffect(() => {
    setStar(item.star);
  }, [item]);

  const onSetStar = id => {
    if (star) {
      updateRestaurant(id, false);
      setStar(false);
    } else {
      updateRestaurant(id, true);
      setStar(true);
    }
  };

  return (
    <SafeAreaView style={style.container}>
      <StatusBar
        animated={true}
        backgroundColor={colors.white}
        barStyle={'dark-content'}
      />
      <View style={style.header}>
        <MaterialIcons
          name="arrow-back-ios"
          size={28}
          onPress={navigation.goBack}
        />
        <Text style={style.headerTitle}>Details</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.imgContainer}>
          <Image
            resizeMode="contain"
            source={{uri: item.img}}
            style={style.img}
          />
        </View>
        <View style={style.details}>
          <View style={style.content}>
            <Text style={style.itemName}>{item.name}</Text>
            <TouchableOpacity
              onPress={() => onSetStar(item._id)}
              style={style.iconContainer}>
              <AntDesign
                name={star ? 'star' : 'staro'}
                color={colors.primary}
                size={25}
              />
            </TouchableOpacity>
          </View>
          <Text style={style.detailsText}>{item.description}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => ({
  updateRestaurant: (id, star) => dispatch(updateRestaurant(id, star)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailsScreen);

const style = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: 'Nunito-Bold',
  },
  imgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 280,
  },
  img: {
    height: 220,
    width: 220,
  },
  details: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 60,
    backgroundColor: colors.primary,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    height: windowHeight / 2 + 20,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemName: {
    fontSize: 30,
    fontFamily: 'DancingScript-Bold',
    color: colors.white,
  },
  iconContainer: {
    backgroundColor: colors.white,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    elevation: 5,
  },
  detailsText: {
    marginTop: 10,
    fontSize: 16,
    color: colors.white,
    fontFamily: 'Nunito-Bold',
  },
});
