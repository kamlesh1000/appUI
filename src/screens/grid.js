import React from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import moment from 'moment';

import Colors from '../res/colors';
import Icon from '../res/icons';
import Buttons from '../components/Buttons';

class FeedScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={global.data[0].posts}
          contentContainerStyle={{
            paddingBottom: 32,
            paddingTop: 16,
          }}
          renderItem={({item, index}) => {
            return (
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View
                      style={{
                        backgroundColor: Colors.grayLightest,
                        padding: 6,
                      }}>
                      <Icon.FontAwesome5
                        name="user-alt"
                        size={32}
                        color={Colors.grayMedium}
                        style={styles.shadow}
                      />
                    </View>
                    <View style={{marginLeft: 12}}>
                      <Text
                        style={{
                          fontSize: 16,
                          color: Colors.grayDark,
                          fontFamily: 'Raleway-Medium',
                          marginBottom: 3,
                        }}>
                        {item.name}
                      </Text>
                      <Text
                        style={{
                          fontSize: 12,
                          color: Colors.tertiary,
                          fontFamily: 'Raleway-Medium',
                          marginBottom: 6,
                        }}>
                        {item.username}
                      </Text>
                    </View>
                  </View>
                  <View style={{alignItems: 'flex-end'}}>
                    <Text
                      style={{
                        fontSize: 12,
                        color: Colors.grayLight,
                        fontFamily: 'Raleway-Medium',
                      }}>
                      {moment(item.post_time).fromNow()}
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 4,
                      }}>
                      <Icon.Feather
                        name="heart"
                        size={18}
                        color={Colors.tertiary}
                      />
                      <Text
                        style={{
                          fontSize: 14,
                          color: Colors.grayMedium,
                          fontFamily: 'Raleway-Medium',
                          marginBottom: 7,
                          marginLeft: 5,
                          marginRight: 16,
                        }}>
                        {item.likes}
                      </Text>
                      <Icon.Feather
                        name="message-circle"
                        size={18}
                        color={Colors.grayLight}
                      />
                      <Text
                        style={{
                          fontSize: 14,
                          color: Colors.grayMedium,
                          fontFamily: 'Raleway-Medium',
                          marginBottom: 7,
                          marginLeft: 5,
                        }}>
                        {item.comments}
                      </Text>
                    </View>
                  </View>
                </View>
                <Image
                  source={{uri: item.url}}
                  style={{
                    width: '100%',
                    height: global.screenHeight / 5,
                    marginTop: 16,
                  }}
                />

                <Text
                  style={{
                    fontSize: 12,
                    color: Colors.grayDark,
                    fontFamily: 'Raleway-Medium',
                    marginTop: 6,
                  }}>
                  {item.post_text}
                </Text>

                <View
                  style={{
                    height: 0.5,
                    backgroundColor: Colors.grayLightest,
                    marginTop: 16,
                    marginBottom: 16,
                  }}
                />
              </View>
            );
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

export default FeedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
