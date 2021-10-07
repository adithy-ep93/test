import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Dimensions,
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from 'react-native-modal';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {Button} from 'react-native-paper';
import QRCode from 'react-native-qrcode-svg';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const SDose = ({navigation, route}) => {

  const [refreshpage, setRefreshpage] = useState('');
  const username = route.params?.username;
  const phonenum = route.params?.phonenum;
  const state = route.params?.state;
  const district = route.params?.district;
  const address = route.params?.address;
  const age = route.params?.age;
  const sex = route.params?.sex;
  const covid = route.params?.covid;
  const quarantine = route.params?.quarantine;
  const containment = route.params?.containment;
  const vaccinated = route.params?.vaccinated;
  const status = route.params?.status;

  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const [isQRModalVisible, setQRModalVisible] = useState(false);
  const QRModal = () => {
    setQRModalVisible(!isQRModalVisible);
  };
  const [isScanModalVisible, setScanModalVisible] = useState(false);
  const ScanModal = () => {
    setScanModalVisible(!isScanModalVisible);
  };
  const [placeFrom, setPlaceFrom] = useState(null);
  const [placeTo, setPlaceTo] = useState(null);

  const [user, setUser] = useState([]);
  const [phoneno, setPhoneno] = useState([]);
  const [userstate, setUserstate] = useState([]);
  const [userdistrict, setDistrict] = useState([]);
  const [useraddr, setUseraddr] = useState([]);
  const [userage, setUserage] = useState([]);
  const [usersex, setUsersex] = useState([]);
  const [userptnco, setUserptnco] = useState([]);
  const [userqua, setUserqua] = useState([]);
  const [usercont, setUsercont] = useState([]);
  const [uservacc, setUservacc] = useState([]);
  const [userstatus, setUserstatus] = useState([]);

  var key;

  // getmethod APIcall

  const url = `http://anugrahaadmin.blacksaltdt.com/api/profile_edit/${route.params?.phonenum}`;
  key = route.params?.phonenum;
  fetch(url, {
    method: 'GET',
    //Request Type
  })
    .then(response => response.json())
    //If response is in json then in success
    .then(responseJson => {
      //Success
      //console.log("res after api call ==>" , responseJson);
      // alert(JSON.stringify(responseJson))
      const user = responseJson.userdata;
      setUser(user.name);
      setPhoneno(user.phone);
      setUserstate(user.state);
      setDistrict(user.district);
      setUseraddr(user.address); ///data from db
      setUserage(user.age);
      setUsersex(user.sex);
      setUserptnco(user.are_you_covid_patient_now);
      setUserqua(user.are_you_quarantine_now);
      setUsercont(user.is_your_area_now_in_the_containment_zone);
      setUservacc(user.are_you_vaccinated);
      setUserstatus(user.your_vaccination_status);
    })
    //If response is not in json then in error
    .catch(error => {
      //Error
      console.error(error);
    });
  // console.log(user);
  // console.log(uservacc)

  // getmethod APIcall
  // qrcode generation apicall
  const [uname, setUname] = useState([]);
  const [phonenumber, setPhonenumber] = useState([]);
  const [usrVaccinated, setusrVaccinated] = useState([]);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [datetime, setdatetime] = useState('');
  const [travellers, setTravellers] = useState('');
  const [ownvehicle, setOwnvehicle] = useState('');
  const [whvehicle, setWhvehicle] = useState('');
  const [vehiclenum, setVehiclenum] = useState([]);
  const [foot, setFoot] = useState([]);
  const [byvehicle, setByVehicle] = useState([]);
  const [anovehicle, setAnovehicle] = useState([]);

  fetch(
    `http://anugrahaadmin.blacksaltdt.com/api/travelpass_print/${route.params?.phonenum}`,
    (key = route.params?.phonenum),
    {
      method: 'GET',
      //Request Type
    },
  )
    .then(response => response.json())
    //If response is in json then in success
    .then(responseJson => {
      const pass = responseJson.travelpass;
      setUname(pass.name);
      setPhonenumber(pass.phone);
      setusrVaccinated(pass.vaccinated);
      setFrom(pass.from);
      setTo(pass.to);
      setdatetime(pass.date_time);
      setTravellers(pass.how_many_people_are_travelling_with_you);
      setOwnvehicle(pass.are_you_travelling_in_your_own_vehicle);
      setWhvehicle(pass.which_vehicle);
      setVehiclenum(pass.vehicle_number);
      setFoot(pass.byfoot);
      setByVehicle(pass.byvehicle);
      setAnovehicle(pass.another_vehicle);
    })
    //If response is not in json then in error
    .catch(error => {
      console.error(error);
    });

  // qrcode generation apicall
  let base64Logo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAA..';
  return (
    <SafeAreaView style={styles.safe_area_view}>
      {/* <KeyboardAvoidingView style={{ flex: 1, flexDirection: 'column',justifyContent: 'center',}} behavior="position" enabled keyboardVerticalOffset={100}  > */}
      <ScrollView contentContainerStyle={styles.scroll_view}>
        {/* vaccinecard container */}
        <View style={styles.vaccineCard}>
          <View style={{flexDirection: 'row'}}>
            <Ionicons
              name="person-circle"
              size={100}
              color="white"
              style={{marginLeft: '35%'}}
            />
            {/* modal pop up icon */}
            <TouchableOpacity onPress={() => toggleModal()}>
              <MaterialCommunityIcons
                name="dots-vertical-circle-outline"
                size={30}
                color="white"
                style={{marginLeft: '40%', top: '5%'}}
              />
            </TouchableOpacity>
            {/* modal start */}
            <View style={styles.drawermenu}>
              <Modal
                animationIn="fadeIn"
                animationOut="fadeOut"
                transparent={true}
                isVisible={isModalVisible}
                hasBackdrop={true}
                backdropOpacity={0}
                onBackdropPress={() => {
                  toggleModal();
                }}>
                <View style={[styles.drawermenu, {marginTop: '18%'}]}>
                  <View style={styles.sidemodal}>
                    <View style={styles.spaceTile} />
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate({
                          name: 'Edit',
                          params: {
                            username: username,
                            phonenum: phonenum,
                            state: state,
                            district: district,
                            address: address,
                            age: age,
                            sex: sex,
                            covid: covid,
                            quarantine: quarantine,
                            containment: containment,
                            vaccinated: vaccinated,
                            status: status,
                          },
                          merge: true,
                        });
                      }}>
                      <Text style={styles.textStyle}>Edit Profile</Text>
                    </TouchableOpacity>
                    <View style={styles.spaceTile} />
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate({
                          name: 'Camera',
                          params: {
                            phonenum: phonenum,
                          },
                          merge: true,
                        })
                      }>
                      <Text style={styles.textStyle}>Anugraha ON/OFF</Text>
                    </TouchableOpacity>
                    <View style={styles.spaceTile} />
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate({
                          name: 'History',
                          params: {
                            phonenum: phonenum,
                          },
                          merge: true,
                        })
                      }>
                      <Text style={styles.textStyle}>ON/OFF History</Text>
                    </TouchableOpacity>
                    <View style={styles.spaceTile} />
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate({
                          name: 'FamilyContacts',
                          params: {
                            phonenum: phonenum,
                          },
                          merge: true,
                        })
                      }>
                      <Text style={styles.textStyle}>Family contacts</Text>
                    </TouchableOpacity>
                    <View style={styles.spaceTile} />
                  </View>
                </View>
              </Modal>
            </View>
            {/* modal end */}
          </View>

          <View style={styles.detail}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.detailsText}>Name : </Text>
              <Text style={styles.detailsText1}>{user}</Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: '2%'}}>
              <Text style={styles.detailsText}>Vaccinated : </Text>
              <Text style={styles.detailsText1}>{uservacc}</Text>
            </View>
          </View>
        </View>
        {/* vaccinecard container */}

        {/* qrcard */}
        <View style={styles.cardContainer}>
          <TouchableOpacity style={{margin: '4%'}} onPress={() => QRModal()}>
            <QRCode
              size={70}
              value={`
                      TRAVEL PASS
                  ===============

Name                 : ${uname}
PhoneNumber  : ${phonenumber}
Vaccinated        : ${usrVaccinated}
From                  : ${from}
To                       : ${to}
Date & Time      : ${datetime}
Total Travellers       : ${travellers}
Own Vehicle / Not  : ${ownvehicle}
Which Vehicle         : ${whvehicle}
Vehicle No               : ${vehiclenum}
Mode of travel         : ${foot}
Mode of travel         : ${byvehicle}
Which Vehicle         : ${anovehicle}
             `}
            />
          </TouchableOpacity>
          <View style={styles.QRWindow}>
            <Modal
              animationIn="fadeIn"
              animationOut="fadeOut"
              transparent={true}
              isVisible={isQRModalVisible}
              hasBackdrop={true}
              backdropOpacity={0.5}
              onBackdropPress={() => {
                QRModal();
              }}>
              <View style={styles.QRWindow}>
                <View style={styles.QRmodal}>
                  <QRCode
                    value={`
                      TRAVEL PASS
                  ===============

Name                 : ${uname}
PhoneNumber  : ${phonenumber}
Vaccinated        : ${usrVaccinated}
From                  : ${from}
To                       : ${to}
Date & Time      : ${datetime}
Total Travellers       : ${travellers}
Own Vehicle / Not  : ${ownvehicle}
Which Vehicle         : ${whvehicle}
Vehicle No               : ${vehiclenum}
Mode of travel         : ${foot}
Mode of travel         : ${byvehicle}
Which Vehicle         : ${anovehicle}
             `}
                    logo={{base64Logo}}
                    size={326}
                    logoBackgroundColor="transparent"
                  />
                </View>
              </View>
            </Modal>
          </View>
          <View style={{flexDirection: 'column', marginTop: '4%'}}>
            <Text style={styles.textStyle2}>Immune by {userstatus}</Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              setRefreshpage('refresh');
            }}>
            <MaterialCommunityIcons
              name="refresh"
              size={30}
              color="white"
              style={{top: '35%', right: '15%'}}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.cardContainer1}>
          <Text
            style={{
              fontWeight: 'bold',
              textAlign: 'center',
              marginTop: '2%',
              color: 'forestgreen',
            }}>
            Successfully vaccinated by {userstatus}
          </Text>
        </View>
        {/* qrcard */}
        {/* fromto */}
        <View
          style={{
            flexDirection: 'row',
            marginTop: '3%',
            height: screenHeight / 15,
          }}>
          <TextInput
            placeholder="FROM"
            placeholderTextColor="forestgreen"
            onChangeText={setPlaceFrom}
            value={placeFrom}
            style={styles.textInputs}
          />
          <View style={{flexDirection: 'row', height: 21, top: '35%'}}>
            <AntDesign name="caretleft" size={20} color="forestgreen" />
            <Entypo
              name="dots-three-horizontal"
              size={20}
              color="forestgreen"
            />
            <Entypo
              name="dots-three-horizontal"
              size={20}
              color="forestgreen"
            />
            <Entypo
              name="dots-three-horizontal"
              size={20}
              color="forestgreen"
            />
            <AntDesign name="caretright" size={20} color="forestgreen" />
          </View>

          <TextInput
            placeholder="TO"
            placeholderTextColor="forestgreen"
            onChangeText={setPlaceTo}
            value={placeTo}
            style={styles.textInput1}
          />
        </View>
        {/* fromto */}
        {/* detbtn */}
        <View
          style={{
            borderWidth: 1,
            borderColor: 'forestgreen',
            padding: '3%',
            marginLeft: '1%',
            marginTop: '4%',
          }}>
          <Button
            mode="outlined"
            onPress={() =>
              navigation.navigate({
                name: 'DetailModal',
                params: {
                  placeFrom: placeFrom,
                  placeTo: placeTo,
                  username: username,
                  phonenum: phonenum,
                  state: state,
                  district: district,
                  address: address,
                  age: age,
                  sex: sex,
                  covid: covid,
                  quarantine: quarantine,
                  containment: containment,
                  vaccinated: vaccinated,
                  status: status,
                },
                merge: true,
              })
            }
            color="forestgreen">
            DETAILS
          </Button>
        </View>
        {/* detbtn */}

        {/* backarrow */}
        <View style={{marginLeft: '60%', bottom: '4%', flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Image
              style={{
                width: 70,
                height: 70,
                bottom: 10,
              }}
              source={require('../assets/backarrow.gif')}
            />
          </TouchableOpacity>
        </View>
        {/* backarrow */}
        {/* thanksfooter */}
        <View style={{flexDirection: 'row', height: '10%', bottom: '3%'}}>
          <View style={styles.scanborder}>
            <View style={styles.scanbtn}>
              <TouchableOpacity onPress={()=>ScanModal()}>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 'bold',
                    color: 'white',
                    textAlign: 'center',
                    bottom: '5%',
                  }}>
                  {`
SCAN AROUND
 YOU`}
                </Text>
              </TouchableOpacity>
              <View style={styles.scanwindow}>
                <Modal
                  animationIn="fadeIn"
                  animationOut="fadeOut"
                  transparent={true}
                  isVisible={isScanModalVisible}
                  hasBackdrop={true}
                  backdropOpacity={0}
                  onBackdropPress={() => {
                    ScanModal();
                  }}>
                  <View style={styles.scanwindow}>
                    <View style={styles.scanmodal}>
                    <Image style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 8,
                    }}
                    source={require('../assets/scan.gif')}

                    />
                    </View>
                  </View>
                  </Modal>
                </View>
            </View>
          </View>
          <View style={styles.thankyoucard}>
            <View style={styles.thankyoucard1}>
              <Text
                style={{
                  fontSize: 12,
                  marginLeft: '4%',
                  color: 'forestgreen',
                  marginTop: '3%',
                }}>
                {`  Thank you for your contribution by
                    downloading`}
              </Text>
            </View>
          </View>
        </View>
        {/* thanksfooter */}
      </ScrollView>
      {/* </KeyboardAvoidingView> */}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safe_area_view: {
    height: screenHeight,
    flex: 1,
  },
  scroll_view: {
    flexGrow: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  drawermenu: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    marginTop: '20%',
  },
  sidemodal: {
    width: screenWidth / 2.2,
    height: screenHeight / 5,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  scanwindow: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanmodal: {
    width: screenWidth / 1.1,
    height: screenHeight / 2.3,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 6,
    borderWidth: 1,
  },
  QRWindow: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  QRmodal: {
    width: screenWidth / 1.1,
    height: screenHeight / 2.4,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  spaceTile: {
    height: screenHeight / 57,
  },

  vaccineCard: {
    backgroundColor: 'forestgreen',
    height: screenHeight / 3.2,
    width: screenWidth / 1.1,
    marginLeft: '2%',
    borderColor: 'grey',
    borderWidth: 1,
  },
  qrcard: {
    height: screenHeight / 7.6,
    width: screenWidth / 1.1,
    top: '1%',
    left: '.5%',
    borderRadius: 6,
    borderWidth: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    borderColor: 'gray',
  },
  placecard: {
    flexDirection: 'row',
    marginTop: '3%',
    left: '1%',
    height: screenHeight / 15,
    width: screenWidth / 1.16,
  },
  textStyle: {
    marginLeft: '10%',
    fontSize: 16,
    fontWeight: '900',
  },
  textStyle2: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    top: '25%',
    right: '15%',
  },
  detail: {
    height: screenHeight / 6,
    width: screenWidth / 1.1,
    //marginTop:'3%'
  },
  detailsText: {
    marginLeft: '10%',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  detailsText1: {
    marginLeft: '1%',
    fontSize: 18,
    color: 'white',
    width: screenWidth / 2.5,
  },
  textInputs: {
    position: 'relative',
    fontSize: 16,
    borderColor: 'forestgreen',
    fontWeight: 'bold',
    width: '30%',
    height: '90%',
    textAlign: 'center',
    borderRadius: 10,
    borderWidth: 1,
    top: '1%',
    color: 'forestgreen',
  },

  textInput1: {
    position: 'relative',
    fontSize: 16,
    fontWeight: 'bold',
    width: '30%',
    height: '90%',
    textAlign: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'forestgreen',
    top: '1%',
    color: 'forestgreen',
  },
  cardContainer: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderColor: 'gray',
    backgroundColor: 'forestgreen',
    height: screenHeight / 7.6,
    width: screenWidth / 1.1,
    marginLeft: '1%',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '2%',
  },
  cardContainer1: {
    height: screenHeight / 18,
    width: screenWidth / 1.1,
    marginLeft: '1%',
    borderWidth: 1,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  thankyoucard: {
    borderWidth: 3,
    borderColor: 'forestgreen',
    width: screenWidth / 1.55,
    height: screenHeight / 10,
    bottom: '2%',
    right: '10%',
    borderRadius: 8,
    left: '5%',
  },
  thankyoucard1: {
    borderWidth: 1,
    borderColor: 'forestgreen',
    width: screenWidth / 1.65,
    height: screenHeight / 12.5,
    marginLeft: '2%',
    marginRight: '1%',
    marginTop: '2%',
    marginBottom: '1%',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  scanborder: {
    width: screenWidth / 4,
    height: screenHeight / 9,
    borderColor: 'forestgreen',
    borderRadius: 150,
    bottom: '5%',
    right: '8%',
    borderWidth: 2,
    backgroundColor: 'gainsboro',
  },
  scanbtn: {
    width: screenWidth / 5,
    height: screenHeight / 11,
    backgroundColor: 'forestgreen',
    borderRadius: 150,
    right: '20%',
    top: '8%',
    left: '8%',
  },
});
export default SDose;
