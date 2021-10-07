import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  TextInput,
  Button,
} from 'react-native';
import {Appbar, Card} from 'react-native-paper';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const Register = ({navigation: {navigate}}) => {
  const [name, setName] = useState('');

  const [username, setUsername] = useState('');
  return (
    <>
      <Appbar style={{height: screenHeight / 6, backgroundColor: 'white'}}>
        <Appbar.Content
          title={
            <Card>
              <Card.Cover
                source={require('../assets/logo.png')}
                style={{height: 100, width: 100}}
              />
            </Card>
          }
        />
        <Appbar.Action icon="close" onPress={() => navigate('BottomTab')} />
      </Appbar>

      <View style={styles.headerView}>
        <ImageBackground
          source={require('../assets/header.jpg')}
          imageStyle={{opacity: 0.55, backgroundColor: 'black'}}
          style={{width: screenWidth, height: screenHeight / 5}}>
          <Text style={styles.loginText}>SIGN UP</Text>
        </ImageBackground>
      </View>
      <ScrollView style={{height: screenHeight / 1.1}}>
        <View style={{height: screenHeight / 1.1}}>
          <View style={styles.innerView}>
            <Text style={styles.signText}>CREATE ACCOUNT</Text>
            <View style={{height: '1%'}} />
            <Text style={styles.userText}>Name:</Text>
            <TextInput
              style={styles.inputText}
              placeholder="Name"
              placeholderTextColor="grey"
              underlineColorAndroid="transparent"
              textContentType="name"
              autoCompleteType="name"
              keyboardType="name-phone-pad"
              autoCapitalize="words"
              returnKeyType="next"
              onChangeText={val => setName(val)}></TextInput>
            <Text style={styles.userText}>Email:</Text>
            <TextInput
              style={styles.inputText}
              placeholder="email@gmail.com"
              placeholderTextColor="grey"
              underlineColorAndroid="transparent"
              autoCorrect={true}
              autoCompleteType="email"
              keyboardType="email-address"
              textContentType="emailAddress"
              returnKeyType="next"></TextInput>
            <Text style={styles.userText}>Username:</Text>
            <TextInput
              style={styles.inputText}
              placeholder="Username"
              placeholderTextColor="grey"
              underlineColorAndroid="transparent"
              textContentType="name"
              keyboardType="name-phone-pad"
              autoCapitalize="words"
              returnKeyType="next"
              onChangeText={val => setUsername(val)}
            />
            <Text style={styles.userText}>PassWord:</Text>
            <TextInput
              style={styles.inputText}
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor="grey"
              underlineColorAndroid="transparent"
              textContentType="password"
              returnKeyType="done"
            />
            <Text style={styles.userText}>PassWord Confirmation:</Text>
            <TextInput
              style={styles.inputText}
              placeholder="Confirm Password"
              placeholderTextColor="grey"
              underlineColorAndroid="transparent"
              secureTextEntry={true}
              textContentType="password"></TextInput>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.btntext}>CREATE YOU BOOKSTORE ACCOUNT</Text>
            </TouchableOpacity>
            <View style={styles.bottomView}>
              <Text>Already have an account?</Text>
              <TouchableOpacity onPress={() => navigate('Login')}>
                <Text style={{color: 'dodgerblue'}}>Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  headerView: {
    width: screenWidth,
    height: screenHeight / 5,
  },
  loginText: {
    fontFamily: 'BreeSerif-Regular',
    color: 'white',
    fontSize: 30,
    top: '50%',
    textAlign: 'center',
  },
  innerView: {
    borderColor: 'gray',
    borderWidth: 1,
    left: '8%',
    width: screenWidth / 1.2,
    height: screenHeight / 1.2,
    borderRadius: 6,
    top: '5%',
  },
  signText: {
    fontFamily: 'BreeSerif-Regular',
    alignSelf: 'center',
    fontSize: 22,
  },
  userText: {
    left: '5%',
    fontSize: 14,
    fontWeight: '700',
  },
  inputText: {
    height: screenHeight / 18,
    width: screenWidth / 1.4,
    borderWidth: 1,
    borderColor: 'black',
    margin: '5%',
    borderRadius: 6,
  },
  button: {
    height: screenHeight / 18,
    width: screenWidth / 1.4,
    borderWidth: 2,
    borderColor: 'gray',
    left: '6.5%',
    top: '4%',
    backgroundColor: 'gold',
    borderRadius: 3,
  },
  btntext: {
    fontFamily: 'BreeSerif-Regular',
    margin: '4%',
    alignSelf: 'center',
    fontSize: 14,
  },
  bottomView: {
    width: screenWidth - 70,
    alignSelf: 'center',
    flexDirection: 'row',
    top: '15%',
    left: '6.5%',
  },
});
export default Register;
