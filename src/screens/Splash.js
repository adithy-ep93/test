import React, {useRef, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {
  StatusBar,
  SafeAreaView,
  Image,
  Text,
  View,
  StyleSheet,
  Dimensions,
  Animated,
} from 'react-native';

import * as Animatable from 'react-native-animatable';

const Splash = ({navigation}) => {
  const fadeValue = useRef(new Animated.Value(0)).current;
  const moveAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [animating, setAnimating] = useState(true);

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 700,
    }).start();
  }, [fadeAnim]);

  // {/Text/}
  const [showText, setShowText] = useState(true);
  useEffect(() => {
    // Change the state every second or the time given by User.
    const interval = setInterval(() => {
      setShowText(showText => !showText);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  // {/Text/}

  //  {/logoImage/}
  const [showImage, setShowImage] = useState(true);
  useEffect(() => {
    // Change the state every second or the time given by User.
    const interval = setInterval(() => {
      setShowImage(showImage => !showImage);
    }, 6000);
    return () => clearInterval(interval);
  }, []);
  //  {/logoImage/}

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      navigation.replace('Login');
    }, 7000);
    Animated.sequence([
      Animated.timing(moveAnim, {
        duration: 1000,
        toValue: Dimensions.get('window').width / 1.5,

        delay: 2000,
        useNativeDriver: false,
      }),

      Animated.timing(moveAnim, {
        duration: 600,
        toValue: 0,
        delay: 1000,
        useNativeDriver: false,
      }),
    ]).start();
    Animated.timing(fadeAnim, {
      duration: 1000,
      toValue: 1,
      delay: 600,
      useNativeDriver: false,
    }).start();
  }, [moveAnim, fadeAnim]);

  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={'#28282B'} />
      <SafeAreaView style={styles.container}>
        <View style={styles.contentContainer}>
          <Animated.View style={[styles.logoContainer, {marginTop: moveAnim}]}>
            <Animated.Image
              source={require('../assets/splash.png')}
              style={[styles.image, {opacity: fadeAnim}]}></Animated.Image>
          </Animated.View>

          <View style={{top: '30%'}}>
            {/* {/Text/} */}

            <Text style={[styles.txt, {display: showText ? 'none' : 'flex'}]}>
              Powered by..
            </Text>
            {/* {/Text/} */}

            {/* {/logoImage/} */}
            <Image
              source={require('../assets/logo.png')}
              style={[styles.image1, {display: showImage ? 'none' : 'flex'}]}
            />
            {/* {/logoImage/} */}
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Splash;

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#28282B',
  },

  txt: {
    color: 'white',
    fontFamily: 'Pacifico-Regular',
    textAlign: 'center',
    color: 'dodgerblue',
    fontSize: 20,
  },
  contentContainer: {
    alignItems: 'center',
    flex: 1,
  },
  image: {
    width: 190,
    height: 90,

    bottom: '5%',
    alignSelf: 'center',
  },
  image1: {
    top: '35%',
    width: 290,
    height: 190,
    alignSelf: 'center',
  },
  logoContainer: {
    flexDirection: 'column',
    top: '5%',
  },
});
