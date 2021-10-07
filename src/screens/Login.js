import React, {useState} from 'react';
import {ALERT_TYPE, Dialog, Root, Toast} from 'react-native-alert-notification';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Alert,
  StatusBar,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import {SliderBox} from 'react-native-image-slider-box';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ModalDropdown from 'react-native-modal-dropdown';

import colors from '../components/colors';

// const _textBody = (page: string) =>
//   `Please Fill the required field/ദയവായി ആവശ്യമായ ഫീൽഡ് പൂരിപ്പിക്കുക`;
const screenHeight = Dimensions.get('window').height;

const Login = ({navigation, route}) => {
  const [username, setUsername] = useState('');
  const [phonenum, setPhonenum] = useState('');
  image = [
    require('../assets/download.jpg'),
    require('../assets/downloads.jpg'),
  ];

  return (
    <>
      <Root>
        <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
        <KeyboardAvoidingView
          style={styles.Keyboardview}
          behavior={Platform.OS === 'android' ? 'padding' : 'height'}>
          <ScrollView>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={{backgroundColor: 'white'}}>
                {/* silderview */}
                <View
                  style={{
                    marginTop: '5%',
                    backgroundColor: 'white',
                    height: 210,
                  }}>
                  <SliderBox
                    images={image}
                    autoplay={true}
                    circleLoop
                    style={styles.slider}
                    dotStyle={styles.dot}
                  />
                </View>
                {/* silderview */}
                {/* pickerview */}
                <View
                  style={{
                    backgroundColor: 'white',
                    height: 130,
                    flexDirection: 'row',
                  }}>
                  <View style={styles.pickerBorder}>
                    <View style={styles.pickerContainer}>
                      <MaterialIcons
                        name="language"
                        size={15}
                        color="black"
                        style={{marginTop: '10%', left: '1%'}}
                      />
                      <ModalDropdown
                        options={['English', 'Malayalam']}
                        defaultValue="English"
                        textStyle={{
                          fontSize: 14,
                          fontFamily: 'sans-serif-condensed',
                        }}
                        style={{marginTop: '5%', marginLeft: '2%'}}
                        dropdownStyle={{height: 70}}
                        dropdownTextStyle={{color: colors.nextbutton}}
                      />
                    </View>
                  </View>
                  <Image
                    style={{
                      height: 150,
                      width: 300,
                      marginLeft: '-8%',
                      opacity: 0.2,
                    }}
                    source={require('../assets/blc.png')}
                  />
                </View>
                {/* pickerview */}
                {/* detailsview */}
                <View style={{backgroundColor: 'white', height: 350}}>
                  <View style={{backgroundColor: 'white', height: 110}}>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginLeft: '13%',
                        marginBottom: '2%',
                      }}>
                      <FontAwesome
                        name="user"
                        size={20}
                        color={colors.nextbutton}
                      />
                      <Text
                        style={{
                          fontSize: 16,
                          left: '20%',
                          fontFamily: 'sans-serif-medium',
                        }}>
                        Name
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        borderWidth: 3,
                        borderColor: 'dimgrey',
                        borderRadius: 12,
                        height: 55,
                        width: '80%',
                        marginLeft: '10%',
                      }}>
                      <TextInput
                        style={{
                          borderWidth: 1,
                          borderColor: 'gray',
                          borderRadius: 10,
                          width: '96%',
                          margin: '2%',
                        }}
                        placeholder="Name"
                        placeholderTextColor="grey"
                        underlineColorAndroid="transparent"
                        textContentType="name"
                        keyboardType="name-phone-pad"
                        autoCapitalize="words"
                        returnKeyType="next"
                        onChangeText={val => setUsername(val)}
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      backgroundColor: 'white',
                      height: 110,
                      bottom: '4%',
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginLeft: '12%',
                        marginBottom: '2%',
                      }}>
                      <MaterialCommunityIcons
                        name="cellphone"
                        size={20}
                        color={colors.nextbutton}
                      />
                      <Text
                        style={{
                          fontSize: 16,
                          left: '5%',
                          fontFamily: 'sans-serif-medium',
                        }}>
                        Phone number
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        borderWidth: 3,
                        borderColor: 'dimgrey',
                        borderRadius: 12,
                        height: 55,
                        width: '80%',
                        marginLeft: '10%',
                      }}>
                      <Text
                        style={{
                          top: '4%',
                          fontWeight: '900',
                          fontSize: 18,
                          left: '10%',
                          color: 'black',
                        }}>
                        +91
                      </Text>
                      <TextInput
                        style={{
                          borderWidth: 1,
                          borderColor: 'gray',
                          borderRadius: 10,
                          width: '85%',
                          margin: '2%',
                        }}
                        placeholder="phone number"
                        keyboardType="numeric"
                        length={10}
                        maxLength={10}
                        returnKeyType="done"
                        placeholderTextColor="grey"
                        underlineColorAndroid="transparent"
                        onChangeText={val => setPhonenum(val)}
                      />
                    </View>
                  </View>
                  <View style={{backgroundColor: 'white', height: 100}}>
                    <TouchableOpacity
                      style={styles.nextBtn}
                      onPress={() => {
                        if (
                          username === phonenum ||
                          phonenum.length !== 10 ||
                          username.length === 0
                        ) {
                          return Dialog.show({
                            type: ALERT_TYPE.DANGER,
                            title: 'Alert',
                            textBody: _textBody('Ok'),
                            autoClose: 200,
                          });
                        } else {
                          return navigation.navigate({
                            name: 'State',
                            params: {
                              // data:data,
                              username: username,
                              phonenum: phonenum,
                            },
                            merge: true,
                          });
                        }
                      }}>
                      <Text style={styles.buttonTxt}>Next</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                {/* detailsview */}
              </View>
            </TouchableWithoutFeedback>
          </ScrollView>
        </KeyboardAvoidingView>
      </Root>
    </>
  );
};
export default Login;
const styles = StyleSheet.create({
  Keyboardview: {
    height: screenHeight,
  },
  slider: {
    start: '4%',
    right: '4%',
    width: '92%',
    height: 210,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 0,
    padding: 0,
    margin: 0,
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
    left: '10%',
    right: '13%',
  },
  pickerBorder: {
    backgroundColor: 'white',
    width: 90,
    height: 45,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'dimgrey',
    marginLeft: '3.9%',
    marginTop: '15%',
  },
  pickerContainer: {
    backgroundColor: 'white',
    height: 35,
    width: 80,
    marginTop: '3%',
    marginBottom: '3%',
    marginLeft: '3%',
    elevation: 3,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'gainsboro',
    flexDirection: 'row',
  },
  nextBtn: {
    backgroundColor: colors.nextbutton,
    height: '50%',
    width: '62%',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 4,
    borderColor: 'dimgrey',
  },
  buttonTxt: {
    color: 'white',
    fontWeight: 'bold',
    padding: 10,
    fontSize: 16,
    alignItems: 'center',
    textAlign: 'center',
    fontFamily: 'serif',
  },
});
