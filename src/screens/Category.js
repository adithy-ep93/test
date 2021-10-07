import React, {useState} from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import {Card, Divider} from 'react-native-paper';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const Category = () => {
  const [shouldShow, setShouldShow] = useState(true);
  const [shouldShow1, setShouldShow1] = useState(true);
  const [shouldShow2, setShouldShow2] = useState(true);
  const [shouldShow3, setShouldShow3] = useState(true);
  const [shouldShow4, setShouldShow4] = useState(true);
  const [shouldShow5, setShouldShow5] = useState(true);
  const [shouldShow6, setShouldShow6] = useState(true);
  const [shouldShow7, setShouldShow7] = useState(true);
  const [shouldShow8, setShouldShow8] = useState(true);
  const [shouldShow9, setShouldShow9] = useState(true);
  const [shouldShow10, setShouldShow10] = useState(true);
  const [shouldShow11, setShouldShow11] = useState(true);

  const images = [
    require('../assets/img2.jpg'),
    require('../assets/img3.jpg'),
    require('../assets/img4.jpg'),
  ];

  return (
    <View style={styles.mainView}>
      <View style={styles.sliderView}>
        <SliderBox
          images={images}
          autoplay={true}
          circleLoop
          resizeMethod="resize"
          resizeMode="cover"
          ImageComponentStyle={styles.bannerView}
          paginationBoxVerticalPadding={20}
          dotStyle={styles.dot}
        />
      </View>
      <ScrollView style={{top: '11%'}}>
        {/* first View */}
        <View style={styles.textView}>
          <Text style={styles.cardText}>NEW RELEASES</Text>
        </View>

        <View style={styles.typeView1}>
          <TouchableOpacity>
            <View style={styles.cardView}>
              <Text style={styles.cardText}>NOVEL</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{left: '10%'}}>
            <View style={{width: '2%'}} />
            <View style={styles.cardView}>
              <Text style={styles.cardText}>STORY</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{left: '16%'}}>
            <View style={{width: '2%'}} />
            <View style={styles.cardView}>
              <Text style={styles.cardText}>POEM</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.bookContainer}>
          <ScrollView horizontal={true}>
            <Card>
              <View style={styles.bookView}>
                <View>
                  <TouchableOpacity onPress={() => setShouldShow(!shouldShow)}>
                    <Image
                      style={styles.bookCard}
                      source={require('../assets/pic1.jpg')}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                  <View>
                    {shouldShow ? (
                      <View style={{left: '13%'}}>
                        <Text style={styles.cardText1}>Name</Text>
                        <Text style={styles.cardText1}>Price</Text>
                        <TouchableOpacity
                          style={{
                            backgroundColor: 'gold',
                            height: '35%',
                            width: '85%',
                            borderWidth: 1,
                            borderRadius: 8,
                            right: '2%',
                          }}>
                          <Text style={styles.cardText2}>ADD TO CART</Text>
                        </TouchableOpacity>
                      </View>
                    ) : null}
                  </View>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() => setShouldShow1(!shouldShow1)}>
                    <Image
                      style={styles.bookCard}
                      source={require('../assets/pic1.jpg')}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                  <View>
                    {shouldShow1 ? (
                      <View style={{left: '13%'}}>
                        <Text style={styles.cardText1}>Name</Text>
                        <Text style={styles.cardText1}>Price</Text>
                        <TouchableOpacity
                          style={{
                            backgroundColor: 'gold',
                            height: '35%',
                            width: '85%',
                            borderWidth: 1,
                            borderRadius: 8,
                            right: '2%',
                          }}>
                          <Text style={styles.cardText2}>ADD TO CART</Text>
                        </TouchableOpacity>
                      </View>
                    ) : null}
                  </View>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() => setShouldShow2(!shouldShow2)}>
                    <Image
                      style={styles.bookCard}
                      source={require('../assets/pic1.jpg')}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                  <View>
                    {shouldShow2 ? (
                      <View style={{left: '13%'}}>
                        <Text style={styles.cardText1}>Name</Text>
                        <Text style={styles.cardText1}>Price</Text>
                        <TouchableOpacity
                          style={{
                            backgroundColor: 'gold',
                            height: '35%',
                            width: '85%',
                            borderWidth: 1,
                            borderRadius: 8,
                            right: '2%',
                          }}>
                          <Text style={styles.cardText2}>ADD TO CART</Text>
                        </TouchableOpacity>
                      </View>
                    ) : null}
                  </View>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() => setShouldShow3(!shouldShow3)}>
                    <Image
                      style={styles.bookCard}
                      source={require('../assets/pic1.jpg')}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                  <View>
                    {shouldShow3 ? (
                      <View style={{left: '13%'}}>
                        <Text style={styles.cardText1}>Name</Text>
                        <Text style={styles.cardText1}>Price</Text>
                        <TouchableOpacity
                          style={{
                            backgroundColor: 'gold',
                            height: '35%',
                            width: '85%',
                            borderWidth: 1,
                            borderRadius: 8,
                            right: '2%',
                          }}>
                          <Text style={styles.cardText2}>ADD TO CART</Text>
                        </TouchableOpacity>
                      </View>
                    ) : null}
                  </View>
                </View>
              </View>
            </Card>
          </ScrollView>
        </View>
        {/* first View */}

        {/* Second View */}
        <View style={styles.textView}>
          <Text style={styles.cardText}>HISTORY</Text>
        </View>

        <View style={styles.typeView1}>
          <TouchableOpacity>
            <View style={styles.cardView}>
              <Text style={styles.cardText}>NOVEL</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{left: '10%'}}>
            <View style={{width: '2%'}} />
            <View style={styles.cardView}>
              <Text style={styles.cardText}>STORY</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{left: '16%'}}>
            <View style={{width: '2%'}} />
            <View style={styles.cardView}>
              <Text style={styles.cardText}>POEM</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.bookContainer}>
          <ScrollView horizontal={true}>
            <Card>
              <View style={styles.bookView}>
                <View>
                  <TouchableOpacity onPress={() => setShouldShow(!shouldShow)}>
                    <Image
                      style={styles.bookCard}
                      source={require('../assets/pic1.jpg')}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                  <View>
                    {shouldShow ? (
                      <View style={{left: '13%'}}>
                        <Text style={styles.cardText1}>Name</Text>
                        <Text style={styles.cardText1}>Price</Text>
                        <TouchableOpacity
                          style={{
                            backgroundColor: 'gold',
                            height: '35%',
                            width: '85%',
                            borderWidth: 1,
                            borderRadius: 8,
                            right: '2%',
                          }}>
                          <Text style={styles.cardText2}>ADD TO CART</Text>
                        </TouchableOpacity>
                      </View>
                    ) : null}
                  </View>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() => setShouldShow1(!shouldShow1)}>
                    <Image
                      style={styles.bookCard}
                      source={require('../assets/pic1.jpg')}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                  <View>
                    {shouldShow1 ? (
                      <View style={{left: '13%'}}>
                        <Text style={styles.cardText1}>Name</Text>
                        <Text style={styles.cardText1}>Price</Text>
                        <TouchableOpacity
                          style={{
                            backgroundColor: 'gold',
                            height: '35%',
                            width: '85%',
                            borderWidth: 1,
                            borderRadius: 8,
                            right: '2%',
                          }}>
                          <Text style={styles.cardText2}>ADD TO CART</Text>
                        </TouchableOpacity>
                      </View>
                    ) : null}
                  </View>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() => setShouldShow2(!shouldShow2)}>
                    <Image
                      style={styles.bookCard}
                      source={require('../assets/pic1.jpg')}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                  <View>
                    {shouldShow2 ? (
                      <View style={{left: '13%'}}>
                        <Text style={styles.cardText1}>Name</Text>
                        <Text style={styles.cardText1}>Price</Text>
                        <TouchableOpacity
                          style={{
                            backgroundColor: 'gold',
                            height: '35%',
                            width: '85%',
                            borderWidth: 1,
                            borderRadius: 8,
                            right: '2%',
                          }}>
                          <Text style={styles.cardText2}>ADD TO CART</Text>
                        </TouchableOpacity>
                      </View>
                    ) : null}
                  </View>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() => setShouldShow3(!shouldShow3)}>
                    <Image
                      style={styles.bookCard}
                      source={require('../assets/pic1.jpg')}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                  <View>
                    {shouldShow3 ? (
                      <View style={{left: '13%'}}>
                        <Text style={styles.cardText1}>Name</Text>
                        <Text style={styles.cardText1}>Price</Text>
                        <TouchableOpacity
                          style={{
                            backgroundColor: 'gold',
                            height: '35%',
                            width: '85%',
                            borderWidth: 1,
                            borderRadius: 8,
                            right: '2%',
                          }}>
                          <Text style={styles.cardText2}>ADD TO CART</Text>
                        </TouchableOpacity>
                      </View>
                    ) : null}
                  </View>
                </View>
              </View>
            </Card>
          </ScrollView>
        </View>
        {/* Second View */}
        {/* Third View */}
        <View style={styles.textView}>
          <Text style={styles.cardText}>BEST SELLERS</Text>
        </View>

        <View style={styles.typeView1}>
          <TouchableOpacity>
            <View style={styles.cardView}>
              <Text style={styles.cardText}>NOVEL</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{left: '10%'}}>
            <View style={{width: '2%'}} />
            <View style={styles.cardView}>
              <Text style={styles.cardText}>STORY</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{left: '16%'}}>
            <View style={{width: '2%'}} />
            <View style={styles.cardView}>
              <Text style={styles.cardText}>POEM</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.bookContainer}>
          <ScrollView horizontal={true}>
            <Card>
              <View style={styles.bookView}>
                <View>
                  <TouchableOpacity onPress={() => setShouldShow(!shouldShow)}>
                    <Image
                      style={styles.bookCard}
                      source={require('../assets/pic1.jpg')}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                  <View>
                    {shouldShow ? (
                      <View style={{left: '13%'}}>
                        <Text style={styles.cardText1}>Name</Text>
                        <Text style={styles.cardText1}>Price</Text>
                        <TouchableOpacity
                          style={{
                            backgroundColor: 'gold',
                            height: '35%',
                            width: '85%',
                            borderWidth: 1,
                            borderRadius: 8,
                            right: '2%',
                          }}>
                          <Text style={styles.cardText2}>ADD TO CART</Text>
                        </TouchableOpacity>
                      </View>
                    ) : null}
                  </View>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() => setShouldShow1(!shouldShow1)}>
                    <Image
                      style={styles.bookCard}
                      source={require('../assets/pic1.jpg')}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                  <View>
                    {shouldShow1 ? (
                      <View style={{left: '13%'}}>
                        <Text style={styles.cardText1}>Name</Text>
                        <Text style={styles.cardText1}>Price</Text>
                        <TouchableOpacity
                          style={{
                            backgroundColor: 'gold',
                            height: '35%',
                            width: '85%',
                            borderWidth: 1,
                            borderRadius: 8,
                            right: '2%',
                          }}>
                          <Text style={styles.cardText2}>ADD TO CART</Text>
                        </TouchableOpacity>
                      </View>
                    ) : null}
                  </View>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() => setShouldShow2(!shouldShow2)}>
                    <Image
                      style={styles.bookCard}
                      source={require('../assets/pic1.jpg')}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                  <View>
                    {shouldShow2 ? (
                      <View style={{left: '13%'}}>
                        <Text style={styles.cardText1}>Name</Text>
                        <Text style={styles.cardText1}>Price</Text>
                        <TouchableOpacity
                          style={{
                            backgroundColor: 'gold',
                            height: '35%',
                            width: '85%',
                            borderWidth: 1,
                            borderRadius: 8,
                            right: '2%',
                          }}>
                          <Text style={styles.cardText2}>ADD TO CART</Text>
                        </TouchableOpacity>
                      </View>
                    ) : null}
                  </View>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() => setShouldShow3(!shouldShow3)}>
                    <Image
                      style={styles.bookCard}
                      source={require('../assets/pic1.jpg')}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                  <View>
                    {shouldShow3 ? (
                      <View style={{left: '13%'}}>
                        <Text style={styles.cardText1}>Name</Text>
                        <Text style={styles.cardText1}>Price</Text>
                        <TouchableOpacity
                          style={{
                            backgroundColor: 'gold',
                            height: '35%',
                            width: '85%',
                            borderWidth: 1,
                            borderRadius: 8,
                            right: '2%',
                          }}>
                          <Text style={styles.cardText2}>ADD TO CART</Text>
                        </TouchableOpacity>
                      </View>
                    ) : null}
                  </View>
                </View>
              </View>
            </Card>
          </ScrollView>
        </View>
        {/* Third View */}
        {/* fourth View */}
        <View style={styles.textView}>
          <Text style={styles.cardText}>RELIGION & SPRITUALITY</Text>
        </View>

        <View style={styles.typeView1}>
          <TouchableOpacity>
            <View style={styles.cardView}>
              <Text style={styles.cardText}>NOVEL</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{left: '10%'}}>
            <View style={{width: '2%'}} />
            <View style={styles.cardView}>
              <Text style={styles.cardText}>STORY</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{left: '16%'}}>
            <View style={{width: '2%'}} />
            <View style={styles.cardView}>
              <Text style={styles.cardText}>POEM</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.bookContainer}>
          <ScrollView horizontal={true}>
            <Card>
              <View style={styles.bookView}>
                <View>
                  <TouchableOpacity onPress={() => setShouldShow(!shouldShow)}>
                    <Image
                      style={styles.bookCard}
                      source={require('../assets/pic1.jpg')}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                  <View>
                    {shouldShow ? (
                      <View style={{left: '13%'}}>
                        <Text style={styles.cardText1}>Name</Text>
                        <Text style={styles.cardText1}>Price</Text>
                        <TouchableOpacity
                          style={{
                            backgroundColor: 'gold',
                            height: '35%',
                            width: '85%',
                            borderWidth: 1,
                            borderRadius: 8,
                            right: '2%',
                          }}>
                          <Text style={styles.cardText2}>ADD TO CART</Text>
                        </TouchableOpacity>
                      </View>
                    ) : null}
                  </View>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() => setShouldShow1(!shouldShow1)}>
                    <Image
                      style={styles.bookCard}
                      source={require('../assets/pic1.jpg')}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                  <View>
                    {shouldShow1 ? (
                      <View style={{left: '13%'}}>
                        <Text style={styles.cardText1}>Name</Text>
                        <Text style={styles.cardText1}>Price</Text>
                        <TouchableOpacity
                          style={{
                            backgroundColor: 'gold',
                            height: '35%',
                            width: '85%',
                            borderWidth: 1,
                            borderRadius: 8,
                            right: '2%',
                          }}>
                          <Text style={styles.cardText2}>ADD TO CART</Text>
                        </TouchableOpacity>
                      </View>
                    ) : null}
                  </View>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() => setShouldShow2(!shouldShow2)}>
                    <Image
                      style={styles.bookCard}
                      source={require('../assets/pic1.jpg')}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                  <View>
                    {shouldShow2 ? (
                      <View style={{left: '13%'}}>
                        <Text style={styles.cardText1}>Name</Text>
                        <Text style={styles.cardText1}>Price</Text>
                        <TouchableOpacity
                          style={{
                            backgroundColor: 'gold',
                            height: '35%',
                            width: '85%',
                            borderWidth: 1,
                            borderRadius: 8,
                            right: '2%',
                          }}>
                          <Text style={styles.cardText2}>ADD TO CART</Text>
                        </TouchableOpacity>
                      </View>
                    ) : null}
                  </View>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() => setShouldShow3(!shouldShow3)}>
                    <Image
                      style={styles.bookCard}
                      source={require('../assets/pic1.jpg')}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                  <View>
                    {shouldShow3 ? (
                      <View style={{left: '13%'}}>
                        <Text style={styles.cardText1}>Name</Text>
                        <Text style={styles.cardText1}>Price</Text>
                        <TouchableOpacity
                          style={{
                            backgroundColor: 'gold',
                            height: '35%',
                            width: '85%',
                            borderWidth: 1,
                            borderRadius: 8,
                            right: '2%',
                          }}>
                          <Text style={styles.cardText2}>ADD TO CART</Text>
                        </TouchableOpacity>
                      </View>
                    ) : null}
                  </View>
                </View>
              </View>
            </Card>
          </ScrollView>
        </View>
        {/* fourth View */}
        {/* fifth View */}
        <View style={styles.textView}>
          <Text style={styles.cardText}>MYSTERY & THRILLER</Text>
        </View>

        <View style={styles.typeView1}>
          <TouchableOpacity>
            <View style={styles.cardView}>
              <Text style={styles.cardText}>NOVEL</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{left: '10%'}}>
            <View style={{width: '2%'}} />
            <View style={styles.cardView}>
              <Text style={styles.cardText}>STORY</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{left: '16%'}}>
            <View style={{width: '2%'}} />
            <View style={styles.cardView}>
              <Text style={styles.cardText}>POEM</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.bookContainer}>
          <ScrollView horizontal={true}>
            <Card>
              <View style={styles.bookView}>
                <View>
                  <TouchableOpacity
                    onPress={() => setShouldShow4(!shouldShow4)}>
                    <Image
                      style={styles.bookCard}
                      source={require('../assets/pic1.jpg')}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                  <View>
                    {shouldShow4 ? (
                      <View style={{left: '13%'}}>
                        <Text style={styles.cardText1}>Name</Text>
                        <Text style={styles.cardText1}>Price</Text>
                        <TouchableOpacity
                          style={{
                            backgroundColor: 'gold',
                            height: '35%',
                            width: '85%',
                            borderWidth: 1,
                            borderRadius: 8,
                            right: '2%',
                          }}>
                          <Text style={styles.cardText2}>ADD TO CART</Text>
                        </TouchableOpacity>
                      </View>
                    ) : null}
                  </View>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() => setShouldShow5(!shouldShow5)}>
                    <Image
                      style={styles.bookCard}
                      source={require('../assets/pic1.jpg')}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                  <View>
                    {shouldShow5 ? (
                      <View style={{left: '13%'}}>
                        <Text style={styles.cardText1}>Name</Text>
                        <Text style={styles.cardText1}>Price</Text>
                        <TouchableOpacity
                          style={{
                            backgroundColor: 'gold',
                            height: '35%',
                            width: '85%',
                            borderWidth: 1,
                            borderRadius: 8,
                            right: '2%',
                          }}>
                          <Text style={styles.cardText2}>ADD TO CART</Text>
                        </TouchableOpacity>
                      </View>
                    ) : null}
                  </View>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() => setShouldShow6(!shouldShow6)}>
                    <Image
                      style={styles.bookCard}
                      source={require('../assets/pic1.jpg')}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                  <View>
                    {shouldShow2 ? (
                      <View style={{left: '13%'}}>
                        <Text style={styles.cardText1}>Name</Text>
                        <Text style={styles.cardText1}>Price</Text>
                        <TouchableOpacity
                          style={{
                            backgroundColor: 'gold',
                            height: '35%',
                            width: '85%',
                            borderWidth: 1,
                            borderRadius: 8,
                            right: '2%',
                          }}>
                          <Text style={styles.cardText2}>ADD TO CART</Text>
                        </TouchableOpacity>
                      </View>
                    ) : null}
                  </View>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() => setShouldShow7(!shouldShow7)}>
                    <Image
                      style={styles.bookCard}
                      source={require('../assets/pic1.jpg')}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                  <View>
                    {shouldShow7 ? (
                      <View style={{left: '13%'}}>
                        <Text style={styles.cardText1}>Name</Text>
                        <Text style={styles.cardText1}>Price</Text>
                        <TouchableOpacity
                          style={{
                            backgroundColor: 'gold',
                            height: '35%',
                            width: '85%',
                            borderWidth: 1,
                            borderRadius: 8,
                            right: '2%',
                          }}>
                          <Text style={styles.cardText2}>ADD TO CART</Text>
                        </TouchableOpacity>
                      </View>
                    ) : null}
                  </View>
                </View>
              </View>
            </Card>
          </ScrollView>
        </View>
        {/* fifth View */}
        {/* Sixth View */}
        <View style={styles.textView}>
          <Text style={styles.cardText}>ROMANCE</Text>
        </View>

        <View style={styles.typeView1}>
          <TouchableOpacity>
            <View style={styles.cardView}>
              <Text style={styles.cardText}>NOVEL</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{left: '10%'}}>
            <View style={{width: '2%'}} />
            <View style={styles.cardView}>
              <Text style={styles.cardText}>STORY</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{left: '16%'}}>
            <View style={{width: '2%'}} />
            <View style={styles.cardView}>
              <Text style={styles.cardText}>POEM</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.bookContainer}>
          <ScrollView horizontal={true}>
            <Card>
              <View style={styles.bookView}>
                <View>
                  <TouchableOpacity
                    onPress={() => setShouldShow8(!shouldShow8)}>
                    <Image
                      style={styles.bookCard}
                      source={require('../assets/pic1.jpg')}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                  <View>
                    {shouldShow8 ? (
                      <View style={{left: '13%'}}>
                        <Text style={styles.cardText1}>Name</Text>
                        <Text style={styles.cardText1}>Price</Text>
                        <TouchableOpacity
                          style={{
                            backgroundColor: 'gold',
                            height: '35%',
                            width: '85%',
                            borderWidth: 1,
                            borderRadius: 8,
                            right: '2%',
                          }}>
                          <Text style={styles.cardText2}>ADD TO CART</Text>
                        </TouchableOpacity>
                      </View>
                    ) : null}
                  </View>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() => setShouldShow9(!shouldShow9)}>
                    <Image
                      style={styles.bookCard}
                      source={require('../assets/pic1.jpg')}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                  <View>
                    {shouldShow1 ? (
                      <View style={{left: '13%'}}>
                        <Text style={styles.cardText1}>Name</Text>
                        <Text style={styles.cardText1}>Price</Text>
                        <TouchableOpacity
                          style={{
                            backgroundColor: 'gold',
                            height: '35%',
                            width: '85%',
                            borderWidth: 1,
                            borderRadius: 8,
                            right: '2%',
                          }}>
                          <Text style={styles.cardText2}>ADD TO CART</Text>
                        </TouchableOpacity>
                      </View>
                    ) : null}
                  </View>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() => setShouldShow10(!shouldShow10)}>
                    <Image
                      style={styles.bookCard}
                      source={require('../assets/pic1.jpg')}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                  <View>
                    {shouldShow10 ? (
                      <View style={{left: '13%'}}>
                        <Text style={styles.cardText1}>Name</Text>
                        <Text style={styles.cardText1}>Price</Text>
                        <TouchableOpacity
                          style={{
                            backgroundColor: 'gold',
                            height: '35%',
                            width: '85%',
                            borderWidth: 1,
                            borderRadius: 8,
                            right: '2%',
                          }}>
                          <Text style={styles.cardText2}>ADD TO CART</Text>
                        </TouchableOpacity>
                      </View>
                    ) : null}
                  </View>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() => setShouldShow11(!shouldShow11)}>
                    <Image
                      style={styles.bookCard}
                      source={require('../assets/pic1.jpg')}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                  <View>
                    {shouldShow11 ? (
                      <View style={{left: '13%'}}>
                        <Text style={styles.cardText1}>Name</Text>
                        <Text style={styles.cardText1}>Price</Text>
                        <TouchableOpacity
                          style={{
                            backgroundColor: 'gold',
                            height: '35%',
                            width: '85%',
                            borderWidth: 1,
                            borderRadius: 8,
                            right: '2%',
                          }}>
                          <Text style={styles.cardText2}>ADD TO CART</Text>
                        </TouchableOpacity>
                      </View>
                    ) : null}
                  </View>
                </View>
              </View>
            </Card>
          </ScrollView>
        </View>
        {/* sixth View */}
        {/* Seventh View */}
        <View style={styles.textView}>
          <Text style={styles.cardText}>LITERATURE & FICTION</Text>
        </View>

        <View style={styles.typeView1}>
          <TouchableOpacity>
            <View style={styles.cardView}>
              <Text style={styles.cardText}>NOVEL</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{left: '10%'}}>
            <View style={{width: '2%'}} />
            <View style={styles.cardView}>
              <Text style={styles.cardText}>STORY</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{left: '16%'}}>
            <View style={{width: '2%'}} />
            <View style={styles.cardView}>
              <Text style={styles.cardText}>POEM</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.bookContainer}>
          <ScrollView horizontal={true}>
            <Card>
              <View style={styles.bookView}>
                <View>
                  <TouchableOpacity onPress={() => setShouldShow(!shouldShow)}>
                    <Image
                      style={styles.bookCard}
                      source={require('../assets/pic1.jpg')}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                  <View>
                    {shouldShow ? (
                      <View style={{left: '13%'}}>
                        <Text style={styles.cardText1}>Name</Text>
                        <Text style={styles.cardText1}>Price</Text>
                        <TouchableOpacity
                          style={{
                            backgroundColor: 'gold',
                            height: '35%',
                            width: '85%',
                            borderWidth: 1,
                            borderRadius: 8,
                            right: '2%',
                          }}>
                          <Text style={styles.cardText2}>ADD TO CART</Text>
                        </TouchableOpacity>
                      </View>
                    ) : null}
                  </View>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() => setShouldShow1(!shouldShow1)}>
                    <Image
                      style={styles.bookCard}
                      source={require('../assets/pic1.jpg')}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                  <View>
                    {shouldShow1 ? (
                      <View style={{left: '13%'}}>
                        <Text style={styles.cardText1}>Name</Text>
                        <Text style={styles.cardText1}>Price</Text>
                        <TouchableOpacity
                          style={{
                            backgroundColor: 'gold',
                            height: '35%',
                            width: '85%',
                            borderWidth: 1,
                            borderRadius: 8,
                            right: '2%',
                          }}>
                          <Text style={styles.cardText2}>ADD TO CART</Text>
                        </TouchableOpacity>
                      </View>
                    ) : null}
                  </View>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() => setShouldShow2(!shouldShow2)}>
                    <Image
                      style={styles.bookCard}
                      source={require('../assets/pic1.jpg')}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                  <View>
                    {shouldShow2 ? (
                      <View style={{left: '13%'}}>
                        <Text style={styles.cardText1}>Name</Text>
                        <Text style={styles.cardText1}>Price</Text>
                        <TouchableOpacity
                          style={{
                            backgroundColor: 'gold',
                            height: '35%',
                            width: '85%',
                            borderWidth: 1,
                            borderRadius: 8,
                            right: '2%',
                          }}>
                          <Text style={styles.cardText2}>ADD TO CART</Text>
                        </TouchableOpacity>
                      </View>
                    ) : null}
                  </View>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() => setShouldShow3(!shouldShow3)}>
                    <Image
                      style={styles.bookCard}
                      source={require('../assets/pic1.jpg')}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                  <View>
                    {shouldShow3 ? (
                      <View style={{left: '13%'}}>
                        <Text style={styles.cardText1}>Name</Text>
                        <Text style={styles.cardText1}>Price</Text>
                        <TouchableOpacity
                          style={{
                            backgroundColor: 'gold',
                            height: '35%',
                            width: '85%',
                            borderWidth: 1,
                            borderRadius: 8,
                            right: '2%',
                          }}>
                          <Text style={styles.cardText2}>ADD TO CART</Text>
                        </TouchableOpacity>
                      </View>
                    ) : null}
                  </View>
                </View>
              </View>
            </Card>
          </ScrollView>
        </View>
        {/* seventh View */}
        {/* eight View */}
        <View style={styles.textView}>
          <Text style={styles.cardText}>HORROR</Text>
        </View>

        <View style={styles.typeView1}>
          <TouchableOpacity>
            <View style={styles.cardView}>
              <Text style={styles.cardText}>NOVEL</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{left: '10%'}}>
            <View style={{width: '2%'}} />
            <View style={styles.cardView}>
              <Text style={styles.cardText}>STORY</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{left: '16%'}}>
            <View style={{width: '2%'}} />
            <View style={styles.cardView}>
              <Text style={styles.cardText}>POEM</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.bookContainer}>
          <ScrollView horizontal={true}>
            <Card>
              <View style={styles.bookView}>
                <View>
                  <TouchableOpacity onPress={() => setShouldShow(!shouldShow)}>
                    <Image
                      style={styles.bookCard}
                      source={require('../assets/pic1.jpg')}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                  <View>
                    {shouldShow ? (
                      <View style={{left: '13%'}}>
                        <Text style={styles.cardText1}>Name</Text>
                        <Text style={styles.cardText1}>Price</Text>
                        <TouchableOpacity
                          style={{
                            backgroundColor: 'gold',
                            height: '35%',
                            width: '85%',
                            borderWidth: 1,
                            borderRadius: 8,
                            right: '2%',
                          }}>
                          <Text style={styles.cardText2}>ADD TO CART</Text>
                        </TouchableOpacity>
                      </View>
                    ) : null}
                  </View>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() => setShouldShow1(!shouldShow1)}>
                    <Image
                      style={styles.bookCard}
                      source={require('../assets/pic1.jpg')}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                  <View>
                    {shouldShow1 ? (
                      <View style={{left: '13%'}}>
                        <Text style={styles.cardText1}>Name</Text>
                        <Text style={styles.cardText1}>Price</Text>
                        <TouchableOpacity
                          style={{
                            backgroundColor: 'gold',
                            height: '35%',
                            width: '85%',
                            borderWidth: 1,
                            borderRadius: 8,
                            right: '2%',
                          }}>
                          <Text style={styles.cardText2}>ADD TO CART</Text>
                        </TouchableOpacity>
                      </View>
                    ) : null}
                  </View>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() => setShouldShow2(!shouldShow2)}>
                    <Image
                      style={styles.bookCard}
                      source={require('../assets/pic1.jpg')}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                  <View>
                    {shouldShow2 ? (
                      <View style={{left: '13%'}}>
                        <Text style={styles.cardText1}>Name</Text>
                        <Text style={styles.cardText1}>Price</Text>
                        <TouchableOpacity
                          style={{
                            backgroundColor: 'gold',
                            height: '35%',
                            width: '85%',
                            borderWidth: 1,
                            borderRadius: 8,
                            right: '2%',
                          }}>
                          <Text style={styles.cardText2}>ADD TO CART</Text>
                        </TouchableOpacity>
                      </View>
                    ) : null}
                  </View>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() => setShouldShow3(!shouldShow3)}>
                    <Image
                      style={styles.bookCard}
                      source={require('../assets/pic1.jpg')}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                  <View>
                    {shouldShow3 ? (
                      <View style={{left: '13%'}}>
                        <Text style={styles.cardText1}>Name</Text>
                        <Text style={styles.cardText1}>Price</Text>
                        <TouchableOpacity
                          style={{
                            backgroundColor: 'gold',
                            height: '35%',
                            width: '85%',
                            borderWidth: 1,
                            borderRadius: 8,
                            right: '2%',
                          }}>
                          <Text style={styles.cardText2}>ADD TO CART</Text>
                        </TouchableOpacity>
                      </View>
                    ) : null}
                  </View>
                </View>
              </View>
            </Card>
          </ScrollView>
        </View>
        {/* eight View */}
        {/* last View */}
        <View style={styles.textView}>
          <Text style={styles.cardText}>SCI-FI FANTASY</Text>
        </View>

        <View style={styles.typeView1}>
          <TouchableOpacity>
            <View style={styles.cardView}>
              <Text style={styles.cardText}>NOVEL</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{left: '10%'}}>
            <View style={{width: '2%'}} />
            <View style={styles.cardView}>
              <Text style={styles.cardText}>STORY</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{left: '16%'}}>
            <View style={{width: '2%'}} />
            <View style={styles.cardView}>
              <Text style={styles.cardText}>POEM</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.bookContainer}>
          <ScrollView horizontal={true}>
            <Card>
              <View style={styles.bookView}>
                <View>
                  <TouchableOpacity onPress={() => setShouldShow(!shouldShow)}>
                    <Image
                      style={styles.bookCard}
                      source={require('../assets/pic1.jpg')}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                  <View>
                    {shouldShow ? (
                      <View style={{left: '13%'}}>
                        <Text style={styles.cardText1}>Name</Text>
                        <Text style={styles.cardText1}>Price</Text>
                        <TouchableOpacity
                          style={{
                            backgroundColor: 'gold',
                            height: '35%',
                            width: '85%',
                            borderWidth: 1,
                            borderRadius: 8,
                            right: '2%',
                          }}>
                          <Text style={styles.cardText2}>ADD TO CART</Text>
                        </TouchableOpacity>
                      </View>
                    ) : null}
                  </View>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() => setShouldShow1(!shouldShow1)}>
                    <Image
                      style={styles.bookCard}
                      source={require('../assets/pic1.jpg')}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                  <View>
                    {shouldShow1 ? (
                      <View style={{left: '13%'}}>
                        <Text style={styles.cardText1}>Name</Text>
                        <Text style={styles.cardText1}>Price</Text>
                        <TouchableOpacity
                          style={{
                            backgroundColor: 'gold',
                            height: '35%',
                            width: '85%',
                            borderWidth: 1,
                            borderRadius: 8,
                            right: '2%',
                          }}>
                          <Text style={styles.cardText2}>ADD TO CART</Text>
                        </TouchableOpacity>
                      </View>
                    ) : null}
                  </View>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() => setShouldShow2(!shouldShow2)}>
                    <Image
                      style={styles.bookCard}
                      source={require('../assets/pic1.jpg')}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                  <View>
                    {shouldShow2 ? (
                      <View style={{left: '13%'}}>
                        <Text style={styles.cardText1}>Name</Text>
                        <Text style={styles.cardText1}>Price</Text>
                        <TouchableOpacity
                          style={{
                            backgroundColor: 'gold',
                            height: '35%',
                            width: '85%',
                            borderWidth: 1,
                            borderRadius: 8,
                            right: '2%',
                          }}>
                          <Text style={styles.cardText2}>ADD TO CART</Text>
                        </TouchableOpacity>
                      </View>
                    ) : null}
                  </View>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() => setShouldShow3(!shouldShow3)}>
                    <Image
                      style={styles.bookCard}
                      source={require('../assets/pic1.jpg')}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                  <View>
                    {shouldShow3 ? (
                      <View style={{left: '13%'}}>
                        <Text style={styles.cardText1}>Name</Text>
                        <Text style={styles.cardText1}>Price</Text>
                        <TouchableOpacity
                          style={{
                            backgroundColor: 'gold',
                            height: '35%',
                            width: '85%',
                            borderWidth: 1,
                            borderRadius: 8,
                            right: '2%',
                          }}>
                          <Text style={styles.cardText2}>ADD TO CART</Text>
                        </TouchableOpacity>
                      </View>
                    ) : null}
                  </View>
                </View>
              </View>
            </Card>
          </ScrollView>
        </View>
        {/* last View */}
      </ScrollView>
    </View>
  );
};
export default Category;
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    height: screenHeight,
    backgroundColor: 'lightgrey',
  },
  sliderView: {
    top: '10%',
    height: screenHeight / 4,
    backgroundColor: 'yellow',
  },
  textView: {
    height: '3%',
    right: '30%',
  },
  textView1: {
    bottom: '1%',
    height: '3%',
    right: '29%',
  },
  typeView1: {
    height: screenHeight / 16,
    width: screenWidth,
    flexDirection: 'row',
  },
  cardView: {
    backgroundColor: 'white',
    borderRadius: 30,
    height: screenHeight / 18,
    width: screenWidth / 3.5,
    left: '25%',
  },

  cardText: {
    fontSize: 14,
    fontFamily: 'BreeSerif-Regular',
    textAlign: 'center',
    top: '30%',
  },
  cardText1: {
    fontSize: 14,
    fontFamily: 'BreeSerif-Regular',
  },
  cardText2: {
    fontSize: 14,
    fontFamily: 'BreeSerif-Regular',
    textAlign: 'center',
  },
  bookContainer: {
    backgroundColor: 'lightgrey',

    width: screenWidth,

    flexDirection: 'row',
  },
  bookView: {
    backgroundColor: 'lightgrey',
    flexDirection: 'row',
    top: '1%',
    height: screenHeight / 3,
  },
  bookCard: {
    backgroundColor: 'transparent',
    height: screenHeight / 5,
    width: screenWidth / 3,
  },
});
