import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

class SettingScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{
            fontFamily: 'Raleway-Bold',
            fontSize: 26,
          }}>
          SETTING SCREEN
        </Text>
      </View>
    );
  }
}

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
