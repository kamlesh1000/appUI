'use strict';
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableNativeFeedback,
} from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';
import LinearGradient from 'react-native-linear-gradient';

import Colors from '../res/colors';
import Icon from '../res/icons';
import NavigationService from '../route/navigationService';

class DrawerContent extends React.Component {
  constructor(props) {
    super(props);
    this.count = 0;
    this.imageSource = '';
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <LinearGradient
          style={{
            paddingHorizontal: 16,
            paddingTop: 48,
            paddingBottom: 16,
          }}
          colors={[Colors.gradient1, Colors.gradient2]}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 1}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={{uri: global.data[0].profile.background}}
              style={styles.profileImage}
            />
            <View>
              <Text
                style={{
                  fontFamily: 'Raleway-Bold',
                  color: Colors.white,
                  fontSize: 14,
                  marginLeft: 10,
                }}
                numberOfLines={2}>
                {global.data[0].profile.username}
              </Text>
              <Text
                style={{
                  fontFamily: 'Raleway-Bold',
                  color: Colors.white,
                  fontSize: 14,
                  marginLeft: 10,
                  marginTop: 4,
                }}
                numberOfLines={2}>
                React Native Developer
              </Text>
            </View>
          </View>
        </LinearGradient>

        <View style={{flex: 1, justifyContent: 'space-between', marginTop: -4}}>
          <View>
            <DrawerItems
              {...this.props}
              onItemPress={({route, focused}) => {
                this.props.navigation.closeDrawer();
              }}
            />
          </View>

          <TouchableNativeFeedback
            background={TouchableNativeFeedback.SelectableBackground()}
            onPress={() => {
              this.props.navigation.closeDrawer();
            }}
            activeOpacity={1}>
            <View
              style={{
                height: 60,
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
                borderTopWidth: 1,
                borderColor: '#F0EEEE',
                paddingHorizontal: 16,
              }}>
              <Text
                style={{
                  fontFamily: 'Raleway-Medium',
                  color: '#EB0028',
                  fontSize: 14,
                }}>
                Log Out
              </Text>
              <Icon.SimpleLineIcons name="logout" size={20} color="#EB0028" />
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    );
  }
}

export default DrawerContent;

const styles = StyleSheet.create({
  headerBackground: {
    backgroundColor: Colors.tertiary,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  profileImageEditView: {
    flexGrow: 1,
    width: 70,
    height: 70,
    borderRadius: 35,
    opacity: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  alertTitleStyle: {
    fontFamily: 'Raleway-Bold',
    color: Colors.grayDark,
    textAlign: 'center',
    fontSize: 14,
    marginVertical: 10,
  },
  alertBodyStyle: {
    fontFamily: 'Raleway-Medium',
    color: Colors.grayDark,
    textAlign: 'center',
    fontSize: 14,
    marginVertical: 10,
  },
  alertButtonStyle: {
    fontFamily: 'Raleway-Medium',
    color: Colors.grayDark,
    textAlign: 'center',
    fontSize: 14,
    marginLeft: 10,
  },
  verticalLineLocationDialogue: {
    height: 35,
    width: 0.5,
    backgroundColor: Colors.grayDark,
    alignSelf: 'center',
  },
});
