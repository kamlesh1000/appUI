import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-community/masked-view';

import Colors from '../res/colors';
import Icon from '../res/icons';
import Buttons from '../components/Buttons';
import NavigationService from '../route/navigationService';

class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image
            source={{uri: global.data[0].profile.background}}
            style={{
              width: '100%',
              height: global.screenHeight / 4,
            }}
          />
          <View
            style={{
              width: '100%',
              position: 'absolute',
              marginTop: 44,
              paddingLeft: 12,
              paddingRight: 8,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity
                activeOpacity={0.75}
                onPress={() => {
                  NavigationService.toggleDrawerBar();
                }}>
                <Icon.Ionicons
                  name="md-menu-sharp"
                  size={30}
                  color={Colors.white}
                />
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 20,
                  color: Colors.white,
                  fontFamily: 'Raleway-Medium',
                  marginLeft: 8,
                }}>
                Profile
              </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon.Fontisto
                name="search"
                size={20}
                color={Colors.white}
                style={{paddingRight: 4}}
              />
              <Icon.Entypo
                name="dots-three-vertical"
                size={26}
                color={Colors.white}
                style={{paddingLeft: 4}}
              />
            </View>
          </View>
          <View
            style={{
              position: 'absolute',
              bottom: -50,
              backgroundColor: Colors.grayLight,
              borderRadius: 50,
              height: 100,
              width: 100,
              left: 30,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <LinearGradient
              style={{
                height: 88,
                width: 88,
                borderRadius: 44,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              colors={[Colors.gradient1, Colors.gradient2]}
              start={{x: -0.25, y: 1}}
              end={{x: 1, y: 1}}>
              <View
                style={{
                  height: 80,
                  width: 80,
                  borderRadius: 40,
                  backgroundColor: Colors.grayLight,
                  overflow: 'hidden',
                }}>
                <MaskedView
                  style={{
                    flexDirection: 'row',
                    height: 80,
                  }}
                  maskElement={
                    <View
                      style={{
                        backgroundColor: 'transparent',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Icon.Entypo
                        name="user"
                        size={80}
                        color="white"
                        style={styles.shadow}
                      />
                    </View>
                  }>
                  <LinearGradient
                    colors={[Colors.gradient1, Colors.gradient2]}
                    style={{flex: 1}}
                    start={{x: -0.05, y: 1}}
                    end={{x: 1, y: 1}}
                    useAngle={true}
                    angle={125}
                    angleCenter={{x: 0.5, y: 0.5}}
                  />
                </MaskedView>
              </View>
            </LinearGradient>
            <View
              style={{
                position: 'absolute',
                top: 8,
                right: 8,
                backgroundColor: Colors.white,
                height: 20,
                width: 20,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon.MaterialIcons
                name="edit"
                size={14}
                color={Colors.tertiary}
              />
            </View>
          </View>
          <View style={{position: 'absolute', bottom: 8, right: 8}}>
            <Buttons.Primary
              title="Edit Profile"
              onPress={() => {
                ToastAndroid.showWithGravityAndOffset(
                  'Edit Profile Clicked',
                  ToastAndroid.SHORT,
                  ToastAndroid.BOTTOM,
                  0,
                  160,
                );
              }}
            />
          </View>
        </View>
        <View style={{marginLeft: 140, marginTop: 6}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{
                fontSize: 17,
                color: Colors.grayDarkest,
                fontFamily: 'Raleway-SemiBold',
              }}>
              User Name:
            </Text>
            <Text
              style={{
                fontSize: 17,
                color: Colors.grayDark,
                fontFamily: 'Raleway-Medium',
                marginLeft: 8,
              }}>
              {global.data[0].profile.username}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginRight: 26,
              marginTop: 8,
              marginLeft: 8,
            }}>
            <View style={{alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: 17,
                  color: Colors.grayDarkest,
                  fontFamily: 'Raleway-SemiBold',
                }}>
                {global.data[0].profile.post}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: Colors.grayLight,
                  fontFamily: 'Raleway-SemiBold',
                }}>
                posts
              </Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: 17,
                  color: Colors.grayDarkest,
                  fontFamily: 'Raleway-SemiBold',
                }}>
                {global.data[0].profile.followers}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: Colors.grayLight,
                  fontFamily: 'Raleway-SemiBold',
                }}>
                followers
              </Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: 17,
                  color: Colors.grayDarkest,
                  fontFamily: 'Raleway-SemiBold',
                }}>
                {global.data[0].profile.following}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: Colors.grayLight,
                  fontFamily: 'Raleway-SemiBold',
                }}>
                following
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            marginTop: 10,
            paddingTop: 4,
            marginHorizontal: 18,
          }}>
          <global.ProfileTabContainer />
        </View>
      </View>
    );
  }
}

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  shadow: {
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    marginTop: 8,
  },
});
