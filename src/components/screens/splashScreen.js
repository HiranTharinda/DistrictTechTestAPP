import React, {useEffect} from 'react';
import {Text, StyleSheet, Image, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import colors from '../../constants/colors';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 2000);
  }, []);

  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={colors.dark} barStyle={'lite-content'} />
      <Image source={require('../../assets/img/logo.png')} />
      <Text style={style.subHeading}>Technical Test</Text>
      <Text style={style.name}>By Hiran Tharinda</Text>
    </SafeAreaView>
  );
};

export default SplashScreen;

const style = StyleSheet.create({
  container: {
    backgroundColor: colors.dark,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  subHeading: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.white,
  },
  name: {
    fontSize: 10,
    color: colors.white,
    marginBottom: 10,
  },
});
